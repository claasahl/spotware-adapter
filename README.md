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

| Event (`on(EVENT, message => ACTION)`)      | Encode as ...                                    | Emit as ...                                      |
| ------------------------------------------- | ------------------------------------------------ | ------------------------------------------------ |
| `PROTO_MESSAGE`                             | see [table](#processing_of_proto_message_events) | see [table](#processing_of_proto_message_events) |
| `ERROR_RES`                                 | n/a                                              | n/a                                              |
| `HEARTBEAT_EVENT`                           | n/a                                              | n/a                                              |
| `PROTO_OA_APPLICATION_AUTH_REQ`             | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_APPLICATION_AUTH_RES`             | n/a                                              | n/a                                              |
| `PROTO_OA_ACCOUNT_AUTH_REQ`                 | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_ACCOUNT_AUTH_RES`                 | n/a                                              | n/a                                              |
| `PROTO_OA_ERROR_RES`                        | n/a                                              | n/a                                              |
| `PROTO_OA_CLIENT_DISCONNECT_EVENT`          | n/a                                              | n/a                                              |
| `PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT` | n/a                                              | n/a                                              |
| `PROTO_OA_VERSION_REQ`                      | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_VERSION_RES`                      | n/a                                              | n/a                                              |
| `PROTO_OA_NEW_ORDER_REQ`                    | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_EXECUTION_EVENT`                  | n/a                                              | n/a                                              |
| `PROTO_OA_CANCEL_ORDER_REQ`                 | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_AMEND_ORDER_REQ`                  | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_AMEND_POSITION_SLTP_REQ`          | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_CLOSE_POSITION_REQ`               | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_TRAILING_SL_CHANGED_EVENT`        | n/a                                              | n/a                                              |
| `PROTO_OA_ASSET_LIST_REQ`                   | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_ASSET_LIST_RES`                   | n/a                                              | n/a                                              |
| `PROTO_OA_SYMBOLS_LIST_REQ`                 | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_SYMBOLS_LIST_RES`                 | n/a                                              | n/a                                              |
| `PROTO_OA_SYMBOL_BY_ID_REQ`                 | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_SYMBOL_BY_ID_RES`                 | n/a                                              | n/a                                              |
| `PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ`       | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_SYMBOLS_FOR_CONVERSION_RES`       | n/a                                              | n/a                                              |
| `PROTO_OA_SYMBOL_CHANGED_EVENT`             | n/a                                              | n/a                                              |
| `PROTO_OA_ASSET_CLASS_LIST_REQ`             | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_ASSET_CLASS_LIST_RES`             | n/a                                              | n/a                                              |
| `PROTO_OA_TRADER_REQ`                       | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_TRADER_RES`                       | n/a                                              | n/a                                              |
| `PROTO_OA_TRADER_UPDATE_EVENT`              | n/a                                              | n/a                                              |
| `PROTO_OA_RECONCILE_REQ`                    | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_RECONCILE_RES`                    | n/a                                              | n/a                                              |
| `PROTO_OA_ORDER_ERROR_EVENT`                | n/a                                              | n/a                                              |
| `PROTO_OA_DEAL_LIST_REQ`                    | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_DEAL_LIST_RES`                    | n/a                                              | n/a                                              |
| `PROTO_OA_EXPECTED_MARGIN_REQ`              | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_EXPECTED_MARGIN_RES`              | n/a                                              | n/a                                              |
| `PROTO_OA_MARGIN_CHANGED_EVENT`             | n/a                                              | n/a                                              |
| `PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ`       | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_CASH_FLOW_HISTORY_LIST_RES`       | n/a                                              | n/a                                              |
| `PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ` | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES` | n/a                                              | n/a                                              |
| `PROTO_OA_SUBSCRIBE_SPOTS_REQ`              | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_SUBSCRIBE_SPOTS_RES`              | n/a                                              | n/a                                              |
| `PROTO_OA_UNSUBSCRIBE_SPOTS_REQ`            | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_UNSUBSCRIBE_SPOTS_RES`            | n/a                                              | n/a                                              |
| `PROTO_OA_SPOT_EVENT`                       | n/a                                              | n/a                                              |
| `PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ`      | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ`    | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_GET_TRENDBARS_REQ`                | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_GET_TRENDBARS_RES`                | n/a                                              | n/a                                              |
| `PROTO_OA_GET_TICKDATA_REQ`                 | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_GET_TICKDATA_RES`                 | n/a                                              | n/a                                              |
| `PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ`    | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES`    | n/a                                              | n/a                                              |
| `PROTO_OA_DEPTH_EVENT`                      | n/a                                              | n/a                                              |
| `PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ`       | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES`       | n/a                                              | n/a                                              |
| `PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ`     | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES`     | n/a                                              | n/a                                              |
| `PROTO_OA_SYMBOL_CATEGORY_REQ`              | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_SYMBOL_CATEGORY_RES`              | n/a                                              | n/a                                              |
| `PROTO_OA_ACCOUNT_LOGOUT_REQ`               | `ProtoMessage`                                   | `PROTO_MESSAGE`                                  |
| `PROTO_OA_ACCOUNT_LOGOUT_RES`               | n/a                                              | n/a                                              |
| `PROTO_OA_ACCOUNT_DISCONNECT_EVENT`         | n/a                                              | n/a                                              |

## Processing of PROTO_MESSAGE Events

| Payload Type of `PROTO_MESSAGE`             | Decode as ...                           | Write to Socket |
| ------------------------------------------- | --------------------------------------- | --------------- |
| `PROTO_MESSAGE`                             | n/a                                     | n/a             |
| `ERROR_RES`                                 | `ProtoErrorRes`                         | no              |
| `HEARTBEAT_EVENT`                           | `ProtoHeartbeatEvent`                   | no              |
| `PROTO_OA_APPLICATION_AUTH_REQ`             | n/a                                     | yes             |
| `PROTO_OA_APPLICATION_AUTH_RES`             | `ProtoOAApplicationAuthRes`             | no              |
| `PROTO_OA_ACCOUNT_AUTH_REQ`                 | n/a                                     | yes             |
| `PROTO_OA_ACCOUNT_AUTH_RES`                 | `ProtoOAAccountAuthRes`                 | no              |
| `PROTO_OA_ERROR_RES`                        | `ProtoOAErrorRes`                       | no              |
| `PROTO_OA_CLIENT_DISCONNECT_EVENT`          | `ProtoOAClientDisconnectEvent`          | no              |
| `PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT` | `ProtoOAAccountsTokenInvalidatedEvent`  | no              |
| `PROTO_OA_VERSION_REQ`                      | n/a                                     | yes             |
| `PROTO_OA_VERSION_RES`                      | `ProtoOAVersionRes`                     | no              |
| `PROTO_OA_NEW_ORDER_REQ`                    | n/a                                     | yes             |
| `PROTO_OA_EXECUTION_EVENT`                  | `ProtoOAExecutionEvent`                 | no              |
| `PROTO_OA_CANCEL_ORDER_REQ`                 | n/a                                     | yes             |
| `PROTO_OA_AMEND_ORDER_REQ`                  | n/a                                     | yes             |
| `PROTO_OA_AMEND_POSITION_SLTP_REQ`          | n/a                                     | yes             |
| `PROTO_OA_CLOSE_POSITION_REQ`               | n/a                                     | yes             |
| `PROTO_OA_TRAILING_SL_CHANGED_EVENT`        | `ProtoOATrailingSLChangedEvent`         | no              |
| `PROTO_OA_ASSET_LIST_REQ`                   | n/a                                     | yes             |
| `PROTO_OA_ASSET_LIST_RES`                   | `ProtoOAAssetListRes`                   | no              |
| `PROTO_OA_SYMBOLS_LIST_REQ`                 | n/a                                     | yes             |
| `PROTO_OA_SYMBOLS_LIST_RES`                 | `ProtoOASymbolsListRes`                 | no              |
| `PROTO_OA_SYMBOL_BY_ID_REQ`                 | n/a                                     | yes             |
| `PROTO_OA_SYMBOL_BY_ID_RES`                 | `ProtoOASymbolByIdRes`                  | no              |
| `PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ`       | n/a                                     | yes             |
| `PROTO_OA_SYMBOLS_FOR_CONVERSION_RES`       | `ProtoOASymbolsForConversionRes`        | no              |
| `PROTO_OA_SYMBOL_CHANGED_EVENT`             | `ProtoOASymbolChangedEvent`             | no              |
| `PROTO_OA_ASSET_CLASS_LIST_REQ`             | n/a                                     | yes             |
| `PROTO_OA_ASSET_CLASS_LIST_RES`             | `ProtoOAAssetClassListRes`              | no              |
| `PROTO_OA_TRADER_REQ`                       | n/a                                     | yes             |
| `PROTO_OA_TRADER_RES`                       | `ProtoOATraderRes`                      | no              |
| `PROTO_OA_TRADER_UPDATE_EVENT`              | `ProtoOATraderUpdatedEvent`             | no              |
| `PROTO_OA_RECONCILE_REQ`                    | n/a                                     | yes             |
| `PROTO_OA_RECONCILE_RES`                    | `ProtoOAReconcileRes`                   | no              |
| `PROTO_OA_ORDER_ERROR_EVENT`                | `ProtoOAOrderErrorEvent`                | no              |
| `PROTO_OA_DEAL_LIST_REQ`                    | n/a                                     | yes             |
| `PROTO_OA_DEAL_LIST_RES`                    | `ProtoOADealListRes`                    | no              |
| `PROTO_OA_EXPECTED_MARGIN_REQ`              | n/a                                     | yes             |
| `PROTO_OA_EXPECTED_MARGIN_RES`              | `ProtoOAExpectedMarginRes`              | no              |
| `PROTO_OA_MARGIN_CHANGED_EVENT`             | `ProtoOAMarginChangedEvent`             | no              |
| `PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ`       | n/a                                     | yes             |
| `PROTO_OA_CASH_FLOW_HISTORY_LIST_RES`       | `ProtoOACashFlowHistoryListRes`         | no              |
| `PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ` | n/a                                     | yes             |
| `PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES` | `ProtoOAGetAccountListByAccessTokenRes` | no              |
| `PROTO_OA_SUBSCRIBE_SPOTS_REQ`              | n/a                                     | yes             |
| `PROTO_OA_SUBSCRIBE_SPOTS_RES`              | `ProtoOASubscribeSpotsRes`              | no              |
| `PROTO_OA_UNSUBSCRIBE_SPOTS_REQ`            | n/a                                     | yes             |
| `PROTO_OA_UNSUBSCRIBE_SPOTS_RES`            | `ProtoOAUnsubscribeSpotsRes`            | no              |
| `PROTO_OA_SPOT_EVENT`                       | `ProtoOASpotEvent`                      | no              |
| `PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ`      | n/a                                     | yes             |
| `PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ`    | n/a                                     | yes             |
| `PROTO_OA_GET_TRENDBARS_REQ`                | n/a                                     | yes             |
| `PROTO_OA_GET_TRENDBARS_RES`                | `ProtoOAGetTrendbarsRes`                | no              |
| `PROTO_OA_GET_TICKDATA_REQ`                 | n/a                                     | yes             |
| `PROTO_OA_GET_TICKDATA_RES`                 | `ProtoOAGetTickDataRes`                 | no              |
| `PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ`    | n/a                                     | yes             |
| `PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES`    | `ProtoOAGetCtidProfileByTokenRes`       | no              |
| `PROTO_OA_DEPTH_EVENT`                      | `ProtoOADepthEvent`                     | no              |
| `PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ`       | n/a                                     | yes             |
| `PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES`       | `ProtoOASubscribeDepthQuotesRes`        | no              |
| `PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ`     | n/a                                     | yes             |
| `PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES`     | `ProtoOAUnsubscribeDepthQuotesRes`      | no              |
| `PROTO_OA_SYMBOL_CATEGORY_REQ`              | n/a                                     | yes             |
| `PROTO_OA_SYMBOL_CATEGORY_RES`              | `ProtoOASymbolCategoryListRes`          | no              |
| `PROTO_OA_ACCOUNT_LOGOUT_REQ`               | n/a                                     | yes             |
| `PROTO_OA_ACCOUNT_LOGOUT_RES`               | `ProtoOAAccountLogoutRes`               | no              |
| `PROTO_OA_ACCOUNT_DISCONNECT_EVENT`         | `ProtoOAAccountDisconnectEvent`         | no              |
