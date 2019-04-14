import {
  IProtoMessage,
  ProtoPayloadType,
  ProtoOAPayloadType
} from "../spotware-messages";
import { SpotwareEventEmitter } from "../spotware-event-emitter";

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

export function emitDecoded(
  emitter: SpotwareEventEmitter,
  message: IProtoMessage
): void {
  switch (message.payloadType as ProtoPayloadType | ProtoOAPayloadType) {
    case ProtoPayloadType.ERROR_RES:
      return ProtoErrorRes.emitDecoded(emitter, message);
    case ProtoPayloadType.HEARTBEAT_EVENT:
      return ProtoHeartbeatEvent.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ:
      return ProtoOAApplicationAuthReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES:
      return ProtoOAApplicationAuthRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ:
      return ProtoOAAccountAuthReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES:
      return ProtoOAAccountAuthRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_ERROR_RES:
      return ProtoOAErrorRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT:
      return ProtoOAClientDisconnectEvent.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT:
      return ProtoOAAccountsTokenInvalidatedEvent.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_VERSION_REQ:
      return ProtoOAVersionReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_VERSION_RES:
      return ProtoOAVersionRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ:
      return ProtoOANewOrderReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT:
      return ProtoOAExecutionEvent.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ:
      return ProtoOACancelOrderReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ:
      return ProtoOAAmendOrderReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ:
      return ProtoOAAmendPositionSLTPReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ:
      return ProtoOAClosePositionReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT:
      return ProtoOATrailingSLChangedEvent.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ:
      return ProtoOAAssetListReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES:
      return ProtoOAAssetListRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ:
      return ProtoOASymbolsListReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES:
      return ProtoOASymbolsListRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ:
      return ProtoOASymbolByIdReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES:
      return ProtoOASymbolByIdRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ:
      return ProtoOASymbolsForConversionReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES:
      return ProtoOASymbolsForConversionRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT:
      return ProtoOASymbolChangedEvent.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ:
      return ProtoOAAssetClassListReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES:
      return ProtoOAAssetClassListRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_TRADER_REQ:
      return ProtoOATraderReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_TRADER_RES:
      return ProtoOATraderRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT:
      return ProtoOATraderUpdatedEvent.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ:
      return ProtoOAReconcileReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_RECONCILE_RES:
      return ProtoOAReconcileRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT:
      return ProtoOAOrderErrorEvent.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ:
      return ProtoOADealListReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES:
      return ProtoOADealListRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ:
      return ProtoOAExpectedMarginReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES:
      return ProtoOAExpectedMarginRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT:
      return ProtoOAMarginChangedEvent.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ:
      return ProtoOACashFlowHistoryListReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES:
      return ProtoOACashFlowHistoryListRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ:
      return ProtoOAGetAccountListByAccessTokenReq.emitDecoded(
        emitter,
        message
      );
    case ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES:
      return ProtoOAGetAccountListByAccessTokenRes.emitDecoded(
        emitter,
        message
      );
    case ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ:
      return ProtoOASubscribeSpotsReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES:
      return ProtoOASubscribeSpotsRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ:
      return ProtoOAUnsubscribeSpotsReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES:
      return ProtoOAUnsubscribeSpotsRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_SPOT_EVENT:
      return ProtoOASpotEvent.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ:
      return ProtoOASubscribeLiveTrendbarReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ:
      return ProtoOAUnsubscribeLiveTrendbarReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ:
      return ProtoOAGetTrendbarsReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES:
      return ProtoOAGetTrendbarsRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ:
      return ProtoOAGetTickDataReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES:
      return ProtoOAGetTickDataRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ:
      return ProtoOAGetCtidProfileByTokenReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES:
      return ProtoOAGetCtidProfileByTokenRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT:
      return ProtoOADepthEvent.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ:
      return ProtoOASubscribeDepthQuotesReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES:
      return ProtoOASubscribeDepthQuotesRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ:
      return ProtoOAUnsubscribeDepthQuotesReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES:
      return ProtoOAUnsubscribeDepthQuotesRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ:
      return ProtoOASymbolCategoryListReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES:
      return ProtoOASymbolCategoryListRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ:
      return ProtoOAAccountLogoutReq.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES:
      return ProtoOAAccountLogoutRes.emitDecoded(emitter, message);
    case ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT:
      return ProtoOAAccountDisconnectEvent.emitDecoded(emitter, message);
    default:
      throw new Error(`got unknown 'payloadType' (${message.payloadType})`);
  }
}
