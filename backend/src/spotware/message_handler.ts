import {
  IProtoMessage,
  ProtoOAApplicationAuthRes,
  ProtoOAPayloadType,
  ProtoPayloadType
} from "../generated/spotware";
import { EventEmitter } from "events";

// aliasing "ProtoOAApplicationAuthRes", because it only contains exactly one field "payloadType"
type wrapper = typeof ProtoOAApplicationAuthRes;
export function toProtoMessage<P>(
  TYPE: wrapper,
  properties: P,
  clientMsgId: string | null | undefined
): IProtoMessage {
  const message = TYPE.create({ ...properties });
  const payloadType = TYPE.prototype.payloadType;
  const payload = TYPE.encode(message).finish();
  return { payloadType, payload, clientMsgId };
}

export function register(
  TYPE: wrapper,
  EVENT: ProtoOAPayloadType | ProtoPayloadType,
  emitter: EventEmitter
): void {
  emitter.on(EVENT.toString(), parseAndEmitMessage(TYPE, emitter));
}

function parseAndEmitMessage(
  TYPE: wrapper,
  emitter: EventEmitter
): (message: IProtoMessage) => void {
  return (message: IProtoMessage) => {
    if (message.payload) {
      const msg = TYPE.decode(message.payload);
      if (msg) {
        emitter.emit(TYPE.name, msg);
        emitter.emit("message", msg);
      }
    }
  };
}
