import * as $spotware from "./spotware-messages";
import { to, from } from "./messages";
import { writeProtoMessage, connect } from "./spotware-client";

const client = connect(
  5035,
  "live.ctraderapi.com"
);

// handle (incoming) proto messages
client.on("PROTO_MESSAGE", message => {
  console.log(
    $spotware.ProtoPayloadType[message.payloadType] ||
      $spotware.ProtoOAPayloadType[message.payloadType]
  );
  switch (message.payloadType) {
    case $spotware.ProtoPayloadType.ERROR_RES: {
      const msg = from("ERROR_RES", message);
      console.log(msg);
      break;
    }
    case $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_REQ: {
      const msg = from("PROTO_OA_VERSION_REQ", message);
      console.log(msg);
      break;
    }
    case $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_RES: {
      const msg = from("PROTO_OA_VERSION_RES", message);
      console.log(msg);
      break;
    }
  }
});

// write (outgoing) proto messages
setInterval(() => {
  const message = to("HEARTBEAT_EVENT", {});
  writeProtoMessage(client, message);
}, 10000);

writeProtoMessage(client, to("PROTO_OA_VERSION_REQ", {}));
