import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaUnsubscribeSpotsResUtils,
  ProtoOaUnsubscribeSpotsRes,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaUnsubscribeSpotsRes,
  ProtoOaPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (
    message.payloadType === ProtoOaPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES
  ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
      payload: ProtoOaUnsubscribeSpotsResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (
    message.payloadType === ProtoOaPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES
  ) {
    const pbf = new Pbf();
    ProtoOaUnsubscribeSpotsResUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
