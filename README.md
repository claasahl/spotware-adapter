# @claasahl/spotware-adapter

![NPM - version](https://img.shields.io/npm/dw/@claasahl/spotware-adapter.svg)
![NPM - downloads](https://img.shields.io/npm/v/@claasahl/spotware-adapter.svg)

# ALPHA VERSION

Currently, the most juicy bits and peaces of this package are:

- generated data models for spotware messages
- latest set of protocolbuf files

## Logging Namespaces

This package uses [`debug`](https://www.npmjs.com/package/debug) for logging.

- `spotware.input` incoming message from server
- `spotware.input.human` incoming message from server with humanreadable payloadType
- `spotware.output` outgoing message to server
- `spotware.output.human` outgoing message to server with humanreadable payloadType
- `spotware.${payloadType}` any proto message (i.e. incoming or outgoing)
- `spotware.${payloadTypeText}` any proto message (i.e. incoming or outgoing)

## Events

// writable

- 'close': The 'close' event is emitted when the stream and any of its underlying resources (a file descriptor, for example) have been closed. The event indicates that no more events will be emitted, and no further computation will occur.
- 'drain': If a call to stream.write(chunk) returns false, the 'drain' event will be emitted when it is appropriate to resume writing data to the stream.
- 'error': The 'error' event is emitted if an error occurred while writing or piping data. The stream is closed when the 'error' event is emitted.
- 'finish': The 'finish' event is emitted after the stream.end() method has been called, and all data has been flushed to the underlying system.

// readable

- 'close': The 'close' event is emitted when the stream and any of its underlying resources (a file descriptor, for example) have been closed. The event indicates that no more events will be - emitted, and no further computation will occur.
- 'data': The 'data' event is emitted whenever the stream is relinquishing ownership of a chunk of data to a consumer. This may occur whenever the stream is switched in flowing mode by calling - readable.pipe(), readable.resume(), or by attaching a listener callback to the 'data' event. The 'data' event will also be emitted whenever the readable.read() method is called and a chunk of - data is available to be returned.
- 'end': The 'end' event is emitted when there is no more data to be consumed from the stream.
- 'error': The 'error' event may be emitted by a Readable implementation at any time. Typically, this may occur if the underlying stream is unable to generate data due to an underlying internal failure, or when a stream implementation attempts to push an invalid chunk of data.
- 'pause': The 'pause' event is emitted when stream.pause() is called and readableFlowing is not false.
- 'readable': The 'readable' event is emitted when there is data available to be read from the stream. In some cases, attaching a listener for the 'readable' event will cause some amount of data to be read into an internal buffer. The 'readable' event will also be emitted once the end of the stream data has been reached but before the 'end' event is emitted.
- 'resume': The 'resume' event is emitted when stream.resume() is called and readableFlowing is not true.

// Socket

- 'close': Emitted once the socket is fully closed. The argument hadError is a boolean which says if the socket was closed due to a transmission error.
- 'connect': Emitted when a socket connection is successfully established. See net.createConnection().
- 'data': Emitted when data is received. The argument data will be a Buffer or String. Encoding of data is set by socket.setEncoding().
- 'drain': Emitted when the write buffer becomes empty. Can be used to throttle uploads.
- 'end': Emitted when the other end of the socket sends a FIN packet, thus ending the readable side of the socket.
- 'error': Emitted when an error occurs. The 'close' event will be called directly following this event.
- 'lookup': Emitted after resolving the host name but before connecting. Not applicable to Unix sockets.
- 'ready': Emitted when a socket is ready to be used.
- 'timeout': Emitted if the socket times out from inactivity. This is only to notify that the socket has been idle. The user must manually close the connection.

// TlsSocket

- 'keylog': The keylog event is emitted on a tls.TLSSocket when key material is generated or received by the socket. This keying material can be stored for debugging, as it allows captured TLS traffic to be decrypted. It may be emitted multiple times, before or after the handshake completes.
- 'OCSPResponse': The 'OCSPResponse' event is emitted if the requestOCSP option was set when the tls.TLSSocket was created and an OCSP response has been received.
- 'secureConnect': The 'secureConnect' event is emitted after the handshaking process for a new connection has successfully completed. The listener callback will be called regardless of whether or not the server's certificate has been authorized.
- 'session': The 'session' event is emitted on a client tls.TLSSocket when a new session or TLS ticket is available. This may or may not be before the handshake is complete, depending on the TLS protocol version that was negotiated. The event is not emitted on the server, or if a new session was not created, for example, when the connection was resumed. For some TLS protocol versions the event may be emitted multiple times, in which case all the sessions can be used for resumption.

## Upcoming Changes

- a typescript/javascript client for communicating with spotware open api v2 servers
- client is likely to be based on [`TLSSocket`](https://nodejs.org/dist/latest-v10.x/docs/api/tls.html#tls_class_tls_tlssocket) and [`EventEmitter`](https://nodejs.org/dist/latest-v10.x/docs/api/events.html#events_class_eventemitter)
- client might be moved into a dedicated package

## Examples

### Server

```typescript
import { Server } from "net";
import { SpotwareSocket, ProtoOAPayloadType, FACTORY } from "..";

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

### Client

```typescript
import net from "net";
import tls from "tls";
import { SpotwareClientSocket, ProtoOAPayloadType, FACTORY } from "..";

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

# -----

# spotware-connect-api

Protocol Buffers and Data Models for Spotware Open API 2.0

This client is based on `TLSSocket` and exposes every Spotware message via `EventEmitter` functions (i.e. `on`, `off`, `once`, `emit`).

## Client and Backbone

The backbone of this client for the Spotware Open API V2 is a NodeJS `EventEmitter`. Requests, responses and events are funneled through the `EventEmitter`.

One can listen and react to Spotware messages (i.e. any request being sent, any received response and any received/emitted event) by registering a listener.

```typescript
import {
  SpotwareClientStream,
  ProtoOAPayloadType,
} from "@claasahl/spotware-adapter";

const config = {
  host: process.env.SPOTWARE__HOST || "live.ctraderapi.com",
  port: Number(process.env.SPOTWARE__PORT) || 5035,
  clientId: process.env.SPOTWARE__CLIENT_ID || "",
  clientSecret: process.env.SPOTWARE__CLIENT_SECRET || "",
  accessToken: process.env.access_token || "",
};

const s = new SpotwareClientStream(config.port, config.host);
setInterval(() => s.HEARTBEAT_EVENT(), 10000);
s.on("data", (msg) => {
  switch (msg.payloadType) {
    case ProtoOAPayloadType.PROTO_OA_VERSION_RES:
      console.log("version: ", msg.payload.version);
      s.OA_APPLICATION_AUTH_REQ({
        clientId: config.clientId,
        clientSecret: config.clientSecret,
      });
      break;
    case ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES:
      s.OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ({
        accessToken: config.accessToken,
      });
      break;
    case ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES:
      msg.payload.ctidTraderAccount.forEach((account) => {
        s.OA_ACCOUNT_AUTH_REQ({
          accessToken: config.accessToken,
          ctidTraderAccountId: account.ctidTraderAccountId,
        });
      });
      break;
    case ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES:
      // ...
      break;
  }
});
s.OA_VERSION_REQ();
```

The `EventEmitter`-interface has been specialized to accept only Spotware messages.

This client treats Spotware messages like so.

# [Open API v2](https://connect.spotware.com/docs/open_api_2)

## Important Links

- [Open API v2](https://connect.spotware.com/docs/open_api_2)
- [Terms of Use](https://connect.spotware.com/docs/terms-of-use)

## Technologies

- [protobuf](https://developers.google.com/protocol-buffers/)
- [oauth2](https://oauth.net/2/) / [rfc6749](https://tools.ietf.org/html/rfc6749) / [playground](https://www.oauth.com/playground/)

## Glossary

- [cTID](https://help.ctrader.com/ctrader/getting-started/ctid): cTrader ID

### cTrader ID

A cTrader ID (cTID) is a set of credentials used for signing in across all cTrader platforms. A cTID is different from a trading account. An account number is a seven digit number used for logging into your account with a broker, a trading account can only be used with the specific broker it belongs to.

## Introduction

The `Open API 2.0` is the second version of the publicly available protobuf-based API developed by Spotware. Unlike the previous Open API (i.e. version 1.0), which was using a different protocol for each scope (REST and Protocol Buffers), the `Open API 2.0` is designed to use solely protocol buffers. Now by using Protocol Buffers you can retrieve accounts information, market data, and trading data. The API is open for everyone with no restrictions (see `Terms of Use`) and it is supported by all trading accounts of any cTrader supported brokers.

## OAuth 2

### Scopes

- `Accounts` scope: to request for access to the Account Info (trading history, positions, pending orders, etc.)
- `Trading` scope: to request for permissions to perform trading actions on behalf of Account owner (send market and pending orders, receive trading events, etc.)

### Services

- [auth](https://sandbox-connect.spotware.com/apps/auth) - can be used to authorize resource (trading account) owners.
- [token](https://sandbox-connect.spotware.com/apps/token) - can be used to refresh or obtain tokens.

### Grant Types

- `Authorization Code`:
  > The Authorization Code grant type is used by confidential and public clients to exchange an authorization code for an access token.
  > After the user returns to the client via the redirect URL, the application will get the authorization code from the URL and use it to request an access token. [source](https://oauth.net/2/grant-types/authorization-code/)
- `Refresh Token`:
  > The Refresh Token grant type is used by clients to exchange a refresh token for an access token when the access token has expired
  > This allows clients to continue to have a valid access token without further interaction with the user.[source](https://oauth.net/2/grant-types/refresh-token/)

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

## Message Naming Conventions

Messages are divided into one of four groups.

- Request messages
- Response messages
- Event messages
- Model messages

https://protogen.marcgravell.com/decode

## Servers

1. live.ctraderapi.com:5035
1. demo.ctraderapi.com:5035

## data

1. create nessage (e.g. PingReq)
1. wrap message in ProtoMessage
1. prepend length of proto message (4 bytes in big endian)

## Getting Started

1. [log In](https://connect.spotware.com) with cTID
1. select [application](https://connect.spotware.com/apps)
1. view `development` application (see [screenshot](./assests/Screenshot_2019-02-20%20Applications%20Spotware%20Connect.png))
1. take note of `credentials` for `development` application

## Protobuf Hosts

### Open API v1

- tradeapi.spotware.com:5032 [source](https://github.com/spotware/connect-xamarin-samples/blob/3a93a3c934b70bf2343294187a50b8dd5ab702ac/OpenTrader/App.cs#L18)
- sandbox-tradeapi.spotware.com:5032 [source](https://github.com/spotware/connect-js-codec/blob/4521ffb67243c6598c20eb508da46178843761dd/test.js#L13)[source](https://github.com/spotware/connect-js-adapter-tls/blob/2c0ed63d6b88b1c0943dba5513781fc8e309a401/test/drop.js#L14)[source](https://github.com/spotware/connect-js-api/blob/bc53fde9b88a26c6c3b06d668b91a7a3114b19e8/spec/connect_nodejs_samples.js#L29)
- demo-hub-cons.p.ctrader.com:5032 [source](https://github.com/spotware/connect-java-tutorials/blob/d6a132256f487b76667f51ec0fb73dbcaef35d13/Lesson%204.%20Using%20Trading%20API/src/main/java/com/mycompany/app/TradingApiTest.java#L27)

### Open API v2

- 127.0.0.1:5035 [source](https://github.com/spotware/ctrader-open-api-v2-java-example/blob/ec41867f0aa22507f84fcb61bd107a828682863a/openapi2-example/src/main/resources/application.properties#L1)
- demo.ctraderapi.com:5035 [source](https://github.com/spotware/Open-API-2.0-.Net-Sample/blob/8b22c57996dd1ffab9b78df51957062a330a66c5/Open%20API%202.0%20Sample/Main.cs#L20)[source](https://github.com/spotware/Open-API-2.0-.Net-Sample/blob/8b22c57996dd1ffab9b78df51957062a330a66c5/Open%20API%202.0%20Sample/Open%20API%202.0%20Sample/Main.cs#L20)
