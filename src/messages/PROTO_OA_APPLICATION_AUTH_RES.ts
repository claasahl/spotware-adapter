import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOAApplicationAuthResUtils,
  ProtoOAApplicationAuthRes,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOAApplicationAuthRes,
  ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES
>;

export function create(
  payload: Type["payload"] = {},
  clientMsgId?: string
): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType === ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES,
      payload: ProtoOAApplicationAuthResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType === ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES
  ) {
    const pbf = new Pbf();
    ProtoOAApplicationAuthResUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
