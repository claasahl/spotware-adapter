import {
  ProtoOAVersionRes,
  ProtoOAPayloadType,
  ProtoPayloadType,
  ProtoOAApplicationAuthRes,
  IProtoMessage
} from "../../generated/spotware";
import { EventEmitter } from "events";

// aliasing "ProtoOAApplicationAuthRes", because it only contains exactly one field "payloadType"
type wrapper = typeof ProtoOAApplicationAuthRes;

function register2(
  TYPE: wrapper,
  EVENT: ProtoOAPayloadType | ProtoPayloadType,
  emitter: EventEmitter
): void {
  emitter.on(EVENT.toString(), parseAndEmitMessage(TYPE, emitter));
}
export function register(emitter: EventEmitter): void {
  register2(
    ProtoOAVersionRes,
    ProtoOAPayloadType.PROTO_OA_VERSION_RES,
    emitter
  );
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
