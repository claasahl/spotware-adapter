import { Duplex, Readable } from "stream";
import Pbf from "pbf";
import { ProtoMessageUtils } from "@claasahl/spotware-protobuf";

import { logInput, logOutput } from "./logger";
import { Messages, deserialize, serialize } from "./messages";

export declare interface SpotwareSocket extends Duplex {
  addListener(event: "close", listener: () => void): this;
  addListener(event: "data", listener: (message: Messages) => void): this;
  addListener(event: "end", listener: () => void): this;
  addListener(event: "error", listener: (err: Error) => void): this;
  addListener(event: "pause", listener: () => void): this;
  addListener(event: "readable", listener: () => void): this;
  addListener(event: "resume", listener: () => void): this;
  addListener(event: "drain", listener: () => void): this;
  addListener(event: "finish", listener: () => void): this;
  addListener(event: "pipe", listener: (src: Readable) => void): this;
  addListener(event: "unpipe", listener: (src: Readable) => void): this;
  addListener(event: string | symbol, listener: (...args: any[]) => void): this;

  emit(event: "close"): boolean;
  emit(event: "data", message: Messages): boolean;
  emit(event: "end"): boolean;
  emit(event: "error", err: Error): boolean;
  emit(event: "pause"): boolean;
  emit(event: "readable"): boolean;
  emit(event: "resume"): boolean;
  emit(event: "drain"): boolean;
  emit(event: "finish"): boolean;
  emit(event: "pipe", src: Readable): boolean;
  emit(event: "unpipe", src: Readable): boolean;
  emit(event: string | symbol, ...args: any[]): boolean;

  on(event: "close", listener: () => void): this;
  on(event: "data", listener: (message: Messages) => void): this;
  on(event: "end", listener: () => void): this;
  on(event: "error", listener: (err: Error) => void): this;
  on(event: "pause", listener: () => void): this;
  on(event: "readable", listener: () => void): this;
  on(event: "resume", listener: () => void): this;
  on(event: "drain", listener: () => void): this;
  on(event: "finish", listener: () => void): this;
  on(event: "pipe", listener: (src: Readable) => void): this;
  on(event: "unpipe", listener: (src: Readable) => void): this;
  on(event: string | symbol, listener: (...args: any[]) => void): this;

  once(event: "close", listener: () => void): this;
  once(event: "data", listener: (message: Messages) => void): this;
  once(event: "end", listener: () => void): this;
  once(event: "error", listener: (err: Error) => void): this;
  once(event: "pause", listener: () => void): this;
  once(event: "readable", listener: () => void): this;
  once(event: "resume", listener: () => void): this;
  once(event: "drain", listener: () => void): this;
  once(event: "finish", listener: () => void): this;
  once(event: "pipe", listener: (src: Readable) => void): this;
  once(event: "unpipe", listener: (src: Readable) => void): this;
  once(event: string | symbol, listener: (...args: any[]) => void): this;

  prependListener(event: "close", listener: () => void): this;
  prependListener(event: "data", listener: (message: Messages) => void): this;
  prependListener(event: "end", listener: () => void): this;
  prependListener(event: "error", listener: (err: Error) => void): this;
  prependListener(event: "pause", listener: () => void): this;
  prependListener(event: "readable", listener: () => void): this;
  prependListener(event: "resume", listener: () => void): this;
  prependListener(event: "drain", listener: () => void): this;
  prependListener(event: "finish", listener: () => void): this;
  prependListener(event: "pipe", listener: (src: Readable) => void): this;
  prependListener(event: "unpipe", listener: (src: Readable) => void): this;
  prependListener(event: string | symbol, listener: (...args: any[]) => void): this; // prettier-ignore

  prependOnceListener(event: "close", listener: () => void): this;
  prependOnceListener(event: "data", listener: (message: Messages) => void): this; // prettier-ignore
  prependOnceListener(event: "end", listener: () => void): this;
  prependOnceListener(event: "error", listener: (err: Error) => void): this;
  prependOnceListener(event: "pause", listener: () => void): this;
  prependOnceListener(event: "readable", listener: () => void): this;
  prependOnceListener(event: "resume", listener: () => void): this;
  prependOnceListener(event: "drain", listener: () => void): this;
  prependOnceListener(event: "finish", listener: () => void): this;
  prependOnceListener(event: "pipe", listener: (src: Readable) => void): this;
  prependOnceListener(event: "unpipe", listener: (src: Readable) => void): this;
  prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this; // prettier-ignore

