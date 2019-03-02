import { Gateway } from "./gateway";
import { IProtoMessage, IProtoOAVersionRes } from "../generated/spotware";
import { EventEmitter } from "events";

export interface MessageHandler<TYPE> {
  fromProtoMessage: (message: IProtoMessage) => TYPE | undefined;
  toProtoMessage: (
    properties: TYPE,
    clientMsgId: string | null | undefined
  ) => IProtoMessage;
  register: (gateway: Gateway) => void;
  parseAndEmitMessage: (
    emitter: EventEmitter
  ) => (message: IProtoMessage) => void;
}
