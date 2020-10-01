import { SpotwareClientStream, ProtoOAPayloadType, FACTORY } from ".";

const config = {
  host: process.env.SPOTWARE__HOST || "live.ctraderapi.com",
  port: Number(process.env.SPOTWARE__PORT) || 5035,
  clientId: process.env.SPOTWARE__CLIENT_ID || "",
  clientSecret: process.env.SPOTWARE__CLIENT_SECRET || "",
  accessToken: process.env.access_token || "",
};

interface Symbol {
  symbolId: number;
  symbolName: string;
  subscribed: boolean;
}
interface Account {
  ctidTraderAccountId: number;
  authenticated: boolean;
  depositAssetId?: number;
  symbols: Map<number, Symbol>;
}
const accounts = new Map<number, Account>();

const s = new SpotwareClientStream(config.port, config.host);
s.on("data", (msg) => {
  switch (msg.payloadType) {
    case ProtoOAPayloadType.PROTO_OA_VERSION_RES:
      console.log("version: ", msg.payload.version);
      s.write(
        FACTORY.PROTO_OA_APPLICATION_AUTH_REQ({
          clientId: config.clientId,
          clientSecret: config.clientSecret,
        })
      );
      break;
    case ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES:
      s.write(
        FACTORY.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ({
          accessToken: config.accessToken,
        })
      );
      break;
    case ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES:
      msg.payload.ctidTraderAccount.forEach((account) => {
        s.write(
          FACTORY.PROTO_OA_ACCOUNT_AUTH_REQ({
            accessToken: config.accessToken,
            ctidTraderAccountId: account.ctidTraderAccountId,
          }),
          () =>
            accounts.set(account.ctidTraderAccountId, {
              ctidTraderAccountId: account.ctidTraderAccountId,
              authenticated: false,
              symbols: new Map(),
            })
        );
      });
      break;
    case ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES:
      {
        const { ctidTraderAccountId } = msg.payload;
        const account = accounts.get(ctidTraderAccountId);
        if (account) {
          accounts.set(ctidTraderAccountId, {
            ...account,
            authenticated: true,
          });
          s.write(FACTORY.PROTO_OA_TRADER_REQ({ ctidTraderAccountId }));
        }
      }
      break;
    case ProtoOAPayloadType.PROTO_OA_TRADER_RES:
      {
        const { ctidTraderAccountId, depositAssetId } = msg.payload.trader;
        const account = accounts.get(ctidTraderAccountId);
        if (account) {
          accounts.set(ctidTraderAccountId, { ...account, depositAssetId });
          s.write(FACTORY.PROTO_OA_SYMBOLS_LIST_REQ({ ctidTraderAccountId }));
        }
      }
      break;
    case ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES:
      {
        const { ctidTraderAccountId } = msg.payload;
        const account = accounts.get(ctidTraderAccountId);
        if (account) {
          const { depositAssetId } = account;
          const [EURUSD] = msg.payload.symbol.filter(
            (s) => s.symbolName === "EURUSD"
          );
          const symbols = msg.payload.symbol
            .filter(
              ({ baseAssetId, quoteAssetId, symbolCategoryId, enabled }) =>
                enabled &&
                symbolCategoryId === EURUSD.symbolCategoryId &&
                (baseAssetId === depositAssetId ||
                  quoteAssetId === depositAssetId)
            )
            .map((symbol) => ({
              symbolId: symbol.symbolId,
              symbolName: symbol.symbolName || "unnamed",
              subscribed: false,
            }));
          symbols.forEach((s) => account.symbols.set(s.symbolId, s));
          s.write(
            FACTORY.PROTO_OA_SUBSCRIBE_SPOTS_REQ({
              ctidTraderAccountId,
              symbolId: symbols.map((s) => s.symbolId),
            })
          );
        }
      }
      break;
    case ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES:
      {
        const { ctidTraderAccountId } = msg.payload;
        const account = accounts.get(ctidTraderAccountId);
        if (account) {
          for (const [symbolId, symbol] of account.symbols) {
            account.symbols.set(symbolId, { ...symbol, subscribed: true });
          }
        }
      }
      break;
  }
});
s.once("secureConnect", () => s.write(FACTORY.PROTO_OA_VERSION_REQ()));
