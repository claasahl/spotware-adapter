import Pbf from "pbf";
import * as $ from "@claasahl/spotware-protobuf";

import * as util from "./spotware-utils";
import { ProtoMessages } from "./spotware-messages";

export function write(message: ProtoMessages): Buffer {
  const pbf = new Pbf();
  switch (message.payloadType) {
    case $.ProtoPayloadType.PROTO_MESSAGE:
      $.ProtoMessageUtils.write(message.payload, pbf);
      break;
    case $.ProtoPayloadType.ERROR_RES:
      $.ProtoErrorResUtils.write(message.payload, pbf);
      break;
    case $.ProtoPayloadType.HEARTBEAT_EVENT:
      $.ProtoHeartbeatEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ:
      $.ProtoOAApplicationAuthReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES:
      $.ProtoOAApplicationAuthResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ:
      $.ProtoOAAccountAuthReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES:
      $.ProtoOAAccountAuthResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_VERSION_REQ:
      $.ProtoOAVersionReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_VERSION_RES:
      $.ProtoOAVersionResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ:
      $.ProtoOANewOrderReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT:
      $.ProtoOATrailingSLChangedEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ:
      $.ProtoOACancelOrderReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ:
      $.ProtoOAAmendOrderReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ:
      $.ProtoOAAmendPositionSLTPReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ:
      $.ProtoOAClosePositionReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ:
      $.ProtoOAAssetListReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES:
      $.ProtoOAAssetListResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ:
      $.ProtoOASymbolsListReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES:
      $.ProtoOASymbolsListResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ:
      $.ProtoOASymbolByIdReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES:
      $.ProtoOASymbolByIdResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ:
      $.ProtoOASymbolsForConversionReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES:
      $.ProtoOASymbolsForConversionResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT:
      $.ProtoOASymbolChangedEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_TRADER_REQ:
      $.ProtoOATraderReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_TRADER_RES:
      $.ProtoOATraderResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT:
      $.ProtoOATraderUpdatedEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ:
      $.ProtoOAReconcileReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_RECONCILE_RES:
      $.ProtoOAReconcileResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT:
      $.ProtoOAExecutionEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ:
      $.ProtoOASubscribeSpotsReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES:
      $.ProtoOASubscribeSpotsResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ:
      $.ProtoOAUnsubscribeSpotsReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES:
      $.ProtoOAUnsubscribeSpotsResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SPOT_EVENT:
      $.ProtoOASpotEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT:
      $.ProtoOAOrderErrorEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ:
      $.ProtoOADealListReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES:
      $.ProtoOADealListResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ:
      $.ProtoOASubscribeLiveTrendbarReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ:
      $.ProtoOAUnsubscribeLiveTrendbarReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ:
      $.ProtoOAGetTrendbarsReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES:
      $.ProtoOAGetTrendbarsResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ:
      $.ProtoOAExpectedMarginReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES:
      $.ProtoOAExpectedMarginResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT:
      $.ProtoOAMarginChangedEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ERROR_RES:
      $.ProtoOAErrorResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ:
      $.ProtoOACashFlowHistoryListReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES:
      $.ProtoOACashFlowHistoryListResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ:
      $.ProtoOAGetTickDataReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES:
      $.ProtoOAGetTickDataResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT:
      $.ProtoOAAccountsTokenInvalidatedEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT:
      $.ProtoOAClientDisconnectEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ:
      $.ProtoOAGetAccountListByAccessTokenReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES:
      $.ProtoOAGetAccountListByAccessTokenResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ:
      $.ProtoOAGetCtidProfileByTokenReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES:
      $.ProtoOAGetCtidProfileByTokenResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ:
      $.ProtoOAAssetClassListReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES:
      $.ProtoOAAssetClassListResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT:
      $.ProtoOADepthEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ:
      $.ProtoOASubscribeDepthQuotesReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES:
      $.ProtoOASubscribeDepthQuotesResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ:
      $.ProtoOAUnsubscribeDepthQuotesReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES:
      $.ProtoOAUnsubscribeDepthQuotesResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ:
      $.ProtoOASymbolCategoryListReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES:
      $.ProtoOASymbolCategoryListResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ:
      $.ProtoOAAccountLogoutReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES:
      $.ProtoOAAccountLogoutResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT:
      $.ProtoOAAccountDisconnectEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES:
      $.ProtoOASubscribeLiveTrendbarResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES:
      $.ProtoOAUnsubscribeLiveTrendbarResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_REQ:
      $.ProtoOAMarginCallListReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_RES:
      $.ProtoOAMarginCallListResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ:
      $.ProtoOAMarginCallUpdateReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES:
      $.ProtoOAMarginCallUpdateResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_EVENT:
      $.ProtoOAMarginCallUpdateEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_TRIGGER_EVENT:
      $.ProtoOAMarginCallTriggerEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_REQ:
      $.ProtoOARefreshTokenReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_RES:
      $.ProtoOARefreshTokenResUtils.write(message.payload, pbf);
      break;
  }
  return util.serialize({
    ...message,
    payload: pbf.finish(),
  });
}

