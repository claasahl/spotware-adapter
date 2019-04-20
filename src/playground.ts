import * as $spotware from "./spotware-messages";
import * as messages from "./messages";
import { writeProtoMessage, connect } from "./spotware-client";

const client = connect(
  5035,
  "live.ctraderapi.com"
);
client.on("PROTO_MESSAGE", message => {
  console.log(
    $spotware.ProtoPayloadType[message.payloadType] ||
      $spotware.ProtoOAPayloadType[message.payloadType]
  );
  switch (message.payloadType) {
    case $spotware.ProtoPayloadType.ERROR_RES: {
      const msg = messages.from("ERROR_RES", message);
      break;
    }
    case $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_REQ: {
      const msg = messages.from("PROTO_OA_VERSION_REQ", message);
      break;
    }
  }
});
setInterval(() => {
  const message = messages.to("HEARTBEAT_EVENT", {});
  writeProtoMessage(client, message);
}, 10000);
