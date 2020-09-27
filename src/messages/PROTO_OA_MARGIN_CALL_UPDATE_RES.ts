import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOAMarginCallUpdateResUtils,
  ProtoOAMarginCallUpdateRes,
} from "@claasahl/spotware-protobuf";

import { serialize, deserialize } from "./utils";
import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOAMarginCallUpdateRes,
  ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES,
    payload,
    clientMsgId,
  };
}

export function read(data: Buffer | ProtoMessage): Type | undefined {
  const message = Buffer.isBuffer(data) ? deserialize(data) : data;
  if (
    message.payloadType === ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES,
      payload: ProtoOAMarginCallUpdateResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function write(message: Messages): Buffer | undefined {
  if (
    message.payloadType === ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES
  ) {
    const pbf = new Pbf();
    ProtoOAMarginCallUpdateResUtils.write(message.payload, pbf);
    return serialize({
      ...message,
      payload: pbf.finish(),
    });
  }
  return undefined;
}
