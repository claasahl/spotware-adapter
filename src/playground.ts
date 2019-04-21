import {
  connect,
  fromProtoMessage,
  toProtoMessage,
  writeProtoMessage
} from ".";

// establish connection
const client = connect(
  5035,
  "live.ctraderapi.com"
);

// handle (incoming) proto messages
client.on("PROTO_MESSAGE", (message, payloadType) => {
  console.log(payloadType);
  switch (payloadType) {
    case "ERROR_RES": {
      const msg = fromProtoMessage("ERROR_RES", message);
      console.log(msg);
      break;
    }
    case "PROTO_OA_VERSION_REQ": {
      const msg = fromProtoMessage("PROTO_OA_VERSION_REQ", message);
      console.log(msg);
      break;
    }
    case "PROTO_OA_VERSION_RES": {
      const msg = fromProtoMessage("PROTO_OA_VERSION_RES", message);
      console.log(msg);
      break;
    }
  }
});

// write (outgoing) proto messages
setInterval(() => {
  const message = toProtoMessage("HEARTBEAT_EVENT", {});
  writeProtoMessage(client, message);
}, 10000);

writeProtoMessage(client, toProtoMessage("PROTO_OA_VERSION_REQ", {}));
