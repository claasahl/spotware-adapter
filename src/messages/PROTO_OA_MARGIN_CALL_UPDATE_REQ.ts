import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaMarginCallUpdateReqUtils,
  ProtoOaMarginCallUpdateReq,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaMarginCallUpdateReq,
  ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType === ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ,
      payload: ProtoOaMarginCallUpdateReqUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType === ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ
  ) {
    const pbf = new Pbf();
    ProtoOaMarginCallUpdateReqUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
