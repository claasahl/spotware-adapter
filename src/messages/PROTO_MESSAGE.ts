import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoPayloadType,
  ProtoMessageUtils,
} from "@claasahl/spotware-protobuf";

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

export function deserialize(message: ProtoMessage): Type | undefined {
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

export function serialize(message: Messages): ProtoMessage | undefined {
  if (message.payloadType === ProtoPayloadType.PROTO_MESSAGE) {
    const pbf = new Pbf();
    ProtoMessageUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
