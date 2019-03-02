import { Gateway } from "./gateway";
import {
  IProtoMessage,
  ProtoOAPayloadType,
  ProtoPayloadType
} from "../generated/spotware";
import { EventEmitter } from "events";
import * as $protobuf from "protobufjs";

export interface RequestHandler<TYPE> {
  toProtoMessage: (
    properties: TYPE,
    clientMsgId: string | null | undefined
  ) => IProtoMessage;
}
export interface ResponseHandler<TYPE> {
  fromProtoMessage: (message: IProtoMessage) => TYPE | undefined;
  register: (gateway: Gateway) => void;
  parseAndEmitMessage: (
    emitter: EventEmitter
  ) => (message: IProtoMessage) => void;
}
export interface MessageHandler<TYPE>
  extends ResponseHandler<TYPE>,
    RequestHandler<TYPE> {}

interface TTT<P, T> {
  decode: (data: Uint8Array) => P;
  encode: (message: T) => $protobuf.Writer;
  create: (properties: P) => T;
  prototype: {
    payloadType: ProtoOAPayloadType | ProtoPayloadType;
  };
  name: string;
}

export class DefaultMessageHandler<P, T> implements MessageHandler<P> {
  private EVENT: Readonly<string>;
  private TYPE: TTT<P, T>;
  constructor(
    payloadType: ProtoOAPayloadType | ProtoPayloadType,
    type: TTT<P, T>
  ) {
    this.EVENT = payloadType.toString();
    this.TYPE = type;
  }
  fromProtoMessage(message: IProtoMessage): P | undefined {
    if (message.payload) {
      return this.TYPE.decode(message.payload);
    }
  }

  toProtoMessage(
    properties: P,
    clientMsgId: string | null | undefined
  ): IProtoMessage {
    const message = this.TYPE.create({ ...properties });
    const payloadType = this.TYPE.prototype.payloadType;
    const payload = this.TYPE.encode(message).finish();
    return { payloadType, payload, clientMsgId };
  }

  register(gateway: Gateway): void {
    const { emitter } = gateway;
    emitter.on(this.EVENT, this.parseAndEmitMessage(emitter));
  }

  parseAndEmitMessage(emitter: EventEmitter): (message: IProtoMessage) => void {
    return (message: IProtoMessage) => {
      const msg = this.fromProtoMessage(message);
      if (msg) {
        emitter.emit(this.TYPE.name, msg);
        emitter.emit("message", msg);
      }
    };
  }
}
