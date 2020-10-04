import {
  ProtoOAAssetClass,
  ProtoOACtidTraderAccount,
  ProtoOALightSymbol,
  ProtoOASymbolCategory,
  ProtoOATrader,
} from "@claasahl/spotware-protobuf";
import { Server, Socket } from "net";
import bytes from "bytes";
import { SpotwareSocket, ProtoOAPayloadType, FACTORY } from "./";

const port = Number(process.env.SPOTWARE__PORT);
const server = new Server(serve);
server.listen(port, () => console.log(`listening on port ${port}`));

function serve(socket: Socket): void {
  console.log("new connection");
  const s = new SpotwareSocket(socket);
  s.on("error", console.log);
  s.on("data", (message) => {
    const { clientMsgId } = message;
    switch (message.payloadType) {
      case ProtoOAPayloadType.PROTO_OA_VERSION_REQ:
        {
          s.write(FACTORY.PROTO_OA_VERSION_RES({ version: "00" }, clientMsgId));
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ:
        {
          s.write(FACTORY.PROTO_OA_APPLICATION_AUTH_RES({}, clientMsgId));
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ:
        {
          const { accessToken } = message.payload;
          const ctidTraderAccount: ProtoOACtidTraderAccount[] = [];
          for (const key in STORE) {
            const entry = STORE[key];
            if (entry.accessTokens.length === 0) {
              entry.accessTokens.push(accessToken);
              ctidTraderAccount.push(entry.account);
            } else if (entry.accessTokens.includes(accessToken)) {
              ctidTraderAccount.push(entry.account);
            }
          }
          s.write(
            FACTORY.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES(
              { accessToken, ctidTraderAccount },
              clientMsgId
            )
          );
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ:
        {
          const { ctidTraderAccountId, accessToken } = message.payload;
          const entry = STORE[ctidTraderAccountId];
          if (entry && entry.accessTokens.includes(accessToken)) {
            s.write(
              FACTORY.PROTO_OA_ACCOUNT_AUTH_RES(
                { ctidTraderAccountId },
                clientMsgId
              )
            );
          } else {
            s.write(
              FACTORY.PROTO_OA_ERROR_RES({ errorCode: "E1" }, clientMsgId)
            );
          }
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_TRADER_REQ:
        {
          const { ctidTraderAccountId } = message.payload;
          const entry = STORE[ctidTraderAccountId];
          if (entry) {
            s.write(
              FACTORY.PROTO_OA_TRADER_RES(
                { ctidTraderAccountId, trader: entry.trader },
                clientMsgId
              )
            );
          } else {
            s.write(
              FACTORY.PROTO_OA_ERROR_RES({ errorCode: "E2" }, clientMsgId)
            );
          }
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ:
        {
          const { ctidTraderAccountId } = message.payload;
          const entry = STORE[ctidTraderAccountId];
          if (entry) {
            s.write(
              FACTORY.PROTO_OA_ASSET_CLASS_LIST_RES(
                { ctidTraderAccountId, assetClass: entry.assetClasses },
                clientMsgId
              )
            );
          } else {
            s.write(
              FACTORY.PROTO_OA_ERROR_RES({ errorCode: "E3" }, clientMsgId)
            );
          }
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ:
        {
          const { ctidTraderAccountId } = message.payload;
          const entry = STORE[ctidTraderAccountId];
          if (entry) {
            s.write(
              FACTORY.PROTO_OA_SYMBOL_CATEGORY_RES(
                { ctidTraderAccountId, symbolCategory: entry.categories },
                clientMsgId
              )
            );
          } else {
            s.write(
              FACTORY.PROTO_OA_ERROR_RES({ errorCode: "E4" }, clientMsgId)
            );
          }
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ:
        {
          const { ctidTraderAccountId } = message.payload;
          const entry = STORE[ctidTraderAccountId];
          if (entry) {
            s.write(
              FACTORY.PROTO_OA_SYMBOLS_LIST_RES(
                {
                  ctidTraderAccountId,
                  archivedSymbol: [],
                  symbol: entry.symbols,
                },
                clientMsgId
              )
            );
          } else {
            s.write(
              FACTORY.PROTO_OA_ERROR_RES({ errorCode: "E5" }, clientMsgId)
            );
          }
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ:
        {
          const { ctidTraderAccountId, symbolId: symbolIds } = message.payload;
          const entry = STORE[ctidTraderAccountId];
          if (entry) {
            const alreadySubscribed = symbolIds
              .map((id) => !!entry.subscriptions[id])
              .find((p) => p);
            if (alreadySubscribed) {
              s.write(
                FACTORY.PROTO_OA_ERROR_RES(
                  {
                    errorCode: "E6 - only one subscription per symbol allowed",
                  },
                  clientMsgId
                )
              );
              break;
            }
            s.write(
              FACTORY.PROTO_OA_SUBSCRIBE_SPOTS_RES(
                { ctidTraderAccountId },
                clientMsgId
              )
            );

            for (const symbolId of symbolIds) {
              const timer = setInterval(() => {
                s.write(
                  FACTORY.PROTO_OA_SPOT_EVENT(
                    { ctidTraderAccountId, symbolId, trendbar: [] },
                    clientMsgId
                  )
                );
                s.write(
                  FACTORY.PROTO_OA_ERROR_RES(
                    {
                      errorCode: `the next count will be ${count} bytes (${bytes(
                        count
                      )})`,
                    },
                    clientMsgId
                  )
                );
                s.write(
                  FACTORY.PROTO_OA_ERROR_RES(
                    { errorCode: "1".repeat(count) },
                    clientMsgId
                  )
                );
                count *= 2;
              }, 1000);
              entry.subscriptions[symbolId] = timer;
            }
          } else {
            s.write(
              FACTORY.PROTO_OA_ERROR_RES({ errorCode: "E6" }, clientMsgId)
            );
          }
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ:
        {
          const { ctidTraderAccountId, symbolId: symbolIds } = message.payload;
          const entry = STORE[ctidTraderAccountId];
          if (entry) {
            const alreadyUnsubscribed = symbolIds
              .map((id) => !entry.subscriptions[id])
              .find((p) => p);
            if (alreadyUnsubscribed) {
              s.write(
                FACTORY.PROTO_OA_ERROR_RES(
                  { errorCode: "E7 - no subscription" },
                  clientMsgId
                )
              );
              break;
            }
            s.write(
              FACTORY.PROTO_OA_UNSUBSCRIBE_SPOTS_RES(
                { ctidTraderAccountId },
                clientMsgId
              )
            );

            for (const symbolId of symbolIds) {
              clearInterval(entry.subscriptions[symbolId]);
              delete entry.subscriptions[symbolId];
            }
          } else {
            s.write(
              FACTORY.PROTO_OA_ERROR_RES({ errorCode: "E7" }, clientMsgId)
            );
          }
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ:
        {
          const { ctidTraderAccountId } = message.payload;
          const entry = STORE[ctidTraderAccountId];
          if (entry) {
            s.write(
              FACTORY.PROTO_OA_GET_TICKDATA_RES(
                { ctidTraderAccountId, hasMore: false, tickData: [] },
                clientMsgId
              )
            );
          } else {
            s.write(
              FACTORY.PROTO_OA_ERROR_RES({ errorCode: "E8" }, clientMsgId)
            );
          }
        }
        break;
    }
  });
}

let count = 1;

interface Account {
  accessTokens: string[];
  account: ProtoOACtidTraderAccount;
  trader: ProtoOATrader;
  assetClasses: ProtoOAAssetClass[];
  categories: ProtoOASymbolCategory[];
  symbols: ProtoOALightSymbol[];
  subscriptions: {
    [symbolId: number]: NodeJS.Timeout;
  };
}
function account(ctidTraderAccountId: number): Account {
  return {
    accessTokens: [],
    account: {
      ctidTraderAccountId,
      isLive: false,
      traderLogin: 1111111,
    },
    trader: {
      ctidTraderAccountId,
      balance: 1000,
      // balanceVersion?: number;
      // managerBonus?: number;
      // ibBonus?: number;
      // nonWithdrawableBonus?: number;
      // accessRights?: ProtoOAAccessRights;
      depositAssetId: 23,
      // swapFree?: boolean;
      // leverageInCents?: number;
      // totalMarginCalculationType?: ProtoOATotalMarginCalculationType;
      // maxLeverage?: number;
      // frenchRisk?: boolean;
      // traderLogin?: number;
      // accountType?: ProtoOAAccountType;
      // brokerName?: string;
      // registrationTimestamp?: number;
      // isLimitedRisk?: boolean;
      // limitedRiskMarginCalculationStrategy?: ProtoOALimitedRiskMarginCalculationStrategy;
      // moneyDigits?: number;
    },
    assetClasses: [
      { id: 1, name: "Forex" },
      { id: 2, name: "Metals" },
      { id: 3, name: "Crypto Currency" },
      { id: 4, name: "Literally Anything" },
    ],
    categories: [
      { id: 1, name: "Category #1.1", assetClassId: 1 },
      { id: 2, name: "Category #1.2", assetClassId: 1 },
      { id: 3, name: "Category #2.1", assetClassId: 2 },
      { id: 4, name: "Category #2.2", assetClassId: 2 },
      { id: 5, name: "Category #3.1", assetClassId: 3 },
      { id: 6, name: "Category #3.2", assetClassId: 3 },
      { id: 7, name: "Category #4", assetClassId: 4 },
    ],
    symbols: [
      {
        symbolId: 1,
        symbolName: "BTC/EUR",
        baseAssetId: 1,
        quoteAssetId: 2,
        enabled: true,
        symbolCategoryId: 1,
      },
      {
        symbolId: 2,
        symbolName: "SYMBOL2",
        baseAssetId: 1,
        quoteAssetId: 2,
        enabled: true,
        symbolCategoryId: 2,
      },
      {
        symbolId: 3,
        symbolName: "SYMBOL3",
        baseAssetId: 1,
        quoteAssetId: 2,
        enabled: false,
        symbolCategoryId: 3,
      },
      {
        symbolId: 4,
        symbolName: "SYMBOL4",
        baseAssetId: 1,
        quoteAssetId: 2,
        enabled: false,
        symbolCategoryId: 4,
      },
    ],
    subscriptions: {},
  };
}

const STORE: {
  [ctidTraderAccountId: number]: Account;
} = {
  123456: account(123456),
};
