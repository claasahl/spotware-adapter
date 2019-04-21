import { EventEmitter } from "events";

import * as $spotware from "./spotware-messages";
import PayloadType from "./spotware-payload-types";

export interface SpotwareEventEmitter extends EventEmitter {
  addListener(
    event: "PROTO_MESSAGE",
    listener: (
      message: $spotware.IProtoMessage,
      payloadType: PayloadType
    ) => void
  ): this;
  on(
    event: "PROTO_MESSAGE",
    listener: (
      message: $spotware.IProtoMessage,
      payloadType: PayloadType
    ) => void
  ): this;
  once(
    event: "PROTO_MESSAGE",
    listener: (
      message: $spotware.IProtoMessage,
      payloadType: PayloadType
    ) => void
  ): this;
  prependListener(
    event: "PROTO_MESSAGE",
    listener: (
      message: $spotware.IProtoMessage,
      payloadType: PayloadType
    ) => void
  ): this;
  prependOnceListener(
    event: "PROTO_MESSAGE",
    listener: (
      message: $spotware.IProtoMessage,
      payloadType: PayloadType
    ) => void
  ): this;
  removeListener(
    event: "PROTO_MESSAGE",
    listener: (
      message: $spotware.IProtoMessage,
      payloadType: PayloadType
    ) => void
  ): this;
  off(
    event: "PROTO_MESSAGE",
    listener: (
      message: $spotware.IProtoMessage,
      payloadType: PayloadType
    ) => void
  ): this;
  removeAllListeners(event?: "PROTO_MESSAGE"): this;
  setMaxListeners(n: number): this;
  getMaxListeners(): number;
  listeners(event: "PROTO_MESSAGE"): Function[];
  rawListeners(event: "PROTO_MESSAGE"): Function[];
  emit(
    event: "PROTO_MESSAGE",
    message: $spotware.IProtoMessage,
    payloadType: PayloadType
  ): boolean;
  eventNames(): Array<string | symbol>;
  listenerCount(type: "PROTO_MESSAGE"): number;
}
export default SpotwareEventEmitter;
