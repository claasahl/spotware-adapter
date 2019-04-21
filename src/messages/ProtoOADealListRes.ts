import {
  IProtoOADealListRes as IMessage,
  ProtoOADealListRes as Message,
  IProtoMessage,
  ProtoOAPayloadType
} from "../spotware-messages";

export namespace ProtoOADealListRes {
  export const payloadType = ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES;

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
      `invalid message. expected payloadType 'PROTO_OA_DEAL_LIST_RES' (got '${
        ProtoOAPayloadType[payloadType]
      }').`
    );
  }
}
export default ProtoOADealListRes;
