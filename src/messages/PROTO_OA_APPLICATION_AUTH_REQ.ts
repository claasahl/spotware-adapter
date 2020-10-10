import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOAApplicationAuthReqUtils,
  ProtoOAApplicationAuthReq,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOAApplicationAuthReq,
  ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType === ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ,
      payload: ProtoOAApplicationAuthReqUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType === ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ
  ) {
    const pbf = new Pbf();
    ProtoOAApplicationAuthReqUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
