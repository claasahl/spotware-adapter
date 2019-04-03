# ALPHA VERSION

Currently, the most juicy bits and peaces of this package are:

- generated data models for spotware messages
- latest set of protocolbuf files

## Upcoming Changes

- a typescript/javascript client for communicating with spotware open api v2 servers
- client is likely to be based on [`TLSSocket`](https://nodejs.org/dist/latest-v10.x/docs/api/tls.html#tls_class_tls_tlssocket) and [`EventEmitter`](https://nodejs.org/dist/latest-v10.x/docs/api/events.html#events_class_eventemitter)
- client might be moved into a dedicated package

# -----

# spotware-connect-api

Protocol Buffers and Data Models for Spotware Open API 2.0

This client is based on `TLSSocket` and exposes every Spotware message via `EventEmitter` functions (i.e. `on`, `off`, `once`, `emit`).

## Client and Backbone

The backbone of this client for the Spotware Open API V2 is a NodeJS `EventEmitter`. Requests, responses and events are funneled through the `EventEmitter`.

One can listen and react to Spotware messages (i.e. any request being sent, any received response and any received/emitted event) by registering a listener.

```typescript
// runkit
const client = ???;
client.on("HEARTBEAT_EVENT", (message, clientMsgId) => {
    console.log("this is a heartbeat and message ID", message, clientMsgId);
})
```

The `EventEmitter`-interface has been specialized to accept only Spotware messages.

This client treats Spotware messages like so.

### Processing of Events

| Event (`on(EVENT, message => ACTION)`)      | Action                                       |
| ------------------------------------------- | -------------------------------------------- |
| `PROTO_MESSAGE`                             | read from socket and emit as `PROTO_MESSAGE` |
| `ERROR_RES`                                 | no action                                    |
| `HEARTBEAT_EVENT`                           | no action                                    |
| `PROTO_OA_APPLICATION_AUTH_REQ`             | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_APPLICATION_AUTH_RES`             | no action                                    |
| `PROTO_OA_ACCOUNT_AUTH_REQ`                 | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_ACCOUNT_AUTH_RES`                 | no action                                    |
| `PROTO_OA_ERROR_RES`                        | no action                                    |
| `PROTO_OA_CLIENT_DISCONNECT_EVENT`          | no action                                    |
| `PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT` | no action                                    |
| `PROTO_OA_VERSION_REQ`                      | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_VERSION_RES`                      | no action                                    |
| `PROTO_OA_NEW_ORDER_REQ`                    | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_EXECUTION_EVENT`                  | no action                                    |
| `PROTO_OA_CANCEL_ORDER_REQ`                 | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_AMEND_ORDER_REQ`                  | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_AMEND_POSITION_SLTP_REQ`          | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_CLOSE_POSITION_REQ`               | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_TRAILING_SL_CHANGED_EVENT`        | no action                                    |
| `PROTO_OA_ASSET_LIST_REQ`                   | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_ASSET_LIST_RES`                   | no action                                    |
| `PROTO_OA_SYMBOLS_LIST_REQ`                 | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_SYMBOLS_LIST_RES`                 | no action                                    |
| `PROTO_OA_SYMBOL_BY_ID_REQ`                 | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_SYMBOL_BY_ID_RES`                 | no action                                    |
| `PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ`       | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_SYMBOLS_FOR_CONVERSION_RES`       | no action                                    |
| `PROTO_OA_SYMBOL_CHANGED_EVENT`             | no action                                    |
| `PROTO_OA_ASSET_CLASS_LIST_REQ`             | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_ASSET_CLASS_LIST_RES`             | no action                                    |
| `PROTO_OA_TRADER_REQ`                       | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_TRADER_RES`                       | no action                                    |
| `PROTO_OA_TRADER_UPDATE_EVENT`              | no action                                    |
| `PROTO_OA_RECONCILE_REQ`                    | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_RECONCILE_RES`                    | no action                                    |
| `PROTO_OA_ORDER_ERROR_EVENT`                | no action                                    |
| `PROTO_OA_DEAL_LIST_REQ`                    | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_DEAL_LIST_RES`                    | no action                                    |
| `PROTO_OA_EXPECTED_MARGIN_REQ`              | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_EXPECTED_MARGIN_RES`              | no action                                    |
| `PROTO_OA_MARGIN_CHANGED_EVENT`             | no action                                    |
| `PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ`       | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_CASH_FLOW_HISTORY_LIST_RES`       | no action                                    |
| `PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ` | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES` | no action                                    |
| `PROTO_OA_SUBSCRIBE_SPOTS_REQ`              | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_SUBSCRIBE_SPOTS_RES`              | no action                                    |
| `PROTO_OA_UNSUBSCRIBE_SPOTS_REQ`            | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_UNSUBSCRIBE_SPOTS_RES`            | no action                                    |
| `PROTO_OA_SPOT_EVENT`                       | no action                                    |
| `PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ`      | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ`    | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_GET_TRENDBARS_REQ`                | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_GET_TRENDBARS_RES`                | no action                                    |
| `PROTO_OA_GET_TICKDATA_REQ`                 | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_GET_TICKDATA_RES`                 | no action                                    |
| `PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ`    | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES`    | no action                                    |
| `PROTO_OA_DEPTH_EVENT`                      | no action                                    |
| `PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ`       | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES`       | no action                                    |
| `PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ`     | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES`     | no action                                    |
| `PROTO_OA_SYMBOL_CATEGORY_REQ`              | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_SYMBOL_CATEGORY_RES`              | no action                                    |
| `PROTO_OA_ACCOUNT_LOGOUT_REQ`               | encode as `PROTO_MESSAGE` and emit           |
| `PROTO_OA_ACCOUNT_LOGOUT_RES`               | no action                                    |
| `PROTO_OA_ACCOUNT_DISCONNECT_EVENT`         | no action                                    |

### Processing of PROTO_MESSAGE Events

| Payload Type of `PROTO_MESSAGE`             | Action                                                     |
| ------------------------------------------- | ---------------------------------------------------------- |
| `PROTO_MESSAGE`                             | n/a                                                        |
| `ERROR_RES`                                 | decode as `ProtoErrorRes` and emit                         |
| `HEARTBEAT_EVENT`                           | decode as `ProtoHeartbeatEvent` and emit                   |
| `PROTO_OA_APPLICATION_AUTH_REQ`             | write to socket                                            |
| `PROTO_OA_APPLICATION_AUTH_RES`             | decode as `ProtoOAApplicationAuthRes` and emit             |
| `PROTO_OA_ACCOUNT_AUTH_REQ`                 | write to socket                                            |
| `PROTO_OA_ACCOUNT_AUTH_RES`                 | decode as `ProtoOAAccountAuthRes` and emit                 |
| `PROTO_OA_ERROR_RES`                        | decode as `ProtoOAErrorRes` and emit                       |
| `PROTO_OA_CLIENT_DISCONNECT_EVENT`          | decode as `ProtoOAClientDisconnectEvent` and emit          |
| `PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT` | decode as `ProtoOAAccountsTokenInvalidatedEvent` and emit  |
| `PROTO_OA_VERSION_REQ`                      | write to socket                                            |
| `PROTO_OA_VERSION_RES`                      | decode as `ProtoOAVersionRes` and emit                     |
| `PROTO_OA_NEW_ORDER_REQ`                    | write to socket                                            |
| `PROTO_OA_EXECUTION_EVENT`                  | decode as `ProtoOAExecutionEvent` and emit                 |
| `PROTO_OA_CANCEL_ORDER_REQ`                 | write to socket                                            |
| `PROTO_OA_AMEND_ORDER_REQ`                  | write to socket                                            |
| `PROTO_OA_AMEND_POSITION_SLTP_REQ`          | write to socket                                            |
| `PROTO_OA_CLOSE_POSITION_REQ`               | write to socket                                            |
| `PROTO_OA_TRAILING_SL_CHANGED_EVENT`        | decode as `ProtoOATrailingSLChangedEvent` and emit         |
| `PROTO_OA_ASSET_LIST_REQ`                   | write to socket                                            |
| `PROTO_OA_ASSET_LIST_RES`                   | decode as `ProtoOAAssetListRes` and emit                   |
| `PROTO_OA_SYMBOLS_LIST_REQ`                 | write to socket                                            |
| `PROTO_OA_SYMBOLS_LIST_RES`                 | decode as `ProtoOASymbolsListRes` and emit                 |
| `PROTO_OA_SYMBOL_BY_ID_REQ`                 | write to socket                                            |
| `PROTO_OA_SYMBOL_BY_ID_RES`                 | decode as `ProtoOASymbolByIdRes` and emit                  |
| `PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ`       | write to socket                                            |
| `PROTO_OA_SYMBOLS_FOR_CONVERSION_RES`       | decode as `ProtoOASymbolsForConversionRes` and emit        |
| `PROTO_OA_SYMBOL_CHANGED_EVENT`             | decode as `ProtoOASymbolChangedEvent` and emit             |
| `PROTO_OA_ASSET_CLASS_LIST_REQ`             | write to socket                                            |
| `PROTO_OA_ASSET_CLASS_LIST_RES`             | decode as `ProtoOAAssetClassListRes` and emit              |
| `PROTO_OA_TRADER_REQ`                       | write to socket                                            |
| `PROTO_OA_TRADER_RES`                       | decode as `ProtoOATraderRes` and emit                      |
| `PROTO_OA_TRADER_UPDATE_EVENT`              | decode as `ProtoOATraderUpdatedEvent` and emit             |
| `PROTO_OA_RECONCILE_REQ`                    | write to socket                                            |
| `PROTO_OA_RECONCILE_RES`                    | decode as `ProtoOAReconcileRes` and emit                   |
| `PROTO_OA_ORDER_ERROR_EVENT`                | decode as `ProtoOAOrderErrorEvent` and emit                |
| `PROTO_OA_DEAL_LIST_REQ`                    | write to socket                                            |
| `PROTO_OA_DEAL_LIST_RES`                    | decode as `ProtoOADealListRes` and emit                    |
| `PROTO_OA_EXPECTED_MARGIN_REQ`              | write to socket                                            |
| `PROTO_OA_EXPECTED_MARGIN_RES`              | decode as `ProtoOAExpectedMarginRes` and emit              |
| `PROTO_OA_MARGIN_CHANGED_EVENT`             | decode as `ProtoOAMarginChangedEvent` and emit             |
| `PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ`       | write to socket                                            |
| `PROTO_OA_CASH_FLOW_HISTORY_LIST_RES`       | decode as `ProtoOACashFlowHistoryListRes` and emit         |
| `PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ` | write to socket                                            |
| `PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES` | decode as `ProtoOAGetAccountListByAccessTokenRes` and emit |
| `PROTO_OA_SUBSCRIBE_SPOTS_REQ`              | write to socket                                            |
| `PROTO_OA_SUBSCRIBE_SPOTS_RES`              | decode as `ProtoOASubscribeSpotsRes` and emit              |
| `PROTO_OA_UNSUBSCRIBE_SPOTS_REQ`            | write to socket                                            |
| `PROTO_OA_UNSUBSCRIBE_SPOTS_RES`            | decode as `ProtoOAUnsubscribeSpotsRes` and emit            |
| `PROTO_OA_SPOT_EVENT`                       | decode as `ProtoOASpotEvent` and emit                      |
| `PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ`      | write to socket                                            |
| `PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ`    | write to socket                                            |
| `PROTO_OA_GET_TRENDBARS_REQ`                | write to socket                                            |
| `PROTO_OA_GET_TRENDBARS_RES`                | decode as `ProtoOAGetTrendbarsRes` and emit                |
| `PROTO_OA_GET_TICKDATA_REQ`                 | write to socket                                            |
| `PROTO_OA_GET_TICKDATA_RES`                 | decode as `ProtoOAGetTickDataRes` and emit                 |
| `PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ`    | write to socket                                            |
| `PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES`    | decode as `ProtoOAGetCtidProfileByTokenRes` and emit       |
| `PROTO_OA_DEPTH_EVENT`                      | decode as `ProtoOADepthEvent` and emit                     |
| `PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ`       | write to socket                                            |
| `PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES`       | decode as `ProtoOASubscribeDepthQuotesRes` and emit        |
| `PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ`     | write to socket                                            |
| `PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES`     | decode as `ProtoOAUnsubscribeDepthQuotesRes` and emit      |
| `PROTO_OA_SYMBOL_CATEGORY_REQ`              | write to socket                                            |
| `PROTO_OA_SYMBOL_CATEGORY_RES`              | decode as `ProtoOASymbolCategoryListRes` and emit          |
| `PROTO_OA_ACCOUNT_LOGOUT_REQ`               | write to socket                                            |
| `PROTO_OA_ACCOUNT_LOGOUT_RES`               | decode as `ProtoOAAccountLogoutRes` and emit               |
| `PROTO_OA_ACCOUNT_DISCONNECT_EVENT`         | decode as `ProtoOAAccountDisconnectEvent` and emit         |

## Pitfall

The `EventEmitter` class exposes several functions for managing listeners and emitting events. For your convenience, this library provides [overloads](http://www.typescriptlang.org/docs/handbook/functions.html#overloads) for spotware events, including typed parameters and listeners. While these overloads do hint at the correct types, they do not guarantee correctly typed parameters or listeners. Instead, it is recommended to use utility methods like `onMessage` or `emitMessage`.

the nature of Typescript is such that it will fallback to more generic overloads if the types of.

### Don't

```typescript
emitter.emit("HEARTBEAT_EVENT", {});

const msg: IHeartbeat = {};
emitter.emit("HEARTBEAT_EVENT", msg);
```

### Do

```typescript
emitter.emitMessage("HEARTBEAT_EVENT", {});
```
