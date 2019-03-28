import * as $spotware from "../spotware-messages";
import { Listener } from "./listener";

export interface OnceOverloads {
  once(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  once(event: "ERROR_RES", listener: Listener<$spotware.IProtoErrorRes>): this;
  once(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  once(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;
  once(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    listener: Listener<$spotware.IProtoOAApplicationAuthRes>
  ): this;
  once(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAAccountAuthReq>
  ): this;
  once(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    listener: Listener<$spotware.IProtoOAAccountAuthRes>
  ): this;
  once(
    event: "PROTO_OA_ERROR_RES",
    listener: Listener<$spotware.IProtoOAErrorRes>
  ): this;
  once(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAClientDisconnectEvent>
  ): this;
  once(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    listener: Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>
  ): this;
  once(
    event: "PROTO_OA_VERSION_REQ",
    listener: Listener<$spotware.IProtoOAVersionReq>
  ): this;
  once(
    event: "PROTO_OA_VERSION_RES",
    listener: Listener<$spotware.IProtoOAVersionRes>
  ): this;
  once(
    event: "PROTO_OA_NEW_ORDER_REQ",
    listener: Listener<$spotware.IProtoOANewOrderReq>
  ): this;
  once(
    event: "PROTO_OA_EXECUTION_EVENT",
    listener: Listener<$spotware.IProtoOAExecutionEvent>
  ): this;
  once(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    listener: Listener<$spotware.IProtoOACancelOrderReq>
  ): this;
  once(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    listener: Listener<$spotware.IProtoOAAmendOrderReq>
  ): this;
  once(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    listener: Listener<$spotware.IProtoOAAmendPositionSLTPReq>
  ): this;
  once(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    listener: Listener<$spotware.IProtoOAClosePositionReq>
  ): this;
  once(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOATrailingSLChangedEvent>
  ): this;
  once(
    event: "PROTO_OA_ASSET_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetListReq>
  ): this;
  once(
    event: "PROTO_OA_ASSET_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetListRes>
  ): this;
  once(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    listener: Listener<$spotware.IProtoOASymbolsListReq>
  ): this;
  once(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    listener: Listener<$spotware.IProtoOASymbolsListRes>
  ): this;
  once(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    listener: Listener<$spotware.IProtoOASymbolByIdReq>
  ): this;
  once(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    listener: Listener<$spotware.IProtoOASymbolByIdRes>
  ): this;
  once(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    listener: Listener<$spotware.IProtoOASymbolsForConversionReq>
  ): this;
  once(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    listener: Listener<$spotware.IProtoOASymbolsForConversionRes>
  ): this;
  once(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOASymbolChangedEvent>
  ): this;
  once(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetClassListReq>
  ): this;
  once(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetClassListRes>
  ): this;
  once(
    event: "PROTO_OA_TRADER_REQ",
    listener: Listener<$spotware.IProtoOATraderReq>
  ): this;
  once(
    event: "PROTO_OA_TRADER_RES",
    listener: Listener<$spotware.IProtoOATraderRes>
  ): this;
  once(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    listener: Listener<$spotware.IProtoOATraderUpdatedEvent>
  ): this;
  once(
    event: "PROTO_OA_RECONCILE_REQ",
    listener: Listener<$spotware.IProtoOAReconcileReq>
  ): this;
  once(
    event: "PROTO_OA_RECONCILE_RES",
    listener: Listener<$spotware.IProtoOAReconcileRes>
  ): this;
  once(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    listener: Listener<$spotware.IProtoOAOrderErrorEvent>
  ): this;
  once(
    event: "PROTO_OA_DEAL_LIST_REQ",
    listener: Listener<$spotware.IProtoOADealListReq>
  ): this;
  once(
    event: "PROTO_OA_DEAL_LIST_RES",
    listener: Listener<$spotware.IProtoOADealListRes>
  ): this;
  once(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    listener: Listener<$spotware.IProtoOAExpectedMarginReq>
  ): this;
  once(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    listener: Listener<$spotware.IProtoOAExpectedMarginRes>
  ): this;
  once(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOAMarginChangedEvent>
  ): this;
  once(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListReq>
  ): this;
  once(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListRes>
  ): this;
  once(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>
  ): this;
  once(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>
  ): this;
  once(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOASubscribeSpotsReq>
  ): this;
  once(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOASubscribeSpotsRes>
  ): this;
  once(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsReq>
  ): this;
  once(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsRes>
  ): this;
  once(
    event: "PROTO_OA_SPOT_EVENT",
    listener: Listener<$spotware.IProtoOASpotEvent>
  ): this;
  once(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>
  ): this;
  once(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>
  ): this;
  once(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    listener: Listener<$spotware.IProtoOAGetTrendbarsReq>
  ): this;
  once(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    listener: Listener<$spotware.IProtoOAGetTrendbarsRes>
  ): this;
  once(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    listener: Listener<$spotware.IProtoOAGetTickDataReq>
  ): this;
  once(
    event: "PROTO_OA_GET_TICKDATA_RES",
    listener: Listener<$spotware.IProtoOAGetTickDataRes>
  ): this;
  once(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>
  ): this;
  once(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>
  ): this;
  once(
    event: "PROTO_OA_DEPTH_EVENT",
    listener: Listener<$spotware.IProtoOADepthEvent>
  ): this;
  once(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesReq>
  ): this;
  once(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesRes>
  ): this;
  once(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>
  ): this;
  once(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>
  ): this;
  once(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    listener: Listener<$spotware.IProtoOASymbolCategoryListReq>
  ): this;
  once(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    listener: Listener<$spotware.IProtoOASymbolCategoryListRes>
  ): this;
  once(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    listener: Listener<$spotware.IProtoOAAccountLogoutReq>
  ): this;
  once(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    listener: Listener<$spotware.IProtoOAAccountLogoutRes>
  ): this;
  once(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAAccountDisconnectEvent>
  ): this;
}
