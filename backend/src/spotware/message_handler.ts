import { Gateway } from "./gateway";
import { IProtoMessage, IProtoOAVersionRes } from "../generated/spotware";
import { EventEmitter } from "events";

export interface MessageHandler<TYPE> {
  register: (gateway: Gateway) => void;
  fromProtoMessage: (message: IProtoMessage) => TYPE | undefined;
  parseAndEmitMessage: (
    emitter: EventEmitter
  ) => (message: IProtoMessage) => void;
}
