import { ProtoOAPayloadType } from "@claasahl/spotware-protobuf";
import { SpotwareClientStream } from "./spotware-stream";

const config = {
  host: process.env.SPOTWARE__HOST || "live.ctraderapi.com",
  port: Number(process.env.SPOTWARE__PORT) || 5035,
  clientId: process.env.SPOTWARE__CLIENT_ID || "",
  clientSecret: process.env.SPOTWARE__CLIENT_SECRET || "",
  accessToken: process.env.access_token || "",
};

const s = new SpotwareClientStream(config.port, config.host);
setInterval(() => s.HEARTBEAT_EVENT(), 10000);
s.on("data", (msg) => {
  switch (msg.payloadType) {
    case ProtoOAPayloadType.PROTO_OA_VERSION_RES:
      console.log("version: ", msg.payload.version);
      s.OA_APPLICATION_AUTH_REQ({
        clientId: config.clientId,
        clientSecret: config.clientSecret,
      });
      break;
    case ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES:
      s.OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ({
        accessToken: config.accessToken,
      });
      break;
    case ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES:
      msg.payload.ctidTraderAccount.forEach((account) => {
        s.OA_ACCOUNT_AUTH_REQ({
          accessToken: config.accessToken,
          ctidTraderAccountId: account.ctidTraderAccountId,
        });
      });
      break;
    case ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES:
      // ...
      break;
  }
});
s.OA_VERSION_REQ();
