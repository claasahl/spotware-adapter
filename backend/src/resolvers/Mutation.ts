import { MutationResolvers } from "../generated/graphql-types";
import axios from "axios";
import {
  writeProtoMessage,
  toProtoMessage
} from "@claasahl/spotware-connect-api";

export const mutation: Required<MutationResolvers> = {
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
    const { clientMsgId, ...properties } = args;
    writeProtoMessage(
      ctx.gateway,
      toProtoMessage("HEARTBEAT_EVENT", properties, clientMsgId)
    );
    return true;
  },
  applicationAuth: (_parent, args, ctx) => {
    const clientId = process.env.SPOTWARE__CLIENT_ID || "";
    const clientSecret = process.env.SPOTWARE__CLIENT_SECRET || "";
    const { clientMsgId, ...properties } = args;
    writeProtoMessage(
      ctx.gateway,
      toProtoMessage(
        "PROTO_OA_APPLICATION_AUTH_REQ",
        { ...properties, clientId, clientSecret },
        clientMsgId
      )
    );
    return true;
  },
  accountAuth: async (_parent, args, ctx) => {
    const { clientMsgId, ...properties } = args;
    writeProtoMessage(
      ctx.gateway,
      toProtoMessage("PROTO_OA_ACCOUNT_AUTH_REQ", properties, clientMsgId)
    );
    return true;
  },
  version: async (_parent, args, ctx) => {
    const { clientMsgId, ...properties } = args;
    writeProtoMessage(
      ctx.gateway,
      toProtoMessage("PROTO_OA_VERSION_REQ", properties, clientMsgId)
    );
    return true;
  },
  getAccountListByAccessToken: async (_parent, args, ctx) => {
    const { clientMsgId, ...properties } = args;
    writeProtoMessage(
      ctx.gateway,
      toProtoMessage(
        "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
        properties,
        clientMsgId
      )
    );
    return true;
  },
  getCtidProfileByToken: async (_parent, args, ctx) => {
    const { clientMsgId, ...properties } = args;
    writeProtoMessage(
      ctx.gateway,
      toProtoMessage(
        "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
        properties,
        clientMsgId
      )
    );
    return true;
  }
};
export default mutation;
