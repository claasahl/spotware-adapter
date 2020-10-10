import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOAMarginCallUpdateReqUtils,
  ProtoOAMarginCallUpdateReq,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOAMarginCallUpdateReq,
  ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType === ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ,
      payload: ProtoOAMarginCallUpdateReqUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType === ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ
  ) {
    const pbf = new Pbf();
    ProtoOAMarginCallUpdateReqUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
