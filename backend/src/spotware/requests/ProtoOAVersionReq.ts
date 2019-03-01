import {
  ProtoOAVersionReq,
  ProtoOAPayloadType,
  IProtoOAVersionReq,
  IProtoMessage
} from "../../generated/spotware";

export namespace Request {
  const TYPE = ProtoOAVersionReq;

  export function toProtoMessage(
    properties: IProtoOAVersionReq,
    clientMsgId: string | null | undefined
  ): IProtoMessage {
    const message = TYPE.create({ ...properties });
    const payloadType = TYPE.prototype.payloadType;
    const payload = TYPE.encode(message).finish();
    return { payloadType, payload, clientMsgId };
  }
}
