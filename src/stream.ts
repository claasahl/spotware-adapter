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

  addListener(event: "close", listener: (had_error: boolean) => void): this;
  addListener(event: "drain", listener: () => void): this;
  addListener(event: "error", listener: (err: Error) => void): this;
  addListener(event: "finish", listener: () => void): this;
  addListener(event: "data", listener: (message: Messages) => void): this;
  addListener(event: "end", listener: () => void): this;
  addListener(event: "pause", listener: () => void): this;
  addListener(event: "readable", listener: () => void): this;
  addListener(event: "resume", listener: () => void): this;
  addListener(event: "connect", listener: () => void): this;
  addListener(
    event: "lookup",
    listener: (
      err: Error,
      address: string,
      family: string | number,
      host: string
    ) => void
  ): this;
  addListener(event: "ready", listener: () => void): this;
  addListener(event: "timeout", listener: () => void): this;
  addListener(event: "keylog", listener: (line: Buffer) => void): this;
  addListener(
    event: "OCSPResponse",
    listener: (response: Buffer) => void
  ): this;
  addListener(event: "secureConnect", listener: () => void): this;
  addListener(event: "session", listener: (session: Buffer) => void): this;
  addListener(event: string | symbol, listener: (...args: any[]) => void): this;

  emit(event: "close", had_error: boolean): boolean;
  emit(event: "drain"): boolean;
  emit(event: "error", err: Error): boolean;
  emit(event: "finish"): boolean;
  emit(event: "data", message: Messages): boolean;
  emit(event: "end"): boolean;
  emit(event: "pause"): boolean;
  emit(event: "readable"): boolean;
  emit(event: "resume"): boolean;
  emit(event: "connect"): boolean;
  emit(
    event: "lookup",
    err: Error,
    address: string,
    family: string | number,
    host: string
  ): boolean;
  emit(event: "ready"): boolean;
  emit(event: "timeout"): boolean;
  emit(event: "keylog", line: Buffer): boolean;
  emit(event: "OCSPResponse", response: Buffer): boolean;
  emit(event: "secureConnect"): boolean;
  emit(event: "session", session: Buffer): boolean;
  emit(event: string | symbol, ...args: any[]): boolean;

  on(event: "close", listener: (had_error: boolean) => void): this;
  on(event: "drain", listener: () => void): this;
  on(event: "error", listener: (err: Error) => void): this;
  on(event: "finish", listener: () => void): this;
  on(event: "data", listener: (message: Messages) => void): this;
  on(event: "end", listener: () => void): this;
  on(event: "pause", listener: () => void): this;
  on(event: "readable", listener: () => void): this;
  on(event: "resume", listener: () => void): this;
  on(event: "connect", listener: () => void): this;
  on(
    event: "lookup",
    listener: (
      err: Error,
      address: string,
      family: string | number,
      host: string
    ) => void
  ): this;
  on(event: "ready", listener: () => void): this;
  on(event: "timeout", listener: () => void): this;
  on(event: "keylog", listener: (line: Buffer) => void): this;
  on(event: "OCSPResponse", listener: (response: Buffer) => void): this;
  on(event: "secureConnect", listener: () => void): this;
  on(event: "session", listener: (session: Buffer) => void): this;
  on(event: string | symbol, listener: (...args: any[]) => void): this;

  once(event: "close", listener: (had_error: boolean) => void): this;
  once(event: "drain", listener: () => void): this;
  once(event: "error", listener: (err: Error) => void): this;
  once(event: "finish", listener: () => void): this;
  once(event: "data", listener: (message: Messages) => void): this;
  once(event: "end", listener: () => void): this;
  once(event: "pause", listener: () => void): this;
  once(event: "readable", listener: () => void): this;
  once(event: "resume", listener: () => void): this;
  once(event: "connect", listener: () => void): this;
  once(
    event: "lookup",
    listener: (
      err: Error,
      address: string,
      family: string | number,
      host: string
    ) => void
  ): this;
  once(event: "ready", listener: () => void): this;
  once(event: "timeout", listener: () => void): this;
  once(event: "keylog", listener: (line: Buffer) => void): this;
  once(event: "OCSPResponse", listener: (response: Buffer) => void): this;
  once(event: "secureConnect", listener: () => void): this;
  once(event: "session", listener: (session: Buffer) => void): this;
  once(event: string | symbol, listener: (...args: any[]) => void): this;

  prependListener(event: "close", listener: (had_error: boolean) => void): this;
  prependListener(event: "drain", listener: () => void): this;
  prependListener(event: "error", listener: (err: Error) => void): this;
  prependListener(event: "finish", listener: () => void): this;
  prependListener(event: "data", listener: (message: Messages) => void): this;
  prependListener(event: "end", listener: () => void): this;
  prependListener(event: "pause", listener: () => void): this;
  prependListener(event: "readable", listener: () => void): this;
  prependListener(event: "resume", listener: () => void): this;
  prependListener(event: "connect", listener: () => void): this;
  prependListener(
    event: "lookup",
    listener: (
      err: Error,
      address: string,
      family: string | number,
      host: string
    ) => void
  ): this;
  prependListener(event: "ready", listener: () => void): this;
  prependListener(event: "timeout", listener: () => void): this;
  prependListener(event: "keylog", listener: (line: Buffer) => void): this;
  prependListener(
    event: "OCSPResponse",
    listener: (response: Buffer) => void
  ): this;
  prependListener(event: "secureConnect", listener: () => void): this;
  prependListener(event: "session", listener: (session: Buffer) => void): this;
  prependListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this;

  prependOnceListener(
    event: "close",
    listener: (had_error: boolean) => void
  ): this;
  prependOnceListener(event: "drain", listener: () => void): this;
  prependOnceListener(event: "error", listener: (err: Error) => void): this;
  prependOnceListener(event: "finish", listener: () => void): this;
  prependOnceListener(
    event: "data",
    listener: (message: Messages) => void
  ): this;
  prependOnceListener(event: "end", listener: () => void): this;
  prependOnceListener(event: "pause", listener: () => void): this;
  prependOnceListener(event: "readable", listener: () => void): this;
  prependOnceListener(event: "resume", listener: () => void): this;
  prependOnceListener(event: "connect", listener: () => void): this;
  prependOnceListener(
    event: "lookup",
    listener: (
      err: Error,
      address: string,
      family: string | number,
      host: string
    ) => void
  ): this;
  prependOnceListener(event: "ready", listener: () => void): this;
  prependOnceListener(event: "timeout", listener: () => void): this;
  prependOnceListener(event: "keylog", listener: (line: Buffer) => void): this;
  prependOnceListener(
    event: "OCSPResponse",
    listener: (response: Buffer) => void
  ): this;
  prependOnceListener(event: "secureConnect", listener: () => void): this;
  prependOnceListener(
    event: "session",
    listener: (session: Buffer) => void
  ): this;
  prependOnceListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this;

  removeListener(event: "close", listener: (had_error: boolean) => void): this;
  removeListener(event: "drain", listener: () => void): this;
  removeListener(event: "error", listener: (err: Error) => void): this;
  removeListener(event: "finish", listener: () => void): this;
  removeListener(event: "data", listener: (message: Messages) => void): this;
  removeListener(event: "end", listener: () => void): this;
  removeListener(event: "pause", listener: () => void): this;
  removeListener(event: "readable", listener: () => void): this;
  removeListener(event: "resume", listener: () => void): this;
  removeListener(event: "connect", listener: () => void): this;
  removeListener(
    event: "lookup",
    listener: (
      err: Error,
      address: string,
      family: string | number,
      host: string
    ) => void
  ): this;
  removeListener(event: "ready", listener: () => void): this;
  removeListener(event: "timeout", listener: () => void): this;
  removeListener(event: "keylog", listener: (line: Buffer) => void): this;
  removeListener(
    event: "OCSPResponse",
    listener: (response: Buffer) => void
  ): this;
  removeListener(event: "secureConnect", listener: () => void): this;
  removeListener(event: "session", listener: (session: Buffer) => void): this;
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
  heartbeats;
  constructor(port: number, host: string) {
    super({
      allowHalfOpen: false,
      objectMode: true,
      emitClose: true,
      autoDestroy: true,
    });
    this.socket = tls.connect(port, host);
    this.socket.on("error", (err) => this.destroy(err));
    this.socket.on("end", () => this.end());
    this.socket.on("connect", () => this.emit("connect"));
    this.socket.on("lookup", (err, address, family, host) =>
      this.emit("lookup", err, address, family, host)
    );
    this.socket.on("ready", () => this.emit("ready"));
    this.socket.on("timeout", () => this.emit("timeout"));
    this.socket.on("keylog", (line) => this.emit("keylog", line));
    this.socket.on("OCSPResponse", (response) =>
      this.emit("OCSPResponse", response)
    );
    this.socket.on("secureConnect", () => this.emit("secureConnect"));
    this.socket.on("session", (session) => this.emit("session", session));
    this.fivePerSecond = throttledQueue(FIVE_PER_SECOND, (data, cb) =>
      this.socket.write(data, cb)
    );
    this.fiftyPerSecond = throttledQueue(FIFTY_PER_SECOND, (data, cb) =>
      this.socket.write(data, cb)
    );
    this.heartbeats = setInterval(
      () => {
        const heartbeat = {
          payloadType: ProtoPayloadType.HEARTBEAT_EVENT,
          payload: {},
        };
        this._write(heartbeat, "", () => {});
      },
      10000 // https://connect.spotware.com/docs/frequently-asked-questions
    );
  }

  _final(callback: (error?: Error | null) => void): void {
    clearInterval(this.heartbeats);
    this.socket.end();
    callback();
  }

  _destroy(error: Error | null, callback: (error: Error | null) => void): void {
    clearInterval(this.heartbeats);
    this.socket.end();
    callback(error);
  }

  private buffer = Buffer.alloc(0);
  _read(_size: number): void {
    if (!this.listening) {
      const listener = (chunk: Buffer) => {
        if (chunk) {
          const tmp = Buffer.concat([this.buffer, chunk]);
          try {
            const msg = read(tmp);
            if (msg) {
              logInput(msg);
              const bla = this.push(msg);
              if (!bla) {
                console.log("stopping");
                this.listening = false;
                this.socket.off("data", listener);
              }
            }
            this.buffer = Buffer.alloc(0);
          } catch {
            this.buffer = tmp;
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
