import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOAUnsubscribeSpotsReqUtils,
  ProtoOAUnsubscribeSpotsReq,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOAUnsubscribeSpotsReq,
  ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType === ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
      payload: ProtoOAUnsubscribeSpotsReqUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType === ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ
  ) {
    const pbf = new Pbf();
    ProtoOAUnsubscribeSpotsReqUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
