import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoOaPayloadType,
  ProtoOaSubscribeSpotsReqUtils,
  ProtoOaSubscribeSpotsReq,
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
  ProtoOaSubscribeSpotsReq,
  ProtoOaPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoOaPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ,
    payload,
    clientMsgId,
  };
}

export function deserialize(message: ProtoMessage): Type | undefined {
  if (message.payloadType === ProtoOaPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoOaPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ,
      payload: ProtoOaSubscribeSpotsReqUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
  if (message.payloadType === ProtoOaPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ) {
    const pbf = new Pbf();
    ProtoOaSubscribeSpotsReqUtils.write(message.payload, pbf);
    return {
      ...message,
      payload: pbf.finish(),
    };
  }
  return undefined;
}
