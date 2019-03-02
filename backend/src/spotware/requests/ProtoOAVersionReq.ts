import {
  ProtoOAVersionReq,
  ProtoOAPayloadType,
  IProtoOAVersionReq,
  IProtoMessage,
  ProtoOAApplicationAuthRes
} from "../../generated/spotware";

// aliasing "ProtoOAApplicationAuthRes", because it only contains exactly one field "payloadType"
type wrapper = typeof ProtoOAApplicationAuthRes;
function toProtoMessage2<P>(
  TYPE: wrapper,
  properties: P,
  clientMsgId: string | null | undefined
): IProtoMessage {
  const message = TYPE.create({ ...properties });
  const payloadType = TYPE.prototype.payloadType;
  const payload = TYPE.encode(message).finish();
  return { payloadType, payload, clientMsgId };
}

export function toProtoMessage(
  properties: IProtoOAVersionReq,
  clientMsgId: string | null | undefined
): IProtoMessage {
  return toProtoMessage2(ProtoOAVersionReq, properties, clientMsgId);
}
