import tls from "tls";

import * as $spotware from "./spotware-messages";
import SpotwareEventEmitter from "./spotware-event-emitter";
import * as messages from "./messages";
import * as util from "./spotware-utils";
import * as handlers from "./spotware-message-handler";

function readProtoMessage(this: SpotwareEventEmitter, data: string) {
  {
    try {
      const buffer = Buffer.from(data, "binary");
      const message = util.deserialize(buffer);
      this.emit("PROTO_MESSAGE", message);
    } catch (error) {
      console.log("could not read/parse ProtoMessage", error);
    }
  }
}

function onProtoMessage(
  this: SpotwareEventEmitter & tls.TLSSocket,
  message: $spotware.IProtoMessage
) {
  return handlers.onProtoMessage(this, message);
}

function onProtoOAApplicationAuthReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAApplicationAuthReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAApplicationAuthReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOAAccountAuthReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAAccountAuthReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAAccountAuthReq.emitEncoded(this, message, clientMsgId);
}

function onProtoOAVersionReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAVersionReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAVersionReq.emitEncoded(this, message, clientMsgId);
}

function onProtoOANewOrderReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOANewOrderReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOANewOrderReq.emitEncoded(this, message, clientMsgId);
}

function onProtoOACancelOrderReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOACancelOrderReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOACancelOrderReq.emitEncoded(this, message, clientMsgId);
}

function onProtoOAAmendOrderReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAAmendOrderReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAAmendOrderReq.emitEncoded(this, message, clientMsgId);
}

function onProtoOAAmendPositionSLTPReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAAmendPositionSLTPReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAAmendPositionSLTPReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOAClosePositionReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAClosePositionReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAClosePositionReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOAAssetListReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAAssetListReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAAssetListReq.emitEncoded(this, message, clientMsgId);
}

function onProtoOASymbolsListReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOASymbolsListReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOASymbolsListReq.emitEncoded(this, message, clientMsgId);
}

function onProtoOASymbolByIdReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOASymbolByIdReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOASymbolByIdReq.emitEncoded(this, message, clientMsgId);
}

function onProtoOASymbolsForConversionReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOASymbolsForConversionReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOASymbolsForConversionReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOAAssetClassListReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAAssetClassListReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAAssetClassListReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOATraderReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOATraderReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOATraderReq.emitEncoded(this, message, clientMsgId);
}

function onProtoOAReconcileReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAReconcileReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAReconcileReq.emitEncoded(this, message, clientMsgId);
}

function onProtoOADealListReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOADealListReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOADealListReq.emitEncoded(this, message, clientMsgId);
}

function onProtoOAExpectedMarginReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAExpectedMarginReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAExpectedMarginReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOACashFlowHistoryListReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOACashFlowHistoryListReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOACashFlowHistoryListReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOAGetAccountListByAccessTokenReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAGetAccountListByAccessTokenReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAGetAccountListByAccessTokenReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOASubscribeSpotsReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOASubscribeSpotsReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOASubscribeSpotsReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOAUnsubscribeSpotsReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAUnsubscribeSpotsReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAUnsubscribeSpotsReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOASubscribeLiveTrendbarReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOASubscribeLiveTrendbarReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOASubscribeLiveTrendbarReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOAUnsubscribeLiveTrendbarReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAUnsubscribeLiveTrendbarReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAUnsubscribeLiveTrendbarReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOAGetTrendbarsReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAGetTrendbarsReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAGetTrendbarsReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOAGetTickDataReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAGetTickDataReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAGetTickDataReq.emitEncoded(this, message, clientMsgId);
}

function onProtoOAGetCtidProfileByTokenReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAGetCtidProfileByTokenReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAGetCtidProfileByTokenReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOASubscribeDepthQuotesReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOASubscribeDepthQuotesReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOASubscribeDepthQuotesReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOAUnsubscribeDepthQuotesReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAUnsubscribeDepthQuotesReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAUnsubscribeDepthQuotesReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOASymbolCategoryListReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOASymbolCategoryListReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOASymbolCategoryListReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

function onProtoOAAccountLogoutReq(
  this: SpotwareEventEmitter,
  message: $spotware.IProtoOAAccountLogoutReq,
  clientMsgId?: string | null
) {
  return messages.ProtoOAAccountLogoutReq.emitEncoded(
    this,
    message,
    clientMsgId
  );
}

export function connect(
  port: number,
  host: string,
  options?: tls.TlsOptions
): SpotwareEventEmitter {
  return tls
    .connect(port, host, options)
    .setEncoding("binary")
    .setDefaultEncoding("binary")
    .on("data", readProtoMessage)
    .on("PROTO_MESSAGE", onProtoMessage)
    .on("PROTO_OA_APPLICATION_AUTH_REQ", onProtoOAApplicationAuthReq)
    .on("PROTO_OA_ACCOUNT_AUTH_REQ", onProtoOAAccountAuthReq)
    .on("PROTO_OA_VERSION_REQ", onProtoOAVersionReq)
    .on("PROTO_OA_NEW_ORDER_REQ", onProtoOANewOrderReq)
    .on("PROTO_OA_CANCEL_ORDER_REQ", onProtoOACancelOrderReq)
    .on("PROTO_OA_AMEND_ORDER_REQ", onProtoOAAmendOrderReq)
    .on("PROTO_OA_AMEND_POSITION_SLTP_REQ", onProtoOAAmendPositionSLTPReq)
    .on("PROTO_OA_CLOSE_POSITION_REQ", onProtoOAClosePositionReq)
    .on("PROTO_OA_ASSET_LIST_REQ", onProtoOAAssetListReq)
    .on("PROTO_OA_SYMBOLS_LIST_REQ", onProtoOASymbolsListReq)
    .on("PROTO_OA_SYMBOL_BY_ID_REQ", onProtoOASymbolByIdReq)
    .on("PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ", onProtoOASymbolsForConversionReq)
    .on("PROTO_OA_ASSET_CLASS_LIST_REQ", onProtoOAAssetClassListReq)
    .on("PROTO_OA_TRADER_REQ", onProtoOATraderReq)
    .on("PROTO_OA_RECONCILE_REQ", onProtoOAReconcileReq)
    .on("PROTO_OA_DEAL_LIST_REQ", onProtoOADealListReq)
    .on("PROTO_OA_EXPECTED_MARGIN_REQ", onProtoOAExpectedMarginReq)
    .on("PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ", onProtoOACashFlowHistoryListReq)
    .on(
      "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
      onProtoOAGetAccountListByAccessTokenReq
    )
    .on("PROTO_OA_SUBSCRIBE_SPOTS_REQ", onProtoOASubscribeSpotsReq)
    .on("PROTO_OA_UNSUBSCRIBE_SPOTS_REQ", onProtoOAUnsubscribeSpotsReq)
    .on(
      "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
      onProtoOASubscribeLiveTrendbarReq
    )
    .on(
      "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
      onProtoOAUnsubscribeLiveTrendbarReq
    )
    .on("PROTO_OA_GET_TRENDBARS_REQ", onProtoOAGetTrendbarsReq)
    .on("PROTO_OA_GET_TICKDATA_REQ", onProtoOAGetTickDataReq)
    .on(
      "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
      onProtoOAGetCtidProfileByTokenReq
    )
    .on("PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ", onProtoOASubscribeDepthQuotesReq)
    .on(
      "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
      onProtoOAUnsubscribeDepthQuotesReq
    )
    .on("PROTO_OA_SYMBOL_CATEGORY_REQ", onProtoOASymbolCategoryListReq)
    .on("PROTO_OA_ACCOUNT_LOGOUT_REQ", onProtoOAAccountLogoutReq);
}
