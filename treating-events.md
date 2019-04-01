### Treating of Events

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
