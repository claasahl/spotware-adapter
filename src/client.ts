import { Duplex } from "stream";
import Pbf from "pbf";
import {
  ProtoOAPayloadType,
  ProtoMessageUtils,
} from "@claasahl/spotware-protobuf";

import { SpotwareSocket } from "./socket";
import { FACTORY, Messages, serialize } from "./messages";
import { logOutput } from "./logger";

// stay just below rate limit
const FIVE_PER_SECOND = 210;
const FIFTY_PER_SECOND = 21;

type DataHandler = (buffer: Buffer, cb: (err?: Error | null) => void) => void;

class ThrottledQueue {
  private interval;
  private dataHandler;
  private queue: (() => void)[] = [];
  private lastMessage: number = 0;
  private timeout?: NodeJS.Timeout;

  constructor(interval: number, dataHandler: DataHandler) {
    this.interval = interval;
    this.dataHandler = dataHandler;
  }

  push(data: Buffer, callback: (err?: Error | null) => void) {
    const now = Date.now();
    const { interval, timeout, lastMessage } = this;
    if (!timeout && now - lastMessage >= interval) {
      this.lastMessage = now;
      return this.dataHandler(data, callback);
    }
    if (!timeout) {
      this.timeout = setInterval(() => {
        const entry = this.queue.shift();
        if (entry) {
          entry();
        } else if (timeout) {
          clearInterval(timeout);
        }
      }, interval);
    }
    this.queue.push(() => this.dataHandler(data, callback));
  }

  destroy(callback: (error: Error | null) => void): void {
    if (this.timeout) {
      clearInterval(this.timeout);
    }
    callback(null);
  }

  end(callback: (error?: Error | null) => void): void {
    const timeout = setInterval(() => {
      if (this.queue.length === 0) {
        clearInterval(timeout);
        callback();
      }
    }, this.interval);
  }
}

export class SpotwareClientSocket extends SpotwareSocket {
  fivePerSecond;
  fiftyPerSecond;
  heartbeats;
  constructor(socket: Duplex) {
    super(socket);
    this.fivePerSecond = new ThrottledQueue(
      FIVE_PER_SECOND,
      socket.write.bind(socket)
    );
    this.fiftyPerSecond = new ThrottledQueue(
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
        this.fivePerSecond.push(data, callback);
        break;
      default:
        this.fiftyPerSecond.push(data, callback);
        break;
    }
  }

  _destroy(error: Error | null, callback: (error: Error | null) => void): void {
    clearInterval(this.heartbeats);
    this.fiftyPerSecond.destroy((err1) => {
      this.fivePerSecond.destroy((err2) => {
        callback(err1 || err2 || error);
      });
    });
  }

  _final(callback: (error?: Error | null) => void): void {
    clearInterval(this.heartbeats);
    this.fiftyPerSecond.end((err1) => {
      this.fivePerSecond.end((err2) => {
        callback(err1 || err2);
      });
    });
  }
}
