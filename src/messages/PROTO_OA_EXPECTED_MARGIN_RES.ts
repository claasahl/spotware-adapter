import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOAExpectedMarginResUtils,
  ProtoOAExpectedMarginRes,
} from "@claasahl/spotware-protobuf";

import { serialize, deserialize } from "../spotware-utils";
import { Message } from "./Message";

export type Type = Message<
  ProtoOAExpectedMarginRes,
  ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES,
    payload,
    clientMsgId,
  };
}

export function read(data: Buffer | ProtoMessage): Type | undefined {
  const message = Buffer.isBuffer(data) ? deserialize(data) : data;
  if (message.payloadType === ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES,
      payload: ProtoOAExpectedMarginResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function write(message: Type): Buffer | undefined {
  if (message.payloadType === ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES) {
    const pbf = new Pbf();
    ProtoOAExpectedMarginResUtils.write(message.payload, pbf);
    return serialize({
      ...message,
      payload: pbf.finish(),
    });
  }
  return undefined;
}
