import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaDealListByPositionIdReqUtils,
  ProtoOaDealListByPositionIdReq,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaDealListByPositionIdReq,
  ProtoOaPayloadType.PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType ===
    ProtoOaPayloadType.PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ,
      payload: ProtoOaDealListByPositionIdReqUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType ===
    ProtoOaPayloadType.PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ
  ) {
    const pbf = new Pbf();
    ProtoOaDealListByPositionIdReqUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
