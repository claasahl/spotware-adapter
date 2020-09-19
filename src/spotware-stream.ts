import { Transform, TransformCallback } from "stream";
import { read } from "./readProtoMessages";

import { ProtoMessages } from "./spotware-messages";
import { write } from "./writeProtoMessages";

export class BinaryToSpotware extends Transform {
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
    callback(null, msg);
  }
}
export class SpotwareToBinary extends Transform {
  constructor() {
    super({ writableObjectMode: true, defaultEncoding: "binary" });
  }
  _transform(
    chunk: any,
    _encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    const msg = chunk as ProtoMessages;
    const data = write(msg);
    callback(null, data);
  }
}
