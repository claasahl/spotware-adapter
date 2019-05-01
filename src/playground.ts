import {
  connect,
  fromProtoMessage,
  toProtoMessage,
  writeProtoMessage
} from ".";

const config = {
  host: process.env.SPOTWARE__HOST || "live.ctraderapi.com",
  port: Number(process.env.SPOTWARE__PORT) || 5035,
  clientId: process.env.SPOTWARE__CLIENT_ID || "",
  clientSecret: process.env.SPOTWARE__CLIENT_SECRET || ""
};

// establish connection
const client = connect(
  config.port,
  config.host
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
    case "PROTO_OA_APPLICATION_AUTH_RES": {
      const msg = fromProtoMessage("PROTO_OA_APPLICATION_AUTH_RES", message);
      console.log(msg);
      break;
    }
  }
});

// write (outgoing) proto messages
const heartbeats = setInterval(() => {
  const message = toProtoMessage("HEARTBEAT_EVENT", {});
  writeProtoMessage(client, message);
}, 10000);
client.on("end", () => clearInterval(heartbeats));

writeProtoMessage(client, toProtoMessage("PROTO_OA_VERSION_REQ", {}));
writeProtoMessage(
  client,
  toProtoMessage("PROTO_OA_APPLICATION_AUTH_REQ", {
    clientId: config.clientId,
    clientSecret: config.clientSecret
  })
);
