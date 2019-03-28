import * as $spotware from "../spotware-messages";
import { Listener } from "./listener";

export interface OnOverloads {
  on(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  on(event: "ERROR_RES", listener: Listener<$spotware.IProtoErrorRes>): this;
  on(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  on(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;
  on(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    listener: Listener<$spotware.IProtoOAApplicationAuthRes>
  ): this;
  on(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAAccountAuthReq>
  ): this;
  on(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    listener: Listener<$spotware.IProtoOAAccountAuthRes>
  ): this;
  on(
    event: "PROTO_OA_ERROR_RES",
    listener: Listener<$spotware.IProtoOAErrorRes>
  ): this;
  on(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAClientDisconnectEvent>
  ): this;
  on(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    listener: Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>
  ): this;
  on(
    event: "PROTO_OA_VERSION_REQ",
    listener: Listener<$spotware.IProtoOAVersionReq>
  ): this;
  on(
    event: "PROTO_OA_VERSION_RES",
    listener: Listener<$spotware.IProtoOAVersionRes>
  ): this;
  on(
    event: "PROTO_OA_NEW_ORDER_REQ",
    listener: Listener<$spotware.IProtoOANewOrderReq>
  ): this;
  on(
    event: "PROTO_OA_EXECUTION_EVENT",
    listener: Listener<$spotware.IProtoOAExecutionEvent>
  ): this;
  on(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    listener: Listener<$spotware.IProtoOACancelOrderReq>
  ): this;
  on(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    listener: Listener<$spotware.IProtoOAAmendOrderReq>
  ): this;
  on(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    listener: Listener<$spotware.IProtoOAAmendPositionSLTPReq>
  ): this;
  on(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    listener: Listener<$spotware.IProtoOAClosePositionReq>
  ): this;
  on(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOATrailingSLChangedEvent>
  ): this;
  on(
    event: "PROTO_OA_ASSET_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetListReq>
  ): this;
  on(
    event: "PROTO_OA_ASSET_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetListRes>
  ): this;
  on(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    listener: Listener<$spotware.IProtoOASymbolsListReq>
  ): this;
  on(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    listener: Listener<$spotware.IProtoOASymbolsListRes>
  ): this;
  on(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    listener: Listener<$spotware.IProtoOASymbolByIdReq>
  ): this;
  on(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    listener: Listener<$spotware.IProtoOASymbolByIdRes>
  ): this;
  on(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    listener: Listener<$spotware.IProtoOASymbolsForConversionReq>
  ): this;
  on(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    listener: Listener<$spotware.IProtoOASymbolsForConversionRes>
  ): this;
  on(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOASymbolChangedEvent>
  ): this;
  on(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetClassListReq>
  ): this;
  on(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetClassListRes>
  ): this;
  on(
    event: "PROTO_OA_TRADER_REQ",
    listener: Listener<$spotware.IProtoOATraderReq>
  ): this;
  on(
    event: "PROTO_OA_TRADER_RES",
    listener: Listener<$spotware.IProtoOATraderRes>
  ): this;
  on(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    listener: Listener<$spotware.IProtoOATraderUpdatedEvent>
  ): this;
  on(
    event: "PROTO_OA_RECONCILE_REQ",
    listener: Listener<$spotware.IProtoOAReconcileReq>
  ): this;
  on(
    event: "PROTO_OA_RECONCILE_RES",
    listener: Listener<$spotware.IProtoOAReconcileRes>
  ): this;
  on(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    listener: Listener<$spotware.IProtoOAOrderErrorEvent>
  ): this;
  on(
    event: "PROTO_OA_DEAL_LIST_REQ",
    listener: Listener<$spotware.IProtoOADealListReq>
  ): this;
  on(
    event: "PROTO_OA_DEAL_LIST_RES",
    listener: Listener<$spotware.IProtoOADealListRes>
  ): this;
  on(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    listener: Listener<$spotware.IProtoOAExpectedMarginReq>
  ): this;
  on(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    listener: Listener<$spotware.IProtoOAExpectedMarginRes>
  ): this;
  on(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOAMarginChangedEvent>
  ): this;
  on(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListReq>
  ): this;
  on(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListRes>
  ): this;
  on(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>
  ): this;
  on(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>
  ): this;
  on(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOASubscribeSpotsReq>
  ): this;
  on(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOASubscribeSpotsRes>
  ): this;
  on(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsReq>
  ): this;
  on(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsRes>
  ): this;
  on(
    event: "PROTO_OA_SPOT_EVENT",
    listener: Listener<$spotware.IProtoOASpotEvent>
  ): this;
  on(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>
  ): this;
  on(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>
  ): this;
  on(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    listener: Listener<$spotware.IProtoOAGetTrendbarsReq>
  ): this;
  on(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    listener: Listener<$spotware.IProtoOAGetTrendbarsRes>
  ): this;
  on(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    listener: Listener<$spotware.IProtoOAGetTickDataReq>
  ): this;
  on(
    event: "PROTO_OA_GET_TICKDATA_RES",
    listener: Listener<$spotware.IProtoOAGetTickDataRes>
  ): this;
  on(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>
  ): this;
  on(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>
  ): this;
  on(
    event: "PROTO_OA_DEPTH_EVENT",
    listener: Listener<$spotware.IProtoOADepthEvent>
  ): this;
  on(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesReq>
  ): this;
  on(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesRes>
  ): this;
  on(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>
  ): this;
  on(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>
  ): this;
  on(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    listener: Listener<$spotware.IProtoOASymbolCategoryListReq>
  ): this;
  on(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    listener: Listener<$spotware.IProtoOASymbolCategoryListRes>
  ): this;
  on(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    listener: Listener<$spotware.IProtoOAAccountLogoutReq>
  ): this;
  on(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    listener: Listener<$spotware.IProtoOAAccountLogoutRes>
  ): this;
  on(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAAccountDisconnectEvent>
  ): this;
}
