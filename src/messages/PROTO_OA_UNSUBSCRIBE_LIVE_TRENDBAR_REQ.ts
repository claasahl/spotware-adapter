import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaUnsubscribeLiveTrendbarReqUtils,
  ProtoOaUnsubscribeLiveTrendbarReq,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaUnsubscribeLiveTrendbarReq,
  ProtoOaPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType ===
    ProtoOaPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ,
      payload: ProtoOaUnsubscribeLiveTrendbarReqUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType ===
    ProtoOaPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ
  ) {
    const pbf = new Pbf();
    ProtoOaUnsubscribeLiveTrendbarReqUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
