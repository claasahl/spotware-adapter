import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOADealListByPositionIdReqUtils,
  ProtoOADealListByPositionIdReq,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOADealListByPositionIdReq,
  ProtoOAPayloadType.PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType ===
    ProtoOAPayloadType.PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ,
      payload: ProtoOADealListByPositionIdReqUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType ===
    ProtoOAPayloadType.PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ
  ) {
    const pbf = new Pbf();
    ProtoOADealListByPositionIdReqUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
