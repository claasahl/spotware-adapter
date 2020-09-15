import tls from "tls";
import { BinaryToSpotware, SpotwareToBinary } from "./spotware-stream";
import * as $ from "@claasahl/spotware-protobuf";

const config = {
  host: process.env.SPOTWARE__HOST || "live.ctraderapi.com",
  port: Number(process.env.SPOTWARE__PORT) || 5035,
  clientId: process.env.SPOTWARE__CLIENT_ID || "",
  clientSecret: process.env.SPOTWARE__CLIENT_SECRET || "",
  accessToken: process.env.access_token || "",
};

const socket = tls
  .connect(config.port, config.host)
  .setEncoding("binary")
  .setDefaultEncoding("binary");
const read = socket.pipe(new BinaryToSpotware());
read.on("data", (data) => console.log("R--> data:", data));
read.on("error", (err) => console.log("R-->  err:", err));
read.on("close", () => console.log("R close"));
read.on("end", () => console.log("R end"));

const write = new SpotwareToBinary();
write.pipe(socket);
write.on("data", (data) => console.log("W--> data:", data));
write.on("error", (err) => console.log("W-->  err:", err));
write.on("close", () => console.log("W close"));
write.on("end", () => console.log("W end"));
setTimeout(() => {
  write.write(
    {
      // clientMsgId: "sdfghj",
      payloadType: $.ProtoOAPayloadType.PROTO_OA_VERSION_REQ,
      payload: {},
    },
    "bla",
    (err) => {
      console.log("written", err);
    }
  );
}, 4000);
