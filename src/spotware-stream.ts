import tls from "tls";
import { Duplex } from "stream";
import { read } from "./readProtoMessages";
import debug from "debug";
import {
  ProtoPayloadType,
  ProtoOAPayloadType,
} from "@claasahl/spotware-protobuf";

import * as $ from "./spotware-messages";
import { write } from "./writeProtoMessages";

const spotware = debug("spotware");
const input = spotware.extend("input");
const inputHuman = input.extend("human");
const output = spotware.extend("output");
const outputHuman = output.extend("human");

function logInput(msg: $.ProtoMessages) {
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

function logOutput(msg: $.ProtoMessages) {
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

export declare interface SpotwareStream extends Duplex {
  read(size?: number): $.ProtoMessages;
  unshift(message: $.ProtoMessages, encoding?: BufferEncoding): void;
  push(message: $.ProtoMessages, encoding?: string): boolean;
  addListener(event: "close", listener: () => void): this;
  addListener(
    event: "data",
    listener: (message: $.ProtoMessages) => void
  ): this;
  addListener(event: "end", listener: () => void): this;
  addListener(event: "error", listener: (err: Error) => void): this;
  addListener(event: "pause", listener: () => void): this;
  addListener(event: "readable", listener: () => void): this;
  addListener(event: "resume", listener: () => void): this;
  addListener(event: string | symbol, listener: (...args: any[]) => void): this;

  emit(event: "close"): boolean;
  emit(event: "data", message: $.ProtoMessages): boolean;
  emit(event: "end"): boolean;
  emit(event: "error", err: Error): boolean;
  emit(event: "pause"): boolean;
  emit(event: "readable"): boolean;
  emit(event: "resume"): boolean;
  emit(event: string | symbol, ...args: any[]): boolean;

  on(event: "close", listener: () => void): this;
  on(event: "data", listener: (message: $.ProtoMessages) => void): this;
  on(event: "end", listener: () => void): this;
  on(event: "error", listener: (err: Error) => void): this;
  on(event: "pause", listener: () => void): this;
  on(event: "readable", listener: () => void): this;
  on(event: "resume", listener: () => void): this;
  on(event: string | symbol, listener: (...args: any[]) => void): this;

  once(event: "close", listener: () => void): this;
  once(event: "data", listener: (message: $.ProtoMessages) => void): this;
  once(event: "end", listener: () => void): this;
  once(event: "error", listener: (err: Error) => void): this;
  once(event: "pause", listener: () => void): this;
  once(event: "readable", listener: () => void): this;
  once(event: "resume", listener: () => void): this;
  once(event: string | symbol, listener: (...args: any[]) => void): this;

  prependListener(event: "close", listener: () => void): this;
  prependListener(
    event: "data",
    listener: (message: $.ProtoMessages) => void
  ): this;
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
    listener: (message: $.ProtoMessages) => void
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
  removeListener(
    event: "data",
    listener: (message: $.ProtoMessages) => void
  ): this;
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
    message: $.ProtoMessages,
    encoding?: string,
    cb?: (error: Error | null | undefined) => void
  ): boolean;
  write(
    message: $.ProtoMessages,
    cb?: (error: Error | null | undefined) => void
  ): boolean;
  end(cb?: () => void): void;
  end(message: $.ProtoMessages, cb?: () => void): void;
  end(message: $.ProtoMessages, encoding?: string, cb?: () => void): void;
}

export class SpotwareStream extends Duplex {
  socket;
  listening = false;
  constructor(port: number, host: string) {
    super({ allowHalfOpen: false, objectMode: true });
    this.socket = tls.connect(port, host);
    this.socket.on("error", (err) => this.destroy(err));
  }

  _read(_size: number): void {
    if (!this.listening) {
      const listener = (chunk: Buffer) => {
        if (chunk) {
          const msg = read(chunk);
          logInput(msg);
          const bla = this.push(msg);
          if (!bla) {
            console.log("stopping");
            this.listening = false;
            this.socket.off("data", listener);
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
    const msg = chunk as $.ProtoMessages;
    logOutput(msg);
    const data = write(msg);
    this.socket.write(data, callback);
  }
}
