import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaMarginCallListResUtils,
  ProtoOaMarginCallListRes,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaMarginCallListRes,
  ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_LIST_RES
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_LIST_RES,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType === ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_LIST_RES
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_LIST_RES,
      payload: ProtoOaMarginCallListResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType === ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_LIST_RES
  ) {
    const pbf = new Pbf();
    ProtoOaMarginCallListResUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
