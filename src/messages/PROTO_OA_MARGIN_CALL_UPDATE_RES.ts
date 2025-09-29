import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaMarginCallUpdateResUtils,
  ProtoOaMarginCallUpdateRes,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaMarginCallUpdateRes,
  ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType === ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES,
      payload: ProtoOaMarginCallUpdateResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType === ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES
  ) {
    const pbf = new Pbf();
    ProtoOaMarginCallUpdateResUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
