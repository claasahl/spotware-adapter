import tls from "tls";
import { Duplex } from "stream";
import debug from "debug";
import {
  ProtoPayloadType,
  ProtoOAPayloadType,
} from "@claasahl/spotware-protobuf";

import { Messages, read, write } from "./messages";

const spotware = debug("spotware");
const input = spotware.extend("input");
const inputHuman = input.extend("human");
const output = spotware.extend("output");
const outputHuman = output.extend("human");

function logInput(msg: Messages) {
  spotware.extend(`${msg.payloadType}`)("%j", {
    payload: msg.payload,
    clientMsgId: msg.clientMsgId,
  });
  input("%j", {
    payloadType: msg.payloadType,
    payload: msg.payload,
    clientMsgId: msg.clientMsgId,
  });
  const payloadTypeText =
    ProtoPayloadType[msg.payloadType] || ProtoOAPayloadType[msg.payloadType];
  if (payloadTypeText) {
    spotware.extend(payloadTypeText)("%j", {
      payload: msg.payload,
      clientMsgId: msg.clientMsgId,
    });
    inputHuman("%j", {
      payloadType: payloadTypeText,
      payload: msg.payload,
      clientMsgId: msg.clientMsgId,
    });
  }
}

function logOutput(msg: Messages) {
  spotware.extend(`${msg.payloadType}`)("%j", {
    payload: msg.payload,
    clientMsgId: msg.clientMsgId,
  });
  output("%j", {
    payloadType: msg.payloadType,
    payload: msg.payload,
    clientMsgId: msg.clientMsgId,
  });
  const payloadTypeText =
    ProtoPayloadType[msg.payloadType] || ProtoOAPayloadType[msg.payloadType];
  if (payloadTypeText) {
    spotware.extend(payloadTypeText)("%j", {
      payload: msg.payload,
      clientMsgId: msg.clientMsgId,
    });
    outputHuman("%j", {
      payloadType: payloadTypeText,
      payload: msg.payload,
      clientMsgId: msg.clientMsgId,
    });
  }
}

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

export declare interface SpotwareClientStream extends Duplex {
  read(size?: number): Messages;
  unshift(message: Messages, encoding?: BufferEncoding): void;
  push(message: Messages, encoding?: string): boolean;
  addListener(event: "close", listener: () => void): this;
  addListener(event: "data", listener: (message: Messages) => void): this;
  addListener(event: "end", listener: () => void): this;
  addListener(event: "error", listener: (err: Error) => void): this;
  addListener(event: "pause", listener: () => void): this;
  addListener(event: "readable", listener: () => void): this;
  addListener(event: "resume", listener: () => void): this;
  addListener(event: string | symbol, listener: (...args: any[]) => void): this;

  emit(event: "close"): boolean;
  emit(event: "data", message: Messages): boolean;
  emit(event: "end"): boolean;
  emit(event: "error", err: Error): boolean;
  emit(event: "pause"): boolean;
  emit(event: "readable"): boolean;
  emit(event: "resume"): boolean;
  emit(event: string | symbol, ...args: any[]): boolean;

  on(event: "close", listener: () => void): this;
  on(event: "data", listener: (message: Messages) => void): this;
  on(event: "end", listener: () => void): this;
  on(event: "error", listener: (err: Error) => void): this;
  on(event: "pause", listener: () => void): this;
  on(event: "readable", listener: () => void): this;
  on(event: "resume", listener: () => void): this;
  on(event: string | symbol, listener: (...args: any[]) => void): this;

  once(event: "close", listener: () => void): this;
  once(event: "data", listener: (message: Messages) => void): this;
  once(event: "end", listener: () => void): this;
  once(event: "error", listener: (err: Error) => void): this;
  once(event: "pause", listener: () => void): this;
  once(event: "readable", listener: () => void): this;
  once(event: "resume", listener: () => void): this;
  once(event: string | symbol, listener: (...args: any[]) => void): this;

  prependListener(event: "close", listener: () => void): this;
  prependListener(event: "data", listener: (message: Messages) => void): this;
  prependListener(event: "end", listener: () => void): this;
  prependListener(event: "error", listener: (err: Error) => void): this;
  prependListener(event: "pause", listener: () => void): this;
  prependListener(event: "readable", listener: () => void): this;
  prependListener(event: "resume", listener: () => void): this;
  prependListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this;

  prependOnceListener(event: "close", listener: () => void): this;
  prependOnceListener(
    event: "data",
    listener: (message: Messages) => void
  ): this;
  prependOnceListener(event: "end", listener: () => void): this;
  prependOnceListener(event: "error", listener: (err: Error) => void): this;
  prependOnceListener(event: "pause", listener: () => void): this;
  prependOnceListener(event: "readable", listener: () => void): this;
  prependOnceListener(event: "resume", listener: () => void): this;
  prependOnceListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this;

  removeListener(event: "close", listener: () => void): this;
  removeListener(event: "data", listener: (message: Messages) => void): this;
  removeListener(event: "end", listener: () => void): this;
  removeListener(event: "error", listener: (err: Error) => void): this;
  removeListener(event: "pause", listener: () => void): this;
  removeListener(event: "readable", listener: () => void): this;
  removeListener(event: "resume", listener: () => void): this;
  removeListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this;

  write(
    message: Messages,
    encoding?: string,
    cb?: (error: Error | null | undefined) => void
  ): boolean;
  write(
    message: Messages,
    cb?: (error: Error | null | undefined) => void
  ): boolean;
  end(cb?: () => void): void;
  end(message: Messages, cb?: () => void): void;
  end(message: Messages, encoding?: string, cb?: () => void): void;
}

export class SpotwareClientStream extends Duplex {
  socket;
  listening = false;
  fivePerSecond;
  fiftyPerSecond;
  constructor(port: number, host: string) {
    super({ allowHalfOpen: false, objectMode: true });
    this.socket = tls.connect(port, host);
    this.socket.on("error", (err) => this.destroy(err));
    this.fivePerSecond = throttledQueue(FIVE_PER_SECOND, (data, cb) =>
      this.socket.write(data, cb)
    );
    this.fiftyPerSecond = throttledQueue(FIFTY_PER_SECOND, (data, cb) =>
      this.socket.write(data, cb)
    );
  }

  _read(_size: number): void {
    if (!this.listening) {
      const listener = (chunk: Buffer) => {
        if (chunk) {
          const msg = read(chunk);
          if (msg) {
            logInput(msg);
            const bla = this.push(msg);
            if (!bla) {
              console.log("stopping");
              this.listening = false;
              this.socket.off("data", listener);
            }
          }
        }
      };
      console.log("starting");
      this.listening = true;
      this.socket.on("data", listener);
    }
  }

  _write(
    chunk: any,
    _encoding: string,
    callback: (error?: Error | null) => void
  ): void {
    const msg = chunk as Messages;
    logOutput(msg);
    const data = write(msg);
    if (data) {
      this.queue(msg, data, callback);
    }
  }

  private queue(
    message: Messages,
    data: Buffer,
    callback: (error?: Error | null) => void
  ): void {
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
