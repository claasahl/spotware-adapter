import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaErrorResUtils,
  ProtoOaErrorRes,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaErrorRes,
  ProtoOaPayloadType.PROTO_OA_ERROR_RES
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_ERROR_RES,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (message.payloadType === ProtoOaPayloadType.PROTO_OA_ERROR_RES) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_ERROR_RES,
      payload: ProtoOaErrorResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (message.payloadType === ProtoOaPayloadType.PROTO_OA_ERROR_RES) {
    const pbf = new Pbf();
    ProtoOaErrorResUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
