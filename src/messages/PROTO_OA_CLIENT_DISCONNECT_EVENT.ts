import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaClientDisconnectEventUtils,
  ProtoOaClientDisconnectEvent,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaClientDisconnectEvent,
  ProtoOaPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType === ProtoOaPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT,
      payload: ProtoOaClientDisconnectEventUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType === ProtoOaPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT
  ) {
    const pbf = new Pbf();
    ProtoOaClientDisconnectEventUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
