import * as $spotware from "../spotware-messages";
import { Listener } from "./listener";

export interface OnMessageOverloads {
  onMessage(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  onMessage(
    event: "ERROR_RES",
    listener: Listener<$spotware.IProtoErrorRes>
  ): this;
  onMessage(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  onMessage(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;
  onMessage(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    listener: Listener<$spotware.IProtoOAApplicationAuthRes>
  ): this;
  onMessage(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAAccountAuthReq>
  ): this;
  onMessage(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    listener: Listener<$spotware.IProtoOAAccountAuthRes>
  ): this;
  onMessage(
    event: "PROTO_OA_ERROR_RES",
    listener: Listener<$spotware.IProtoOAErrorRes>
  ): this;
  onMessage(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAClientDisconnectEvent>
  ): this;
  onMessage(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    listener: Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>
  ): this;
  onMessage(
    event: "PROTO_OA_VERSION_REQ",
    listener: Listener<$spotware.IProtoOAVersionReq>
  ): this;
  onMessage(
    event: "PROTO_OA_VERSION_RES",
    listener: Listener<$spotware.IProtoOAVersionRes>
  ): this;
  onMessage(
    event: "PROTO_OA_NEW_ORDER_REQ",
    listener: Listener<$spotware.IProtoOANewOrderReq>
  ): this;
  onMessage(
    event: "PROTO_OA_EXECUTION_EVENT",
    listener: Listener<$spotware.IProtoOAExecutionEvent>
  ): this;
  onMessage(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    listener: Listener<$spotware.IProtoOACancelOrderReq>
  ): this;
  onMessage(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    listener: Listener<$spotware.IProtoOAAmendOrderReq>
  ): this;
  onMessage(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    listener: Listener<$spotware.IProtoOAAmendPositionSLTPReq>
  ): this;
  onMessage(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    listener: Listener<$spotware.IProtoOAClosePositionReq>
  ): this;
  onMessage(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOATrailingSLChangedEvent>
  ): this;
  onMessage(
    event: "PROTO_OA_ASSET_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetListReq>
  ): this;
  onMessage(
    event: "PROTO_OA_ASSET_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetListRes>
  ): this;
  onMessage(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    listener: Listener<$spotware.IProtoOASymbolsListReq>
  ): this;
  onMessage(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    listener: Listener<$spotware.IProtoOASymbolsListRes>
  ): this;
  onMessage(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    listener: Listener<$spotware.IProtoOASymbolByIdReq>
  ): this;
  onMessage(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    listener: Listener<$spotware.IProtoOASymbolByIdRes>
  ): this;
  onMessage(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    listener: Listener<$spotware.IProtoOASymbolsForConversionReq>
  ): this;
  onMessage(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    listener: Listener<$spotware.IProtoOASymbolsForConversionRes>
  ): this;
  onMessage(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOASymbolChangedEvent>
  ): this;
  onMessage(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetClassListReq>
  ): this;
  onMessage(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetClassListRes>
  ): this;
  onMessage(
    event: "PROTO_OA_TRADER_REQ",
    listener: Listener<$spotware.IProtoOATraderReq>
  ): this;
  onMessage(
    event: "PROTO_OA_TRADER_RES",
    listener: Listener<$spotware.IProtoOATraderRes>
  ): this;
  onMessage(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    listener: Listener<$spotware.IProtoOATraderUpdatedEvent>
  ): this;
  onMessage(
    event: "PROTO_OA_RECONCILE_REQ",
    listener: Listener<$spotware.IProtoOAReconcileReq>
  ): this;
  onMessage(
    event: "PROTO_OA_RECONCILE_RES",
    listener: Listener<$spotware.IProtoOAReconcileRes>
  ): this;
  onMessage(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    listener: Listener<$spotware.IProtoOAOrderErrorEvent>
  ): this;
  onMessage(
    event: "PROTO_OA_DEAL_LIST_REQ",
    listener: Listener<$spotware.IProtoOADealListReq>
  ): this;
  onMessage(
    event: "PROTO_OA_DEAL_LIST_RES",
    listener: Listener<$spotware.IProtoOADealListRes>
  ): this;
  onMessage(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    listener: Listener<$spotware.IProtoOAExpectedMarginReq>
  ): this;
  onMessage(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    listener: Listener<$spotware.IProtoOAExpectedMarginRes>
  ): this;
  onMessage(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOAMarginChangedEvent>
  ): this;
  onMessage(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListReq>
  ): this;
  onMessage(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListRes>
  ): this;
  onMessage(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>
  ): this;
  onMessage(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>
  ): this;
  onMessage(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOASubscribeSpotsReq>
  ): this;
  onMessage(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOASubscribeSpotsRes>
  ): this;
  onMessage(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsReq>
  ): this;
  onMessage(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsRes>
  ): this;
  onMessage(
    event: "PROTO_OA_SPOT_EVENT",
    listener: Listener<$spotware.IProtoOASpotEvent>
  ): this;
  onMessage(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>
  ): this;
  onMessage(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>
  ): this;
  onMessage(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    listener: Listener<$spotware.IProtoOAGetTrendbarsReq>
  ): this;
  onMessage(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    listener: Listener<$spotware.IProtoOAGetTrendbarsRes>
  ): this;
  onMessage(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    listener: Listener<$spotware.IProtoOAGetTickDataReq>
  ): this;
  onMessage(
    event: "PROTO_OA_GET_TICKDATA_RES",
    listener: Listener<$spotware.IProtoOAGetTickDataRes>
  ): this;
  onMessage(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>
  ): this;
  onMessage(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>
  ): this;
  onMessage(
    event: "PROTO_OA_DEPTH_EVENT",
    listener: Listener<$spotware.IProtoOADepthEvent>
  ): this;
  onMessage(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesReq>
  ): this;
  onMessage(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesRes>
  ): this;
  onMessage(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>
  ): this;
  onMessage(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>
  ): this;
  onMessage(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    listener: Listener<$spotware.IProtoOASymbolCategoryListReq>
  ): this;
  onMessage(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    listener: Listener<$spotware.IProtoOASymbolCategoryListRes>
  ): this;
  onMessage(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    listener: Listener<$spotware.IProtoOAAccountLogoutReq>
  ): this;
  onMessage(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    listener: Listener<$spotware.IProtoOAAccountLogoutRes>
  ): this;
  onMessage(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAAccountDisconnectEvent>
  ): this;
}
