import {
  IProtoOAAssetClassListRes as IMessage,
  ProtoOAAssetClassListRes as Message,
  IProtoMessage,
  ProtoOAPayloadType
} from "../spotware-messages";
import SpotwareEventEmitter from "../spotware-event-emitter";

export namespace ProtoOAAssetClassListRes {
  export const payloadType = ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES;

  export function toProtoMessage(
    message: IMessage,
    clientMsgId?: string | null
  ): IProtoMessage {
    return {
      payloadType: Message.prototype.payloadType,
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
      `invalid message. expected payloadType 'PROTO_OA_ASSET_CLASS_LIST_RES' (got '${
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
      "PROTO_OA_ASSET_CLASS_LIST_RES",
      data.message,
      data.clientMsgId
    );
  }
}
