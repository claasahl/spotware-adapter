import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOASymbolCategoryResUtils,
  ProtoOASymbolCategoryRes,
} from "@claasahl/spotware-protobuf";

import { serialize, deserialize } from "../spotware-utils";
import { Message } from "./Message";

export type Type = Message<
  ProtoOASymbolCategoryRes,
  ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES,
    payload,
    clientMsgId,
  };
}

export function read(data: Buffer | ProtoMessage): Type | undefined {
  const message = Buffer.isBuffer(data) ? deserialize(data) : data;
  if (message.payloadType === ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES,
      payload: ProtoOASymbolCategoryResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function write(message: Type): Buffer | undefined {
  if (message.payloadType === ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES) {
    const pbf = new Pbf();
    ProtoOASymbolCategoryResUtils.write(message.payload, pbf);
    return serialize({
      ...message,
      payload: pbf.finish(),
    });
  }
  return undefined;
}
