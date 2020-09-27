import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoPayloadType,
  ProtoMessageUtils,
} from "@claasahl/spotware-protobuf";

import { serialize, deserialize } from "./utils";
import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<ProtoMessage, ProtoPayloadType.PROTO_MESSAGE>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoPayloadType.PROTO_MESSAGE,
    payload,
    clientMsgId,
  };
}

export function read(data: Buffer | ProtoMessage): Type | undefined {
  const message = Buffer.isBuffer(data) ? deserialize(data) : data;
  if (message.payloadType === ProtoPayloadType.PROTO_MESSAGE) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoPayloadType.PROTO_MESSAGE,
      payload: ProtoMessageUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function write(message: Messages): Buffer | undefined {
  if (message.payloadType === ProtoPayloadType.PROTO_MESSAGE) {
    const pbf = new Pbf();
    ProtoMessageUtils.write(message.payload, pbf);
    return serialize({
      ...message,
      payload: pbf.finish(),
    });
  }
  return undefined;
}
