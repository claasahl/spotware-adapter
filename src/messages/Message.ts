import { ProtoOAPayloadType, ProtoPayloadType } from "..";

export interface Message<P, T extends ProtoPayloadType | ProtoOAPayloadType> {
  payloadType: T;
  payload: P;
  clientMsgId?: string;
}
