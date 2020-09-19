import tls from "tls";
import { Transform, TransformCallback } from "stream";
import { read } from "./readProtoMessages";
import debug from "debug";
import {
  ProtoPayloadType,
  ProtoOAPayloadType,
} from "@claasahl/spotware-protobuf";

import { ProtoMessages } from "./spotware-messages";
import { write } from "./writeProtoMessages";

const spotware = debug("spotware");
const input = spotware.extend("input");
const inputHuman = input.extend("human");
const output = spotware.extend("output");
const outputHuman = output.extend("human");

function logInput(msg: ProtoMessages) {
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

function logOutput(msg: ProtoMessages) {
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

export declare interface SpotwareReadableStream extends Transform {
  addListener(event: "close", listener: () => void): this;
  addListener(event: "data", listener: (message: ProtoMessages) => void): this;
  addListener(event: "end", listener: () => void): this;
  addListener(event: "error", listener: (err: Error) => void): this;
  addListener(event: "pause", listener: () => void): this;
  addListener(event: "readable", listener: () => void): this;
  addListener(event: "resume", listener: () => void): this;
  addListener(event: string | symbol, listener: (...args: any[]) => void): this;

  emit(event: "close"): boolean;
  emit(event: "data", message: ProtoMessages): boolean;
  emit(event: "end"): boolean;
  emit(event: "error", err: Error): boolean;
  emit(event: "pause"): boolean;
  emit(event: "readable"): boolean;
  emit(event: "resume"): boolean;
  emit(event: string | symbol, ...args: any[]): boolean;

  on(event: "close", listener: () => void): this;
  on(event: "data", listener: (message: ProtoMessages) => void): this;
  on(event: "end", listener: () => void): this;
  on(event: "error", listener: (err: Error) => void): this;
  on(event: "pause", listener: () => void): this;
  on(event: "readable", listener: () => void): this;
  on(event: "resume", listener: () => void): this;
  on(event: string | symbol, listener: (...args: any[]) => void): this;

  once(event: "close", listener: () => void): this;
  once(event: "data", listener: (message: ProtoMessages) => void): this;
  once(event: "end", listener: () => void): this;
  once(event: "error", listener: (err: Error) => void): this;
  once(event: "pause", listener: () => void): this;
  once(event: "readable", listener: () => void): this;
  once(event: "resume", listener: () => void): this;
  once(event: string | symbol, listener: (...args: any[]) => void): this;

  prependListener(event: "close", listener: () => void): this;
  prependListener(
    event: "data",
    listener: (message: ProtoMessages) => void
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
    listener: (message: ProtoMessages) => void
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
    listener: (message: ProtoMessages) => void
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
}

export class SpotwareReadableStream extends Transform {
  constructor() {
    super({ readableObjectMode: true, defaultEncoding: "binary" });
  }

  _transform(
    chunk: any,
    _encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    if (!Buffer.isBuffer(chunk)) {
      return;
    }
    const msg = read(chunk);
    logInput(msg);
    callback(null, msg);
  }
}

export declare interface SpotwareWritableStream extends Transform {
  write(
    message: ProtoMessages,
    encoding?: string,
    cb?: (error: Error | null | undefined) => void
  ): boolean;
  write(
    message: ProtoMessages,
    cb?: (error: Error | null | undefined) => void
  ): boolean;
}

export class SpotwareWritableStream extends Transform {
  constructor() {
    super({ writableObjectMode: true, defaultEncoding: "binary" });
  }

  _transform(
    chunk: any,
    _encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    const msg = chunk as ProtoMessages;
    logOutput(msg);
    const data = write(msg);
    callback(null, data);
  }
}

export function connect(
  port: number,
  host: string,
  options?: tls.ConnectionOptions
) {
  const socket = tls
    .connect(port, host, options)
    .setEncoding("binary")
    .setDefaultEncoding("binary");

  const readable = socket.pipe(new SpotwareReadableStream());
  const writable = new SpotwareWritableStream();
  writable.pipe(socket);

  return { readable, writable };
}
