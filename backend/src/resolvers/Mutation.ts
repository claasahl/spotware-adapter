import { MutationResolvers } from "../generated/graphql-types";
import axios from "axios";
import tls from "tls";
import * as spotware from "../generated/spotware";
import * as protobufjs from "protobufjs";

export const mutation: Required<MutationResolvers.Resolvers> = {
  tokens: async (_parent, args) => {
    const { code } = args;
    const tokenUri = process.env.SPOTWARE__TOKEN_URI;
    const redirectUri = encodeURI(process.env.SPOTWARE__REDIRECT_URI || "");
    const clientId = encodeURI(process.env.SPOTWARE__CLIENT_ID || "");
    const clientSecret = encodeURI(process.env.SPOTWARE__CLIENT_SECRET || "");
    const url = `${tokenUri}?grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=${clientId}&client_secret=${clientSecret}`;

    const response = await axios.post(url);
    return JSON.stringify(response.data);
  },
  proto: async (_parent, args) => {
    return new Promise<string>((resolve, reject) => {
      const { code, host, port } = args;

      // const host = "live.ctraderapi.com";   // 5035, 5032
      // const host = "api.spotware.com";      // x   , x
      // const host = "connect.spotware.com";  // x   , x
      // const host = "tradeapi.spotware.com"; // 5035, 5032

      // const host = "demo.ctraderapi.com";           // 5035, 5032
      // const host = "sandbox-api.spotware.com";      // x   , x
      // const host = "sandbox-connect.spotware.com";  // x   , x
      // const host = "sandbox-tradeapi.spotware.com"; // 5035, 5032

      // const port = 5035;
      // const port = 5032;

      let heartbeat: NodeJS.Timeout | null = null;
      let pingReq: NodeJS.Timeout | null = null;
      const socket = tls.connect(port, host, undefined, () => {
        function sendProtoMessage(buffer: Uint8Array) {
          const length = Buffer.alloc(4);
          length.writeInt32BE(buffer.length, 0);

          const writer = protobufjs.Writer.create();
          writer.bytes(length.toString("binary"));
          writer.bytes(buffer);
          const data = writer.finish();

          socket.write(data);
        }

        console.log(
          "client connected",
          socket.authorized ? "authorized" : "unauthorized"
        );

        heartbeat = setInterval(() => {
          const message = spotware.ProtoHeartbeatEvent.create();
          message.payloadType =
            spotware.ProtoHeartbeatEvent.prototype.payloadType;
          const buffer = spotware.ProtoHeartbeatEvent.encode(message).finish();
          console.log("sending 💜 event", Buffer.from(buffer).toString("hex"));
          sendProtoMessage(buffer);
        }, 5000);

        pingReq = setInterval(() => {
          const timestamp = new Date().valueOf();
          const message = spotware.ProtoPingReq.create({ timestamp });
          message.payloadType = spotware.ProtoPingReq.prototype.payloadType;
          const buffer = spotware.ProtoPingReq.encode(message).finish();
          console.log("sending ping req", Buffer.from(buffer).toString("hex"));
          sendProtoMessage(buffer);
        }, 7500);

        //  const message = spotware.ProtoOAApplicationAuthReq.create({
        //    clientId: process.env.SPOTWARE__CLIENT_ID || "",
        //    clientSecret: process.env.SPOTWARE__CLIENT_SECRET || ""
        //  });
        //  message.payloadType = spotware.ProtoOAApplicationAuthReq.prototype.payloadType;
        //  const buffer = spotware.ProtoOAApplicationAuthReq.encode(
        //    message
        //  ).finish();
        // sendProtoMessage(buffer);
      });
      socket.setEncoding("binary");
      socket.on("data", data => {
        console.log("on 'data'", Buffer.from(data, "binary").toString("hex"));
        const message = Buffer.from(data, "binary");
        const length = message.readInt32BE(0);
        if (message.length - 4 === length) {
          const payload = message.slice(4);
          const msg = spotware.ProtoMessage.decode(payload);
          if (msg.payloadType === 2173) {
            const error = spotware.ProtoErrorRes.decode(payload);
            console.log(
              "on 'data'",
              spotware.ProtoErrorRes.toObject(error, {
                enums: String,
                defaults: true
              })
            );
          } else {
            console.log(
              "on 'data'",
              spotware.ProtoMessage.toObject(msg, {
                enums: String,
                defaults: true
              })
            );
          }
        } else {
          console.log(
            "on 'data'",
            "skip 'decode' due to invalid length",
            length,
            message.length
          );
        }
      });
      socket.on("end", () => {
        if (heartbeat) {
          clearInterval(heartbeat);
        }
        if (pingReq) {
          clearInterval(pingReq);
        }

        console.log("on 'end'", "server ends connection");
        resolve("the end!");
      });
      socket.on("error", error => {
        if (heartbeat) {
          clearInterval(heartbeat);
        }
        if (pingReq) {
          clearInterval(pingReq);
        }
        console.log("on 'error'", error);
        reject(error);
      });
    });
  }
};
export default mutation;
