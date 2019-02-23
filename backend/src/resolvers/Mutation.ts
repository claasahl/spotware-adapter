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
      const { code } = args;

      const socket = tls.connect(5035, "live.ctraderapi.com", undefined, () => {
        console.log(
          "client connected",
          socket.authorized ? "authorized" : "unauthorized"
        );
        const message = spotware.ProtoOAApplicationAuthReq.create({
          clientId: process.env.SPOTWARE__CLIENT_ID || "",
          clientSecret: process.env.SPOTWARE__CLIENT_SECRET || ""
        });
        const buffer = spotware.ProtoOAApplicationAuthReq.encode(
          message
        ).finish();

        const length = new Buffer(4);
        length.writeInt32BE(buffer.length, 0);

        const writer = protobufjs.Writer.create();
        writer.bytes(length.toString("binary"));
        writer.bytes(buffer);
        const data = writer.finish();

        socket.write(data);
      });
      socket.setEncoding("utf8");
      socket.on("data", data => {
        console.log("on 'data'", data);
      });
      socket.on("end", () => {
        console.log("on 'end'", "server ends connection");
        resolve("the end!");
      });
    });
  }
};
export default mutation;
