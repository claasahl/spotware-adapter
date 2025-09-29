import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOAV1PnlChangeUnSubscribeReqUtils,
  ProtoOAV1PnlChangeUnSubscribeReq,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOAV1PnlChangeUnSubscribeReq,
  ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_UN_SUBSCRIBE_REQ
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_UN_SUBSCRIBE_REQ,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType ===
    ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_UN_SUBSCRIBE_REQ
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_UN_SUBSCRIBE_REQ,
      payload: ProtoOAV1PnlChangeUnSubscribeReqUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType ===
    ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_UN_SUBSCRIBE_REQ
  ) {
    const pbf = new Pbf();
    ProtoOAV1PnlChangeUnSubscribeReqUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
