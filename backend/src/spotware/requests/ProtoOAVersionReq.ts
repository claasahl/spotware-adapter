import {
  ProtoOAVersionReq,
  ProtoOAPayloadType,
  IProtoOAVersionReq,
  IProtoMessage
} from "../../generated/spotware";
import { MessageHandler } from "../message_handler";
import { Gateway } from "../gateway";
import { EventEmitter } from "events";

const TYPE = ProtoOAVersionReq;
const EVENT = ProtoOAPayloadType.PROTO_OA_VERSION_REQ.toString();

export class Request implements MessageHandler<IProtoOAVersionReq> {
  fromProtoMessage(message: IProtoMessage): IProtoOAVersionReq | undefined {
    if (message.payload) {
      return TYPE.decode(message.payload);
    }
  }

  toProtoMessage(
    properties: IProtoOAVersionReq,
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
