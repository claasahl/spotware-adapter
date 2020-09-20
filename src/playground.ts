import { ProtoOAPayloadType } from "@claasahl/spotware-protobuf";
import { SpotwareStream } from "./spotware-stream";

const config = {
  host: process.env.SPOTWARE__HOST || "live.ctraderapi.com",
  port: Number(process.env.SPOTWARE__PORT) || 5035,
  clientId: process.env.SPOTWARE__CLIENT_ID || "",
  clientSecret: process.env.SPOTWARE__CLIENT_SECRET || "",
  accessToken: process.env.access_token || "",
};

const s = new SpotwareStream(config.port, config.host);
setTimeout(() => {
  s.versionReq({}, () => {});
  s.applicationAuthReq(config, () => {});
}, 1000);
setInterval(() => s.heartbeat(() => {}), 10000);
// s.resume();
s.on("data", (msg) => {
  if (
    msg.payloadType === ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT
  ) {
    console.log("account disconnected", msg.payload.ctidTraderAccountId);
  }
});
