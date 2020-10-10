import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoPayloadType,
  ProtoHeartbeatEventUtils,
  ProtoHeartbeatEvent,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoHeartbeatEvent,
  ProtoPayloadType.HEARTBEAT_EVENT
>;

export function create(
  payload: Type["payload"] = {},
  clientMsgId?: string
): Type {
  return {
    payloadType: ProtoPayloadType.HEARTBEAT_EVENT,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (message.payloadType === ProtoPayloadType.HEARTBEAT_EVENT) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoPayloadType.HEARTBEAT_EVENT,
      payload: ProtoHeartbeatEventUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (message.payloadType === ProtoPayloadType.HEARTBEAT_EVENT) {
    const pbf = new Pbf();
    ProtoHeartbeatEventUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
