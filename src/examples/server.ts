import { Server } from "net";

import { ProtoOaPayloadType, FACTORY, ProtoOAErrorCode, ProtoOACtidTraderAccount, ProtoErrorCode, ProtoOALightSymbol, ProtoOATrendbarPeriod } from "..";
import { Protocol } from "../protocol";
import { Router } from "../router";

type Context = {
  version: string;
  application?: {
    clientId: string;
    clientSecret: string;
  }
  account?: {
    accessToken: string;
    ctidTraderAccountId: number;
  }
  subscribedSpots: Set<number>;
  subscribedLiveTrendbars: Map<number, ReadonlyArray<ProtoOATrendbarPeriod>>;
}
type ContextWithApplication = Context & {
  application: NonNullable<Context['application']>;
};
type ContextWithAccount = ContextWithApplication & {
  account: NonNullable<Context['account']>;
};

function isRegisteredApplication(clientId: string, clientSecret: string) {
  return registeredApplications.get(clientId) === clientSecret;
}
function isAuthenticatedApplication(context: Context): context is ContextWithApplication {
  return !!context.application;
}
function isValidAccessToken(context: Context, accessToken: string): context is ContextWithApplication {
  console.log(context, accessToken, accessTokensByApplication.get(context.application!.clientId)?.includes(accessToken));
  return (isAuthenticatedAccount(context) && accessTokensByApplication.get(context.application.clientId)?.includes(accessToken)) || false;
}
function isAuthenticatedAccount(context: Context): context is ContextWithAccount {
  return !!context.account;
}

const port = parseInt(process.env.SPOTWARE__PORT || "", 10);
const ACCOUNT_ID = 12345;

// this should be in some form of database in a real application
const registeredApplications = new Map<string, string>();
registeredApplications.set(process.env.SPOTWARE__CLIENT_ID || "", process.env.SPOTWARE__CLIENT_SECRET || "");
const accessTokensByApplication = new Map<string, ReadonlyArray<string>>();
accessTokensByApplication.set(process.env.SPOTWARE__CLIENT_ID || "", [process.env.SPOTWARE__ACCESS_TOKEN || ""]);
const availableAccountsByAccessToken = new Map<string, ReadonlyArray<ProtoOACtidTraderAccount>>();
availableAccountsByAccessToken.set(process.env.SPOTWARE__ACCESS_TOKEN || "", [{
  ctidTraderAccountId: ACCOUNT_ID,
  isLive: false,
  brokerTitleShort: "Demo Broker",
}]);
const symbolsByAccountId = new Map<number, ReadonlyArray<ProtoOALightSymbol>>();
symbolsByAccountId.set(ACCOUNT_ID, [{
  symbolId: 1,
  symbolName: "EURUSD",
}, {
  symbolId: 2,
  symbolName: "GBPUSD",
}]);


