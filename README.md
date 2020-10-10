# @claasahl/spotware-adapter

![NPM - version](https://img.shields.io/npm/dw/@claasahl/spotware-adapter.svg)
![NPM - downloads](https://img.shields.io/npm/v/@claasahl/spotware-adapter.svg)

# ALPHA VERSION

Use this package's `SpotwareClientSocket` to talk to [Spotware Open API](https://connect.spotware.com/docs/open_api_2) servers in NodeJS environments. It comes with TypeScript support for all Spotware ProtoBuffer meesages. And sticks to recommended `heartbeat`-intervals and recommended rate limits.

## Example: Client

Want to exchange messages with a Spotware Open API server? This is for you:

```typescript
import net from "net";
import tls from "tls";
import {
  SpotwareClientSocket,
  ProtoOAPayloadType,
  FACTORY,
} from "@claasahl/spotware-adapter";

const useTLS = false;
const host = "localhost";
const port = 5035;

const socket = useTLS ? tls.connect(port, host) : net.connect(port, host);
const event = useTLS ? "secureConnect" : "connect";
socket.once(event, () => s.write(FACTORY.PROTO_OA_VERSION_REQ()));

const s = new SpotwareClientSocket(socket);
s.on("data", (message) => {
  switch (message.payloadType) {
    case ProtoOAPayloadType.PROTO_OA_VERSION_RES:
      console.log(`server version: ${message.payload.version}`);
      break;
    // ...
  }
});
```

Should you wish to talk to a Spotware Open API server, such as `live.ctraderapi.com:5035` or `demo.ctraderapi.com:5035` (i.e. not the example server below), then you will need the following:

## Getting Started

1. [log In](https://connect.spotware.com) with cTID
1. select [application](https://connect.spotware.com/apps)
1. view `development` application (see [screenshot](./assests/Screenshot_2019-02-20%20Applications%20Spotware%20Connect.png))
1. take note of `credentials` for `development` application

## Example: Server

Want to test your client without sending messages over the wire? Take a peek at this:

```typescript
import { Server } from "net";
import {
  SpotwareSocket,
  ProtoOAPayloadType,
  FACTORY,
} from "@claasahl/spotware-adapter";

const port = 5035;

const server = new Server((socket) => {
  const address = socket.address();
  const source = typeof address === "string" ? address : address.address;
  console.log(`${source} connected`);

  const s = new SpotwareSocket(socket);
  s.on("error", (err) => console.log(source, err));
  s.on("data", (message) => {
    const { clientMsgId } = message;
    switch (message.payloadType) {
      case ProtoOAPayloadType.PROTO_OA_VERSION_REQ:
        s.write(FACTORY.PROTO_OA_VERSION_RES({ version: "00" }, clientMsgId));
        break;
      // ...
    }
  });
});
server.listen(port, () => console.log(`listening on port ${port}`));
```

## Debugging

This package uses [`debug`](https://www.npmjs.com/package/debug) for logging. These namespaces are supported:

- `spotware.input` incoming message from server
- `spotware.input.human` incoming message from server with humanreadable payloadType
- `spotware.output` outgoing message to server
- `spotware.output.human` outgoing message to server with humanreadable payloadType
- `spotware.${payloadType}` any proto message (i.e. incoming or outgoing)
- `spotware.${payloadTypeText}` any proto message (i.e. incoming or outgoing)

## Further Reading

- [Spotware Open API v2](https://connect.spotware.com/docs/open_api_2)
- [Spotware Open API - Terms of Use](https://connect.spotware.com/docs/terms-of-use)
- [protobuf](https://developers.google.com/protocol-buffers/)
- [oauth2](https://oauth.net/2/) / [rfc6749](https://tools.ietf.org/html/rfc6749)
- [online decoder for protobuf messages](https://protogen.marcgravell.com/decode)

## Protocol Buffer - ProtoMessages

- PROTO_MESSAGE
- ERROR_RES
- HEARTBEAT_EVENT
- PROTO_OA_APPLICATION_AUTH_REQ
- PROTO_OA_APPLICATION_AUTH_RES
- PROTO_OA_ACCOUNT_AUTH_REQ
- PROTO_OA_ACCOUNT_AUTH_RES
- PROTO_OA_VERSION_REQ
- PROTO_OA_VERSION_RES
- PROTO_OA_NEW_ORDER_REQ
- PROTO_OA_TRAILING_SL_CHANGED_EVENT
- PROTO_OA_CANCEL_ORDER_REQ
- PROTO_OA_AMEND_ORDER_REQ
- PROTO_OA_AMEND_POSITION_SLTP_REQ
- PROTO_OA_CLOSE_POSITION_REQ
- PROTO_OA_ASSET_LIST_REQ
- PROTO_OA_ASSET_LIST_RES
- PROTO_OA_SYMBOLS_LIST_REQ
- PROTO_OA_SYMBOLS_LIST_RES
- PROTO_OA_SYMBOL_BY_ID_REQ
- PROTO_OA_SYMBOL_BY_ID_RES
- PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ
- PROTO_OA_SYMBOLS_FOR_CONVERSION_RES
- PROTO_OA_SYMBOL_CHANGED_EVENT
- PROTO_OA_TRADER_REQ
- PROTO_OA_TRADER_RES
- PROTO_OA_TRADER_UPDATE_EVENT
- PROTO_OA_RECONCILE_REQ
- PROTO_OA_RECONCILE_RES
- PROTO_OA_EXECUTION_EVENT
- PROTO_OA_SUBSCRIBE_SPOTS_REQ
- PROTO_OA_SUBSCRIBE_SPOTS_RES
- PROTO_OA_UNSUBSCRIBE_SPOTS_REQ
- PROTO_OA_UNSUBSCRIBE_SPOTS_RES
- PROTO_OA_SPOT_EVENT
- PROTO_OA_ORDER_ERROR_EVENT
- PROTO_OA_DEAL_LIST_REQ
- PROTO_OA_DEAL_LIST_RES
- PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ
- PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ
- PROTO_OA_GET_TRENDBARS_REQ
- PROTO_OA_GET_TRENDBARS_RES
- PROTO_OA_EXPECTED_MARGIN_REQ
- PROTO_OA_EXPECTED_MARGIN_RES
- PROTO_OA_MARGIN_CHANGED_EVENT
- PROTO_OA_ERROR_RES
- PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ
- PROTO_OA_CASH_FLOW_HISTORY_LIST_RES
- PROTO_OA_GET_TICKDATA_REQ
- PROTO_OA_GET_TICKDATA_RES
- PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT
- PROTO_OA_CLIENT_DISCONNECT_EVENT
- PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ
- PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES
- PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ
- PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES
- PROTO_OA_ASSET_CLASS_LIST_REQ
- PROTO_OA_ASSET_CLASS_LIST_RES
- PROTO_OA_DEPTH_EVENT
- PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ
- PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES
- PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ
- PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES
- PROTO_OA_SYMBOL_CATEGORY_REQ
- PROTO_OA_SYMBOL_CATEGORY_RES
- PROTO_OA_ACCOUNT_LOGOUT_REQ
- PROTO_OA_ACCOUNT_LOGOUT_RES
- PROTO_OA_ACCOUNT_DISCONNECT_EVENT
- PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES
- PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES
- PROTO_OA_MARGIN_CALL_LIST_REQ
- PROTO_OA_MARGIN_CALL_LIST_RES
- PROTO_OA_MARGIN_CALL_UPDATE_REQ
- PROTO_OA_MARGIN_CALL_UPDATE_RES
- PROTO_OA_MARGIN_CALL_UPDATE_EVENT
- PROTO_OA_MARGIN_CALL_TRIGGER_EVENT
- PROTO_OA_REFRESH_TOKEN_REQ
- PROTO_OA_REFRESH_TOKEN_RES
