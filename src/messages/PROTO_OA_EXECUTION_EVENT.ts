import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOAExecutionEventUtils,
  ProtoOAExecutionEvent,
} from "@claasahl/spotware-protobuf";

import { serialize, deserialize } from "../spotware-utils";
import { Message } from "./Message";

export type Type = Message<
  ProtoOAExecutionEvent,
  ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
    payload,
    clientMsgId,
  };
}

export function read(data: Buffer | ProtoMessage): Type | undefined {
  const message = Buffer.isBuffer(data) ? deserialize(data) : data;
  if (message.payloadType === ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
      payload: ProtoOAExecutionEventUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function write(message: Type): Buffer | undefined {
  if (message.payloadType === ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT) {
    const pbf = new Pbf();
    ProtoOAExecutionEventUtils.write(message.payload, pbf);
    return serialize({
      ...message,
      payload: pbf.finish(),
    });
  }
  return undefined;
}
