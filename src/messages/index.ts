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

interface Decoders {
  [index: number]: (
    emitter: SpotwareEventEmitter,
    message: IProtoMessage
  ) => void;
}
const decoders: Decoders = {};
decoders[ProtoPayloadType.ERROR_RES] = ProtoErrorRes.emitDecoded;
decoders[ProtoPayloadType.HEARTBEAT_EVENT] = ProtoHeartbeatEvent.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ] =
  ProtoOAApplicationAuthReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES] =
  ProtoOAApplicationAuthRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ] =
  ProtoOAAccountAuthReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES] =
  ProtoOAAccountAuthRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_ERROR_RES] = ProtoOAErrorRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT] =
  ProtoOAClientDisconnectEvent.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT] =
  ProtoOAAccountsTokenInvalidatedEvent.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_VERSION_REQ] =
  ProtoOAVersionReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_VERSION_RES] =
  ProtoOAVersionRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ] =
  ProtoOANewOrderReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT] =
  ProtoOAExecutionEvent.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ] =
  ProtoOACancelOrderReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ] =
  ProtoOAAmendOrderReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ] =
  ProtoOAAmendPositionSLTPReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ] =
  ProtoOAClosePositionReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT] =
  ProtoOATrailingSLChangedEvent.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ] =
  ProtoOAAssetListReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES] =
  ProtoOAAssetListRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ] =
  ProtoOASymbolsListReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES] =
  ProtoOASymbolsListRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ] =
  ProtoOASymbolByIdReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES] =
  ProtoOASymbolByIdRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ] =
  ProtoOASymbolsForConversionReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES] =
  ProtoOASymbolsForConversionRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT] =
  ProtoOASymbolChangedEvent.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ] =
  ProtoOAAssetClassListReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES] =
  ProtoOAAssetClassListRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_TRADER_REQ] = ProtoOATraderReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_TRADER_RES] = ProtoOATraderRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT] =
  ProtoOATraderUpdatedEvent.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ] =
  ProtoOAReconcileReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_RECONCILE_RES] =
  ProtoOAReconcileRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT] =
  ProtoOAOrderErrorEvent.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ] =
  ProtoOADealListReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES] =
  ProtoOADealListRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ] =
  ProtoOAExpectedMarginReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES] =
  ProtoOAExpectedMarginRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT] =
  ProtoOAMarginChangedEvent.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ] =
  ProtoOACashFlowHistoryListReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES] =
  ProtoOACashFlowHistoryListRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ] =
  ProtoOAGetAccountListByAccessTokenReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES] =
  ProtoOAGetAccountListByAccessTokenRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ] =
  ProtoOASubscribeSpotsReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES] =
  ProtoOASubscribeSpotsRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ] =
  ProtoOAUnsubscribeSpotsReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES] =
  ProtoOAUnsubscribeSpotsRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_SPOT_EVENT] = ProtoOASpotEvent.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ] =
  ProtoOASubscribeLiveTrendbarReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ] =
  ProtoOAUnsubscribeLiveTrendbarReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ] =
  ProtoOAGetTrendbarsReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES] =
  ProtoOAGetTrendbarsRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ] =
  ProtoOAGetTickDataReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES] =
  ProtoOAGetTickDataRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ] =
  ProtoOAGetCtidProfileByTokenReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES] =
  ProtoOAGetCtidProfileByTokenRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT] =
  ProtoOADepthEvent.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ] =
  ProtoOASubscribeDepthQuotesReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES] =
  ProtoOASubscribeDepthQuotesRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ] =
  ProtoOAUnsubscribeDepthQuotesReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES] =
  ProtoOAUnsubscribeDepthQuotesRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ] =
  ProtoOASymbolCategoryListReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES] =
  ProtoOASymbolCategoryListRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ] =
  ProtoOAAccountLogoutReq.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES] =
  ProtoOAAccountLogoutRes.emitDecoded;
decoders[ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT] =
  ProtoOAAccountDisconnectEvent.emitDecoded;

export function emitDecoded(
  emitter: SpotwareEventEmitter,
  message: IProtoMessage
): void {
  decoders[message.payloadType](emitter, message);
}
