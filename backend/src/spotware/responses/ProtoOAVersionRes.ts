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
  fromProtoMessage(message: IProtoMessage): IProtoOAVersionRes | undefined {
    if (message.payload) {
      return TYPE.decode(message.payload);
    }
  }

  toProtoMessage(
    properties: IProtoOAVersionRes,
    clientMsgId: string | null | undefined
  ): IProtoMessage {
    const message = TYPE.create({ ...properties });
    const payloadType = TYPE.prototype.payloadType;
    const payload = TYPE.encode(message).finish();
    return { payloadType, payload, clientMsgId };
  }

  register(gateway: Gateway): void {
    const { emitter } = gateway;
    emitter.on(EVENT, this.parseAndEmitMessage(emitter));
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
