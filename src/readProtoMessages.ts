import tls from "tls";
import Pbf from "pbf";
import * as $ from "@claasahl/spotware-protobuf";

import * as util from "./spotware-utils";
import { ProtoMessages } from "./spotware-messages";

export function read(data: Buffer): ProtoMessages {
  const { clientMsgId, payloadType, payload } = util.deserialize(data);
  const pbf = new Pbf(payload);
  switch (payloadType) {
    case $.ProtoPayloadType.PROTO_MESSAGE:
      return {
        payloadType: $.ProtoPayloadType.PROTO_MESSAGE,
        payload: $.ProtoMessageUtils.read(pbf),
        clientMsgId,
      };
    case $.ProtoPayloadType.ERROR_RES:
      return {
        payloadType: $.ProtoPayloadType.ERROR_RES,
        payload: $.ProtoErrorResUtils.read(pbf),
        clientMsgId,
      };
    case $.ProtoPayloadType.HEARTBEAT_EVENT:
      return {
        payloadType: $.ProtoPayloadType.HEARTBEAT_EVENT,
        payload: $.ProtoHeartbeatEventUtils.read(pbf),
        clientMsgId,
      };
    case $.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ,
        payload: $.ProtoOAApplicationAuthReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES,
        payload: $.ProtoOAApplicationAuthResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ,
        payload: $.ProtoOAAccountAuthReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES,
        payload: $.ProtoOAAccountAuthResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_VERSION_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_VERSION_REQ,
        payload: $.ProtoOAVersionReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_VERSION_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_VERSION_RES,
        payload: $.ProtoOAVersionResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ,
        payload: $.ProtoOANewOrderReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT,
        payload: $.ProtoOATrailingSLChangedEventUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ,
        payload: $.ProtoOACancelOrderReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ,
        payload: $.ProtoOAAmendOrderReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ,
        payload: $.ProtoOAAmendPositionSLTPReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ,
        payload: $.ProtoOAClosePositionReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ,
        payload: $.ProtoOAAssetListReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES,
        payload: $.ProtoOAAssetListResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ,
        payload: $.ProtoOASymbolsListReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES,
        payload: $.ProtoOASymbolsListResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ,
        payload: $.ProtoOASymbolByIdReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES,
        payload: $.ProtoOASymbolByIdResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ,
        payload: $.ProtoOASymbolsForConversionReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES,
        payload: $.ProtoOASymbolsForConversionResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT,
        payload: $.ProtoOASymbolChangedEventUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_TRADER_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_TRADER_REQ,
        payload: $.ProtoOATraderReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_TRADER_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_TRADER_RES,
        payload: $.ProtoOATraderResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT,
        payload: $.ProtoOATraderUpdatedEventUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ,
        payload: $.ProtoOAReconcileReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_RECONCILE_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_RECONCILE_RES,
        payload: $.ProtoOAReconcileResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
        payload: $.ProtoOAExecutionEventUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ,
        payload: $.ProtoOASubscribeSpotsReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES,
        payload: $.ProtoOASubscribeSpotsResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
        payload: $.ProtoOAUnsubscribeSpotsReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
        payload: $.ProtoOAUnsubscribeSpotsResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SPOT_EVENT:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SPOT_EVENT,
        payload: $.ProtoOASpotEventUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT,
        payload: $.ProtoOAOrderErrorEventUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ,
        payload: $.ProtoOADealListReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES,
        payload: $.ProtoOADealListResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ,
        payload: $.ProtoOASubscribeLiveTrendbarReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ:
      return {
        payloadType:
          $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ,
        payload: $.ProtoOAUnsubscribeLiveTrendbarReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ,
        payload: $.ProtoOAGetTrendbarsReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES,
        payload: $.ProtoOAGetTrendbarsResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ,
        payload: $.ProtoOAExpectedMarginReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES,
        payload: $.ProtoOAExpectedMarginResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT,
        payload: $.ProtoOAMarginChangedEventUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_ERROR_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_ERROR_RES,
        payload: $.ProtoOAErrorResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ,
        payload: $.ProtoOACashFlowHistoryListReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES,
        payload: $.ProtoOACashFlowHistoryListResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ,
        payload: $.ProtoOAGetTickDataReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES,
        payload: $.ProtoOAGetTickDataResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT:
      return {
        payloadType:
          $.ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT,
        payload: $.ProtoOAAccountsTokenInvalidatedEventUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT,
        payload: $.ProtoOAClientDisconnectEventUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ:
      return {
        payloadType:
          $.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
        payload: $.ProtoOAGetAccountListByAccessTokenReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES:
      return {
        payloadType:
          $.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
        payload: $.ProtoOAGetAccountListByAccessTokenResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ:
      return {
        payloadType:
          $.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ,
        payload: $.ProtoOAGetCtidProfileByTokenReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES:
      return {
        payloadType:
          $.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES,
        payload: $.ProtoOAGetCtidProfileByTokenResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ,
        payload: $.ProtoOAAssetClassListReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES,
        payload: $.ProtoOAAssetClassListResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT,
        payload: $.ProtoOADepthEventUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ,
        payload: $.ProtoOASubscribeDepthQuotesReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES,
        payload: $.ProtoOASubscribeDepthQuotesResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ,
        payload: $.ProtoOAUnsubscribeDepthQuotesReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES,
        payload: $.ProtoOAUnsubscribeDepthQuotesResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ,
        payload: $.ProtoOASymbolCategoryListReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES,
        payload: $.ProtoOASymbolCategoryListResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ,
        payload: $.ProtoOAAccountLogoutReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES,
        payload: $.ProtoOAAccountLogoutResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT,
        payload: $.ProtoOAAccountDisconnectEventUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES,
        payload: $.ProtoOASubscribeLiveTrendbarResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES:
      return {
        payloadType:
          $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES,
        payload: $.ProtoOAUnsubscribeLiveTrendbarResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_REQ,
        payload: $.ProtoOAMarginCallListReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_RES,
        payload: $.ProtoOAMarginCallListResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ,
        payload: $.ProtoOAMarginCallUpdateReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES,
        payload: $.ProtoOAMarginCallUpdateResUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_EVENT:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_EVENT,
        payload: $.ProtoOAMarginCallUpdateEventUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_TRIGGER_EVENT:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_TRIGGER_EVENT,
        payload: $.ProtoOAMarginCallTriggerEventUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_REQ:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_REQ,
        payload: $.ProtoOARefreshTokenReqUtils.read(pbf),
        clientMsgId,
      };

    case $.ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_RES:
      return {
        payloadType: $.ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_RES,
        payload: $.ProtoOARefreshTokenResUtils.read(pbf),
        clientMsgId,
      };
  }
  throw new Error(`unknown payloadType ${payloadType}`);
}

export default function readProtoMessage(
  socket: tls.TLSSocket,
  message: $.ProtoMessage,
  namespace?: string
): void {
  const msg: {
    clientMsgId?: string;
    payloadType: number;
    payload: any;
  } = {
    clientMsgId: message.clientMsgId,
    payloadType: message.payloadType,
    payload: message.payload,
  };
  switch (message.payloadType) {
    case $.ProtoPayloadType.PROTO_MESSAGE:
      msg.payload = $.ProtoMessageUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoPayloadType.ERROR_RES:
      msg.payload = $.ProtoErrorResUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoPayloadType.HEARTBEAT_EVENT:
      msg.payload = $.ProtoHeartbeatEventUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ:
      msg.payload = $.ProtoOAApplicationAuthReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES:
      msg.payload = $.ProtoOAApplicationAuthResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ:
      msg.payload = $.ProtoOAAccountAuthReqUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES:
      msg.payload = $.ProtoOAAccountAuthResUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_VERSION_REQ:
      msg.payload = $.ProtoOAVersionReqUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_VERSION_RES:
      msg.payload = $.ProtoOAVersionResUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ:
      msg.payload = $.ProtoOANewOrderReqUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT:
      msg.payload = $.ProtoOATrailingSLChangedEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ:
      msg.payload = $.ProtoOACancelOrderReqUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ:
      msg.payload = $.ProtoOAAmendOrderReqUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ:
      msg.payload = $.ProtoOAAmendPositionSLTPReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ:
      msg.payload = $.ProtoOAClosePositionReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ:
      msg.payload = $.ProtoOAAssetListReqUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES:
      msg.payload = $.ProtoOAAssetListResUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ:
      msg.payload = $.ProtoOASymbolsListReqUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES:
      msg.payload = $.ProtoOASymbolsListResUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ:
      msg.payload = $.ProtoOASymbolByIdReqUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES:
      msg.payload = $.ProtoOASymbolByIdResUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ:
      msg.payload = $.ProtoOASymbolsForConversionReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES:
      msg.payload = $.ProtoOASymbolsForConversionResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT:
      msg.payload = $.ProtoOASymbolChangedEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_TRADER_REQ:
      msg.payload = $.ProtoOATraderReqUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_TRADER_RES:
      msg.payload = $.ProtoOATraderResUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT:
      msg.payload = $.ProtoOATraderUpdatedEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ:
      msg.payload = $.ProtoOAReconcileReqUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_RECONCILE_RES:
      msg.payload = $.ProtoOAReconcileResUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT:
      msg.payload = $.ProtoOAExecutionEventUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ:
      msg.payload = $.ProtoOASubscribeSpotsReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES:
      msg.payload = $.ProtoOASubscribeSpotsResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ:
      msg.payload = $.ProtoOAUnsubscribeSpotsReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES:
      msg.payload = $.ProtoOAUnsubscribeSpotsResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SPOT_EVENT:
      msg.payload = $.ProtoOASpotEventUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT:
      msg.payload = $.ProtoOAOrderErrorEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ:
      msg.payload = $.ProtoOADealListReqUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES:
      msg.payload = $.ProtoOADealListResUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ:
      msg.payload = $.ProtoOASubscribeLiveTrendbarReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ:
      msg.payload = $.ProtoOAUnsubscribeLiveTrendbarReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ:
      msg.payload = $.ProtoOAGetTrendbarsReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES:
      msg.payload = $.ProtoOAGetTrendbarsResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ:
      msg.payload = $.ProtoOAExpectedMarginReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES:
      msg.payload = $.ProtoOAExpectedMarginResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT:
      msg.payload = $.ProtoOAMarginChangedEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ERROR_RES:
      msg.payload = $.ProtoOAErrorResUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ:
      msg.payload = $.ProtoOACashFlowHistoryListReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES:
      msg.payload = $.ProtoOACashFlowHistoryListResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ:
      msg.payload = $.ProtoOAGetTickDataReqUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES:
      msg.payload = $.ProtoOAGetTickDataResUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT:
      msg.payload = $.ProtoOAAccountsTokenInvalidatedEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT:
      msg.payload = $.ProtoOAClientDisconnectEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ:
      msg.payload = $.ProtoOAGetAccountListByAccessTokenReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES:
      msg.payload = $.ProtoOAGetAccountListByAccessTokenResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ:
      msg.payload = $.ProtoOAGetCtidProfileByTokenReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES:
      msg.payload = $.ProtoOAGetCtidProfileByTokenResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ:
      msg.payload = $.ProtoOAAssetClassListReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES:
      msg.payload = $.ProtoOAAssetClassListResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT:
      msg.payload = $.ProtoOADepthEventUtils.read(new Pbf(message.payload));
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ:
      msg.payload = $.ProtoOASubscribeDepthQuotesReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES:
      msg.payload = $.ProtoOASubscribeDepthQuotesResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ:
      msg.payload = $.ProtoOAUnsubscribeDepthQuotesReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES:
      msg.payload = $.ProtoOAUnsubscribeDepthQuotesResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ:
      msg.payload = $.ProtoOASymbolCategoryListReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES:
      msg.payload = $.ProtoOASymbolCategoryListResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ:
      msg.payload = $.ProtoOAAccountLogoutReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES:
      msg.payload = $.ProtoOAAccountLogoutResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT:
      msg.payload = $.ProtoOAAccountDisconnectEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES:
      msg.payload = $.ProtoOASubscribeLiveTrendbarResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES:
      msg.payload = $.ProtoOAUnsubscribeLiveTrendbarResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_REQ:
      msg.payload = $.ProtoOAMarginCallListReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_RES:
      msg.payload = $.ProtoOAMarginCallListResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ:
      msg.payload = $.ProtoOAMarginCallUpdateReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES:
      msg.payload = $.ProtoOAMarginCallUpdateResUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_EVENT:
      msg.payload = $.ProtoOAMarginCallUpdateEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_TRIGGER_EVENT:
      msg.payload = $.ProtoOAMarginCallTriggerEventUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_REQ:
      msg.payload = $.ProtoOARefreshTokenReqUtils.read(
        new Pbf(message.payload)
      );
      break;
    case $.ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_RES:
      msg.payload = $.ProtoOARefreshTokenResUtils.read(
        new Pbf(message.payload)
      );
      break;
  }
  socket.emit("PROTO_MESSAGE.*", msg);
  socket.emit(`PROTO_MESSAGE.${message.payloadType}`, msg);
  if (namespace) {
    socket.emit(`PROTO_MESSAGE.${namespace}.*`, msg);
    socket.emit(`PROTO_MESSAGE.${namespace}.${message.payloadType}`, msg);
  }
}
