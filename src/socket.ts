import { Socket } from "net";
import { TLSSocket } from "tls";
import { Duplex } from "stream";
import Pbf from "pbf";
import { ProtoMessageUtils } from "@claasahl/spotware-protobuf";

import { Messages, deserialize, serialize } from "./messages";

export class SpotwareSocket extends Duplex {
  private socket;
  private readingPaused;
  constructor(socket: Socket | TLSSocket) {
    super({
      objectMode: true,
      allowHalfOpen: false,
      emitClose: true,
      autoDestroy: true,
    });
    this.socket = socket;
    this.readingPaused = false;
    this.wrapSocket();
  }

  private wrapSocket() {
    // tls.TLSSocket
    this.socket.on("keylog", (line: Buffer) => this.emit("keylog", line));
    this.socket.on("OCSPResponse", (response: Buffer) =>
      this.emit("OCSPResponse", response)
    );
    this.socket.on("secureConnect", () => this.emit("secureConnect"));
    this.socket.on("session", (session: Buffer) =>
      this.emit("session", session)
    );

    // net.Socket
    this.socket.on("close", (hadError: boolean) =>
      this.emit("close", hadError)
    );
    this.socket.on("connect", () => this.emit("connect"));
    this.socket.on("drain", () => this.emit("drain"));
    this.socket.on("end", () => this.emit("end"));
    this.socket.on("error", (err: Error) => this.emit("error", err)); // this.destroy?
    this.socket.on(
      "lookup",
      (err: Error, address: string, family: string | number, host: string) =>
        this.emit("lookup", err, address, family, host)
    );
    this.socket.on("ready", () => this.emit("ready"));
    this.socket.on("timeout", () => this.emit("timeout"));

    // we customize data events!
    this.socket.on("readable", this.onReadable.bind(this));
  }

  private onReadable() {
    while (!this.readingPaused) {
      // read raw len
      const lenBuf = this.socket.read(4);
      if (!lenBuf) return;

      // convert raw len to integer
      const len = lenBuf.readUInt32BE();

      // read read json data
      const payload = this.socket.read(len);
      if (!payload) {
        this.socket.unshift(lenBuf);
        return;
      }

      // convert protobuffer message to js object
      let message: Messages;
      try {
        const pbf = new Pbf(payload);
        const protoMessage = ProtoMessageUtils.read(pbf);
        message = deserialize(protoMessage);
      } catch (ex) {
        this.socket.destroy(ex);
        return;
      }

      // add object to read buffer
      const pushOk = this.push(message);

      // pause reading if consumer is slow
      if (!pushOk) this.readingPaused = true;
    }
  }

  _read() {
    this.readingPaused = false;
    setImmediate(this.onReadable.bind(this));
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
    this.socket.write(buffer, undefined, callback);
  }

  _destroy(error: Error | null, callback: (error: Error | null) => void): void {
    this.socket.destroy(error || undefined);
    callback(error);
  }

  _final(callback: (error?: Error | null) => void): void {
    this.socket.end(callback);
  }
}
