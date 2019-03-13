import { EventEmitter } from "events";
import * as $spotware from "./spotware";

export class SpotwareEventEmitter {
  private emitter: EventEmitter;
  constructor(emitter: EventEmitter) {
    this.emitter = emitter;
  }
  public emit(
    payloadType: $spotware.ProtoPayloadType.PROTO_MESSAGE,
    message: $spotware.IProtoMessage
  ): void;
  public emit(
    payloadType: $spotware.ProtoPayloadType.ERROR_RES,
    message: $spotware.IProtoErrorRes
  ): void;
  public emit(
    payloadType: $spotware.ProtoPayloadType.HEARTBEAT_EVENT,
    message: $spotware.IProtoHeartbeatEvent
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ,
    message: $spotware.IProtoOAApplicationAuthReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES,
    message: $spotware.IProtoOAApplicationAuthRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ,
    message: $spotware.IProtoOAAccountAuthReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES,
    message: $spotware.IProtoOAAccountAuthRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ERROR_RES,
    message: $spotware.IProtoOAErrorRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT,
    message: $spotware.IProtoOAClientDisconnectEvent,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT,
    message: $spotware.IProtoOAAccountsTokenInvalidatedEvent,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_REQ,
    message: $spotware.IProtoOAVersionReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_RES,
    message: $spotware.IProtoOAVersionRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ,
    message: $spotware.IProtoOANewOrderReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
    message: $spotware.IProtoOAExecutionEvent,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ,
    message: $spotware.IProtoOACancelOrderReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ,
    message: $spotware.IProtoOAAmendOrderReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ,
    message: $spotware.IProtoOAAmendPositionSLTPReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ,
    message: $spotware.IProtoOAClosePositionReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT,
    message: $spotware.IProtoOATrailingSLChangedEvent,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ,
    message: $spotware.IProtoOAAssetListReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES,
    message: $spotware.IProtoOAAssetListRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ,
    message: $spotware.IProtoOASymbolsListReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES,
    message: $spotware.IProtoOASymbolsListRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ,
    message: $spotware.IProtoOASymbolByIdReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES,
    message: $spotware.IProtoOASymbolByIdRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ,
    message: $spotware.IProtoOASymbolsForConversionReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES,
    message: $spotware.IProtoOASymbolsForConversionRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT,
    message: $spotware.IProtoOASymbolChangedEvent,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ,
    message: $spotware.IProtoOAAssetClassListReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES,
    message: $spotware.IProtoOAAssetClassListRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_REQ,
    message: $spotware.IProtoOATraderReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_RES,
    message: $spotware.IProtoOATraderRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT,
    message: $spotware.IProtoOATraderUpdatedEvent,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ,
    message: $spotware.IProtoOAReconcileReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_RECONCILE_RES,
    message: $spotware.IProtoOAReconcileRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT,
    message: $spotware.IProtoOAOrderErrorEvent,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ,
    message: $spotware.IProtoOADealListReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES,
    message: $spotware.IProtoOADealListRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ,
    message: $spotware.IProtoOAExpectedMarginReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES,
    message: $spotware.IProtoOAExpectedMarginRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT,
    message: $spotware.IProtoOAMarginChangedEvent,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ,
    message: $spotware.IProtoOACashFlowHistoryListReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES,
    message: $spotware.IProtoOACashFlowHistoryListRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
    message: $spotware.IProtoOAGetAccountListByAccessTokenReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
    message: $spotware.IProtoOAGetAccountListByAccessTokenRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ,
    message: $spotware.IProtoOASubscribeSpotsReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES,
    message: $spotware.IProtoOASubscribeSpotsRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
    message: $spotware.IProtoOAUnsubscribeSpotsReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
    message: $spotware.IProtoOAUnsubscribeSpotsRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SPOT_EVENT,
    message: $spotware.IProtoOASpotEvent,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ,
    message: $spotware.IProtoOASubscribeLiveTrendbarReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ,
    message: $spotware.IProtoOAUnsubscribeLiveTrendbarReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ,
    message: $spotware.IProtoOAGetTrendbarsReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES,
    message: $spotware.IProtoOAGetTrendbarsRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ,
    message: $spotware.IProtoOAGetTickDataReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES,
    message: $spotware.IProtoOAGetTickDataRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ,
    message: $spotware.IProtoOAGetCtidProfileByTokenReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES,
    message: $spotware.IProtoOAGetCtidProfileByTokenRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT,
    message: $spotware.IProtoOADepthEvent,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ,
    message: $spotware.IProtoOASubscribeDepthQuotesReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES,
    message: $spotware.IProtoOASubscribeDepthQuotesRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ,
    message: $spotware.IProtoOAUnsubscribeDepthQuotesReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES,
    message: $spotware.IProtoOAUnsubscribeDepthQuotesRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ,
    message: $spotware.IProtoOASymbolCategoryListReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES,
    message: $spotware.IProtoOASymbolCategoryListRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ,
    message: $spotware.IProtoOAAccountLogoutReq,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES,
    message: $spotware.IProtoOAAccountLogoutRes,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT,
    message: $spotware.IProtoOAAccountDisconnectEvent,
    clientMsgId?: string
  ): void;
  public emit(
    payloadType: $spotware.ProtoPayloadType | $spotware.ProtoOAPayloadType,
    message: any,
    clientMsgId?: string
  ): void {
    const event =
      $spotware.ProtoPayloadType[payloadType] ||
      $spotware.ProtoOAPayloadType[payloadType];
    this.emitter.emit(event, message, clientMsgId);
  }

