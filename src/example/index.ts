import { SpotwareClientStream, FACTORY } from "..";
import Accounts from "./accounts";
import { Events } from "./events";
import Symbols from "./symbols";

const config = {
  host: process.env.SPOTWARE__HOST || "live.ctraderapi.com",
  port: Number(process.env.SPOTWARE__PORT) || 5035,
  clientId: process.env.SPOTWARE__CLIENT_ID || "",
  clientSecret: process.env.SPOTWARE__CLIENT_SECRET || "",
  accessToken: process.env.access_token || "",
};

const events = new Events();
const s = new SpotwareClientStream(config.port, config.host);
s.once("secureConnect", () => s.write(FACTORY.PROTO_OA_VERSION_REQ()));

const accounts = new Accounts(s, config, events);
s.on("data", (msg) => accounts.onMessage(msg));
s.once("secureConnect", () => accounts.onInit());

events.on("account", (account) => {
  if (!account.authenticated || !account.depositAssetId) {
    return;
  }
  const symbols = new Symbols(s, account.ctidTraderAccountId, events);
  s.on("data", (msg) => symbols.onMessage(msg));
  symbols.onInit();
});

const ASSET_CLASSES = ["Forex", "Metals", "Crypto Currency"];
events.on("symbol", (symbol) => {
  if (ASSET_CLASSES.includes(symbol.assetClass)) {
    console.log(symbol.symbolId, symbol.symbolName);
  }
});
