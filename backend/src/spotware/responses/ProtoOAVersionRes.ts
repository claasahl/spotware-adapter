import {
  ProtoOAVersionRes,
  ProtoOAPayloadType,
  IProtoMessage,
  IProtoOAVersionRes
} from "../../generated/spotware";
import { EventEmitter } from "events";
import { Gateway } from "../gateway";

export namespace Response {
  const TYPE = ProtoOAVersionRes;
  const EVENT = ProtoOAPayloadType.PROTO_OA_VERSION_RES.toString();

  export function register(gateway: Gateway): void {
    const { emitter } = gateway;
    emitter.on(EVENT, parseAndEmitMessage(emitter));
  }

  export function fromProtoMessage(
    message: IProtoMessage
  ): IProtoOAVersionRes | undefined {
    if (message.payload) {
      return TYPE.decode(message.payload);
    }
  }

  export function parseAndEmitMessage(
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
}
