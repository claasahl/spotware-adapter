import { connect as tlsConnect } from "tls";
import { connect as netConnect } from "net";
import { SpotwareClientSocket, FACTORY } from "..";
import Accounts from "./accounts";
import { Events } from "./events";
import Spots from "./spots";
import Symbols from "./symbols";

const config = {
  host: process.env.SPOTWARE__HOST || "live.ctraderapi.com",
  port: Number(process.env.SPOTWARE__PORT) || 5035,
  clientId: process.env.SPOTWARE__CLIENT_ID || "",
  clientSecret: process.env.SPOTWARE__CLIENT_SECRET || "",
  accessToken: process.env.access_token || "",
};

const events = new Events();
const isLocalhost = config.host === "localhost";
const socket = isLocalhost
  ? netConnect(config.port, config.host)
  : tlsConnect(config.port, config.host);
const event = isLocalhost ? "connect" : "secureConnect";
const s = new SpotwareClientSocket(socket);
socket.once(event, () => s.write(FACTORY.PROTO_OA_VERSION_REQ()));

const accounts = new Accounts(s, config, events);
s.on("data", (msg) => accounts.onMessage(msg));
socket.once(event, () => accounts.onInit());

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
  if (!ASSET_CLASSES.includes(symbol.assetClass)) {
    return;
  }
  console.log(symbol.symbolId, symbol.symbolName);
  if (symbol.symbolName === "BTC/EUR") {
    const spots = new Spots(s, symbol, events);
    s.on("data", (msg) => spots.onMessage(msg));
    spots.onInit();
  }
});

events.on("spot", (spot) => {
  console.log(spot);
});
