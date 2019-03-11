import { IProtoMessage, ProtoMessage } from "../generated/spotware";

const INT_SIZE = 4;
function length(length: number): Buffer {
  const buffer = Buffer.alloc(INT_SIZE);
  buffer.writeInt32BE(length, 0);
  return buffer;
}

export function serialize(message: IProtoMessage): Buffer {
  const pm = ProtoMessage.create(message);
  const data = ProtoMessage.encode(pm).finish();
  const len = length(data.length);
  const totalLength = len.length + data.length;
  return Buffer.concat([len, data], totalLength);
}

export function deserialize(data: Buffer, offset: number = 0): IProtoMessage {
  const length = data.readInt32BE(offset);
  const remainingBytes = data.length - offset - INT_SIZE;
  if (remainingBytes >= length) {
    const payload = data.slice(offset + INT_SIZE, length + offset + INT_SIZE);
    return ProtoMessage.decode(payload);
  } else {
    throw new Error("buffer not large enough");
  }
}