export default function writeProtoMessages(message: ProtoMessages): Uint8Array {
  const pbf = new Pbf();
  switch (message.payloadType) {
    case $.ProtoPayloadType.PROTO_MESSAGE:
      $.ProtoMessageUtils.write(message.payload, pbf);
      break;
    case $.ProtoPayloadType.ERROR_RES:
      $.ProtoErrorResUtils.write(message.payload, pbf);
      break;
    case $.ProtoPayloadType.HEARTBEAT_EVENT:
      $.ProtoHeartbeatEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ:
      $.ProtoOAApplicationAuthReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES:
      $.ProtoOAApplicationAuthResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ:
      $.ProtoOAAccountAuthReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES:
      $.ProtoOAAccountAuthResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_VERSION_REQ:
      $.ProtoOAVersionReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_VERSION_RES:
      $.ProtoOAVersionResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ:
      $.ProtoOANewOrderReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT:
      $.ProtoOATrailingSLChangedEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ:
      $.ProtoOACancelOrderReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ:
      $.ProtoOAAmendOrderReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ:
      $.ProtoOAAmendPositionSLTPReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ:
      $.ProtoOAClosePositionReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ:
      $.ProtoOAAssetListReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES:
      $.ProtoOAAssetListResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ:
      $.ProtoOASymbolsListReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES:
      $.ProtoOASymbolsListResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ:
      $.ProtoOASymbolByIdReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES:
      $.ProtoOASymbolByIdResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ:
      $.ProtoOASymbolsForConversionReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES:
      $.ProtoOASymbolsForConversionResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT:
      $.ProtoOASymbolChangedEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_TRADER_REQ:
      $.ProtoOATraderReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_TRADER_RES:
      $.ProtoOATraderResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT:
      $.ProtoOATraderUpdatedEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ:
      $.ProtoOAReconcileReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_RECONCILE_RES:
      $.ProtoOAReconcileResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT:
      $.ProtoOAExecutionEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ:
      $.ProtoOASubscribeSpotsReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES:
      $.ProtoOASubscribeSpotsResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ:
      $.ProtoOAUnsubscribeSpotsReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES:
      $.ProtoOAUnsubscribeSpotsResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SPOT_EVENT:
      $.ProtoOASpotEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT:
      $.ProtoOAOrderErrorEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ:
      $.ProtoOADealListReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES:
      $.ProtoOADealListResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ:
      $.ProtoOASubscribeLiveTrendbarReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ:
      $.ProtoOAUnsubscribeLiveTrendbarReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ:
      $.ProtoOAGetTrendbarsReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES:
      $.ProtoOAGetTrendbarsResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ:
      $.ProtoOAExpectedMarginReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES:
      $.ProtoOAExpectedMarginResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT:
      $.ProtoOAMarginChangedEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ERROR_RES:
      $.ProtoOAErrorResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ:
      $.ProtoOACashFlowHistoryListReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES:
      $.ProtoOACashFlowHistoryListResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ:
      $.ProtoOAGetTickDataReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES:
      $.ProtoOAGetTickDataResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT:
      $.ProtoOAAccountsTokenInvalidatedEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT:
      $.ProtoOAClientDisconnectEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ:
      $.ProtoOAGetAccountListByAccessTokenReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES:
      $.ProtoOAGetAccountListByAccessTokenResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ:
      $.ProtoOAGetCtidProfileByTokenReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES:
      $.ProtoOAGetCtidProfileByTokenResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ:
      $.ProtoOAAssetClassListReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES:
      $.ProtoOAAssetClassListResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT:
      $.ProtoOADepthEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ:
      $.ProtoOASubscribeDepthQuotesReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES:
      $.ProtoOASubscribeDepthQuotesResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ:
      $.ProtoOAUnsubscribeDepthQuotesReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES:
      $.ProtoOAUnsubscribeDepthQuotesResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ:
      $.ProtoOASymbolCategoryListReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES:
      $.ProtoOASymbolCategoryListResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ:
      $.ProtoOAAccountLogoutReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES:
      $.ProtoOAAccountLogoutResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT:
      $.ProtoOAAccountDisconnectEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES:
      $.ProtoOASubscribeLiveTrendbarResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES:
      $.ProtoOAUnsubscribeLiveTrendbarResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_REQ:
      $.ProtoOAMarginCallListReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_RES:
      $.ProtoOAMarginCallListResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ:
      $.ProtoOAMarginCallUpdateReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES:
      $.ProtoOAMarginCallUpdateResUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_EVENT:
      $.ProtoOAMarginCallUpdateEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_TRIGGER_EVENT:
      $.ProtoOAMarginCallTriggerEventUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_REQ:
      $.ProtoOARefreshTokenReqUtils.write(message.payload, pbf);
      break;
    case $.ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_RES:
      $.ProtoOARefreshTokenResUtils.write(message.payload, pbf);
      break;
  }
  return pbf.finish();
}
