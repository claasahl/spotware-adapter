import * as $spotware from "../spotware-messages";

import ProtoErrorRes from "./ProtoErrorRes";
import ProtoHeartbeatEvent from "./ProtoHeartbeatEvent";
import ProtoOAApplicationAuthReq from "./ProtoOAApplicationAuthReq";
import ProtoOAApplicationAuthRes from "./ProtoOAApplicationAuthRes";
import ProtoOAAccountAuthReq from "./ProtoOAAccountAuthReq";
import ProtoOAAccountAuthRes from "./ProtoOAAccountAuthRes";
import ProtoOAErrorRes from "./ProtoOAErrorRes";
import ProtoOAClientDisconnectEvent from "./ProtoOAClientDisconnectEvent";
import ProtoOAAccountsTokenInvalidatedEvent from "./ProtoOAAccountsTokenInvalidatedEvent";
import ProtoOAVersionReq from "./ProtoOAVersionReq";
import ProtoOAVersionRes from "./ProtoOAVersionRes";
import ProtoOANewOrderReq from "./ProtoOANewOrderReq";
import ProtoOAExecutionEvent from "./ProtoOAExecutionEvent";
import ProtoOACancelOrderReq from "./ProtoOACancelOrderReq";
import ProtoOAAmendOrderReq from "./ProtoOAAmendOrderReq";
import ProtoOAAmendPositionSLTPReq from "./ProtoOAAmendPositionSLTPReq";
import ProtoOAClosePositionReq from "./ProtoOAClosePositionReq";
import ProtoOATrailingSLChangedEvent from "./ProtoOATrailingSLChangedEvent";
import ProtoOAAssetListReq from "./ProtoOAAssetListReq";
import ProtoOAAssetListRes from "./ProtoOAAssetListRes";
import ProtoOASymbolsListReq from "./ProtoOASymbolsListReq";
import ProtoOASymbolsListRes from "./ProtoOASymbolsListRes";
import ProtoOASymbolByIdReq from "./ProtoOASymbolByIdReq";
import ProtoOASymbolByIdRes from "./ProtoOASymbolByIdRes";
import ProtoOASymbolsForConversionReq from "./ProtoOASymbolsForConversionReq";
import ProtoOASymbolsForConversionRes from "./ProtoOASymbolsForConversionRes";
import ProtoOASymbolChangedEvent from "./ProtoOASymbolChangedEvent";
import ProtoOAAssetClassListReq from "./ProtoOAAssetClassListReq";
import ProtoOAAssetClassListRes from "./ProtoOAAssetClassListRes";
import ProtoOATraderReq from "./ProtoOATraderReq";
import ProtoOATraderRes from "./ProtoOATraderRes";
import ProtoOATraderUpdatedEvent from "./ProtoOATraderUpdatedEvent";
import ProtoOAReconcileReq from "./ProtoOAReconcileReq";
import ProtoOAReconcileRes from "./ProtoOAReconcileRes";
import ProtoOAOrderErrorEvent from "./ProtoOAOrderErrorEvent";
import ProtoOADealListReq from "./ProtoOADealListReq";
import ProtoOADealListRes from "./ProtoOADealListRes";
import ProtoOAExpectedMarginReq from "./ProtoOAExpectedMarginReq";
import ProtoOAExpectedMarginRes from "./ProtoOAExpectedMarginRes";
import ProtoOAMarginChangedEvent from "./ProtoOAMarginChangedEvent";
import ProtoOACashFlowHistoryListReq from "./ProtoOACashFlowHistoryListReq";
import ProtoOACashFlowHistoryListRes from "./ProtoOACashFlowHistoryListRes";
import ProtoOAGetAccountListByAccessTokenReq from "./ProtoOAGetAccountListByAccessTokenReq";
import ProtoOAGetAccountListByAccessTokenRes from "./ProtoOAGetAccountListByAccessTokenRes";
import ProtoOASubscribeSpotsReq from "./ProtoOASubscribeSpotsReq";
import ProtoOASubscribeSpotsRes from "./ProtoOASubscribeSpotsRes";
import ProtoOAUnsubscribeSpotsReq from "./ProtoOAUnsubscribeSpotsReq";
import ProtoOAUnsubscribeSpotsRes from "./ProtoOAUnsubscribeSpotsRes";
import ProtoOASpotEvent from "./ProtoOASpotEvent";
import ProtoOASubscribeLiveTrendbarReq from "./ProtoOASubscribeLiveTrendbarReq";
import ProtoOAUnsubscribeLiveTrendbarReq from "./ProtoOAUnsubscribeLiveTrendbarReq";
import ProtoOAGetTrendbarsReq from "./ProtoOAGetTrendbarsReq";
import ProtoOAGetTrendbarsRes from "./ProtoOAGetTrendbarsRes";
import ProtoOAGetTickDataReq from "./ProtoOAGetTickDataReq";
import ProtoOAGetTickDataRes from "./ProtoOAGetTickDataRes";
import ProtoOAGetCtidProfileByTokenReq from "./ProtoOAGetCtidProfileByTokenReq";
import ProtoOAGetCtidProfileByTokenRes from "./ProtoOAGetCtidProfileByTokenRes";
import ProtoOADepthEvent from "./ProtoOADepthEvent";
import ProtoOASubscribeDepthQuotesReq from "./ProtoOASubscribeDepthQuotesReq";
import ProtoOASubscribeDepthQuotesRes from "./ProtoOASubscribeDepthQuotesRes";
import ProtoOAUnsubscribeDepthQuotesReq from "./ProtoOAUnsubscribeDepthQuotesReq";
import ProtoOAUnsubscribeDepthQuotesRes from "./ProtoOAUnsubscribeDepthQuotesRes";
import ProtoOASymbolCategoryListReq from "./ProtoOASymbolCategoryListReq";
import ProtoOASymbolCategoryListRes from "./ProtoOASymbolCategoryListRes";
import ProtoOAAccountLogoutReq from "./ProtoOAAccountLogoutReq";
import ProtoOAAccountLogoutRes from "./ProtoOAAccountLogoutRes";
import ProtoOAAccountDisconnectEvent from "./ProtoOAAccountDisconnectEvent";

