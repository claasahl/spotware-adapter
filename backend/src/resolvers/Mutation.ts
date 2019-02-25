import { MutationResolvers, Direction } from "../generated/graphql-types";
import axios from "axios";
import tls from "tls";
import * as spotware from "../generated/spotware";
import * as protobufjs from "protobufjs";

import { somethingChanged } from "./Subscription";

function send(
  socket: tls.TLSSocket,
  payloadTypeName: string,
  payloadType: spotware.ProtoPayloadType,
  payload: Uint8Array,
  resolve: (value?: boolean | PromiseLike<boolean>) => void,
  reject: (reason?: any) => void
) {
  const PM = spotware.ProtoMessage;
  const pm = PM.create({ payloadType, payload });
  const data = PM.encode(pm).finish();

  const length = Buffer.alloc(4);
  length.writeInt32BE(data.length, 0);
  const writer = protobufjs.Writer.create();
  writer.bytes(length.toString("binary"));
  writer.bytes(data);
  const buffer = writer.finish();

  socket.write(buffer, "binary", (error: any) => {
    if (error) {
      reject(error);
    } else {
      somethingChanged({
        direction: Direction.ToServer,
        id: `sent ${payloadTypeName}-message`
      });
      resolve(true);
    }
  });
}

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
  heartbeat: (_parent, args, ctx) => {
    return new Promise<boolean>((resolve, reject) => {
      if (!ctx.socket) {
        reject("no socket!");
        return;
      }
      const { clientMsgId, ...propterties } = args;
      const TYPE = spotware.ProtoHeartbeatEvent;
      const message = TYPE.create(propterties);
      const payloadType = TYPE.prototype.payloadType;
      const payload = TYPE.encode(message).finish();
      send(ctx.socket, TYPE.name, payloadType, payload, resolve, reject);
    });
  },
  ping: async (_parent, args, ctx) => {
    return new Promise<boolean>((resolve, reject) => {
      if (!ctx.socket) {
        reject("no socket!");
        return;
      }
      const { clientMsgId, ...propterties } = args;
      const TYPE = spotware.ProtoPingReq;
      const message = TYPE.create(propterties);
      const payloadType = TYPE.prototype.payloadType;
      const payload = TYPE.encode(message).finish();
      send(ctx.socket, TYPE.name, payloadType, payload, resolve, reject);
    });
  }
};
export default mutation;
