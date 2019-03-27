import * as $spotware from "../spotware-messages";

export interface EmitOverloads {
  emit(event: "PROTO_MESSAGE", message: $spotware.IProtoMessage): void;
  emit(
    event: "ERROR_RES",
    message: $spotware.IProtoErrorRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "HEARTBEAT_EVENT",
    message: $spotware.IProtoHeartbeatEvent,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    message: $spotware.IProtoOAApplicationAuthReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    message: $spotware.IProtoOAApplicationAuthRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    message: $spotware.IProtoOAAccountAuthReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    message: $spotware.IProtoOAAccountAuthRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_ERROR_RES",
    message: $spotware.IProtoOAErrorRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    message: $spotware.IProtoOAClientDisconnectEvent,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    message: $spotware.IProtoOAAccountsTokenInvalidatedEvent,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_VERSION_REQ",
    message: $spotware.IProtoOAVersionReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_VERSION_RES",
    message: $spotware.IProtoOAVersionRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_NEW_ORDER_REQ",
    message: $spotware.IProtoOANewOrderReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_EXECUTION_EVENT",
    message: $spotware.IProtoOAExecutionEvent,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    message: $spotware.IProtoOACancelOrderReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    message: $spotware.IProtoOAAmendOrderReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    message: $spotware.IProtoOAAmendPositionSLTPReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    message: $spotware.IProtoOAClosePositionReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    message: $spotware.IProtoOATrailingSLChangedEvent,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_ASSET_LIST_REQ",
    message: $spotware.IProtoOAAssetListReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_ASSET_LIST_RES",
    message: $spotware.IProtoOAAssetListRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    message: $spotware.IProtoOASymbolsListReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    message: $spotware.IProtoOASymbolsListRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    message: $spotware.IProtoOASymbolByIdReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    message: $spotware.IProtoOASymbolByIdRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    message: $spotware.IProtoOASymbolsForConversionReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    message: $spotware.IProtoOASymbolsForConversionRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    message: $spotware.IProtoOASymbolChangedEvent,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    message: $spotware.IProtoOAAssetClassListReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    message: $spotware.IProtoOAAssetClassListRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_TRADER_REQ",
    message: $spotware.IProtoOATraderReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_TRADER_RES",
    message: $spotware.IProtoOATraderRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    message: $spotware.IProtoOATraderUpdatedEvent,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_RECONCILE_REQ",
    message: $spotware.IProtoOAReconcileReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_RECONCILE_RES",
    message: $spotware.IProtoOAReconcileRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    message: $spotware.IProtoOAOrderErrorEvent,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_DEAL_LIST_REQ",
    message: $spotware.IProtoOADealListReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_DEAL_LIST_RES",
    message: $spotware.IProtoOADealListRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    message: $spotware.IProtoOAExpectedMarginReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    message: $spotware.IProtoOAExpectedMarginRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    message: $spotware.IProtoOAMarginChangedEvent,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    message: $spotware.IProtoOACashFlowHistoryListReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    message: $spotware.IProtoOACashFlowHistoryListRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    message: $spotware.IProtoOAGetAccountListByAccessTokenReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    message: $spotware.IProtoOAGetAccountListByAccessTokenRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    message: $spotware.IProtoOASubscribeSpotsReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    message: $spotware.IProtoOASubscribeSpotsRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    message: $spotware.IProtoOAUnsubscribeSpotsReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    message: $spotware.IProtoOAUnsubscribeSpotsRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_SPOT_EVENT",
    message: $spotware.IProtoOASpotEvent,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    message: $spotware.IProtoOASubscribeLiveTrendbarReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    message: $spotware.IProtoOAUnsubscribeLiveTrendbarReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    message: $spotware.IProtoOAGetTrendbarsReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    message: $spotware.IProtoOAGetTrendbarsRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    message: $spotware.IProtoOAGetTickDataReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_GET_TICKDATA_RES",
    message: $spotware.IProtoOAGetTickDataRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    message: $spotware.IProtoOAGetCtidProfileByTokenReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    message: $spotware.IProtoOAGetCtidProfileByTokenRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_DEPTH_EVENT",
    message: $spotware.IProtoOADepthEvent,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    message: $spotware.IProtoOASubscribeDepthQuotesReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    message: $spotware.IProtoOASubscribeDepthQuotesRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    message: $spotware.IProtoOAUnsubscribeDepthQuotesReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    message: $spotware.IProtoOAUnsubscribeDepthQuotesRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    message: $spotware.IProtoOASymbolCategoryListReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    message: $spotware.IProtoOASymbolCategoryListRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    message: $spotware.IProtoOAAccountLogoutReq,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    message: $spotware.IProtoOAAccountLogoutRes,
    clientMsgId?: string | null
  ): boolean;
  emit(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    message: $spotware.IProtoOAAccountDisconnectEvent,
    clientMsgId?: string | null
  ): boolean;
}
