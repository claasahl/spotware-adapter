import {
  IProtoOATraderUpdatedEvent as IMessage,
  ProtoOATraderUpdatedEvent as Message,
  IProtoMessage,
  ProtoOAPayloadType
} from "../spotware-messages";
import SpotwareEventEmitter from "../spotware-event-emitter";

export namespace ProtoOATraderUpdatedEvent {
  export const payloadType = ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT;

  export function toProtoMessage(
    message: IMessage,
    clientMsgId?: string | null
  ): IProtoMessage {
    return {
      payloadType,
      payload: Message.encode(message).finish(),
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
      return {
        message: Message.decode(message.payload),
        clientMsgId: message.clientMsgId
      };
    } else if (!message.payload) {
      throw new Error(
        "invalid message. expected payload, but payload was empty."
      );
    }
    throw new Error(
      `invalid message. expected payloadType 'PROTO_OA_TRADER_UPDATE_EVENT' (got '${
        ProtoOAPayloadType[payloadType]
      }').`
    );
  }

  export function emitDecoded(
    emitter: SpotwareEventEmitter,
    message: IProtoMessage
  ): void {
    const data = fromProtoMessage(message);
    emitter.emit(
      "PROTO_OA_TRADER_UPDATE_EVENT",
      data.message,
      data.clientMsgId
    );
  }
}
export default ProtoOATraderUpdatedEvent;
