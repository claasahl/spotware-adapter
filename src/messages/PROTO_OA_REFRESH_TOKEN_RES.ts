import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaRefreshTokenResUtils,
  ProtoOaRefreshTokenRes,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaRefreshTokenRes,
  ProtoOaPayloadType.PROTO_OA_REFRESH_TOKEN_RES
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_REFRESH_TOKEN_RES,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (message.payloadType === ProtoOaPayloadType.PROTO_OA_REFRESH_TOKEN_RES) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_REFRESH_TOKEN_RES,
      payload: ProtoOaRefreshTokenResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (message.payloadType === ProtoOaPayloadType.PROTO_OA_REFRESH_TOKEN_RES) {
    const pbf = new Pbf();
    ProtoOaRefreshTokenResUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