export * from "./ProtoErrorRes";
export * from "./ProtoHeartbeatEvent";
export * from "./ProtoOAApplicationAuthReq";
export * from "./ProtoOAApplicationAuthRes";
export * from "./ProtoOAAccountAuthReq";
export * from "./ProtoOAAccountAuthRes";
export * from "./ProtoOAErrorRes";
export * from "./ProtoOAClientDisconnectEvent";
export * from "./ProtoOAAccountsTokenInvalidatedEvent";
export * from "./ProtoOAVersionReq";
export * from "./ProtoOAVersionRes";
export * from "./ProtoOANewOrderReq";
export * from "./ProtoOAExecutionEvent";
export * from "./ProtoOACancelOrderReq";
export * from "./ProtoOAAmendOrderReq";
export * from "./ProtoOAAmendPositionSLTPReq";
export * from "./ProtoOAClosePositionReq";
export * from "./ProtoOATrailingSLChangedEvent";
export * from "./ProtoOAAssetListReq";
export * from "./ProtoOAAssetListRes";
export * from "./ProtoOASymbolsListReq";
export * from "./ProtoOASymbolsListRes";
export * from "./ProtoOASymbolByIdReq";
export * from "./ProtoOASymbolByIdRes";
export * from "./ProtoOASymbolsForConversionReq";
export * from "./ProtoOASymbolsForConversionRes";
export * from "./ProtoOASymbolChangedEvent";
export * from "./ProtoOAAssetClassListReq";
export * from "./ProtoOAAssetClassListRes";
export * from "./ProtoOATraderReq";
export * from "./ProtoOATraderRes";
export * from "./ProtoOATraderUpdatedEvent";
export * from "./ProtoOAReconcileReq";
export * from "./ProtoOAReconcileRes";
export * from "./ProtoOAOrderErrorEvent";
export * from "./ProtoOADealListReq";
export * from "./ProtoOADealListRes";
export * from "./ProtoOAExpectedMarginReq";
export * from "./ProtoOAExpectedMarginRes";
export * from "./ProtoOAMarginChangedEvent";
export * from "./ProtoOACashFlowHistoryListReq";
export * from "./ProtoOACashFlowHistoryListRes";
export * from "./ProtoOAGetAccountListByAccessTokenReq";
export * from "./ProtoOAGetAccountListByAccessTokenRes";
export * from "./ProtoOASubscribeSpotsReq";
export * from "./ProtoOASubscribeSpotsRes";
export * from "./ProtoOAUnsubscribeSpotsReq";
export * from "./ProtoOAUnsubscribeSpotsRes";
export * from "./ProtoOASpotEvent";
export * from "./ProtoOASubscribeLiveTrendbarReq";
export * from "./ProtoOAUnsubscribeLiveTrendbarReq";
export * from "./ProtoOAGetTrendbarsReq";
export * from "./ProtoOAGetTrendbarsRes";
export * from "./ProtoOAGetTickDataReq";
export * from "./ProtoOAGetTickDataRes";
export * from "./ProtoOAGetCtidProfileByTokenReq";
export * from "./ProtoOAGetCtidProfileByTokenRes";
export * from "./ProtoOADepthEvent";
export * from "./ProtoOASubscribeDepthQuotesReq";
export * from "./ProtoOASubscribeDepthQuotesRes";
export * from "./ProtoOAUnsubscribeDepthQuotesReq";
export * from "./ProtoOAUnsubscribeDepthQuotesRes";
export * from "./ProtoOASymbolCategoryListReq";
export * from "./ProtoOASymbolCategoryListRes";
export * from "./ProtoOAAccountLogoutReq";
export * from "./ProtoOAAccountLogoutRes";
export * from "./ProtoOAAccountDisconnectEvent";

