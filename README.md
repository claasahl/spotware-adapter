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

## Processing of Events

| Event (`on(EVENT, message => ACTION)`)      | Action                    | Encode as ...  | Emit as ...     |
| ------------------------------------------- | ------------------------- | -------------- | --------------- |
| `PROTO_MESSAGE`                             | read from socket and emit | `ProtoMessage` | `PROTO_MESSAGE` |
| `ERROR_RES`                                 | no action                 | n/a            | n/a             |
| `HEARTBEAT_EVENT`                           | no action                 | n/a            | n/a             |
| `PROTO_OA_APPLICATION_AUTH_REQ`             | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_APPLICATION_AUTH_RES`             | no action                 | n/a            | n/a             |
| `PROTO_OA_ACCOUNT_AUTH_REQ`                 | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_ACCOUNT_AUTH_RES`                 | no action                 | n/a            | n/a             |
| `PROTO_OA_ERROR_RES`                        | no action                 | n/a            | n/a             |
| `PROTO_OA_CLIENT_DISCONNECT_EVENT`          | no action                 | n/a            | n/a             |
| `PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT` | no action                 | n/a            | n/a             |
| `PROTO_OA_VERSION_REQ`                      | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_VERSION_RES`                      | no action                 | n/a            | n/a             |
| `PROTO_OA_NEW_ORDER_REQ`                    | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_EXECUTION_EVENT`                  | no action                 | n/a            | n/a             |
| `PROTO_OA_CANCEL_ORDER_REQ`                 | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_AMEND_ORDER_REQ`                  | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_AMEND_POSITION_SLTP_REQ`          | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_CLOSE_POSITION_REQ`               | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_TRAILING_SL_CHANGED_EVENT`        | no action                 | n/a            | n/a             |
| `PROTO_OA_ASSET_LIST_REQ`                   | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_ASSET_LIST_RES`                   | no action                 | n/a            | n/a             |
| `PROTO_OA_SYMBOLS_LIST_REQ`                 | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_SYMBOLS_LIST_RES`                 | no action                 | n/a            | n/a             |
| `PROTO_OA_SYMBOL_BY_ID_REQ`                 | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_SYMBOL_BY_ID_RES`                 | no action                 | n/a            | n/a             |
| `PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ`       | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_SYMBOLS_FOR_CONVERSION_RES`       | no action                 | n/a            | n/a             |
| `PROTO_OA_SYMBOL_CHANGED_EVENT`             | no action                 | n/a            | n/a             |
| `PROTO_OA_ASSET_CLASS_LIST_REQ`             | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_ASSET_CLASS_LIST_RES`             | no action                 | n/a            | n/a             |
| `PROTO_OA_TRADER_REQ`                       | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_TRADER_RES`                       | no action                 | n/a            | n/a             |
| `PROTO_OA_TRADER_UPDATE_EVENT`              | no action                 | n/a            | n/a             |
| `PROTO_OA_RECONCILE_REQ`                    | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_RECONCILE_RES`                    | no action                 | n/a            | n/a             |
| `PROTO_OA_ORDER_ERROR_EVENT`                | no action                 | n/a            | n/a             |
| `PROTO_OA_DEAL_LIST_REQ`                    | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_DEAL_LIST_RES`                    | no action                 | n/a            | n/a             |
| `PROTO_OA_EXPECTED_MARGIN_REQ`              | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_EXPECTED_MARGIN_RES`              | no action                 | n/a            | n/a             |
| `PROTO_OA_MARGIN_CHANGED_EVENT`             | no action                 | n/a            | n/a             |
| `PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ`       | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_CASH_FLOW_HISTORY_LIST_RES`       | no action                 | n/a            | n/a             |
| `PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ` | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES` | no action                 | n/a            | n/a             |
| `PROTO_OA_SUBSCRIBE_SPOTS_REQ`              | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_SUBSCRIBE_SPOTS_RES`              | no action                 | n/a            | n/a             |
| `PROTO_OA_UNSUBSCRIBE_SPOTS_REQ`            | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_UNSUBSCRIBE_SPOTS_RES`            | no action                 | n/a            | n/a             |
| `PROTO_OA_SPOT_EVENT`                       | no action                 | n/a            | n/a             |
| `PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ`      | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ`    | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_GET_TRENDBARS_REQ`                | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_GET_TRENDBARS_RES`                | no action                 | n/a            | n/a             |
| `PROTO_OA_GET_TICKDATA_REQ`                 | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_GET_TICKDATA_RES`                 | no action                 | n/a            | n/a             |
| `PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ`    | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES`    | no action                 | n/a            | n/a             |
| `PROTO_OA_DEPTH_EVENT`                      | no action                 | n/a            | n/a             |
| `PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ`       | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES`       | no action                 | n/a            | n/a             |
| `PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ`     | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES`     | no action                 | n/a            | n/a             |
| `PROTO_OA_SYMBOL_CATEGORY_REQ`              | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_SYMBOL_CATEGORY_RES`              | no action                 | n/a            | n/a             |
| `PROTO_OA_ACCOUNT_LOGOUT_REQ`               | encode and emit           | `ProtoMessage` | `PROTO_MESSAGE` |
| `PROTO_OA_ACCOUNT_LOGOUT_RES`               | no action                 | n/a            | n/a             |
| `PROTO_OA_ACCOUNT_DISCONNECT_EVENT`         | no action                 | n/a            | n/a             |

## Processing of PROTO_MESSAGE Events

| Payload Type of `PROTO_MESSAGE`             | Action          | Decode as ...                           | Emit as ...                                 |
| ------------------------------------------- | --------------- | --------------------------------------- | ------------------------------------------- |
| `PROTO_MESSAGE`                             | n/a             | n/a                                     | n/a                                         |
| `ERROR_RES`                                 | decode and emit | `ProtoErrorRes`                         | `ERROR_RES`                                 |
| `HEARTBEAT_EVENT`                           | decode and emit | `ProtoHeartbeatEvent`                   | `HEARTBEAT_EVENT`                           |
| `PROTO_OA_APPLICATION_AUTH_REQ`             | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_APPLICATION_AUTH_RES`             | decode and emit | `ProtoOAApplicationAuthRes`             | `PROTO_OA_APPLICATION_AUTH_RES`             |
| `PROTO_OA_ACCOUNT_AUTH_REQ`                 | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_ACCOUNT_AUTH_RES`                 | decode and emit | `ProtoOAAccountAuthRes`                 | `PROTO_OA_ACCOUNT_AUTH_RES`                 |
| `PROTO_OA_ERROR_RES`                        | decode and emit | `ProtoOAErrorRes`                       | `PROTO_OA_ERROR_RES`                        |
| `PROTO_OA_CLIENT_DISCONNECT_EVENT`          | decode and emit | `ProtoOAClientDisconnectEvent`          | `PROTO_OA_CLIENT_DISCONNECT_EVENT`          |
| `PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT` | decode and emit | `ProtoOAAccountsTokenInvalidatedEvent`  | `PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT` |
| `PROTO_OA_VERSION_REQ`                      | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_VERSION_RES`                      | decode and emit | `ProtoOAVersionRes`                     | `PROTO_OA_VERSION_RES`                      |
| `PROTO_OA_NEW_ORDER_REQ`                    | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_EXECUTION_EVENT`                  | decode and emit | `ProtoOAExecutionEvent`                 | `PROTO_OA_EXECUTION_EVENT`                  |
| `PROTO_OA_CANCEL_ORDER_REQ`                 | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_AMEND_ORDER_REQ`                  | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_AMEND_POSITION_SLTP_REQ`          | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_CLOSE_POSITION_REQ`               | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_TRAILING_SL_CHANGED_EVENT`        | decode and emit | `ProtoOATrailingSLChangedEvent`         | `PROTO_OA_TRAILING_SL_CHANGED_EVENT`        |
| `PROTO_OA_ASSET_LIST_REQ`                   | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_ASSET_LIST_RES`                   | decode and emit | `ProtoOAAssetListRes`                   | `PROTO_OA_ASSET_LIST_RES`                   |
| `PROTO_OA_SYMBOLS_LIST_REQ`                 | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_SYMBOLS_LIST_RES`                 | decode and emit | `ProtoOASymbolsListRes`                 | `PROTO_OA_SYMBOLS_LIST_RES`                 |
| `PROTO_OA_SYMBOL_BY_ID_REQ`                 | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_SYMBOL_BY_ID_RES`                 | decode and emit | `ProtoOASymbolByIdRes`                  | `PROTO_OA_SYMBOL_BY_ID_RES`                 |
| `PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ`       | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_SYMBOLS_FOR_CONVERSION_RES`       | decode and emit | `ProtoOASymbolsForConversionRes`        | `PROTO_OA_SYMBOLS_FOR_CONVERSION_RES`       |
| `PROTO_OA_SYMBOL_CHANGED_EVENT`             | decode and emit | `ProtoOASymbolChangedEvent`             | `PROTO_OA_SYMBOL_CHANGED_EVENT`             |
| `PROTO_OA_ASSET_CLASS_LIST_REQ`             | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_ASSET_CLASS_LIST_RES`             | decode and emit | `ProtoOAAssetClassListRes`              | `PROTO_OA_ASSET_CLASS_LIST_RES`             |
| `PROTO_OA_TRADER_REQ`                       | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_TRADER_RES`                       | decode and emit | `ProtoOATraderRes`                      | `PROTO_OA_TRADER_RES`                       |
| `PROTO_OA_TRADER_UPDATE_EVENT`              | decode and emit | `ProtoOATraderUpdatedEvent`             | `PROTO_OA_TRADER_UPDATE_EVENT`              |
| `PROTO_OA_RECONCILE_REQ`                    | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_RECONCILE_RES`                    | decode and emit | `ProtoOAReconcileRes`                   | `PROTO_OA_RECONCILE_RES`                    |
| `PROTO_OA_ORDER_ERROR_EVENT`                | decode and emit | `ProtoOAOrderErrorEvent`                | `PROTO_OA_ORDER_ERROR_EVENT`                |
| `PROTO_OA_DEAL_LIST_REQ`                    | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_DEAL_LIST_RES`                    | decode and emit | `ProtoOADealListRes`                    | `PROTO_OA_DEAL_LIST_RES`                    |
| `PROTO_OA_EXPECTED_MARGIN_REQ`              | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_EXPECTED_MARGIN_RES`              | decode and emit | `ProtoOAExpectedMarginRes`              | `PROTO_OA_EXPECTED_MARGIN_RES`              |
| `PROTO_OA_MARGIN_CHANGED_EVENT`             | decode and emit | `ProtoOAMarginChangedEvent`             | `PROTO_OA_MARGIN_CHANGED_EVENT`             |
| `PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ`       | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_CASH_FLOW_HISTORY_LIST_RES`       | decode and emit | `ProtoOACashFlowHistoryListRes`         | `PROTO_OA_CASH_FLOW_HISTORY_LIST_RES`       |
| `PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ` | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES` | decode and emit | `ProtoOAGetAccountListByAccessTokenRes` | `PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES` |
| `PROTO_OA_SUBSCRIBE_SPOTS_REQ`              | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_SUBSCRIBE_SPOTS_RES`              | decode and emit | `ProtoOASubscribeSpotsRes`              | `PROTO_OA_SUBSCRIBE_SPOTS_RES`              |
| `PROTO_OA_UNSUBSCRIBE_SPOTS_REQ`            | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_UNSUBSCRIBE_SPOTS_RES`            | decode and emit | `ProtoOAUnsubscribeSpotsRes`            | `PROTO_OA_UNSUBSCRIBE_SPOTS_RES`            |
| `PROTO_OA_SPOT_EVENT`                       | decode and emit | `ProtoOASpotEvent`                      | `PROTO_OA_SPOT_EVENT`                       |
| `PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ`      | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ`    | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_GET_TRENDBARS_REQ`                | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_GET_TRENDBARS_RES`                | decode and emit | `ProtoOAGetTrendbarsRes`                | `PROTO_OA_GET_TRENDBARS_RES`                |
| `PROTO_OA_GET_TICKDATA_REQ`                 | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_GET_TICKDATA_RES`                 | decode and emit | `ProtoOAGetTickDataRes`                 | `PROTO_OA_GET_TICKDATA_RES`                 |
| `PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ`    | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES`    | decode and emit | `ProtoOAGetCtidProfileByTokenRes`       | `PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES`    |
| `PROTO_OA_DEPTH_EVENT`                      | decode and emit | `ProtoOADepthEvent`                     | `PROTO_OA_DEPTH_EVENT`                      |
| `PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ`       | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES`       | decode and emit | `ProtoOASubscribeDepthQuotesRes`        | `PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES`       |
| `PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ`     | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES`     | decode and emit | `ProtoOAUnsubscribeDepthQuotesRes`      | `PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES`     |
| `PROTO_OA_SYMBOL_CATEGORY_REQ`              | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_SYMBOL_CATEGORY_RES`              | decode and emit | `ProtoOASymbolCategoryListRes`          | `PROTO_OA_SYMBOL_CATEGORY_RES`              |
| `PROTO_OA_ACCOUNT_LOGOUT_REQ`               | write to socket | n/a                                     | n/a                                         |
| `PROTO_OA_ACCOUNT_LOGOUT_RES`               | decode and emit | `ProtoOAAccountLogoutRes`               | `PROTO_OA_ACCOUNT_LOGOUT_RES`               |
| `PROTO_OA_ACCOUNT_DISCONNECT_EVENT`         | decode and emit | `ProtoOAAccountDisconnectEvent`         | `PROTO_OA_ACCOUNT_DISCONNECT_EVENT`         |
