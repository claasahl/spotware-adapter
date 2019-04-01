import { EventEmitter } from "events";

import * as $spotware from "./spotware-messages";
import SpotwareEventEmitter from "./spotware-event-emitter";

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

emitter.removeAllListeners("PROTO_MESSAGE");
emitter.listenerCount("ERROR_RES");
emitter.listeners("PROTO_OA_APPLICATION_AUTH_RES");
emitter.eventNames();
