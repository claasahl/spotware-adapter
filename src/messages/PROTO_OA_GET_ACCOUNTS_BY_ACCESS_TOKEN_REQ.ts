import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaGetAccountsByAccessTokenReqUtils,
  ProtoOaGetAccountsByAccessTokenReq,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaGetAccountsByAccessTokenReq,
  ProtoOaPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType ===
    ProtoOaPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
      payload: ProtoOaGetAccountsByAccessTokenReqUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType ===
    ProtoOaPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ
  ) {
    const pbf = new Pbf();
    ProtoOaGetAccountsByAccessTokenReqUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
