import { connect, write, ProtoPayloadType } from ".";
import { ProtoOAPayloadType } from "@claasahl/spotware-protobuf";

const config = {
  host: process.env.SPOTWARE__HOST || "live.ctraderapi.com",
  port: Number(process.env.SPOTWARE__PORT) || 5035,
  clientId: process.env.SPOTWARE__CLIENT_ID || "",
  clientSecret: process.env.SPOTWARE__CLIENT_SECRET || "",
  accessToken: process.env.access_token || ""
};

// establish connection
const client = connect(
  config.port,
  config.host
);

// handle (incoming) proto messages
client.on("PROTO_MESSAGE.*", message => {
  console.log(JSON.stringify({ timestamp: new Date(), msg: message }));
});

// write (outgoing) proto messages
const heartbeats = setInterval(() => {
  write(client, { payloadType: ProtoPayloadType.HEARTBEAT_EVENT, payload: {} });
}, 10000);
client.on("end", () => clearInterval(heartbeats));

write(client, {
  payloadType: ProtoOAPayloadType.PROTO_OA_VERSION_REQ,
  payload: {}
});
