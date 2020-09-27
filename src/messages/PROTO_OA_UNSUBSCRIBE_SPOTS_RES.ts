import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOAUnsubscribeSpotsResUtils,
  ProtoOAUnsubscribeSpotsRes,
} from "@claasahl/spotware-protobuf";

import { serialize, deserialize } from "../spotware-utils";
import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOAUnsubscribeSpotsRes,
  ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
    payload,
    clientMsgId,
  };
}

export function read(data: Buffer | ProtoMessage): Type | undefined {
  const message = Buffer.isBuffer(data) ? deserialize(data) : data;
  if (
    message.payloadType === ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
      payload: ProtoOAUnsubscribeSpotsResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function write(message: Messages): Buffer | undefined {
  if (
    message.payloadType === ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES
  ) {
    const pbf = new Pbf();
    ProtoOAUnsubscribeSpotsResUtils.write(message.payload, pbf);
    return serialize({
      ...message,
      payload: pbf.finish(),
    });
  }
  return undefined;
}