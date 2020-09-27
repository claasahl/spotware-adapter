import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOAGetAccountsByAccessTokenReqUtils,
  ProtoOAGetAccountsByAccessTokenReq,
} from "@claasahl/spotware-protobuf";

import { serialize, deserialize } from "../spotware-utils";
import { Message } from "./Message";

export type Type = Message<
  ProtoOAGetAccountsByAccessTokenReq,
  ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
    payload,
    clientMsgId,
  };
}

export function read(data: Buffer | ProtoMessage): Type | undefined {
  const message = Buffer.isBuffer(data) ? deserialize(data) : data;
  if (
    message.payloadType ===
    ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
      payload: ProtoOAGetAccountsByAccessTokenReqUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function write(message: Type): Buffer | undefined {
  if (
    message.payloadType ===
    ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ
  ) {
    const pbf = new Pbf();
    ProtoOAGetAccountsByAccessTokenReqUtils.write(message.payload, pbf);
    return serialize({
      ...message,
      payload: pbf.finish(),
    });
  }
  return undefined;
}