type Message<M> = { message: M; clientMsgId?: string | null };

export function toProtoMessage(
  event: "ERROR_RES",
  message: $spotware.IProtoErrorRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "HEARTBEAT_EVENT",
  message: $spotware.IProtoHeartbeatEvent,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_APPLICATION_AUTH_REQ",
  message: $spotware.IProtoOAApplicationAuthReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_APPLICATION_AUTH_RES",
  message: $spotware.IProtoOAApplicationAuthRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_ACCOUNT_AUTH_REQ",
  message: $spotware.IProtoOAAccountAuthReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_ACCOUNT_AUTH_RES",
  message: $spotware.IProtoOAAccountAuthRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_ERROR_RES",
  message: $spotware.IProtoOAErrorRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
  message: $spotware.IProtoOAClientDisconnectEvent,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
  message: $spotware.IProtoOAAccountsTokenInvalidatedEvent,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_VERSION_REQ",
  message: $spotware.IProtoOAVersionReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_VERSION_RES",
  message: $spotware.IProtoOAVersionRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_NEW_ORDER_REQ",
  message: $spotware.IProtoOANewOrderReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_EXECUTION_EVENT",
  message: $spotware.IProtoOAExecutionEvent,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_CANCEL_ORDER_REQ",
  message: $spotware.IProtoOACancelOrderReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_AMEND_ORDER_REQ",
  message: $spotware.IProtoOAAmendOrderReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
  message: $spotware.IProtoOAAmendPositionSLTPReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_CLOSE_POSITION_REQ",
  message: $spotware.IProtoOAClosePositionReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
  message: $spotware.IProtoOATrailingSLChangedEvent,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_ASSET_LIST_REQ",
  message: $spotware.IProtoOAAssetListReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_ASSET_LIST_RES",
  message: $spotware.IProtoOAAssetListRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_SYMBOLS_LIST_REQ",
  message: $spotware.IProtoOASymbolsListReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_SYMBOLS_LIST_RES",
  message: $spotware.IProtoOASymbolsListRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_SYMBOL_BY_ID_REQ",
  message: $spotware.IProtoOASymbolByIdReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_SYMBOL_BY_ID_RES",
  message: $spotware.IProtoOASymbolByIdRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
  message: $spotware.IProtoOASymbolsForConversionReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
  message: $spotware.IProtoOASymbolsForConversionRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
  message: $spotware.IProtoOASymbolChangedEvent,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
  message: $spotware.IProtoOAAssetClassListReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_ASSET_CLASS_LIST_RES",
  message: $spotware.IProtoOAAssetClassListRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_TRADER_REQ",
  message: $spotware.IProtoOATraderReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_TRADER_RES",
  message: $spotware.IProtoOATraderRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_TRADER_UPDATE_EVENT",
  message: $spotware.IProtoOATraderUpdatedEvent,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_RECONCILE_REQ",
  message: $spotware.IProtoOAReconcileReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_RECONCILE_RES",
  message: $spotware.IProtoOAReconcileRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_ORDER_ERROR_EVENT",
  message: $spotware.IProtoOAOrderErrorEvent,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_DEAL_LIST_REQ",
  message: $spotware.IProtoOADealListReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_DEAL_LIST_RES",
  message: $spotware.IProtoOADealListRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_EXPECTED_MARGIN_REQ",
  message: $spotware.IProtoOAExpectedMarginReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_EXPECTED_MARGIN_RES",
  message: $spotware.IProtoOAExpectedMarginRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_MARGIN_CHANGED_EVENT",
  message: $spotware.IProtoOAMarginChangedEvent,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
  message: $spotware.IProtoOACashFlowHistoryListReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
  message: $spotware.IProtoOACashFlowHistoryListRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
  message: $spotware.IProtoOAGetAccountListByAccessTokenReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
  message: $spotware.IProtoOAGetAccountListByAccessTokenRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
  message: $spotware.IProtoOASubscribeSpotsReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
  message: $spotware.IProtoOASubscribeSpotsRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
  message: $spotware.IProtoOAUnsubscribeSpotsReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
  message: $spotware.IProtoOAUnsubscribeSpotsRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_SPOT_EVENT",
  message: $spotware.IProtoOASpotEvent,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
  message: $spotware.IProtoOASubscribeLiveTrendbarReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
  message: $spotware.IProtoOAUnsubscribeLiveTrendbarReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_GET_TRENDBARS_REQ",
  message: $spotware.IProtoOAGetTrendbarsReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_GET_TRENDBARS_RES",
  message: $spotware.IProtoOAGetTrendbarsRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_GET_TICKDATA_REQ",
  message: $spotware.IProtoOAGetTickDataReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_GET_TICKDATA_RES",
  message: $spotware.IProtoOAGetTickDataRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
  message: $spotware.IProtoOAGetCtidProfileByTokenReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
  message: $spotware.IProtoOAGetCtidProfileByTokenRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_DEPTH_EVENT",
  message: $spotware.IProtoOADepthEvent,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
  message: $spotware.IProtoOASubscribeDepthQuotesReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
  message: $spotware.IProtoOASubscribeDepthQuotesRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
  message: $spotware.IProtoOAUnsubscribeDepthQuotesReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
  message: $spotware.IProtoOAUnsubscribeDepthQuotesRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
  message: $spotware.IProtoOASymbolCategoryListReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_SYMBOL_CATEGORY_RES",
  message: $spotware.IProtoOASymbolCategoryListRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
  message: $spotware.IProtoOAAccountLogoutReq,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
  message: $spotware.IProtoOAAccountLogoutRes,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
  message: $spotware.IProtoOAAccountDisconnectEvent,
  clientMsgId?: string | null
): $spotware.IProtoMessage;
export function toProtoMessage(
  event: string,
  message: any,
  clientMsgId?: string | null
): $spotware.IProtoMessage {
  switch (event) {
    case "ERROR_RES":
      return ProtoErrorRes.toProtoMessage(message, clientMsgId);
    case "HEARTBEAT_EVENT":
      return ProtoHeartbeatEvent.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_APPLICATION_AUTH_REQ":
      return ProtoOAApplicationAuthReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_APPLICATION_AUTH_RES":
      return ProtoOAApplicationAuthRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_ACCOUNT_AUTH_REQ":
      return ProtoOAAccountAuthReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_ACCOUNT_AUTH_RES":
      return ProtoOAAccountAuthRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_ERROR_RES":
      return ProtoOAErrorRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_CLIENT_DISCONNECT_EVENT":
      return ProtoOAClientDisconnectEvent.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT":
      return ProtoOAAccountsTokenInvalidatedEvent.toProtoMessage(
        message,
        clientMsgId
      );
    case "PROTO_OA_VERSION_REQ":
      return ProtoOAVersionReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_VERSION_RES":
      return ProtoOAVersionRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_NEW_ORDER_REQ":
      return ProtoOANewOrderReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_EXECUTION_EVENT":
      return ProtoOAExecutionEvent.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_CANCEL_ORDER_REQ":
      return ProtoOACancelOrderReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_AMEND_ORDER_REQ":
      return ProtoOAAmendOrderReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_AMEND_POSITION_SLTP_REQ":
      return ProtoOAAmendPositionSLTPReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_CLOSE_POSITION_REQ":
      return ProtoOAClosePositionReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_TRAILING_SL_CHANGED_EVENT":
      return ProtoOATrailingSLChangedEvent.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_ASSET_LIST_REQ":
      return ProtoOAAssetListReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_ASSET_LIST_RES":
      return ProtoOAAssetListRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_SYMBOLS_LIST_REQ":
      return ProtoOASymbolsListReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_SYMBOLS_LIST_RES":
      return ProtoOASymbolsListRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_SYMBOL_BY_ID_REQ":
      return ProtoOASymbolByIdReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_SYMBOL_BY_ID_RES":
      return ProtoOASymbolByIdRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ":
      return ProtoOASymbolsForConversionReq.toProtoMessage(
        message,
        clientMsgId
      );
    case "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES":
      return ProtoOASymbolsForConversionRes.toProtoMessage(
        message,
        clientMsgId
      );
    case "PROTO_OA_SYMBOL_CHANGED_EVENT":
      return ProtoOASymbolChangedEvent.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_ASSET_CLASS_LIST_REQ":
      return ProtoOAAssetClassListReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_ASSET_CLASS_LIST_RES":
      return ProtoOAAssetClassListRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_TRADER_REQ":
      return ProtoOATraderReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_TRADER_RES":
      return ProtoOATraderRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_TRADER_UPDATE_EVENT":
      return ProtoOATraderUpdatedEvent.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_RECONCILE_REQ":
      return ProtoOAReconcileReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_RECONCILE_RES":
      return ProtoOAReconcileRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_ORDER_ERROR_EVENT":
      return ProtoOAOrderErrorEvent.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_DEAL_LIST_REQ":
      return ProtoOADealListReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_DEAL_LIST_RES":
      return ProtoOADealListRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_EXPECTED_MARGIN_REQ":
      return ProtoOAExpectedMarginReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_EXPECTED_MARGIN_RES":
      return ProtoOAExpectedMarginRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_MARGIN_CHANGED_EVENT":
      return ProtoOAMarginChangedEvent.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ":
      return ProtoOACashFlowHistoryListReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES":
      return ProtoOACashFlowHistoryListRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ":
      return ProtoOAGetAccountListByAccessTokenReq.toProtoMessage(
        message,
        clientMsgId
      );
    case "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES":
      return ProtoOAGetAccountListByAccessTokenRes.toProtoMessage(
        message,
        clientMsgId
      );
    case "PROTO_OA_SUBSCRIBE_SPOTS_REQ":
      return ProtoOASubscribeSpotsReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_SUBSCRIBE_SPOTS_RES":
      return ProtoOASubscribeSpotsRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ":
      return ProtoOAUnsubscribeSpotsReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_UNSUBSCRIBE_SPOTS_RES":
      return ProtoOAUnsubscribeSpotsRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_SPOT_EVENT":
      return ProtoOASpotEvent.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ":
      return ProtoOASubscribeLiveTrendbarReq.toProtoMessage(
        message,
        clientMsgId
      );
    case "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ":
      return ProtoOAUnsubscribeLiveTrendbarReq.toProtoMessage(
        message,
        clientMsgId
      );
    case "PROTO_OA_GET_TRENDBARS_REQ":
      return ProtoOAGetTrendbarsReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_GET_TRENDBARS_RES":
      return ProtoOAGetTrendbarsRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_GET_TICKDATA_REQ":
      return ProtoOAGetTickDataReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_GET_TICKDATA_RES":
      return ProtoOAGetTickDataRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ":
      return ProtoOAGetCtidProfileByTokenReq.toProtoMessage(
        message,
        clientMsgId
      );
    case "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES":
      return ProtoOAGetCtidProfileByTokenRes.toProtoMessage(
        message,
        clientMsgId
      );
    case "PROTO_OA_DEPTH_EVENT":
      return ProtoOADepthEvent.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ":
      return ProtoOASubscribeDepthQuotesReq.toProtoMessage(
        message,
        clientMsgId
      );
    case "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES":
      return ProtoOASubscribeDepthQuotesRes.toProtoMessage(
        message,
        clientMsgId
      );
    case "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ":
      return ProtoOAUnsubscribeDepthQuotesReq.toProtoMessage(
        message,
        clientMsgId
      );
    case "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES":
      return ProtoOAUnsubscribeDepthQuotesRes.toProtoMessage(
        message,
        clientMsgId
      );
    case "PROTO_OA_SYMBOL_CATEGORY_REQ":
      return ProtoOASymbolCategoryListReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_SYMBOL_CATEGORY_RES":
      return ProtoOASymbolCategoryListRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_ACCOUNT_LOGOUT_REQ":
      return ProtoOAAccountLogoutReq.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_ACCOUNT_LOGOUT_RES":
      return ProtoOAAccountLogoutRes.toProtoMessage(message, clientMsgId);
    case "PROTO_OA_ACCOUNT_DISCONNECT_EVENT":
      return ProtoOAAccountDisconnectEvent.toProtoMessage(message, clientMsgId);
  }
  throw new Error(`unknown event ${event}`);
}

