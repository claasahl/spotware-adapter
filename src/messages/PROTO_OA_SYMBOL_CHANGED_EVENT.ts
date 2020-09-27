import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOASymbolChangedEventUtils,
  ProtoOASymbolChangedEvent,
} from "@claasahl/spotware-protobuf";

import { serialize, deserialize } from "../spotware-utils";
import { Message } from "./Message";

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

export function read(data: Buffer | ProtoMessage): Type | undefined {
  const message = Buffer.isBuffer(data) ? deserialize(data) : data;
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

export function write(message: Type): Buffer | undefined {
  if (
    message.payloadType === ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT
  ) {
    const pbf = new Pbf();
    ProtoOASymbolChangedEventUtils.write(message.payload, pbf);
    return serialize({
      ...message,
      payload: pbf.finish(),
    });
  }
  return undefined;
}
