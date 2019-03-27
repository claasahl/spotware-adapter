import { EventEmitter } from "events";
import * as $spotware from "./spotware-messages";

type Listener<T> = (message: T, clientMsgId?: string | null) => void;

export interface SpotwareEventEmitterOverloads {
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
  ): void;
  on(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    listener: Listener<$spotware.IProtoOAApplicationAuthRes>
  ): void;
  on(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAAccountAuthReq>
  ): void;
  on(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    listener: Listener<$spotware.IProtoOAAccountAuthRes>
  ): void;
  on(
    event: "PROTO_OA_ERROR_RES",
    listener: Listener<$spotware.IProtoOAErrorRes>
  ): void;
  on(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAClientDisconnectEvent>
  ): void;
  on(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    listener: Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>
  ): void;
  on(
    event: "PROTO_OA_VERSION_REQ",
    listener: Listener<$spotware.IProtoOAVersionReq>
  ): void;
  on(
    event: "PROTO_OA_VERSION_RES",
    listener: Listener<$spotware.IProtoOAVersionRes>
  ): void;
  on(
    event: "PROTO_OA_NEW_ORDER_REQ",
    listener: Listener<$spotware.IProtoOANewOrderReq>
  ): void;
  on(
    event: "PROTO_OA_EXECUTION_EVENT",
    listener: Listener<$spotware.IProtoOAExecutionEvent>
  ): void;
  on(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    listener: Listener<$spotware.IProtoOACancelOrderReq>
  ): void;
  on(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    listener: Listener<$spotware.IProtoOAAmendOrderReq>
  ): void;
  on(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    listener: Listener<$spotware.IProtoOAAmendPositionSLTPReq>
  ): void;
  on(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    listener: Listener<$spotware.IProtoOAClosePositionReq>
  ): void;
  on(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOATrailingSLChangedEvent>
  ): void;
  on(
    event: "PROTO_OA_ASSET_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetListReq>
  ): void;
  on(
    event: "PROTO_OA_ASSET_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetListRes>
  ): void;
  on(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    listener: Listener<$spotware.IProtoOASymbolsListReq>
  ): void;
  on(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    listener: Listener<$spotware.IProtoOASymbolsListRes>
  ): void;
  on(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    listener: Listener<$spotware.IProtoOASymbolByIdReq>
  ): void;
  on(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    listener: Listener<$spotware.IProtoOASymbolByIdRes>
  ): void;
  on(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    listener: Listener<$spotware.IProtoOASymbolsForConversionReq>
  ): void;
  on(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    listener: Listener<$spotware.IProtoOASymbolsForConversionRes>
  ): void;
  on(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOASymbolChangedEvent>
  ): void;
  on(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetClassListReq>
  ): void;
  on(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetClassListRes>
  ): void;
  on(
    event: "PROTO_OA_TRADER_REQ",
    listener: Listener<$spotware.IProtoOATraderReq>
  ): void;
  on(
    event: "PROTO_OA_TRADER_RES",
    listener: Listener<$spotware.IProtoOATraderRes>
  ): void;
  on(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    listener: Listener<$spotware.IProtoOATraderUpdatedEvent>
  ): void;
  on(
    event: "PROTO_OA_RECONCILE_REQ",
    listener: Listener<$spotware.IProtoOAReconcileReq>
  ): void;
  on(
    event: "PROTO_OA_RECONCILE_RES",
    listener: Listener<$spotware.IProtoOAReconcileRes>
  ): void;
  on(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    listener: Listener<$spotware.IProtoOAOrderErrorEvent>
  ): void;
  on(
    event: "PROTO_OA_DEAL_LIST_REQ",
    listener: Listener<$spotware.IProtoOADealListReq>
  ): void;
  on(
    event: "PROTO_OA_DEAL_LIST_RES",
    listener: Listener<$spotware.IProtoOADealListRes>
  ): void;
  on(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    listener: Listener<$spotware.IProtoOAExpectedMarginReq>
  ): void;
  on(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    listener: Listener<$spotware.IProtoOAExpectedMarginRes>
  ): void;
  on(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOAMarginChangedEvent>
  ): void;
  on(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListReq>
  ): void;
  on(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListRes>
  ): void;
  on(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>
  ): void;
  on(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>
  ): void;
  on(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOASubscribeSpotsReq>
  ): void;
  on(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOASubscribeSpotsRes>
  ): void;
  on(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsReq>
  ): void;
  on(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsRes>
  ): void;
  on(
    event: "PROTO_OA_SPOT_EVENT",
    listener: Listener<$spotware.IProtoOASpotEvent>
  ): void;
  on(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>
  ): void;
  on(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>
  ): void;
  on(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    listener: Listener<$spotware.IProtoOAGetTrendbarsReq>
  ): void;
  on(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    listener: Listener<$spotware.IProtoOAGetTrendbarsRes>
  ): void;
  on(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    listener: Listener<$spotware.IProtoOAGetTickDataReq>
  ): void;
  on(
    event: "PROTO_OA_GET_TICKDATA_RES",
    listener: Listener<$spotware.IProtoOAGetTickDataRes>
  ): void;
  on(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>
  ): void;
  on(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>
  ): void;
  on(
    event: "PROTO_OA_DEPTH_EVENT",
    listener: Listener<$spotware.IProtoOADepthEvent>
  ): void;
  on(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesReq>
  ): void;
  on(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesRes>
  ): void;
  on(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>
  ): void;
  on(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>
  ): void;
  on(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    listener: Listener<$spotware.IProtoOASymbolCategoryListReq>
  ): void;
  on(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    listener: Listener<$spotware.IProtoOASymbolCategoryListRes>
  ): void;
  on(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    listener: Listener<$spotware.IProtoOAAccountLogoutReq>
  ): void;
  on(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    listener: Listener<$spotware.IProtoOAAccountLogoutRes>
  ): void;
  on(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAAccountDisconnectEvent>
  ): void;
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
  ): void;
  off(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    listener: Listener<$spotware.IProtoOAApplicationAuthRes>
  ): void;
  off(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAAccountAuthReq>
  ): void;
  off(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    listener: Listener<$spotware.IProtoOAAccountAuthRes>
  ): void;
  off(
    event: "PROTO_OA_ERROR_RES",
    listener: Listener<$spotware.IProtoOAErrorRes>
  ): void;
  off(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAClientDisconnectEvent>
  ): void;
  off(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    listener: Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>
  ): void;
  off(
    event: "PROTO_OA_VERSION_REQ",
    listener: Listener<$spotware.IProtoOAVersionReq>
  ): void;
  off(
    event: "PROTO_OA_VERSION_RES",
    listener: Listener<$spotware.IProtoOAVersionRes>
  ): void;
  off(
    event: "PROTO_OA_NEW_ORDER_REQ",
    listener: Listener<$spotware.IProtoOANewOrderReq>
  ): void;
  off(
    event: "PROTO_OA_EXECUTION_EVENT",
    listener: Listener<$spotware.IProtoOAExecutionEvent>
  ): void;
  off(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    listener: Listener<$spotware.IProtoOACancelOrderReq>
  ): void;
  off(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    listener: Listener<$spotware.IProtoOAAmendOrderReq>
  ): void;
  off(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    listener: Listener<$spotware.IProtoOAAmendPositionSLTPReq>
  ): void;
  off(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    listener: Listener<$spotware.IProtoOAClosePositionReq>
  ): void;
  off(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOATrailingSLChangedEvent>
  ): void;
  off(
    event: "PROTO_OA_ASSET_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetListReq>
  ): void;
  off(
    event: "PROTO_OA_ASSET_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetListRes>
  ): void;
  off(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    listener: Listener<$spotware.IProtoOASymbolsListReq>
  ): void;
  off(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    listener: Listener<$spotware.IProtoOASymbolsListRes>
  ): void;
  off(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    listener: Listener<$spotware.IProtoOASymbolByIdReq>
  ): void;
  off(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    listener: Listener<$spotware.IProtoOASymbolByIdRes>
  ): void;
  off(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    listener: Listener<$spotware.IProtoOASymbolsForConversionReq>
  ): void;
  off(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    listener: Listener<$spotware.IProtoOASymbolsForConversionRes>
  ): void;
  off(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOASymbolChangedEvent>
  ): void;
  off(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetClassListReq>
  ): void;
  off(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetClassListRes>
  ): void;
  off(
    event: "PROTO_OA_TRADER_REQ",
    listener: Listener<$spotware.IProtoOATraderReq>
  ): void;
  off(
    event: "PROTO_OA_TRADER_RES",
    listener: Listener<$spotware.IProtoOATraderRes>
  ): void;
  off(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    listener: Listener<$spotware.IProtoOATraderUpdatedEvent>
  ): void;
  off(
    event: "PROTO_OA_RECONCILE_REQ",
    listener: Listener<$spotware.IProtoOAReconcileReq>
  ): void;
  off(
    event: "PROTO_OA_RECONCILE_RES",
    listener: Listener<$spotware.IProtoOAReconcileRes>
  ): void;
  off(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    listener: Listener<$spotware.IProtoOAOrderErrorEvent>
  ): void;
  off(
    event: "PROTO_OA_DEAL_LIST_REQ",
    listener: Listener<$spotware.IProtoOADealListReq>
  ): void;
  off(
    event: "PROTO_OA_DEAL_LIST_RES",
    listener: Listener<$spotware.IProtoOADealListRes>
  ): void;
  off(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    listener: Listener<$spotware.IProtoOAExpectedMarginReq>
  ): void;
  off(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    listener: Listener<$spotware.IProtoOAExpectedMarginRes>
  ): void;
  off(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOAMarginChangedEvent>
  ): void;
  off(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListReq>
  ): void;
  off(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListRes>
  ): void;
  off(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>
  ): void;
  off(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>
  ): void;
  off(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOASubscribeSpotsReq>
  ): void;
  off(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOASubscribeSpotsRes>
  ): void;
  off(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsReq>
  ): void;
  off(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsRes>
  ): void;
  off(
    event: "PROTO_OA_SPOT_EVENT",
    listener: Listener<$spotware.IProtoOASpotEvent>
  ): void;
  off(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>
  ): void;
  off(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>
  ): void;
  off(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    listener: Listener<$spotware.IProtoOAGetTrendbarsReq>
  ): void;
  off(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    listener: Listener<$spotware.IProtoOAGetTrendbarsRes>
  ): void;
  off(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    listener: Listener<$spotware.IProtoOAGetTickDataReq>
  ): void;
  off(
    event: "PROTO_OA_GET_TICKDATA_RES",
    listener: Listener<$spotware.IProtoOAGetTickDataRes>
  ): void;
  off(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>
  ): void;
  off(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>
  ): void;
  off(
    event: "PROTO_OA_DEPTH_EVENT",
    listener: Listener<$spotware.IProtoOADepthEvent>
  ): void;
  off(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesReq>
  ): void;
  off(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesRes>
  ): void;
  off(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>
  ): void;
  off(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>
  ): void;
  off(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    listener: Listener<$spotware.IProtoOASymbolCategoryListReq>
  ): void;
  off(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    listener: Listener<$spotware.IProtoOASymbolCategoryListRes>
  ): void;
  off(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    listener: Listener<$spotware.IProtoOAAccountLogoutReq>
  ): void;
  off(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    listener: Listener<$spotware.IProtoOAAccountLogoutRes>
  ): void;
  off(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAAccountDisconnectEvent>
  ): void;
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
  ): void;
  once(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    listener: Listener<$spotware.IProtoOAApplicationAuthRes>
  ): void;
  once(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAAccountAuthReq>
  ): void;
  once(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    listener: Listener<$spotware.IProtoOAAccountAuthRes>
  ): void;
  once(
    event: "PROTO_OA_ERROR_RES",
    listener: Listener<$spotware.IProtoOAErrorRes>
  ): void;
  once(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAClientDisconnectEvent>
  ): void;
  once(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    listener: Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>
  ): void;
  once(
    event: "PROTO_OA_VERSION_REQ",
    listener: Listener<$spotware.IProtoOAVersionReq>
  ): void;
  once(
    event: "PROTO_OA_VERSION_RES",
    listener: Listener<$spotware.IProtoOAVersionRes>
  ): void;
  once(
    event: "PROTO_OA_NEW_ORDER_REQ",
    listener: Listener<$spotware.IProtoOANewOrderReq>
  ): void;
  once(
    event: "PROTO_OA_EXECUTION_EVENT",
    listener: Listener<$spotware.IProtoOAExecutionEvent>
  ): void;
  once(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    listener: Listener<$spotware.IProtoOACancelOrderReq>
  ): void;
  once(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    listener: Listener<$spotware.IProtoOAAmendOrderReq>
  ): void;
  once(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    listener: Listener<$spotware.IProtoOAAmendPositionSLTPReq>
  ): void;
  once(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    listener: Listener<$spotware.IProtoOAClosePositionReq>
  ): void;
  once(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOATrailingSLChangedEvent>
  ): void;
  once(
    event: "PROTO_OA_ASSET_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetListReq>
  ): void;
  once(
    event: "PROTO_OA_ASSET_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetListRes>
  ): void;
  once(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    listener: Listener<$spotware.IProtoOASymbolsListReq>
  ): void;
  once(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    listener: Listener<$spotware.IProtoOASymbolsListRes>
  ): void;
  once(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    listener: Listener<$spotware.IProtoOASymbolByIdReq>
  ): void;
  once(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    listener: Listener<$spotware.IProtoOASymbolByIdRes>
  ): void;
  once(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    listener: Listener<$spotware.IProtoOASymbolsForConversionReq>
  ): void;
  once(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    listener: Listener<$spotware.IProtoOASymbolsForConversionRes>
  ): void;
  once(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOASymbolChangedEvent>
  ): void;
  once(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetClassListReq>
  ): void;
  once(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetClassListRes>
  ): void;
  once(
    event: "PROTO_OA_TRADER_REQ",
    listener: Listener<$spotware.IProtoOATraderReq>
  ): void;
  once(
    event: "PROTO_OA_TRADER_RES",
    listener: Listener<$spotware.IProtoOATraderRes>
  ): void;
  once(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    listener: Listener<$spotware.IProtoOATraderUpdatedEvent>
  ): void;
  once(
    event: "PROTO_OA_RECONCILE_REQ",
    listener: Listener<$spotware.IProtoOAReconcileReq>
  ): void;
  once(
    event: "PROTO_OA_RECONCILE_RES",
    listener: Listener<$spotware.IProtoOAReconcileRes>
  ): void;
  once(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    listener: Listener<$spotware.IProtoOAOrderErrorEvent>
  ): void;
  once(
    event: "PROTO_OA_DEAL_LIST_REQ",
    listener: Listener<$spotware.IProtoOADealListReq>
  ): void;
  once(
    event: "PROTO_OA_DEAL_LIST_RES",
    listener: Listener<$spotware.IProtoOADealListRes>
  ): void;
  once(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    listener: Listener<$spotware.IProtoOAExpectedMarginReq>
  ): void;
  once(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    listener: Listener<$spotware.IProtoOAExpectedMarginRes>
  ): void;
  once(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOAMarginChangedEvent>
  ): void;
  once(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListReq>
  ): void;
  once(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListRes>
  ): void;
  once(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>
  ): void;
  once(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>
  ): void;
  once(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOASubscribeSpotsReq>
  ): void;
  once(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOASubscribeSpotsRes>
  ): void;
  once(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsReq>
  ): void;
  once(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsRes>
  ): void;
  once(
    event: "PROTO_OA_SPOT_EVENT",
    listener: Listener<$spotware.IProtoOASpotEvent>
  ): void;
  once(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>
  ): void;
  once(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>
  ): void;
  once(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    listener: Listener<$spotware.IProtoOAGetTrendbarsReq>
  ): void;
  once(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    listener: Listener<$spotware.IProtoOAGetTrendbarsRes>
  ): void;
  once(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    listener: Listener<$spotware.IProtoOAGetTickDataReq>
  ): void;
  once(
    event: "PROTO_OA_GET_TICKDATA_RES",
    listener: Listener<$spotware.IProtoOAGetTickDataRes>
  ): void;
  once(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>
  ): void;
  once(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>
  ): void;
  once(
    event: "PROTO_OA_DEPTH_EVENT",
    listener: Listener<$spotware.IProtoOADepthEvent>
  ): void;
  once(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesReq>
  ): void;
  once(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesRes>
  ): void;
  once(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>
  ): void;
  once(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>
  ): void;
  once(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    listener: Listener<$spotware.IProtoOASymbolCategoryListReq>
  ): void;
  once(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    listener: Listener<$spotware.IProtoOASymbolCategoryListRes>
  ): void;
  once(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    listener: Listener<$spotware.IProtoOAAccountLogoutReq>
  ): void;
  once(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    listener: Listener<$spotware.IProtoOAAccountLogoutRes>
  ): void;
  once(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAAccountDisconnectEvent>
  ): void;
}
