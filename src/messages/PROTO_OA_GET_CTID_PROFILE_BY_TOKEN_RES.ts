import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOAGetCtidProfileByTokenResUtils,
  ProtoOAGetCtidProfileByTokenRes,
} from "@claasahl/spotware-protobuf";

import { serialize, deserialize } from "../spotware-utils";
import { Message } from "./Message";

export type Type = Message<
  ProtoOAGetCtidProfileByTokenRes,
  ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES,
    payload,
    clientMsgId,
  };
}

export function read(data: Buffer | ProtoMessage): Type | undefined {
  const message = Buffer.isBuffer(data) ? deserialize(data) : data;
  if (
    message.payloadType ===
    ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES,
      payload: ProtoOAGetCtidProfileByTokenResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function write(message: Type): Buffer | undefined {
  if (
    message.payloadType ===
    ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES
  ) {
    const pbf = new Pbf();
    ProtoOAGetCtidProfileByTokenResUtils.write(message.payload, pbf);
    return serialize({
      ...message,
      payload: pbf.finish(),
    });
  }
  return undefined;
}
