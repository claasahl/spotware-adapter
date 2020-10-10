import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOASymbolChangedEventUtils,
  ProtoOASymbolChangedEvent,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOASymbolChangedEvent,
  ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType === ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT,
      payload: ProtoOASymbolChangedEventUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType === ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT
  ) {
    const pbf = new Pbf();
    ProtoOASymbolChangedEventUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
