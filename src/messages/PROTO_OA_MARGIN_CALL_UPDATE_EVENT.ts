import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaMarginCallUpdateEventUtils,
  ProtoOaMarginCallUpdateEvent,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaMarginCallUpdateEvent,
  ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_EVENT
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_EVENT,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType === ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_EVENT
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_EVENT,
      payload: ProtoOaMarginCallUpdateEventUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType === ProtoOaPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_EVENT
  ) {
    const pbf = new Pbf();
    ProtoOaMarginCallUpdateEventUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
