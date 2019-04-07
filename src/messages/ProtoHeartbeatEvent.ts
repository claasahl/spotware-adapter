﻿import {
  IProtoHeartbeatEvent as IMessage,
  ProtoHeartbeatEvent as Message,
  IProtoMessage,
  ProtoPayloadType
} from "../spotware-messages";
import SpotwareEventEmitter from "../spotware-event-emitter";

export namespace ProtoHeartbeatEvent {
  export const payloadType = ProtoPayloadType.HEARTBEAT_EVENT;

  export function toProtoMessage(
    message: IMessage,
    clientMsgId?: string | null
  ): IProtoMessage {
    const payloadType = Message.prototype.payloadType;
    const msg = Message.create(message);
    const payload = Message.encode(msg).finish();
    return {
      payloadType,
      payload,
      clientMsgId
    };
  }

  export function emitEncoded(
    emitter: SpotwareEventEmitter,
    message: IMessage,
    clientMsgId?: string | null
  ): void {
    const data = toProtoMessage(message, clientMsgId);
    emitter.emit("PROTO_MESSAGE", data);
  }

  export function fromProtoMessage(
    message: IProtoMessage
  ): { message: IMessage; clientMsgId?: string | null } {
    if (message.payload && message.payloadType === payloadType) {
      const { clientMsgId } = message;
      const msg = Message.decode(message.payload);
      return { message: msg, clientMsgId };
    }
    if (!message.payload) {
      throw new Error(
        "invalid message. expected payload, but payload was empty."
      );
    }
    throw new Error(
      `invalid message. expected payloadType 'HEARTBEAT_EVENT' (got '${
        ProtoPayloadType[payloadType]
      }').`
    );
  }

  export function emitDecoded(
    emitter: SpotwareEventEmitter,
    message: IProtoMessage
  ): void {
    const data = fromProtoMessage(message);
    emitter.emit("HEARTBEAT_EVENT", data.message, data.clientMsgId);
  }
}