  removeListener(event: "close", listener: () => void): this;
  removeListener(event: "data", listener: (message: Messages) => void): this;
  removeListener(event: "end", listener: () => void): this;
  removeListener(event: "error", listener: (err: Error) => void): this;
  removeListener(event: "pause", listener: () => void): this;
  removeListener(event: "readable", listener: () => void): this;
  removeListener(event: "resume", listener: () => void): this;
  removeListener(event: "drain", listener: () => void): this;
  removeListener(event: "finish", listener: () => void): this;
  removeListener(event: "pipe", listener: (src: Readable) => void): this;
  removeListener(event: "unpipe", listener: (src: Readable) => void): this;
  removeListener(event: string | symbol, listener: (...args: any[]) => void): this; // prettier-ignore

  read(size?: number): Messages;
  unshift(message: Messages, encoding?: BufferEncoding): void;
  push(message: Messages | null, encoding?: string): boolean;

  write(message: Messages, encoding?: string, cb?: (error: Error | null | undefined) => void): boolean; // prettier-ignore
  write(message: Messages, cb?: (error: Error | null | undefined) => void): boolean; // prettier-ignore
  end(cb?: () => void): void;
  end(message: Messages, cb?: () => void): void;
  end(message: Messages, encoding?: string, cb?: () => void): void;
}

export class SpotwareSocket extends Duplex {
  private socket;
  private readingPaused;
  constructor(socket: Duplex) {
    super({ objectMode: true, autoDestroy: true, allowHalfOpen: false });
    this.socket = socket;
    this.readingPaused = false;
    this.wrapSocket();
  }

  private wrapSocket() {
    this.socket.on("end", () => this.push(null));
    this.socket.on("error", this.destroy.bind(this));
    this.socket.on("readable", this.onReadable.bind(this));
  }

  private head = Buffer.alloc(0);
  private onReadable() {
    while (!this.readingPaused) {
      const tail = this.socket.read();
      if (tail) {
        this.head = Buffer.concat([this.head, tail]);
      }
      if (this.head.byteLength < 4) {
        return;
      }
      const len = this.head.readUInt32BE();

      // read read json data
      if (this.head.byteLength < 4 + len) {
        // this.socket.unshift(lenBuf);
        return;
      }
      const payload = this.head.slice(4, 4 + len);
      this.head = this.head.slice(4 + len);

      // convert protobuffer message to js object
      let message: Messages;
      try {
        const pbf = new Pbf(payload);
        const protoMessage = ProtoMessageUtils.read(pbf);
        message = deserialize(protoMessage);
      } catch (err) {
        this.destroy(err);
        return;
      }

      // add object to read buffer
      const pushOk = this.push(message);
      logInput(message);

      // pause reading if consumer is slow
      if (!pushOk) this.readingPaused = true;
    }
  }

  _read() {
    console.log("SpotwareSocket _read", this.socket.destroyed);
    this.readingPaused = false;
    setImmediate(this.onReadable.bind(this));
  }

  _write(
    message: Messages,
    _encoding: string,
    callback: (error?: Error | null) => void
  ): void {
    console.log("SpotwareSocket _write", this.socket.destroyed);
    const protoMessage = serialize(message);
    const pbf = new Pbf();
    ProtoMessageUtils.write(protoMessage, pbf);
    const payload = pbf.finish();

    const payloadBytes = Buffer.byteLength(payload);
    const length = Buffer.alloc(4);
    length.writeUInt32BE(payloadBytes);

    const buffer = Buffer.concat([length, payload], 4 + payloadBytes);
    this.socket.write(buffer, undefined, (err) => {
      logOutput(message);
      callback(err);
    });
  }

  _destroy(error: Error | null, callback: (error: Error | null) => void): void {
    console.log("SpotwareSocket _destroy", this.socket.destroyed);
    this.socket.destroy(error || undefined);
    callback(error);
  }

  _final(callback: (error?: Error | null) => void): void {
    console.log("SpotwareSocket _final", this.socket.destroyed);
    if (!this.socket.destroyed) {
      this.socket.end(callback);
    } else {
      callback();
    }
  }
}