const server = new Server((socket) => {
  const context: Context = {
    version: "00",
    subscribedSpots: new Set(),
    subscribedLiveTrendbars: new Map(),
  };
  const address = socket.address();
  const source = "address" in address ? address.address : address;
  console.log(`${source} connected`);

  const protocol = new Protocol(socket);
  const router = new Router<undefined>();
  router.register(ProtoOaPayloadType.PROTO_OA_VERSION_REQ, (message) => [FACTORY.PROTO_OA_VERSION_RES({ version: context.version }, message.clientMsgId),]);
  router.register(ProtoOaPayloadType.PROTO_OA_APPLICATION_AUTH_REQ, (message) => {
    const { clientId, clientSecret } = message.payload;
    if (!isRegisteredApplication(clientId, clientSecret)) {
      return [FACTORY.PROTO_OA_ERROR_RES({
        errorCode: ProtoOAErrorCode.CH_CLIENT_AUTH_FAILURE.toString(),
        description: "clientId or clientSecret is incorrect"
      }, message.clientMsgId)];
    }

    context.application = { clientId, clientSecret };
    return [FACTORY.PROTO_OA_APPLICATION_AUTH_RES({}, message.clientMsgId)];
  });
  router.register(ProtoOaPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ, (message) => {
    if (!isAuthenticatedApplication(context)) {
      return [FACTORY.PROTO_OA_ERROR_RES({
        errorCode: ProtoErrorCode.UNSUPPORTED_MESSAGE.toString(),
        description: "Trading account is not authorized"
      }, message.clientMsgId)];
    }
    if (!isValidAccessToken(context, message.payload.accessToken)) {
      return [FACTORY.PROTO_OA_ERROR_RES({
        errorCode: ProtoOAErrorCode.CH_ACCESS_TOKEN_INVALID.toString(),
        description: "accessToken is invalid"
      }, message.clientMsgId)];
    }
    return [FACTORY.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES({
      accessToken: message.payload.accessToken,
      ctidTraderAccount: availableAccountsByAccessToken.get(message.payload.accessToken) || [],
    }, message.clientMsgId)];
  });
  router.register(ProtoOaPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ, (message) => {
    if (!isAuthenticatedApplication(context)) {
      return [FACTORY.PROTO_OA_ERROR_RES({
        errorCode: ProtoErrorCode.UNSUPPORTED_MESSAGE.toString(),
        description: "Trading account is not authorized"
      }, message.clientMsgId)];
    }
    if (!isValidAccessToken(context, message.payload.accessToken)) {
      return [FACTORY.PROTO_OA_ERROR_RES({
        errorCode: ProtoOAErrorCode.CH_ACCESS_TOKEN_INVALID.toString(),
        description: "accessToken is invalid"
      }, message.clientMsgId)];
    }
    const accounts = availableAccountsByAccessToken.get(message.payload.accessToken) || [];
    if (!accounts.find(a => a.ctidTraderAccountId === message.payload.ctidTraderAccountId)) {
      return [FACTORY.PROTO_OA_ERROR_RES({
        errorCode: ProtoOAErrorCode.CH_ACCESS_TOKEN_INVALID.toString(),
        description: "accessToken is invalid"
      }, message.clientMsgId)];
    }

    context.account = {
      accessToken: message.payload.accessToken,
      ctidTraderAccountId: message.payload.ctidTraderAccountId,
    };
    return [FACTORY.PROTO_OA_ACCOUNT_AUTH_RES({
      ctidTraderAccountId: message.payload.ctidTraderAccountId,
    }, message.clientMsgId)];
  });
  router.register(ProtoOaPayloadType.PROTO_OA_SYMBOLS_LIST_REQ, (message) => {
    if (!isAuthenticatedApplication(context) || !isAuthenticatedAccount(context)) {
      return [FACTORY.PROTO_OA_ERROR_RES({
        errorCode: ProtoErrorCode.UNSUPPORTED_MESSAGE.toString(),
        description: "Trading account is not authorized"
      }, message.clientMsgId)];
    }
    return [FACTORY.PROTO_OA_SYMBOLS_LIST_RES({
      ctidTraderAccountId: message.payload.ctidTraderAccountId,
      symbol: symbolsByAccountId.get(message.payload.ctidTraderAccountId) || [],
      archivedSymbol: [],
    }, message.clientMsgId)];
  });
  router.register(ProtoOaPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ, (message) => {
    if (!isAuthenticatedApplication(context) || !isAuthenticatedAccount(context)) {
      return [FACTORY.PROTO_OA_ERROR_RES({
        errorCode: ProtoErrorCode.UNSUPPORTED_MESSAGE.toString(),
        description: "Trading account is not authorized"
      }, message.clientMsgId)];
    }
    message.payload.symbolId.forEach(symbolId => context.subscribedSpots.add(symbolId));
    return [FACTORY.PROTO_OA_SUBSCRIBE_SPOTS_RES({
      ctidTraderAccountId: message.payload.ctidTraderAccountId,
    }, message.clientMsgId)];
  });
  router.register(ProtoOaPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ, (message) => {
    if (!isAuthenticatedApplication(context) || !isAuthenticatedAccount(context)) {
      return [FACTORY.PROTO_OA_ERROR_RES({
        errorCode: ProtoErrorCode.UNSUPPORTED_MESSAGE.toString(),
        description: "Trading account is not authorized"
      }, message.clientMsgId)];
    }
    context.subscribedLiveTrendbars.set(message.payload.symbolId, [...(context.subscribedLiveTrendbars.get(message.payload.symbolId) || []), message.payload.period]);
    return [FACTORY.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES({
      ctidTraderAccountId: message.payload.ctidTraderAccountId,
    }, message.clientMsgId)];
  });


  socket.on("error", (err) => console.log(source, err));
  socket.on("end", () => console.log(`${source} disconnected`));
  socket.on("close", () => console.log(`${source} closed`));
  (async () => {
    // read typed messages
    for await (const message of protocol.messages()) {
      console.log(
        "Got:",
        ProtoOaPayloadType[message.payloadType] || message.payloadType,
      );
      const replies = await router.handle(message, undefined);
      protocol.send(...replies);
    }
  })().catch((err) => {
    console.error("Protocol error:", err);
  });
});
server.listen(port, () => console.log(`listening on port ${port}`));
