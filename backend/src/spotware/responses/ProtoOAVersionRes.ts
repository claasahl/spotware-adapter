import {
  ProtoOAVersionRes,
  ProtoOAPayloadType,
  IProtoMessage,
  IProtoOAVersionRes
} from "../../generated/spotware";
import { EventEmitter } from "events";
import { Gateway } from "../gateway";
import { MessageHandler } from "../message_handler";

const TYPE = ProtoOAVersionRes;
const EVENT = ProtoOAPayloadType.PROTO_OA_VERSION_RES.toString();

export class Response implements MessageHandler<IProtoOAVersionRes> {
  register(gateway: Gateway): void {
    const { emitter } = gateway;
    emitter.on(EVENT, this.parseAndEmitMessage(emitter));
  }

  fromProtoMessage(message: IProtoMessage): IProtoOAVersionRes | undefined {
    if (message.payload) {
      return TYPE.decode(message.payload);
    }
  }

  parseAndEmitMessage(emitter: EventEmitter): (message: IProtoMessage) => void {
    return (message: IProtoMessage) => {
      const msg = this.fromProtoMessage(message);
      if (msg) {
        emitter.emit(TYPE.name, msg);
        emitter.emit("message", msg);
      }
    };
  }
}
