import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOAGetTrendbarsReqUtils,
  ProtoOAGetTrendbarsReq,
} from "@claasahl/spotware-protobuf";

import { serialize, deserialize } from "../spotware-utils";
import { Message } from "./Message";

export type Type = Message<
  ProtoOAGetTrendbarsReq,
  ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ,
    payload,
    clientMsgId,
  };
}

export function read(data: Buffer | ProtoMessage): Type | undefined {
  const message = Buffer.isBuffer(data) ? deserialize(data) : data;
  if (message.payloadType === ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ,
      payload: ProtoOAGetTrendbarsReqUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function write(message: Type): Buffer | undefined {
  if (message.payloadType === ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ) {
    const pbf = new Pbf();
    ProtoOAGetTrendbarsReqUtils.write(message.payload, pbf);
    return serialize({
      ...message,
      payload: pbf.finish(),
    });
  }
  return undefined;
}
