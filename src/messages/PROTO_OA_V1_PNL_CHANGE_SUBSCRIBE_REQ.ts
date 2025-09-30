import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaV1PnlChangeSubscribeReqUtils,
  ProtoOaV1PnlChangeSubscribeReq,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaV1PnlChangeSubscribeReq,
  ProtoOaPayloadType.PROTO_OA_V1_PNL_CHANGE_SUBSCRIBE_REQ
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_V1_PNL_CHANGE_SUBSCRIBE_REQ,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType ===
    ProtoOaPayloadType.PROTO_OA_V1_PNL_CHANGE_SUBSCRIBE_REQ
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_V1_PNL_CHANGE_SUBSCRIBE_REQ,
      payload: ProtoOaV1PnlChangeSubscribeReqUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType ===
    ProtoOaPayloadType.PROTO_OA_V1_PNL_CHANGE_SUBSCRIBE_REQ
  ) {
    const pbf = new Pbf();
    ProtoOaV1PnlChangeSubscribeReqUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
