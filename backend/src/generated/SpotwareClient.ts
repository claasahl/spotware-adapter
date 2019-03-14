import * as $spotware from "./spotware";
import { SpotwareEventEmitter } from "./SpotwareEventEmitter";
import { EventEmitter } from "events";

export class SpotwareClient extends SpotwareEventEmitter {
  constructor(emitter: EventEmitter) {
    super(emitter);
    this.treatRequests();
    this.on($spotware.ProtoPayloadType.PROTO_MESSAGE, this.treatResponses);
    this.on($spotware.ProtoPayloadType.PROTO_MESSAGE, this.treatEvents);
  }

  private treatRequests(): void {
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ,
      this.onProtoOAApplicationAuthReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ,
      this.onProtoOAAccountAuthReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_REQ,
      this.onProtoOAVersionReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ,
      this.onProtoOANewOrderReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ,
      this.onProtoOACancelOrderReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ,
      this.onProtoOAAmendOrderReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ,
      this.onProtoOAAmendPositionSLTPReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ,
      this.onProtoOAClosePositionReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ,
      this.onProtoOAAssetListReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ,
      this.onProtoOASymbolsListReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ,
      this.onProtoOASymbolByIdReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ,
      this.onProtoOASymbolsForConversionReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ,
      this.onProtoOAAssetClassListReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_REQ,
      this.onProtoOATraderReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ,
      this.onProtoOAReconcileReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ,
      this.onProtoOADealListReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ,
      this.onProtoOAExpectedMarginReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ,
      this.onProtoOACashFlowHistoryListReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
      this.onProtoOAGetAccountListByAccessTokenReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ,
      this.onProtoOASubscribeSpotsReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
      this.onProtoOAUnsubscribeSpotsReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ,
      this.onProtoOASubscribeLiveTrendbarReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ,
      this.onProtoOAUnsubscribeLiveTrendbarReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ,
      this.onProtoOAGetTrendbarsReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ,
      this.onProtoOAGetTickDataReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ,
      this.onProtoOAGetCtidProfileByTokenReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ,
      this.onProtoOASubscribeDepthQuotesReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ,
      this.onProtoOAUnsubscribeDepthQuotesReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ,
      this.onProtoOASymbolCategoryListReq
    );
    this.on(
      $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ,
      this.onProtoOAAccountLogoutReq
    );
  }

  private treatResponses = (message: $spotware.IProtoMessage) => {
    switch (message.payloadType) {
      case $spotware.ProtoPayloadType.ERROR_RES:
        return this.onProtoErrorRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES:
        return this.onProtoOAApplicationAuthRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES:
        return this.onProtoOAAccountAuthRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_ERROR_RES:
        return this.onProtoOAErrorRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_RES:
        return this.onProtoOAVersionRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES:
        return this.onProtoOAAssetListRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES:
        return this.onProtoOASymbolsListRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES:
        return this.onProtoOASymbolByIdRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES:
        return this.onProtoOASymbolsForConversionRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES:
        return this.onProtoOAAssetClassListRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_RES:
        return this.onProtoOATraderRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_RECONCILE_RES:
        return this.onProtoOAReconcileRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES:
        return this.onProtoOADealListRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES:
        return this.onProtoOAExpectedMarginRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES:
        return this.onProtoOACashFlowHistoryListRes(message);
      case $spotware.ProtoOAPayloadType
        .PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES:
        return this.onProtoOAGetAccountListByAccessTokenRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES:
        return this.onProtoOASubscribeSpotsRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES:
        return this.onProtoOAUnsubscribeSpotsRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES:
        return this.onProtoOAGetTrendbarsRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES:
        return this.onProtoOAGetTickDataRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES:
        return this.onProtoOAGetCtidProfileByTokenRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES:
        return this.onProtoOASubscribeDepthQuotesRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES:
        return this.onProtoOAUnsubscribeDepthQuotesRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES:
        return this.onProtoOASymbolCategoryListRes(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES:
        return this.onProtoOAAccountLogoutRes(message);
    }
  };

  private treatEvents = (message: $spotware.IProtoMessage) => {
    switch (message.payloadType) {
      case $spotware.ProtoPayloadType.HEARTBEAT_EVENT:
        return this.onProtoHeartbeatEvent(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT:
        return this.onProtoOAClientDisconnectEvent(message);
      case $spotware.ProtoOAPayloadType
        .PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT:
        return this.onProtoOAAccountsTokenInvalidatedEvent(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT:
        return this.onProtoOAExecutionEvent(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT:
        return this.onProtoOATrailingSLChangedEvent(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT:
        return this.onProtoOASymbolChangedEvent(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT:
        return this.onProtoOATraderUpdatedEvent(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT:
        return this.onProtoOAOrderErrorEvent(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT:
        return this.onProtoOAMarginChangedEvent(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_SPOT_EVENT:
        return this.onProtoOASpotEvent(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT:
        return this.onProtoOADepthEvent(message);
      case $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT:
        return this.onProtoOAAccountDisconnectEvent(message);
    }
  };

  private onProtoOAApplicationAuthReq = (
    message: $spotware.IProtoOAApplicationAuthReq,
    clientMsgId?: string | null
  ) => {
    const payloadType =
      $spotware.ProtoOAApplicationAuthReq.prototype.payloadType;
    const msg = $spotware.ProtoOAApplicationAuthReq.create(message);
    const payload = $spotware.ProtoOAApplicationAuthReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAAccountAuthReq = (
    message: $spotware.IProtoOAAccountAuthReq,
    clientMsgId?: string | null
  ) => {
    const payloadType = $spotware.ProtoOAAccountAuthReq.prototype.payloadType;
    const msg = $spotware.ProtoOAAccountAuthReq.create(message);
    const payload = $spotware.ProtoOAAccountAuthReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAVersionReq = (
    message: $spotware.IProtoOAVersionReq,
    clientMsgId?: string | null
  ) => {
    const payloadType = $spotware.ProtoOAVersionReq.prototype.payloadType;
    const msg = $spotware.ProtoOAVersionReq.create(message);
    const payload = $spotware.ProtoOAVersionReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOANewOrderReq = (
    message: $spotware.IProtoOANewOrderReq,
    clientMsgId?: string | null
  ) => {
    const payloadType = $spotware.ProtoOANewOrderReq.prototype.payloadType;
    const msg = $spotware.ProtoOANewOrderReq.create(message);
    const payload = $spotware.ProtoOANewOrderReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOACancelOrderReq = (
    message: $spotware.IProtoOACancelOrderReq,
    clientMsgId?: string | null
  ) => {
    const payloadType = $spotware.ProtoOACancelOrderReq.prototype.payloadType;
    const msg = $spotware.ProtoOACancelOrderReq.create(message);
    const payload = $spotware.ProtoOACancelOrderReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAAmendOrderReq = (
    message: $spotware.IProtoOAAmendOrderReq,
    clientMsgId?: string | null
  ) => {
    const payloadType = $spotware.ProtoOAAmendOrderReq.prototype.payloadType;
    const msg = $spotware.ProtoOAAmendOrderReq.create(message);
    const payload = $spotware.ProtoOAAmendOrderReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAAmendPositionSLTPReq = (
    message: $spotware.IProtoOAAmendPositionSLTPReq,
    clientMsgId?: string | null
  ) => {
    const payloadType =
      $spotware.ProtoOAAmendPositionSLTPReq.prototype.payloadType;
    const msg = $spotware.ProtoOAAmendPositionSLTPReq.create(message);
    const payload = $spotware.ProtoOAAmendPositionSLTPReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAClosePositionReq = (
    message: $spotware.IProtoOAClosePositionReq,
    clientMsgId?: string | null
  ) => {
    const payloadType = $spotware.ProtoOAClosePositionReq.prototype.payloadType;
    const msg = $spotware.ProtoOAClosePositionReq.create(message);
    const payload = $spotware.ProtoOAClosePositionReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAAssetListReq = (
    message: $spotware.IProtoOAAssetListReq,
    clientMsgId?: string | null
  ) => {
    const payloadType = $spotware.ProtoOAAssetListReq.prototype.payloadType;
    const msg = $spotware.ProtoOAAssetListReq.create(message);
    const payload = $spotware.ProtoOAAssetListReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOASymbolsListReq = (
    message: $spotware.IProtoOASymbolsListReq,
    clientMsgId?: string | null
  ) => {
    const payloadType = $spotware.ProtoOASymbolsListReq.prototype.payloadType;
    const msg = $spotware.ProtoOASymbolsListReq.create(message);
    const payload = $spotware.ProtoOASymbolsListReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOASymbolByIdReq = (
    message: $spotware.IProtoOASymbolByIdReq,
    clientMsgId?: string | null
  ) => {
    const payloadType = $spotware.ProtoOASymbolByIdReq.prototype.payloadType;
    const msg = $spotware.ProtoOASymbolByIdReq.create(message);
    const payload = $spotware.ProtoOASymbolByIdReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOASymbolsForConversionReq = (
    message: $spotware.IProtoOASymbolsForConversionReq,
    clientMsgId?: string | null
  ) => {
    const payloadType =
      $spotware.ProtoOASymbolsForConversionReq.prototype.payloadType;
    const msg = $spotware.ProtoOASymbolsForConversionReq.create(message);
    const payload = $spotware.ProtoOASymbolsForConversionReq.encode(
      msg
    ).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAAssetClassListReq = (
    message: $spotware.IProtoOAAssetClassListReq,
    clientMsgId?: string | null
  ) => {
    const payloadType =
      $spotware.ProtoOAAssetClassListReq.prototype.payloadType;
    const msg = $spotware.ProtoOAAssetClassListReq.create(message);
    const payload = $spotware.ProtoOAAssetClassListReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOATraderReq = (
    message: $spotware.IProtoOATraderReq,
    clientMsgId?: string | null
  ) => {
    const payloadType = $spotware.ProtoOATraderReq.prototype.payloadType;
    const msg = $spotware.ProtoOATraderReq.create(message);
    const payload = $spotware.ProtoOATraderReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAReconcileReq = (
    message: $spotware.IProtoOAReconcileReq,
    clientMsgId?: string | null
  ) => {
    const payloadType = $spotware.ProtoOAReconcileReq.prototype.payloadType;
    const msg = $spotware.ProtoOAReconcileReq.create(message);
    const payload = $spotware.ProtoOAReconcileReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOADealListReq = (
    message: $spotware.IProtoOADealListReq,
    clientMsgId?: string | null
  ) => {
    const payloadType = $spotware.ProtoOADealListReq.prototype.payloadType;
    const msg = $spotware.ProtoOADealListReq.create(message);
    const payload = $spotware.ProtoOADealListReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAExpectedMarginReq = (
    message: $spotware.IProtoOAExpectedMarginReq,
    clientMsgId?: string | null
  ) => {
    const payloadType =
      $spotware.ProtoOAExpectedMarginReq.prototype.payloadType;
    const msg = $spotware.ProtoOAExpectedMarginReq.create(message);
    const payload = $spotware.ProtoOAExpectedMarginReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOACashFlowHistoryListReq = (
    message: $spotware.IProtoOACashFlowHistoryListReq,
    clientMsgId?: string | null
  ) => {
    const payloadType =
      $spotware.ProtoOACashFlowHistoryListReq.prototype.payloadType;
    const msg = $spotware.ProtoOACashFlowHistoryListReq.create(message);
    const payload = $spotware.ProtoOACashFlowHistoryListReq.encode(
      msg
    ).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAGetAccountListByAccessTokenReq = (
    message: $spotware.IProtoOAGetAccountListByAccessTokenReq,
    clientMsgId?: string | null
  ) => {
    const payloadType =
      $spotware.ProtoOAGetAccountListByAccessTokenReq.prototype.payloadType;
    const msg = $spotware.ProtoOAGetAccountListByAccessTokenReq.create(message);
    const payload = $spotware.ProtoOAGetAccountListByAccessTokenReq.encode(
      msg
    ).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOASubscribeSpotsReq = (
    message: $spotware.IProtoOASubscribeSpotsReq,
    clientMsgId?: string | null
  ) => {
    const payloadType =
      $spotware.ProtoOASubscribeSpotsReq.prototype.payloadType;
    const msg = $spotware.ProtoOASubscribeSpotsReq.create(message);
    const payload = $spotware.ProtoOASubscribeSpotsReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAUnsubscribeSpotsReq = (
    message: $spotware.IProtoOAUnsubscribeSpotsReq,
    clientMsgId?: string | null
  ) => {
    const payloadType =
      $spotware.ProtoOAUnsubscribeSpotsReq.prototype.payloadType;
    const msg = $spotware.ProtoOAUnsubscribeSpotsReq.create(message);
    const payload = $spotware.ProtoOAUnsubscribeSpotsReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOASubscribeLiveTrendbarReq = (
    message: $spotware.IProtoOASubscribeLiveTrendbarReq,
    clientMsgId?: string | null
  ) => {
    const payloadType =
      $spotware.ProtoOASubscribeLiveTrendbarReq.prototype.payloadType;
    const msg = $spotware.ProtoOASubscribeLiveTrendbarReq.create(message);
    const payload = $spotware.ProtoOASubscribeLiveTrendbarReq.encode(
      msg
    ).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAUnsubscribeLiveTrendbarReq = (
    message: $spotware.IProtoOAUnsubscribeLiveTrendbarReq,
    clientMsgId?: string | null
  ) => {
    const payloadType =
      $spotware.ProtoOAUnsubscribeLiveTrendbarReq.prototype.payloadType;
    const msg = $spotware.ProtoOAUnsubscribeLiveTrendbarReq.create(message);
    const payload = $spotware.ProtoOAUnsubscribeLiveTrendbarReq.encode(
      msg
    ).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAGetTrendbarsReq = (
    message: $spotware.IProtoOAGetTrendbarsReq,
    clientMsgId?: string | null
  ) => {
    const payloadType = $spotware.ProtoOAGetTrendbarsReq.prototype.payloadType;
    const msg = $spotware.ProtoOAGetTrendbarsReq.create(message);
    const payload = $spotware.ProtoOAGetTrendbarsReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAGetTickDataReq = (
    message: $spotware.IProtoOAGetTickDataReq,
    clientMsgId?: string | null
  ) => {
    const payloadType = $spotware.ProtoOAGetTickDataReq.prototype.payloadType;
    const msg = $spotware.ProtoOAGetTickDataReq.create(message);
    const payload = $spotware.ProtoOAGetTickDataReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAGetCtidProfileByTokenReq = (
    message: $spotware.IProtoOAGetCtidProfileByTokenReq,
    clientMsgId?: string | null
  ) => {
    const payloadType =
      $spotware.ProtoOAGetCtidProfileByTokenReq.prototype.payloadType;
    const msg = $spotware.ProtoOAGetCtidProfileByTokenReq.create(message);
    const payload = $spotware.ProtoOAGetCtidProfileByTokenReq.encode(
      msg
    ).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOASubscribeDepthQuotesReq = (
    message: $spotware.IProtoOASubscribeDepthQuotesReq,
    clientMsgId?: string | null
  ) => {
    const payloadType =
      $spotware.ProtoOASubscribeDepthQuotesReq.prototype.payloadType;
    const msg = $spotware.ProtoOASubscribeDepthQuotesReq.create(message);
    const payload = $spotware.ProtoOASubscribeDepthQuotesReq.encode(
      msg
    ).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAUnsubscribeDepthQuotesReq = (
    message: $spotware.IProtoOAUnsubscribeDepthQuotesReq,
    clientMsgId?: string | null
  ) => {
    const payloadType =
      $spotware.ProtoOAUnsubscribeDepthQuotesReq.prototype.payloadType;
    const msg = $spotware.ProtoOAUnsubscribeDepthQuotesReq.create(message);
    const payload = $spotware.ProtoOAUnsubscribeDepthQuotesReq.encode(
      msg
    ).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOASymbolCategoryListReq = (
    message: $spotware.IProtoOASymbolCategoryListReq,
    clientMsgId?: string | null
  ) => {
    const payloadType =
      $spotware.ProtoOASymbolCategoryListReq.prototype.payloadType;
    const msg = $spotware.ProtoOASymbolCategoryListReq.create(message);
    const payload = $spotware.ProtoOASymbolCategoryListReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoOAAccountLogoutReq = (
    message: $spotware.IProtoOAAccountLogoutReq,
    clientMsgId?: string | null
  ) => {
    const payloadType = $spotware.ProtoOAAccountLogoutReq.prototype.payloadType;
    const msg = $spotware.ProtoOAAccountLogoutReq.create(message);
    const payload = $spotware.ProtoOAAccountLogoutReq.encode(msg).finish();
    this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, {
      payloadType,
      payload,
      clientMsgId
    });
  };

  private onProtoErrorRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoErrorRes.decode(message.payload);
      this.emit($spotware.ProtoPayloadType.ERROR_RES, msg, clientMsgId);
    }
  };

  private onProtoOAApplicationAuthRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAApplicationAuthRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAAccountAuthRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAAccountAuthRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAErrorRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAErrorRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_ERROR_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAVersionRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAVersionRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAAssetListRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAAssetListRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOASymbolsListRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOASymbolsListRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOASymbolByIdRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOASymbolByIdRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOASymbolsForConversionRes = (
    message: $spotware.IProtoMessage
  ) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOASymbolsForConversionRes.decode(
        message.payload
      );
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAAssetClassListRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAAssetClassListRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOATraderRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOATraderRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAReconcileRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAReconcileRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_RECONCILE_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOADealListRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOADealListRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAExpectedMarginRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAExpectedMarginRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOACashFlowHistoryListRes = (
    message: $spotware.IProtoMessage
  ) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOACashFlowHistoryListRes.decode(
        message.payload
      );
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAGetAccountListByAccessTokenRes = (
    message: $spotware.IProtoMessage
  ) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAGetAccountListByAccessTokenRes.decode(
        message.payload
      );
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOASubscribeSpotsRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOASubscribeSpotsRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAUnsubscribeSpotsRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAUnsubscribeSpotsRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAGetTrendbarsRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAGetTrendbarsRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAGetTickDataRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAGetTickDataRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAGetCtidProfileByTokenRes = (
    message: $spotware.IProtoMessage
  ) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAGetCtidProfileByTokenRes.decode(
        message.payload
      );
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOASubscribeDepthQuotesRes = (
    message: $spotware.IProtoMessage
  ) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOASubscribeDepthQuotesRes.decode(
        message.payload
      );
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAUnsubscribeDepthQuotesRes = (
    message: $spotware.IProtoMessage
  ) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAUnsubscribeDepthQuotesRes.decode(
        message.payload
      );
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOASymbolCategoryListRes = (
    message: $spotware.IProtoMessage
  ) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOASymbolCategoryListRes.decode(
        message.payload
      );
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAAccountLogoutRes = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAAccountLogoutRes.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoHeartbeatEvent = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoHeartbeatEvent.decode(message.payload);
      this.emit($spotware.ProtoPayloadType.HEARTBEAT_EVENT, msg, clientMsgId);
    }
  };

  private onProtoOAClientDisconnectEvent = (
    message: $spotware.IProtoMessage
  ) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAClientDisconnectEvent.decode(
        message.payload
      );
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAAccountsTokenInvalidatedEvent = (
    message: $spotware.IProtoMessage
  ) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAAccountsTokenInvalidatedEvent.decode(
        message.payload
      );
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAExecutionEvent = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAExecutionEvent.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOATrailingSLChangedEvent = (
    message: $spotware.IProtoMessage
  ) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOATrailingSLChangedEvent.decode(
        message.payload
      );
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOASymbolChangedEvent = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOASymbolChangedEvent.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOATraderUpdatedEvent = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOATraderUpdatedEvent.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAOrderErrorEvent = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAOrderErrorEvent.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAMarginChangedEvent = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAMarginChangedEvent.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOASpotEvent = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOASpotEvent.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_SPOT_EVENT,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOADepthEvent = (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOADepthEvent.decode(message.payload);
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT,
        msg,
        clientMsgId
      );
    }
  };

  private onProtoOAAccountDisconnectEvent = (
    message: $spotware.IProtoMessage
  ) => {
    if (message.payload) {
      const { clientMsgId } = message;
      const msg = $spotware.ProtoOAAccountDisconnectEvent.decode(
        message.payload
      );
      this.emit(
        $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT,
        msg,
        clientMsgId
      );
    }
  };
}
