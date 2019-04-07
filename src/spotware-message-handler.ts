import tls from "tls";
import * as $spotware from "./spotware-messages";
import SpotwareEventEmitter from "./spotware-event-emitter";
import * as messages from "./messages";
import * as util from "./spotware-utils";

export function onProtoMessage(
  emitter: SpotwareEventEmitter & tls.TLSSocket,
  message: $spotware.IProtoMessage
) {
  switch (message.payloadType) {
    case $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ:
    case $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ:
      return emitter.write(util.serialize(message));
    case $spotware.ProtoPayloadType.ERROR_RES:
      return messages.ProtoErrorRes.emitDecoded(emitter, message);
    case $spotware.ProtoPayloadType.HEARTBEAT_EVENT:
      return messages.ProtoHeartbeatEvent.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES:
      return messages.ProtoOAApplicationAuthRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES:
      return messages.ProtoOAAccountAuthRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_ERROR_RES:
      return messages.ProtoOAErrorRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT:
      return messages.ProtoOAClientDisconnectEvent.emitDecoded(
        emitter,
        message
      );
    case $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT:
      return messages.ProtoOAAccountsTokenInvalidatedEvent.emitDecoded(
        emitter,
        message
      );
    case $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_RES:
      return messages.ProtoOAVersionRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT:
      return messages.ProtoOAExecutionEvent.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT:
      return messages.ProtoOATrailingSLChangedEvent.emitDecoded(
        emitter,
        message
      );
    case $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES:
      return messages.ProtoOAAssetListRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES:
      return messages.ProtoOASymbolsListRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES:
      return messages.ProtoOASymbolByIdRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES:
      return messages.ProtoOASymbolsForConversionRes.emitDecoded(
        emitter,
        message
      );
    case $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT:
      return messages.ProtoOASymbolChangedEvent.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES:
      return messages.ProtoOAAssetClassListRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_RES:
      return messages.ProtoOATraderRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT:
      return messages.ProtoOATraderUpdatedEvent.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_RECONCILE_RES:
      return messages.ProtoOAReconcileRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT:
      return messages.ProtoOAOrderErrorEvent.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES:
      return messages.ProtoOADealListRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES:
      return messages.ProtoOAExpectedMarginRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT:
      return messages.ProtoOAMarginChangedEvent.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES:
      return messages.ProtoOACashFlowHistoryListRes.emitDecoded(
        emitter,
        message
      );
    case $spotware.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES:
      return messages.ProtoOAGetAccountListByAccessTokenRes.emitDecoded(
        emitter,
        message
      );
    case $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES:
      return messages.ProtoOASubscribeSpotsRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES:
      return messages.ProtoOAUnsubscribeSpotsRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_SPOT_EVENT:
      return messages.ProtoOASpotEvent.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES:
      return messages.ProtoOAGetTrendbarsRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES:
      return messages.ProtoOAGetTickDataRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES:
      return messages.ProtoOAGetCtidProfileByTokenRes.emitDecoded(
        emitter,
        message
      );
    case $spotware.ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT:
      return messages.ProtoOADepthEvent.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES:
      return messages.ProtoOASubscribeDepthQuotesRes.emitDecoded(
        emitter,
        message
      );
    case $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES:
      return messages.ProtoOAUnsubscribeDepthQuotesRes.emitDecoded(
        emitter,
        message
      );
    case $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES:
      return messages.ProtoOASymbolCategoryListRes.emitDecoded(
        emitter,
        message
      );
    case $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES:
      return messages.ProtoOAAccountLogoutRes.emitDecoded(emitter, message);
    case $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT:
      return messages.ProtoOAAccountDisconnectEvent.emitDecoded(
        emitter,
        message
      );
  }
}
