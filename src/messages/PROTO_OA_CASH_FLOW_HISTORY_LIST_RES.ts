import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaCashFlowHistoryListResUtils,
  ProtoOaCashFlowHistoryListRes,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaCashFlowHistoryListRes,
  ProtoOaPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType ===
    ProtoOaPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES,
      payload: ProtoOaCashFlowHistoryListResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType ===
    ProtoOaPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES
  ) {
    const pbf = new Pbf();
    ProtoOaCashFlowHistoryListResUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
