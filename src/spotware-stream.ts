import tls from "tls";
import { Transform, TransformCallback } from "stream";
import { read } from "./readProtoMessages";
import debug from "debug";

import { ProtoMessages } from "./spotware-messages";
import { write } from "./writeProtoMessages";

export class BinaryToSpotware extends Transform {
  log;

  constructor() {
    super({ readableObjectMode: true, defaultEncoding: "binary" });
    this.log = debug("spotware").extend("input");
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
    this.log("%j", {
      clientMsgId: msg.clientMsgId,
      payloadType: msg.payloadType,
      payload: msg.payload,
    });
    callback(null, msg);
  }
}
export class SpotwareToBinary extends Transform {
  log;

  constructor() {
    super({ writableObjectMode: true, defaultEncoding: "binary" });
    this.log = debug("spotware").extend("output");
  }

  _transform(
    chunk: any,
    _encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    const msg = chunk as ProtoMessages;
    this.log("%j", {
      clientMsgId: msg.clientMsgId,
      payloadType: msg.payloadType,
      payload: msg.payload,
    });
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

  const read = socket.pipe(new BinaryToSpotware());
  const write = new SpotwareToBinary();
  write.pipe(socket);

  return { read, write };
}
