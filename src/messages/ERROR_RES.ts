import Pbf from "pbf";
import {
  ProtoMessage,
  ProtoPayloadType,
  ProtoErrorResUtils,
  ProtoErrorRes,
} from "@claasahl/spotware-protobuf";

import { serialize, deserialize } from "../spotware-utils";
import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<ProtoErrorRes, ProtoPayloadType.ERROR_RES>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
  return {
    payloadType: ProtoPayloadType.ERROR_RES,
    payload,
    clientMsgId,
  };
}

export function read(data: Buffer | ProtoMessage): Type | undefined {
  const message = Buffer.isBuffer(data) ? deserialize(data) : data;
  if (message.payloadType === ProtoPayloadType.ERROR_RES) {
    const pbf = new Pbf(message.payload);
    return {
      payloadType: ProtoPayloadType.ERROR_RES,
      payload: ProtoErrorResUtils.read(pbf),
      clientMsgId: message.clientMsgId,
    };
  }
  return undefined;
}

export function write(message: Messages): Buffer | undefined {
  if (message.payloadType === ProtoPayloadType.ERROR_RES) {
    const pbf = new Pbf();
    ProtoErrorResUtils.write(message.payload, pbf);
    return serialize({
      ...message,
      payload: pbf.finish(),
    });
  }
  return undefined;
}
