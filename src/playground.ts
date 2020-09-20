import { connect, write, ProtoPayloadType } from ".";
import { ProtoOAPayloadType } from "@claasahl/spotware-protobuf";
import { SpotwareStream } from "./spotware-stream";

const config = {
  host: process.env.SPOTWARE__HOST || "live.ctraderapi.com",
  port: Number(process.env.SPOTWARE__PORT) || 5035,
  clientId: process.env.SPOTWARE__CLIENT_ID || "",
  clientSecret: process.env.SPOTWARE__CLIENT_SECRET || "",
  accessToken: process.env.access_token || "",
};

function oldApproach() {
  // establish connection
  const client = connect(config.port, config.host);
  client.prependListener("data", (data) =>
    console.log("OLD RRR> data:", Buffer.from(data, "binary"))
  );
  client.on("data", (data) => console.log("OLD R--> data:", data));
  client.on("error", (err) => console.log("OLD R-->  err:", err));
  client.on("close", () => console.log("OLD R close"));
  client.on("end", () => console.log("OLD R end"));

  // handle (incoming) proto messages
  client.on("PROTO_MESSAGE.*", (message) => {
    console.log(JSON.stringify({ timestamp: new Date(), msg: message }));
  });

  // write (outgoing) proto messages
  const heartbeats = setInterval(() => {
    write(client, {
      payloadType: ProtoPayloadType.HEARTBEAT_EVENT,
      payload: {},
    });
  }, 10000);
  client.on("end", () => clearInterval(heartbeats));

  write(client, {
    clientMsgId: "AAA",
    payloadType: ProtoOAPayloadType.PROTO_OA_VERSION_REQ,
    payload: {},
  });
}

function newApproach() {
  const s = new SpotwareStream(config.port, config.host);
  setTimeout(() => {
    s.write({
      payloadType: ProtoOAPayloadType.PROTO_OA_VERSION_REQ,
      payload: {},
    });
    s.write({
      payloadType: ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ,
      payload: config,
    });
  }, 1000);
  setInterval(
    () =>
      s.write({ payloadType: ProtoPayloadType.HEARTBEAT_EVENT, payload: {} }),
    10000
  );
  s.resume();
  // s.on("data", console.log);
}

oldApproach;
newApproach();
