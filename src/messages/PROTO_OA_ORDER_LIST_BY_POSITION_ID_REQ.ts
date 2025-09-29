import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaOrderListByPositionIdReqUtils,
  ProtoOaOrderListByPositionIdReq,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaOrderListByPositionIdReq,
  ProtoOaPayloadType.PROTO_OA_ORDER_LIST_BY_POSITION_ID_REQ
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_ORDER_LIST_BY_POSITION_ID_REQ,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType ===
    ProtoOaPayloadType.PROTO_OA_ORDER_LIST_BY_POSITION_ID_REQ
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_ORDER_LIST_BY_POSITION_ID_REQ,
      payload: ProtoOaOrderListByPositionIdReqUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType ===
    ProtoOaPayloadType.PROTO_OA_ORDER_LIST_BY_POSITION_ID_REQ
  ) {
    const pbf = new Pbf();
    ProtoOaOrderListByPositionIdReqUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
