import { MutationResolvers } from "../generated/graphql-types";
import axios from "axios";
import {
  ProtoHeartbeatEvent,
  ProtoPingReq,
  ProtoOAApplicationAuthReq,
  ProtoOAAccountAuthReq,
  ProtoOAGetAccountListByAccessTokenReq,
  ProtoOAGetCtidProfileByTokenReq
} from "../generated/spotware";
import * as requests from "../spotware/requests";

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
    const { clientMsgId, ...properties } = args;
    const TYPE = ProtoHeartbeatEvent;
    const message = TYPE.create(properties);
    const payloadType = TYPE.prototype.payloadType;
    const payload = TYPE.encode(message).finish();
    return new Promise<boolean>(resolve => {
      ctx.gateway.writeProtoMessage(
        { payloadType, payload, clientMsgId },
        () => {
          resolve(true);
        }
      );
    });
  },
  ping: (_parent, args, ctx) => {
    const { clientMsgId, ...properties } = args;
    const TYPE = ProtoPingReq;
    const message = TYPE.create(properties);
    const payloadType = TYPE.prototype.payloadType;
    const payload = TYPE.encode(message).finish();
    return new Promise<boolean>(resolve => {
      ctx.gateway.writeProtoMessage(
        { payloadType, payload, clientMsgId },
        () => {
          resolve(true);
        }
      );
    });
  },
  applicationAuth: (_parent, args, ctx) => {
    const clientId = process.env.SPOTWARE__CLIENT_ID || "";
    const clientSecret = process.env.SPOTWARE__CLIENT_SECRET || "";

    const { clientMsgId, ...properties } = args;
    const message = requests.ProtoOAApplicationAuthReq(
      { ...properties, clientId, clientSecret },
      clientMsgId
    );
    return new Promise<boolean>(resolve => {
      ctx.gateway.writeProtoMessage(message, () => {
        resolve(true);
      });
    });
  },
  accountAuth: async (_parent, args, ctx) => {
    const { clientMsgId, ...properties } = args;
    const message = requests.ProtoOAAccountAuthReq(properties, clientMsgId);
    return new Promise<boolean>(resolve => {
      ctx.gateway.writeProtoMessage(message, () => {
        resolve(true);
      });
    });
  },
  version: async (_parent, args, ctx) => {
    const { clientMsgId, ...properties } = args;
    const message = requests.ProtoOAVersionReq(properties, clientMsgId);
    return new Promise<boolean>(resolve => {
      ctx.gateway.writeProtoMessage(message, () => {
        resolve(true);
      });
    });
  },
  getAccountListByAccessToken: async (_parent, args, ctx) => {
    const { clientMsgId, ...properties } = args;
    const message = requests.ProtoOAGetAccountListByAccessTokenReq(
      properties,
      clientMsgId
    );
    return new Promise<boolean>(resolve => {
      ctx.gateway.writeProtoMessage(message, () => {
        resolve(true);
      });
    });
  },
  getCtidProfileByToken: async (_parent, args, ctx) => {
    const { clientMsgId, ...properties } = args;
    const message = requests.ProtoOAGetCtidProfileByTokenReq(
      properties,
      clientMsgId
    );
    return new Promise<boolean>(resolve => {
      ctx.gateway.writeProtoMessage(message, () => {
        resolve(true);
      });
    });
  }
};
export default mutation;
