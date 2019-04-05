import tls from "tls";

import * as $spotware from "./spotware-messages";
import SpotwareEventEmitter from "./spotware-event-emitter";
import { ProtoOAApplicationAuthReq } from "./messages/ProtoOAApplicationAuthReq";
import { ProtoOAApplicationAuthRes } from "./messages/ProtoOAApplicationAuthRes";
import * as util from "./spotware-utils";

function readProtoMessage(
  this: SpotwareEventEmitter & tls.TLSSocket,
  data: string
) {
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
    .on("data", readProtoMessage);
}

function onProtoMessage(
  this: SpotwareEventEmitter & tls.TLSSocket,
  message: $spotware.IProtoMessage
) {
  switch (message.payloadType) {
    case $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ:
      return this.write(util.serialize(message));
    case $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES:
      return ProtoOAApplicationAuthRes.emitDecoded(this, message);
  }
}

const client = connect(
  5035,
  "live.ctraderapi.com"
);
client.on("PROTO_OA_APPLICATION_AUTH_REQ", function(
  this: SpotwareEventEmitter,
  message,
  clientMsgId
) {
  return ProtoOAApplicationAuthReq.emitEncoded(this, message, clientMsgId);
});
client.on("PROTO_MESSAGE", onProtoMessage);

client.on("PROTO_MESSAGE", console.error);
client.on("PROTO_OA_APPLICATION_AUTH_REQ", console.error);
client.on("PROTO_OA_APPLICATION_AUTH_RES", console.error);
const msg: $spotware.IProtoOAApplicationAuthReq = {
  clientId: "",
  clientSecret: ""
};
client.emit("PROTO_OA_APPLICATION_AUTH_REQ", msg);
