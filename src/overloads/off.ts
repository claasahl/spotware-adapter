import * as $spotware from "../spotware-messages";
import { Listener } from "./listener";

export interface OffOverloads {
  off(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  off(event: "ERROR_RES", listener: Listener<$spotware.IProtoErrorRes>): this;
  off(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  off(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;
  off(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    listener: Listener<$spotware.IProtoOAApplicationAuthRes>
  ): this;
  off(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAAccountAuthReq>
  ): this;
  off(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    listener: Listener<$spotware.IProtoOAAccountAuthRes>
  ): this;
  off(
    event: "PROTO_OA_ERROR_RES",
    listener: Listener<$spotware.IProtoOAErrorRes>
  ): this;
  off(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAClientDisconnectEvent>
  ): this;
  off(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    listener: Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>
  ): this;
  off(
    event: "PROTO_OA_VERSION_REQ",
    listener: Listener<$spotware.IProtoOAVersionReq>
  ): this;
  off(
    event: "PROTO_OA_VERSION_RES",
    listener: Listener<$spotware.IProtoOAVersionRes>
  ): this;
  off(
    event: "PROTO_OA_NEW_ORDER_REQ",
    listener: Listener<$spotware.IProtoOANewOrderReq>
  ): this;
  off(
    event: "PROTO_OA_EXECUTION_EVENT",
    listener: Listener<$spotware.IProtoOAExecutionEvent>
  ): this;
  off(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    listener: Listener<$spotware.IProtoOACancelOrderReq>
  ): this;
  off(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    listener: Listener<$spotware.IProtoOAAmendOrderReq>
  ): this;
  off(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    listener: Listener<$spotware.IProtoOAAmendPositionSLTPReq>
  ): this;
  off(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    listener: Listener<$spotware.IProtoOAClosePositionReq>
  ): this;
  off(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOATrailingSLChangedEvent>
  ): this;
  off(
    event: "PROTO_OA_ASSET_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetListReq>
  ): this;
  off(
    event: "PROTO_OA_ASSET_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetListRes>
  ): this;
  off(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    listener: Listener<$spotware.IProtoOASymbolsListReq>
  ): this;
  off(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    listener: Listener<$spotware.IProtoOASymbolsListRes>
  ): this;
  off(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    listener: Listener<$spotware.IProtoOASymbolByIdReq>
  ): this;
  off(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    listener: Listener<$spotware.IProtoOASymbolByIdRes>
  ): this;
  off(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    listener: Listener<$spotware.IProtoOASymbolsForConversionReq>
  ): this;
  off(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    listener: Listener<$spotware.IProtoOASymbolsForConversionRes>
  ): this;
  off(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOASymbolChangedEvent>
  ): this;
  off(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetClassListReq>
  ): this;
  off(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetClassListRes>
  ): this;
  off(
    event: "PROTO_OA_TRADER_REQ",
    listener: Listener<$spotware.IProtoOATraderReq>
  ): this;
  off(
    event: "PROTO_OA_TRADER_RES",
    listener: Listener<$spotware.IProtoOATraderRes>
  ): this;
  off(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    listener: Listener<$spotware.IProtoOATraderUpdatedEvent>
  ): this;
  off(
    event: "PROTO_OA_RECONCILE_REQ",
    listener: Listener<$spotware.IProtoOAReconcileReq>
  ): this;
  off(
    event: "PROTO_OA_RECONCILE_RES",
    listener: Listener<$spotware.IProtoOAReconcileRes>
  ): this;
  off(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    listener: Listener<$spotware.IProtoOAOrderErrorEvent>
  ): this;
  off(
    event: "PROTO_OA_DEAL_LIST_REQ",
    listener: Listener<$spotware.IProtoOADealListReq>
  ): this;
  off(
    event: "PROTO_OA_DEAL_LIST_RES",
    listener: Listener<$spotware.IProtoOADealListRes>
  ): this;
  off(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    listener: Listener<$spotware.IProtoOAExpectedMarginReq>
  ): this;
  off(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    listener: Listener<$spotware.IProtoOAExpectedMarginRes>
  ): this;
  off(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOAMarginChangedEvent>
  ): this;
  off(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListReq>
  ): this;
  off(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListRes>
  ): this;
  off(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>
  ): this;
  off(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>
  ): this;
  off(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOASubscribeSpotsReq>
  ): this;
  off(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOASubscribeSpotsRes>
  ): this;
  off(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsReq>
  ): this;
  off(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsRes>
  ): this;
  off(
    event: "PROTO_OA_SPOT_EVENT",
    listener: Listener<$spotware.IProtoOASpotEvent>
  ): this;
  off(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>
  ): this;
  off(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>
  ): this;
  off(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    listener: Listener<$spotware.IProtoOAGetTrendbarsReq>
  ): this;
  off(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    listener: Listener<$spotware.IProtoOAGetTrendbarsRes>
  ): this;
  off(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    listener: Listener<$spotware.IProtoOAGetTickDataReq>
  ): this;
  off(
    event: "PROTO_OA_GET_TICKDATA_RES",
    listener: Listener<$spotware.IProtoOAGetTickDataRes>
  ): this;
  off(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>
  ): this;
  off(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>
  ): this;
  off(
    event: "PROTO_OA_DEPTH_EVENT",
    listener: Listener<$spotware.IProtoOADepthEvent>
  ): this;
  off(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesReq>
  ): this;
  off(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesRes>
  ): this;
  off(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>
  ): this;
  off(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>
  ): this;
  off(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    listener: Listener<$spotware.IProtoOASymbolCategoryListReq>
  ): this;
  off(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    listener: Listener<$spotware.IProtoOASymbolCategoryListRes>
  ): this;
  off(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    listener: Listener<$spotware.IProtoOAAccountLogoutReq>
  ): this;
  off(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    listener: Listener<$spotware.IProtoOAAccountLogoutRes>
  ): this;
  off(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAAccountDisconnectEvent>
  ): this;
}
