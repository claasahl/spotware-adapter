import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOAGetAccountListByAccessTokenResUtils,
  ProtoOAGetAccountListByAccessTokenRes,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOAGetAccountListByAccessTokenRes,
  ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType ===
    ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
      payload: ProtoOAGetAccountListByAccessTokenResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType ===
    ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES
  ) {
    const pbf = new Pbf();
    ProtoOAGetAccountListByAccessTokenResUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