export function fromProtoMessage(
  event: "ERROR_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoErrorRes>;
export function fromProtoMessage(
  event: "HEARTBEAT_EVENT",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoHeartbeatEvent>;
export function fromProtoMessage(
  event: "PROTO_OA_APPLICATION_AUTH_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAApplicationAuthReq>;
export function fromProtoMessage(
  event: "PROTO_OA_APPLICATION_AUTH_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAApplicationAuthRes>;
export function fromProtoMessage(
  event: "PROTO_OA_ACCOUNT_AUTH_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAAccountAuthReq>;
export function fromProtoMessage(
  event: "PROTO_OA_ACCOUNT_AUTH_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAAccountAuthRes>;
export function fromProtoMessage(
  event: "PROTO_OA_ERROR_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAErrorRes>;
export function fromProtoMessage(
  event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAClientDisconnectEvent>;
export function fromProtoMessage(
  event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAAccountsTokenInvalidatedEvent>;
export function fromProtoMessage(
  event: "PROTO_OA_VERSION_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAVersionReq>;
export function fromProtoMessage(
  event: "PROTO_OA_VERSION_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAVersionRes>;
export function fromProtoMessage(
  event: "PROTO_OA_NEW_ORDER_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOANewOrderReq>;
export function fromProtoMessage(
  event: "PROTO_OA_EXECUTION_EVENT",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAExecutionEvent>;
export function fromProtoMessage(
  event: "PROTO_OA_CANCEL_ORDER_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOACancelOrderReq>;
export function fromProtoMessage(
  event: "PROTO_OA_AMEND_ORDER_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAAmendOrderReq>;
export function fromProtoMessage(
  event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAAmendPositionSLTPReq>;
export function fromProtoMessage(
  event: "PROTO_OA_CLOSE_POSITION_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAClosePositionReq>;
export function fromProtoMessage(
  event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOATrailingSLChangedEvent>;
export function fromProtoMessage(
  event: "PROTO_OA_ASSET_LIST_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAAssetListReq>;
export function fromProtoMessage(
  event: "PROTO_OA_ASSET_LIST_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAAssetListRes>;
export function fromProtoMessage(
  event: "PROTO_OA_SYMBOLS_LIST_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOASymbolsListReq>;
export function fromProtoMessage(
  event: "PROTO_OA_SYMBOLS_LIST_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOASymbolsListRes>;
export function fromProtoMessage(
  event: "PROTO_OA_SYMBOL_BY_ID_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOASymbolByIdReq>;
export function fromProtoMessage(
  event: "PROTO_OA_SYMBOL_BY_ID_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOASymbolByIdRes>;
export function fromProtoMessage(
  event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOASymbolsForConversionReq>;
export function fromProtoMessage(
  event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOASymbolsForConversionRes>;
export function fromProtoMessage(
  event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOASymbolChangedEvent>;
export function fromProtoMessage(
  event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAAssetClassListReq>;
export function fromProtoMessage(
  event: "PROTO_OA_ASSET_CLASS_LIST_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAAssetClassListRes>;
export function fromProtoMessage(
  event: "PROTO_OA_TRADER_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOATraderReq>;
export function fromProtoMessage(
  event: "PROTO_OA_TRADER_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOATraderRes>;
export function fromProtoMessage(
  event: "PROTO_OA_TRADER_UPDATE_EVENT",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOATraderUpdatedEvent>;
export function fromProtoMessage(
  event: "PROTO_OA_RECONCILE_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAReconcileReq>;
export function fromProtoMessage(
  event: "PROTO_OA_RECONCILE_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAReconcileRes>;
export function fromProtoMessage(
  event: "PROTO_OA_ORDER_ERROR_EVENT",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAOrderErrorEvent>;
export function fromProtoMessage(
  event: "PROTO_OA_DEAL_LIST_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOADealListReq>;
export function fromProtoMessage(
  event: "PROTO_OA_DEAL_LIST_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOADealListRes>;
export function fromProtoMessage(
  event: "PROTO_OA_EXPECTED_MARGIN_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAExpectedMarginReq>;
export function fromProtoMessage(
  event: "PROTO_OA_EXPECTED_MARGIN_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAExpectedMarginRes>;
export function fromProtoMessage(
  event: "PROTO_OA_MARGIN_CHANGED_EVENT",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAMarginChangedEvent>;
export function fromProtoMessage(
  event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOACashFlowHistoryListReq>;
export function fromProtoMessage(
  event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOACashFlowHistoryListRes>;
export function fromProtoMessage(
  event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAGetAccountListByAccessTokenReq>;
export function fromProtoMessage(
  event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAGetAccountListByAccessTokenRes>;
export function fromProtoMessage(
  event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOASubscribeSpotsReq>;
export function fromProtoMessage(
  event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOASubscribeSpotsRes>;
export function fromProtoMessage(
  event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAUnsubscribeSpotsReq>;
export function fromProtoMessage(
  event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAUnsubscribeSpotsRes>;
export function fromProtoMessage(
  event: "PROTO_OA_SPOT_EVENT",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOASpotEvent>;
export function fromProtoMessage(
  event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOASubscribeLiveTrendbarReq>;
export function fromProtoMessage(
  event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>;
export function fromProtoMessage(
  event: "PROTO_OA_GET_TRENDBARS_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAGetTrendbarsReq>;
export function fromProtoMessage(
  event: "PROTO_OA_GET_TRENDBARS_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAGetTrendbarsRes>;
export function fromProtoMessage(
  event: "PROTO_OA_GET_TICKDATA_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAGetTickDataReq>;
export function fromProtoMessage(
  event: "PROTO_OA_GET_TICKDATA_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAGetTickDataRes>;
export function fromProtoMessage(
  event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAGetCtidProfileByTokenReq>;
export function fromProtoMessage(
  event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAGetCtidProfileByTokenRes>;
export function fromProtoMessage(
  event: "PROTO_OA_DEPTH_EVENT",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOADepthEvent>;
export function fromProtoMessage(
  event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOASubscribeDepthQuotesReq>;
export function fromProtoMessage(
  event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOASubscribeDepthQuotesRes>;
export function fromProtoMessage(
  event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAUnsubscribeDepthQuotesReq>;
export function fromProtoMessage(
  event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAUnsubscribeDepthQuotesRes>;
export function fromProtoMessage(
  event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOASymbolCategoryListReq>;
export function fromProtoMessage(
  event: "PROTO_OA_SYMBOL_CATEGORY_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOASymbolCategoryListRes>;
export function fromProtoMessage(
  event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAAccountLogoutReq>;
export function fromProtoMessage(
  event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAAccountLogoutRes>;
export function fromProtoMessage(
  event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
  message: $spotware.IProtoMessage
): Message<$spotware.IProtoOAAccountDisconnectEvent>;
export function fromProtoMessage(
  event: string,
  message: $spotware.IProtoMessage
): Message<any> {
  switch (event) {
    case "ERROR_RES":
      return ProtoErrorRes.fromProtoMessage(message);
    case "HEARTBEAT_EVENT":
      return ProtoHeartbeatEvent.fromProtoMessage(message);
    case "PROTO_OA_APPLICATION_AUTH_REQ":
      return ProtoOAApplicationAuthReq.fromProtoMessage(message);
    case "PROTO_OA_APPLICATION_AUTH_RES":
      return ProtoOAApplicationAuthRes.fromProtoMessage(message);
    case "PROTO_OA_ACCOUNT_AUTH_REQ":
      return ProtoOAAccountAuthReq.fromProtoMessage(message);
    case "PROTO_OA_ACCOUNT_AUTH_RES":
      return ProtoOAAccountAuthRes.fromProtoMessage(message);
    case "PROTO_OA_ERROR_RES":
      return ProtoOAErrorRes.fromProtoMessage(message);
    case "PROTO_OA_CLIENT_DISCONNECT_EVENT":
      return ProtoOAClientDisconnectEvent.fromProtoMessage(message);
    case "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT":
      return ProtoOAAccountsTokenInvalidatedEvent.fromProtoMessage(message);
    case "PROTO_OA_VERSION_REQ":
      return ProtoOAVersionReq.fromProtoMessage(message);
    case "PROTO_OA_VERSION_RES":
      return ProtoOAVersionRes.fromProtoMessage(message);
    case "PROTO_OA_NEW_ORDER_REQ":
      return ProtoOANewOrderReq.fromProtoMessage(message);
    case "PROTO_OA_EXECUTION_EVENT":
      return ProtoOAExecutionEvent.fromProtoMessage(message);
    case "PROTO_OA_CANCEL_ORDER_REQ":
      return ProtoOACancelOrderReq.fromProtoMessage(message);
    case "PROTO_OA_AMEND_ORDER_REQ":
      return ProtoOAAmendOrderReq.fromProtoMessage(message);
    case "PROTO_OA_AMEND_POSITION_SLTP_REQ":
      return ProtoOAAmendPositionSLTPReq.fromProtoMessage(message);
    case "PROTO_OA_CLOSE_POSITION_REQ":
      return ProtoOAClosePositionReq.fromProtoMessage(message);
    case "PROTO_OA_TRAILING_SL_CHANGED_EVENT":
      return ProtoOATrailingSLChangedEvent.fromProtoMessage(message);
    case "PROTO_OA_ASSET_LIST_REQ":
      return ProtoOAAssetListReq.fromProtoMessage(message);
    case "PROTO_OA_ASSET_LIST_RES":
      return ProtoOAAssetListRes.fromProtoMessage(message);
    case "PROTO_OA_SYMBOLS_LIST_REQ":
      return ProtoOASymbolsListReq.fromProtoMessage(message);
    case "PROTO_OA_SYMBOLS_LIST_RES":
      return ProtoOASymbolsListRes.fromProtoMessage(message);
    case "PROTO_OA_SYMBOL_BY_ID_REQ":
      return ProtoOASymbolByIdReq.fromProtoMessage(message);
    case "PROTO_OA_SYMBOL_BY_ID_RES":
      return ProtoOASymbolByIdRes.fromProtoMessage(message);
    case "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ":
      return ProtoOASymbolsForConversionReq.fromProtoMessage(message);
    case "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES":
      return ProtoOASymbolsForConversionRes.fromProtoMessage(message);
    case "PROTO_OA_SYMBOL_CHANGED_EVENT":
      return ProtoOASymbolChangedEvent.fromProtoMessage(message);
    case "PROTO_OA_ASSET_CLASS_LIST_REQ":
      return ProtoOAAssetClassListReq.fromProtoMessage(message);
    case "PROTO_OA_ASSET_CLASS_LIST_RES":
      return ProtoOAAssetClassListRes.fromProtoMessage(message);
    case "PROTO_OA_TRADER_REQ":
      return ProtoOATraderReq.fromProtoMessage(message);
    case "PROTO_OA_TRADER_RES":
      return ProtoOATraderRes.fromProtoMessage(message);
    case "PROTO_OA_TRADER_UPDATE_EVENT":
      return ProtoOATraderUpdatedEvent.fromProtoMessage(message);
    case "PROTO_OA_RECONCILE_REQ":
      return ProtoOAReconcileReq.fromProtoMessage(message);
    case "PROTO_OA_RECONCILE_RES":
      return ProtoOAReconcileRes.fromProtoMessage(message);
    case "PROTO_OA_ORDER_ERROR_EVENT":
      return ProtoOAOrderErrorEvent.fromProtoMessage(message);
    case "PROTO_OA_DEAL_LIST_REQ":
      return ProtoOADealListReq.fromProtoMessage(message);
    case "PROTO_OA_DEAL_LIST_RES":
      return ProtoOADealListRes.fromProtoMessage(message);
    case "PROTO_OA_EXPECTED_MARGIN_REQ":
      return ProtoOAExpectedMarginReq.fromProtoMessage(message);
    case "PROTO_OA_EXPECTED_MARGIN_RES":
      return ProtoOAExpectedMarginRes.fromProtoMessage(message);
    case "PROTO_OA_MARGIN_CHANGED_EVENT":
      return ProtoOAMarginChangedEvent.fromProtoMessage(message);
    case "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ":
      return ProtoOACashFlowHistoryListReq.fromProtoMessage(message);
    case "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES":
      return ProtoOACashFlowHistoryListRes.fromProtoMessage(message);
    case "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ":
      return ProtoOAGetAccountListByAccessTokenReq.fromProtoMessage(message);
    case "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES":
      return ProtoOAGetAccountListByAccessTokenRes.fromProtoMessage(message);
    case "PROTO_OA_SUBSCRIBE_SPOTS_REQ":
      return ProtoOASubscribeSpotsReq.fromProtoMessage(message);
    case "PROTO_OA_SUBSCRIBE_SPOTS_RES":
      return ProtoOASubscribeSpotsRes.fromProtoMessage(message);
    case "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ":
      return ProtoOAUnsubscribeSpotsReq.fromProtoMessage(message);
    case "PROTO_OA_UNSUBSCRIBE_SPOTS_RES":
      return ProtoOAUnsubscribeSpotsRes.fromProtoMessage(message);
    case "PROTO_OA_SPOT_EVENT":
      return ProtoOASpotEvent.fromProtoMessage(message);
    case "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ":
      return ProtoOASubscribeLiveTrendbarReq.fromProtoMessage(message);
    case "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ":
      return ProtoOAUnsubscribeLiveTrendbarReq.fromProtoMessage(message);
    case "PROTO_OA_GET_TRENDBARS_REQ":
      return ProtoOAGetTrendbarsReq.fromProtoMessage(message);
    case "PROTO_OA_GET_TRENDBARS_RES":
      return ProtoOAGetTrendbarsRes.fromProtoMessage(message);
    case "PROTO_OA_GET_TICKDATA_REQ":
      return ProtoOAGetTickDataReq.fromProtoMessage(message);
    case "PROTO_OA_GET_TICKDATA_RES":
      return ProtoOAGetTickDataRes.fromProtoMessage(message);
    case "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ":
      return ProtoOAGetCtidProfileByTokenReq.fromProtoMessage(message);
    case "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES":
      return ProtoOAGetCtidProfileByTokenRes.fromProtoMessage(message);
    case "PROTO_OA_DEPTH_EVENT":
      return ProtoOADepthEvent.fromProtoMessage(message);
    case "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ":
      return ProtoOASubscribeDepthQuotesReq.fromProtoMessage(message);
    case "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES":
      return ProtoOASubscribeDepthQuotesRes.fromProtoMessage(message);
    case "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ":
      return ProtoOAUnsubscribeDepthQuotesReq.fromProtoMessage(message);
    case "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES":
      return ProtoOAUnsubscribeDepthQuotesRes.fromProtoMessage(message);
    case "PROTO_OA_SYMBOL_CATEGORY_REQ":
      return ProtoOASymbolCategoryListReq.fromProtoMessage(message);
    case "PROTO_OA_SYMBOL_CATEGORY_RES":
      return ProtoOASymbolCategoryListRes.fromProtoMessage(message);
    case "PROTO_OA_ACCOUNT_LOGOUT_REQ":
      return ProtoOAAccountLogoutReq.fromProtoMessage(message);
    case "PROTO_OA_ACCOUNT_LOGOUT_RES":
      return ProtoOAAccountLogoutRes.fromProtoMessage(message);
    case "PROTO_OA_ACCOUNT_DISCONNECT_EVENT":
      return ProtoOAAccountDisconnectEvent.fromProtoMessage(message);
  }
  throw new Error(`unknown event ${event}`);
}