  public on(
    payloadType: $spotware.ProtoPayloadType.PROTO_MESSAGE,
    listener: (message: $spotware.IProtoMessage) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoPayloadType.ERROR_RES,
    listener: (message: $spotware.IProtoErrorRes) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoPayloadType.HEARTBEAT_EVENT,
    listener: (message: $spotware.IProtoHeartbeatEvent) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ,
    listener: (
      message: $spotware.IProtoOAApplicationAuthReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES,
    listener: (
      message: $spotware.IProtoOAApplicationAuthRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ,
    listener: (
      message: $spotware.IProtoOAAccountAuthReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES,
    listener: (
      message: $spotware.IProtoOAAccountAuthRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ERROR_RES,
    listener: (
      message: $spotware.IProtoOAErrorRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT,
    listener: (
      message: $spotware.IProtoOAClientDisconnectEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT,
    listener: (
      message: $spotware.IProtoOAAccountsTokenInvalidatedEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_REQ,
    listener: (
      message: $spotware.IProtoOAVersionReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_RES,
    listener: (
      message: $spotware.IProtoOAVersionRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ,
    listener: (
      message: $spotware.IProtoOANewOrderReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
    listener: (
      message: $spotware.IProtoOAExecutionEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ,
    listener: (
      message: $spotware.IProtoOACancelOrderReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ,
    listener: (
      message: $spotware.IProtoOAAmendOrderReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ,
    listener: (
      message: $spotware.IProtoOAAmendPositionSLTPReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ,
    listener: (
      message: $spotware.IProtoOAClosePositionReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT,
    listener: (
      message: $spotware.IProtoOATrailingSLChangedEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ,
    listener: (
      message: $spotware.IProtoOAAssetListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES,
    listener: (
      message: $spotware.IProtoOAAssetListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ,
    listener: (
      message: $spotware.IProtoOASymbolsListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES,
    listener: (
      message: $spotware.IProtoOASymbolsListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ,
    listener: (
      message: $spotware.IProtoOASymbolByIdReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES,
    listener: (
      message: $spotware.IProtoOASymbolByIdRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ,
    listener: (
      message: $spotware.IProtoOASymbolsForConversionReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES,
    listener: (
      message: $spotware.IProtoOASymbolsForConversionRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT,
    listener: (
      message: $spotware.IProtoOASymbolChangedEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ,
    listener: (
      message: $spotware.IProtoOAAssetClassListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES,
    listener: (
      message: $spotware.IProtoOAAssetClassListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_REQ,
    listener: (
      message: $spotware.IProtoOATraderReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_RES,
    listener: (
      message: $spotware.IProtoOATraderRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT,
    listener: (
      message: $spotware.IProtoOATraderUpdatedEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ,
    listener: (
      message: $spotware.IProtoOAReconcileReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_RECONCILE_RES,
    listener: (
      message: $spotware.IProtoOAReconcileRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT,
    listener: (
      message: $spotware.IProtoOAOrderErrorEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ,
    listener: (
      message: $spotware.IProtoOADealListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES,
    listener: (
      message: $spotware.IProtoOADealListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ,
    listener: (
      message: $spotware.IProtoOAExpectedMarginReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES,
    listener: (
      message: $spotware.IProtoOAExpectedMarginRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT,
    listener: (
      message: $spotware.IProtoOAMarginChangedEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ,
    listener: (
      message: $spotware.IProtoOACashFlowHistoryListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES,
    listener: (
      message: $spotware.IProtoOACashFlowHistoryListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
    listener: (
      message: $spotware.IProtoOAGetAccountListByAccessTokenReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
    listener: (
      message: $spotware.IProtoOAGetAccountListByAccessTokenRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ,
    listener: (
      message: $spotware.IProtoOASubscribeSpotsReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES,
    listener: (
      message: $spotware.IProtoOASubscribeSpotsRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
    listener: (
      message: $spotware.IProtoOAUnsubscribeSpotsReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
    listener: (
      message: $spotware.IProtoOAUnsubscribeSpotsRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SPOT_EVENT,
    listener: (
      message: $spotware.IProtoOASpotEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ,
    listener: (
      message: $spotware.IProtoOASubscribeLiveTrendbarReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ,
    listener: (
      message: $spotware.IProtoOAUnsubscribeLiveTrendbarReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ,
    listener: (
      message: $spotware.IProtoOAGetTrendbarsReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES,
    listener: (
      message: $spotware.IProtoOAGetTrendbarsRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ,
    listener: (
      message: $spotware.IProtoOAGetTickDataReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES,
    listener: (
      message: $spotware.IProtoOAGetTickDataRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ,
    listener: (
      message: $spotware.IProtoOAGetCtidProfileByTokenReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES,
    listener: (
      message: $spotware.IProtoOAGetCtidProfileByTokenRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT,
    listener: (
      message: $spotware.IProtoOADepthEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ,
    listener: (
      message: $spotware.IProtoOASubscribeDepthQuotesReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES,
    listener: (
      message: $spotware.IProtoOASubscribeDepthQuotesRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ,
    listener: (
      message: $spotware.IProtoOAUnsubscribeDepthQuotesReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES,
    listener: (
      message: $spotware.IProtoOAUnsubscribeDepthQuotesRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ,
    listener: (
      message: $spotware.IProtoOASymbolCategoryListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES,
    listener: (
      message: $spotware.IProtoOASymbolCategoryListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ,
    listener: (
      message: $spotware.IProtoOAAccountLogoutReq,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES,
    listener: (
      message: $spotware.IProtoOAAccountLogoutRes,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT,
    listener: (
      message: $spotware.IProtoOAAccountDisconnectEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public on(
    payloadType: $spotware.ProtoPayloadType | $spotware.ProtoOAPayloadType,
    listener: (message: any, clientMsgId?: string) => void
  ): void {
    const event =
      $spotware.ProtoPayloadType[payloadType] ||
      $spotware.ProtoOAPayloadType[payloadType];
    this.emitter.on(event, listener);
  }

  public off(
    payloadType: $spotware.ProtoPayloadType.PROTO_MESSAGE,
    listener: (message: $spotware.IProtoMessage) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoPayloadType.ERROR_RES,
    listener: (message: $spotware.IProtoErrorRes) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoPayloadType.HEARTBEAT_EVENT,
    listener: (message: $spotware.IProtoHeartbeatEvent) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ,
    listener: (
      message: $spotware.IProtoOAApplicationAuthReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES,
    listener: (
      message: $spotware.IProtoOAApplicationAuthRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ,
    listener: (
      message: $spotware.IProtoOAAccountAuthReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES,
    listener: (
      message: $spotware.IProtoOAAccountAuthRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ERROR_RES,
    listener: (
      message: $spotware.IProtoOAErrorRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT,
    listener: (
      message: $spotware.IProtoOAClientDisconnectEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT,
    listener: (
      message: $spotware.IProtoOAAccountsTokenInvalidatedEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_REQ,
    listener: (
      message: $spotware.IProtoOAVersionReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_RES,
    listener: (
      message: $spotware.IProtoOAVersionRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ,
    listener: (
      message: $spotware.IProtoOANewOrderReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
    listener: (
      message: $spotware.IProtoOAExecutionEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ,
    listener: (
      message: $spotware.IProtoOACancelOrderReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ,
    listener: (
      message: $spotware.IProtoOAAmendOrderReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ,
    listener: (
      message: $spotware.IProtoOAAmendPositionSLTPReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ,
    listener: (
      message: $spotware.IProtoOAClosePositionReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT,
    listener: (
      message: $spotware.IProtoOATrailingSLChangedEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ,
    listener: (
      message: $spotware.IProtoOAAssetListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES,
    listener: (
      message: $spotware.IProtoOAAssetListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ,
    listener: (
      message: $spotware.IProtoOASymbolsListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES,
    listener: (
      message: $spotware.IProtoOASymbolsListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ,
    listener: (
      message: $spotware.IProtoOASymbolByIdReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES,
    listener: (
      message: $spotware.IProtoOASymbolByIdRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ,
    listener: (
      message: $spotware.IProtoOASymbolsForConversionReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES,
    listener: (
      message: $spotware.IProtoOASymbolsForConversionRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT,
    listener: (
      message: $spotware.IProtoOASymbolChangedEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ,
    listener: (
      message: $spotware.IProtoOAAssetClassListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES,
    listener: (
      message: $spotware.IProtoOAAssetClassListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_REQ,
    listener: (
      message: $spotware.IProtoOATraderReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_RES,
    listener: (
      message: $spotware.IProtoOATraderRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT,
    listener: (
      message: $spotware.IProtoOATraderUpdatedEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ,
    listener: (
      message: $spotware.IProtoOAReconcileReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_RECONCILE_RES,
    listener: (
      message: $spotware.IProtoOAReconcileRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT,
    listener: (
      message: $spotware.IProtoOAOrderErrorEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ,
    listener: (
      message: $spotware.IProtoOADealListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES,
    listener: (
      message: $spotware.IProtoOADealListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ,
    listener: (
      message: $spotware.IProtoOAExpectedMarginReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES,
    listener: (
      message: $spotware.IProtoOAExpectedMarginRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT,
    listener: (
      message: $spotware.IProtoOAMarginChangedEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ,
    listener: (
      message: $spotware.IProtoOACashFlowHistoryListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES,
    listener: (
      message: $spotware.IProtoOACashFlowHistoryListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
    listener: (
      message: $spotware.IProtoOAGetAccountListByAccessTokenReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
    listener: (
      message: $spotware.IProtoOAGetAccountListByAccessTokenRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ,
    listener: (
      message: $spotware.IProtoOASubscribeSpotsReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES,
    listener: (
      message: $spotware.IProtoOASubscribeSpotsRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
    listener: (
      message: $spotware.IProtoOAUnsubscribeSpotsReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
    listener: (
      message: $spotware.IProtoOAUnsubscribeSpotsRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SPOT_EVENT,
    listener: (
      message: $spotware.IProtoOASpotEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ,
    listener: (
      message: $spotware.IProtoOASubscribeLiveTrendbarReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ,
    listener: (
      message: $spotware.IProtoOAUnsubscribeLiveTrendbarReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ,
    listener: (
      message: $spotware.IProtoOAGetTrendbarsReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES,
    listener: (
      message: $spotware.IProtoOAGetTrendbarsRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ,
    listener: (
      message: $spotware.IProtoOAGetTickDataReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES,
    listener: (
      message: $spotware.IProtoOAGetTickDataRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ,
    listener: (
      message: $spotware.IProtoOAGetCtidProfileByTokenReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES,
    listener: (
      message: $spotware.IProtoOAGetCtidProfileByTokenRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT,
    listener: (
      message: $spotware.IProtoOADepthEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ,
    listener: (
      message: $spotware.IProtoOASubscribeDepthQuotesReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES,
    listener: (
      message: $spotware.IProtoOASubscribeDepthQuotesRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ,
    listener: (
      message: $spotware.IProtoOAUnsubscribeDepthQuotesReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES,
    listener: (
      message: $spotware.IProtoOAUnsubscribeDepthQuotesRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ,
    listener: (
      message: $spotware.IProtoOASymbolCategoryListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES,
    listener: (
      message: $spotware.IProtoOASymbolCategoryListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ,
    listener: (
      message: $spotware.IProtoOAAccountLogoutReq,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES,
    listener: (
      message: $spotware.IProtoOAAccountLogoutRes,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT,
    listener: (
      message: $spotware.IProtoOAAccountDisconnectEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public off(
    payloadType: $spotware.ProtoPayloadType | $spotware.ProtoOAPayloadType,
    listener: (message: any, clientMsgId?: string) => void
  ): void {
    const event =
      $spotware.ProtoPayloadType[payloadType] ||
      $spotware.ProtoOAPayloadType[payloadType];
    this.emitter.off(event, listener);
  }

  public once(
    payloadType: $spotware.ProtoPayloadType.PROTO_MESSAGE,
    listener: (message: $spotware.IProtoMessage) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoPayloadType.ERROR_RES,
    listener: (message: $spotware.IProtoErrorRes) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoPayloadType.HEARTBEAT_EVENT,
    listener: (message: $spotware.IProtoHeartbeatEvent) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ,
    listener: (
      message: $spotware.IProtoOAApplicationAuthReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES,
    listener: (
      message: $spotware.IProtoOAApplicationAuthRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ,
    listener: (
      message: $spotware.IProtoOAAccountAuthReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES,
    listener: (
      message: $spotware.IProtoOAAccountAuthRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ERROR_RES,
    listener: (
      message: $spotware.IProtoOAErrorRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT,
    listener: (
      message: $spotware.IProtoOAClientDisconnectEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT,
    listener: (
      message: $spotware.IProtoOAAccountsTokenInvalidatedEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_REQ,
    listener: (
      message: $spotware.IProtoOAVersionReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_RES,
    listener: (
      message: $spotware.IProtoOAVersionRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ,
    listener: (
      message: $spotware.IProtoOANewOrderReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
    listener: (
      message: $spotware.IProtoOAExecutionEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ,
    listener: (
      message: $spotware.IProtoOACancelOrderReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ,
    listener: (
      message: $spotware.IProtoOAAmendOrderReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ,
    listener: (
      message: $spotware.IProtoOAAmendPositionSLTPReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ,
    listener: (
      message: $spotware.IProtoOAClosePositionReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT,
    listener: (
      message: $spotware.IProtoOATrailingSLChangedEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ,
    listener: (
      message: $spotware.IProtoOAAssetListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES,
    listener: (
      message: $spotware.IProtoOAAssetListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ,
    listener: (
      message: $spotware.IProtoOASymbolsListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES,
    listener: (
      message: $spotware.IProtoOASymbolsListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ,
    listener: (
      message: $spotware.IProtoOASymbolByIdReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES,
    listener: (
      message: $spotware.IProtoOASymbolByIdRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ,
    listener: (
      message: $spotware.IProtoOASymbolsForConversionReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES,
    listener: (
      message: $spotware.IProtoOASymbolsForConversionRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT,
    listener: (
      message: $spotware.IProtoOASymbolChangedEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ,
    listener: (
      message: $spotware.IProtoOAAssetClassListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES,
    listener: (
      message: $spotware.IProtoOAAssetClassListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_REQ,
    listener: (
      message: $spotware.IProtoOATraderReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_RES,
    listener: (
      message: $spotware.IProtoOATraderRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT,
    listener: (
      message: $spotware.IProtoOATraderUpdatedEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ,
    listener: (
      message: $spotware.IProtoOAReconcileReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_RECONCILE_RES,
    listener: (
      message: $spotware.IProtoOAReconcileRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT,
    listener: (
      message: $spotware.IProtoOAOrderErrorEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ,
    listener: (
      message: $spotware.IProtoOADealListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES,
    listener: (
      message: $spotware.IProtoOADealListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ,
    listener: (
      message: $spotware.IProtoOAExpectedMarginReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES,
    listener: (
      message: $spotware.IProtoOAExpectedMarginRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT,
    listener: (
      message: $spotware.IProtoOAMarginChangedEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ,
    listener: (
      message: $spotware.IProtoOACashFlowHistoryListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES,
    listener: (
      message: $spotware.IProtoOACashFlowHistoryListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
    listener: (
      message: $spotware.IProtoOAGetAccountListByAccessTokenReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
    listener: (
      message: $spotware.IProtoOAGetAccountListByAccessTokenRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ,
    listener: (
      message: $spotware.IProtoOASubscribeSpotsReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES,
    listener: (
      message: $spotware.IProtoOASubscribeSpotsRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
    listener: (
      message: $spotware.IProtoOAUnsubscribeSpotsReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
    listener: (
      message: $spotware.IProtoOAUnsubscribeSpotsRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SPOT_EVENT,
    listener: (
      message: $spotware.IProtoOASpotEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ,
    listener: (
      message: $spotware.IProtoOASubscribeLiveTrendbarReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ,
    listener: (
      message: $spotware.IProtoOAUnsubscribeLiveTrendbarReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ,
    listener: (
      message: $spotware.IProtoOAGetTrendbarsReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES,
    listener: (
      message: $spotware.IProtoOAGetTrendbarsRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ,
    listener: (
      message: $spotware.IProtoOAGetTickDataReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES,
    listener: (
      message: $spotware.IProtoOAGetTickDataRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ,
    listener: (
      message: $spotware.IProtoOAGetCtidProfileByTokenReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES,
    listener: (
      message: $spotware.IProtoOAGetCtidProfileByTokenRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT,
    listener: (
      message: $spotware.IProtoOADepthEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ,
    listener: (
      message: $spotware.IProtoOASubscribeDepthQuotesReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES,
    listener: (
      message: $spotware.IProtoOASubscribeDepthQuotesRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ,
    listener: (
      message: $spotware.IProtoOAUnsubscribeDepthQuotesReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES,
    listener: (
      message: $spotware.IProtoOAUnsubscribeDepthQuotesRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ,
    listener: (
      message: $spotware.IProtoOASymbolCategoryListReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES,
    listener: (
      message: $spotware.IProtoOASymbolCategoryListRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ,
    listener: (
      message: $spotware.IProtoOAAccountLogoutReq,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES,
    listener: (
      message: $spotware.IProtoOAAccountLogoutRes,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT,
    listener: (
      message: $spotware.IProtoOAAccountDisconnectEvent,
      clientMsgId?: string
    ) => void
  ): void;
  public once(
    payloadType: $spotware.ProtoPayloadType | $spotware.ProtoOAPayloadType,
    listener: (message: any, clientMsgId?: string) => void
  ): void {
    const event =
      $spotware.ProtoPayloadType[payloadType] ||
      $spotware.ProtoOAPayloadType[payloadType];
    this.emitter.once(event, listener);
  }
}
