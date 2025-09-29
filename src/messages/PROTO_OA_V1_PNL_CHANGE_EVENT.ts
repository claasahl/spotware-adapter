import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOAV1PnlChangeEventUtils,
  ProtoOAV1PnlChangeEvent,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOAV1PnlChangeEvent,
  ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_EVENT
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_EVENT,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (message.payloadType === ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_EVENT) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_EVENT,
      payload: ProtoOAV1PnlChangeEventUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (message.payloadType === ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_EVENT) {
    const pbf = new Pbf();
    ProtoOAV1PnlChangeEventUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
