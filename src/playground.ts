import tls from "tls";

import * as $spotware from "./spotware-messages";
import SpotwareEventEmitter from "./spotware-event-emitter";
import * as messages from "./messages";
import * as util from "./spotware-utils";
import { onProtoMessage as handler } from "./spotware-message-handler";

function readProtoMessage(this: SpotwareEventEmitter, data: string) {
  {
    try {
      const buffer = Buffer.from(data, "binary");
      const message = util.deserialize(buffer);
      this.emit("PROTO_MESSAGE", message);
    } catch (error) {
      console.log("could not read/parse ProtoMessage", error);
    }
  }
}

function connect(
  port: number,
  host: string,
  options?: tls.TlsOptions
): SpotwareEventEmitter {
  return tls
    .connect(port, host, options)
    .setEncoding("binary")
    .setDefaultEncoding("binary")
    .on("data", readProtoMessage)
    .on("PROTO_MESSAGE", onProtoMessage);
}

function onProtoMessage(
  this: SpotwareEventEmitter & tls.TLSSocket,
  message: $spotware.IProtoMessage
) {
  return handler(this, message);
}

function onProtoOAApplicationAuthReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAApplicationAuthReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAApplicationAuthReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

const client = connect(
  5035,
  "live.ctraderapi.com"
);
client.on("PROTO_OA_APPLICATION_AUTH_REQ", onProtoOAApplicationAuthReq);

client.on("PROTO_MESSAGE", console.error);
client.on("PROTO_OA_APPLICATION_AUTH_REQ", console.error);
client.on("PROTO_OA_APPLICATION_AUTH_RES", console.error);
const msg: $spotware.IProtoOAApplicationAuthReq = {
  clientId: "",
  clientSecret: ""
};
client.emit("PROTO_OA_APPLICATION_AUTH_REQ", msg);
