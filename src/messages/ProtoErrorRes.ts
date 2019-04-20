import {
  IProtoErrorRes as IMessage,
  ProtoErrorRes as Message,
  IProtoMessage,
  ProtoPayloadType
} from "../spotware-messages";

export namespace ProtoErrorRes {
  export const payloadType = ProtoPayloadType.ERROR_RES;

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
      `invalid message. expected payloadType 'ERROR_RES' (got '${
        ProtoPayloadType[payloadType]
      }').`
    );
  }
}
export default ProtoErrorRes;
