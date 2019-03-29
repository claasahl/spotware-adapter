import { EventEmitter } from "events";

import * as $spotware from "./spotware-messages";

"PROTO_MESSAGE";
"ERROR_RES";
"HEARTBEAT_EVENT";
"PROTO_OA_APPLICATION_AUTH_REQ";

type Listener<T> = (message: T, clientMsgId?: string | null) => void;

interface SpotwareMessageEventEmitter {
  emitMessage(
    event: "PROTO_MESSAGE",
    message: $spotware.IProtoMessage
  ): boolean;
  emitMessage(event: "ERROR_RES", message: $spotware.IProtoErrorRes): boolean;
  emitMessage(
    event: "HEARTBEAT_EVENT",
    message: $spotware.IProtoHeartbeatEvent
  ): boolean;
  emitMessage(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    message: $spotware.IProtoOAApplicationAuthReq
  ): boolean;

  onMessage(event: "PROTO_MESSAGE", message: $spotware.IProtoMessage): this;
  onMessage(
    event: "ERROR_RES",
    listener: Listener<$spotware.IProtoErrorRes>
  ): this;
  onMessage(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  onMessage(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;

  offMessage(event: "PROTO_MESSAGE", message: $spotware.IProtoMessage): this;
  offMessage(
    event: "ERROR_RES",
    listener: Listener<$spotware.IProtoErrorRes>
  ): this;
  offMessage(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  offMessage(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;

  onceMessage(event: "PROTO_MESSAGE", message: $spotware.IProtoMessage): this;
  onceMessage(
    event: "ERROR_RES",
    listener: Listener<$spotware.IProtoErrorRes>
  ): this;
  onceMessage(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  onceMessage(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;
}

interface EmitOverloads {
  emit(event: "PROTO_MESSAGE", message: $spotware.IProtoMessage): boolean;
  emit(event: "ERROR_RES", message: $spotware.IProtoErrorRes): boolean;
  emit(
    event: "HEARTBEAT_EVENT",
    message: $spotware.IProtoHeartbeatEvent
  ): boolean;
  emit(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    message: $spotware.IProtoOAApplicationAuthReq
  ): boolean;
}

interface SpotwareEventEmitter extends EventEmitter {
  emit(event: "PROTO_MESSAGE", message: $spotware.IProtoMessage): boolean;
  emit(event: "ERROR_RES", message: $spotware.IProtoErrorRes): boolean;
  emit(
    event: "HEARTBEAT_EVENT",
    message: $spotware.IProtoHeartbeatEvent
  ): boolean;
  emit(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    message: $spotware.IProtoOAApplicationAuthReq
  ): boolean;

  on(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  on(event: "ERROR_RES", listener: Listener<$spotware.IProtoErrorRes>): this;
  on(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  on(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;

  off(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  off(event: "ERROR_RES", listener: Listener<$spotware.IProtoErrorRes>): this;
  off(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  off(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;

  once(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  once(event: "ERROR_RES", listener: Listener<$spotware.IProtoErrorRes>): this;
  once(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  once(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;

  addListener(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  addListener(
    event: "ERROR_RES",
    listener: Listener<$spotware.IProtoErrorRes>
  ): this;
  addListener(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  addListener(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;

  removeListener(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  removeListener(
    event: "ERROR_RES",
    listener: Listener<$spotware.IProtoErrorRes>
  ): this;
  removeListener(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  removeListener(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;

  removeAllListeners(event?: "PROTO_MESSAGE"): this;
  removeAllListeners(event?: "ERROR_RES"): this;
  removeAllListeners(event?: "HEARTBEAT_EVENT"): this;
  removeAllListeners(event?: "PROTO_OA_APPLICATION_AUTH_REQ"): this;

  // ...
}

const emitter: SpotwareEventEmitter = new EventEmitter();
emitter.emit("PROTO_MESSAGE", { payloadType: 1 });
emitter.emit("ERROR_RES", { errorCode: "" });
emitter.emit("ERROR_RES", { errorCode: "" });
emitter.emit("PROTO_OA_APPLICATION_AUTH_REQ", {});
emitter
  .on("HEARTBEAT_EVENT", message => {})
  .once("HEARTBEAT_EVENT", message => {})
  .off("ERROR_RES", message => {});
emitter.addListener(
  "PROTO_OA_APPLICATION_AUTH_REQ",
  (message, clientMsgId) => {}
);
emitter.removeListener("PROTO_MESSAGE", message => {});

emitter.removeAllListeners();
emitter.listenerCount();
emitter.eventNames();
