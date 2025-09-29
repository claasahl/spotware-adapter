import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaMarginChangedEventUtils,
  ProtoOaMarginChangedEvent,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaMarginChangedEvent,
  ProtoOaPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType === ProtoOaPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT,
      payload: ProtoOaMarginChangedEventUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType === ProtoOaPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT
  ) {
    const pbf = new Pbf();
    ProtoOaMarginChangedEventUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
