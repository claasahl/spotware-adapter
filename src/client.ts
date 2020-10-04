import { Socket } from "net";
import Pbf from "pbf";
import { TLSSocket } from "tls";

import {
  SpotwareSocket,
  FACTORY,
  ProtoOAPayloadType,
  Messages,
  serialize,
  ProtoMessageUtils,
} from ".";
import { logOutput } from "./logger";

const FIVE_PER_SECOND = 200;
const FIFTY_PER_SECOND = 20;

interface DataWithCallback {
  data: Buffer;
  callback: (error?: Error | null) => void;
}
type DataHandler = (buffer: Buffer, cb: (err?: Error | null) => void) => void;
function throttledQueue(
  interval: number,
  dataHandler: DataHandler
): DataHandler {
  const queue: DataWithCallback[] = [];
  const state: {
    lastMessage: number;
    timeout?: NodeJS.Timeout;
  } = {
    lastMessage: 0,
  };
  const handler: DataHandler = (data, callback) => {
    const now = Date.now();
    const { timeout, lastMessage } = state;
    if (!timeout && now - lastMessage >= interval) {
      state.lastMessage = now;
      return dataHandler(data, callback);
    }
    if (!timeout) {
      state.timeout = setInterval(() => {
        const entry = queue.shift();
        if (entry) {
          dataHandler(entry.data, entry.callback);
        } else if (timeout) {
          clearInterval(timeout);
        }
      }, interval);
    }
    queue.push({ data, callback });
  };
  return handler;
}

export class SpotwareClientSocket extends SpotwareSocket {
  fivePerSecond;
  fiftyPerSecond;
  heartbeats;
  constructor(socket: Socket | TLSSocket) {
    super(socket);
    this.fivePerSecond = throttledQueue(
      FIVE_PER_SECOND,
      socket.write.bind(socket)
    );
    this.fiftyPerSecond = throttledQueue(
      FIFTY_PER_SECOND,
      socket.write.bind(socket)
    );
    this.heartbeats = setInterval(
      () => this.write(FACTORY.HEARTBEAT_EVENT()),
      10000
    ); // https://connect.spotware.com/docs/frequently-asked-questions
  }

  _write(
    message: Messages,
    _encoding: string,
    callback: (error?: Error | null) => void
  ): void {
    const protoMessage = serialize(message);
    const pbf = new Pbf();
    ProtoMessageUtils.write(protoMessage, pbf);
    const payload = pbf.finish();

    const payloadBytes = Buffer.byteLength(payload);
    const length = Buffer.alloc(4);
    length.writeUInt32BE(payloadBytes);

    const buffer = Buffer.concat([length, payload], 4 + payloadBytes);
    this.queue(message, buffer, (err) => {
      logOutput(message);
      callback(err);
    });
  }

  private queue(
    message: Messages,
    data: Buffer,
    callback: (error?: Error | null) => void
  ): void {
    // https://connect.spotware.com/docs/frequently-asked-questions
    switch (message.payloadType) {
      case ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ:
      case ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ:
      case ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ:
        this.fivePerSecond(data, callback);
        break;
      default:
        this.fiftyPerSecond(data, callback);
        break;
    }
  }
}
