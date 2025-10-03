import tls from "tls";
import { randomUUID } from "crypto";
import { setTimeout } from "timers/promises";

import {
  ProtoOaPayloadType,
  FACTORY,
  ProtoOATrendbarPeriod,
  ProtoPayloadType,
} from "..";
import { Protocol } from "../protocol";
import { Router } from "../router";

const host = process.env.SPOTWARE__HOST || "";
const port = parseInt(process.env.SPOTWARE__PORT || "", 10);

const socket = tls.connect(port, host);
socket.once("secureConnect", () => {
  console.log(`requesting version number from ${host}:${port}`);
  protocol.send(FACTORY.PROTO_OA_VERSION_REQ({}));
});

const protocol = new Protocol(socket);
const router = new Router<undefined>();
router.register(ProtoPayloadType.HEARTBEAT_EVENT, () => {
  return [FACTORY.HEARTBEAT_EVENT({})];
});
setInterval(() => protocol.send(FACTORY.HEARTBEAT_EVENT({})), 10000)
router.register(ProtoOaPayloadType.PROTO_OA_VERSION_RES, () => {
  return [
    FACTORY.PROTO_OA_APPLICATION_AUTH_REQ(
      {
        clientId: process.env.SPOTWARE__CLIENT_ID || "",
        clientSecret: process.env.SPOTWARE__CLIENT_SECRET || "",
      },
      randomUUID(),
    ),
  ];
});
router.register(ProtoOaPayloadType.PROTO_OA_APPLICATION_AUTH_RES, () => {
  return [
    FACTORY.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ(
      {
        accessToken: process.env.SPOTWARE__ACCESS_TOKEN || "",
      },
      randomUUID(),
    ),
  ];
});
router.register(
  ProtoOaPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
  (msg) => {
    return msg.payload.ctidTraderAccount.map(({ ctidTraderAccountId }) =>
      FACTORY.PROTO_OA_ACCOUNT_AUTH_REQ({
        accessToken: process.env.SPOTWARE__ACCESS_TOKEN || "",
        ctidTraderAccountId,
      }),
    );
  },
);
router.register(ProtoOaPayloadType.PROTO_OA_ACCOUNT_AUTH_RES, (msg) => {
  return [
    FACTORY.PROTO_OA_SYMBOLS_LIST_REQ(
      {
        ctidTraderAccountId: msg.payload.ctidTraderAccountId,
      },
      randomUUID(),
    ),
  ];
});
router.register(ProtoOaPayloadType.PROTO_OA_SYMBOLS_LIST_RES, (msg) => {
  const eurusd = msg.payload.symbol.find(
    ({ symbolName }) => symbolName?.toUpperCase() === "EURUSD",
  );
  if (!eurusd) {
    protocol.close();
    return [];
  }
  router.register(ProtoOaPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES, (msg) => {
    return [
      FACTORY.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ(
        {
          ctidTraderAccountId: msg.payload.ctidTraderAccountId,
          period: ProtoOATrendbarPeriod.M1,
          symbolId: eurusd.symbolId,
        },
        randomUUID(),
      ),
    ];
  });
  router.register(
    ProtoOaPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES,
    () => {
      return [];
    },
  );

  return [
    FACTORY.PROTO_OA_SUBSCRIBE_SPOTS_REQ(
      {
        ctidTraderAccountId: msg.payload.ctidTraderAccountId,
        symbolId: [eurusd.symbolId],
      },
      randomUUID(),
    ),
  ];
});

(async () => {
  // read typed messages
  for await (const message of protocol.messages()) {
    const replies = await router.handle(message, undefined);
    protocol.send(...replies);

    // throttling
    await setTimeout(200);
  }
})();
