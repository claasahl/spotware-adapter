import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaV1PnlChangeUnSubscribeResUtils,
  ProtoOaV1PnlChangeUnSubscribeRes,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaV1PnlChangeUnSubscribeRes,
  ProtoOaPayloadType.PROTO_OA_V1_PNL_CHANGE_UN_SUBSCRIBE_RES
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_V1_PNL_CHANGE_UN_SUBSCRIBE_RES,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType ===
    ProtoOaPayloadType.PROTO_OA_V1_PNL_CHANGE_UN_SUBSCRIBE_RES
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_V1_PNL_CHANGE_UN_SUBSCRIBE_RES,
      payload: ProtoOaV1PnlChangeUnSubscribeResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType ===
    ProtoOaPayloadType.PROTO_OA_V1_PNL_CHANGE_UN_SUBSCRIBE_RES
  ) {
    const pbf = new Pbf();
    ProtoOaV1PnlChangeUnSubscribeResUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
