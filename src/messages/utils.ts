import Pbf from "pbf";
import { ProtoMessage, ProtoMessageUtils } from "@claasahl/spotware-protobuf";

const INT_SIZE = 4;
function length(length: number): Buffer {
  const buffer = Buffer.alloc(INT_SIZE);
  buffer.writeInt32BE(length, 0);
  return buffer;
}

export function serialize(message: ProtoMessage): Buffer {
  const pbf = new Pbf(Buffer.alloc(128));
  ProtoMessageUtils.write(message, pbf);
  const data = pbf.finish();
  const len = length(data.length);
  const totalLength = len.length + data.length;
  return Buffer.concat([len, data], totalLength);
}

let buffer = Buffer.alloc(0);
export function deserialize(data: Buffer, offset: number = 0): ProtoMessage {
  buffer = Buffer.concat([buffer, data.slice(offset)]);
  const length = buffer.readInt32BE(offset);
  const remainingBytes = buffer.length - offset - INT_SIZE;
  if (remainingBytes >= length) {
    const payload = buffer.slice(offset + INT_SIZE, length + offset + INT_SIZE);
    buffer = Buffer.alloc(0);
    const pbf = new Pbf(payload);
    return ProtoMessageUtils.read(pbf);
  } else {
    throw new Error("buffer not large enough");
  }
}
