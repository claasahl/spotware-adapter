import { MutationResolvers } from "../generated/graphql-types";
import axios from "axios";
import {
  ProtoHeartbeatEvent,
  ProtoPingReq,
  ProtoOAApplicationAuthReq,
  ProtoOAAccountAuthReq
} from "../generated/spotware";

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
  heartbeat: async (_parent, args, ctx) => {
    const { clientMsgId, ...propterties } = args;
    const TYPE = ProtoHeartbeatEvent;
    const message = TYPE.create(propterties);
    const payloadType = TYPE.prototype.payloadType;
    const payload = TYPE.encode(message).finish();
    await ctx.session.sendProtoMessage({ payloadType, payload, clientMsgId });
    return true;
  },
  ping: async (_parent, args, ctx) => {
    const { clientMsgId, ...propterties } = args;
    const TYPE = ProtoPingReq;
    const message = TYPE.create(propterties);
    const payloadType = TYPE.prototype.payloadType;
    const payload = TYPE.encode(message).finish();
    await ctx.session.sendProtoMessage({ payloadType, payload, clientMsgId });
    return true;
  },
  applicationAuth: async (_parent, args, ctx) => {
    const { clientId, clientSecret } = ctx.session;

    const { clientMsgId, ...propterties } = args;
    const TYPE = ProtoOAApplicationAuthReq;
    const message = TYPE.create({ ...propterties, clientId, clientSecret });
    const payloadType = TYPE.prototype.payloadType;
    const payload = TYPE.encode(message).finish();
    await ctx.session.sendProtoMessage({ payloadType, payload, clientMsgId });
    return true;
  },
  accountAuth: async (_parent, args, ctx) => {
    const accessToken = await ctx.session.accessToken();

    const { clientMsgId, ...propterties } = args;
    const TYPE = ProtoOAAccountAuthReq;
    const message = TYPE.create({ ...propterties, accessToken });
    const payloadType = TYPE.prototype.payloadType;
    const payload = TYPE.encode(message).finish();
    await ctx.session.sendProtoMessage({ payloadType, payload, clientMsgId });
    return true;
  }
};
export default mutation;
