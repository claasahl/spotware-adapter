import {
  ProtoOAVersionReq,
  IProtoMessage,
  IProtoOAVersionReq,
  ProtoOAVersionRes,
  ProtoMessage,
  IProtoOAVersionRes,
  ProtoOAPayloadType
} from "../generated/spotware";
import { EventEmitter } from "events";

export namespace Request {
  const TYPE = ProtoOAVersionReq;
  export const EVENT: string = ProtoOAPayloadType.PROTO_OA_VERSION_REQ.toString();
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

export namespace Response {
  const TYPE = ProtoOAVersionRes;
  export const EVENT: string = ProtoOAPayloadType.PROTO_OA_VERSION_RES.toString();
  export function test(
    emitter: EventEmitter
  ): (message: IProtoMessage) => void {
    return (message: IProtoMessage) => {
      const msg = fromProtoMessage(message);
      if (msg) {
        emitter.emit(TYPE.name, msg);
        emitter.emit("message", msg);
      }
    };
  }
  export function register(emitter: EventEmitter): void {
    emitter.on(EVENT, test(emitter));
  }
  export function fromProtoMessage(
    message: IProtoMessage
  ): IProtoOAVersionRes | undefined {
    if (message.payload) {
      return TYPE.decode(message.payload);
    }
  }
}
