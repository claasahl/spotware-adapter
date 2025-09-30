import { ProtoOaPayloadType, ProtoPayloadType } from "..";

export interface Message<P, T extends ProtoPayloadType | ProtoOaPayloadType> {
  payloadType: T;
  payload: P;
  clientMsgId?: string;
}
