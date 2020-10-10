import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOAPayloadType,
  ProtoOASubscribeSpotsResUtils,
  ProtoOASubscribeSpotsRes,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOASubscribeSpotsRes,
  ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (message.payloadType === ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES,
      payload: ProtoOASubscribeSpotsResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (message.payloadType === ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES) {
    const pbf = new Pbf();
    ProtoOASubscribeSpotsResUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
