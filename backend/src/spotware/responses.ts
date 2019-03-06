import * as $spotware from "../generated/spotware";
import { EventEmitter } from "events";
import * as $base from "./message_handler";

function ProtoOAApplicationAuthRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAApplicationAuthRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES,
    emitter
  );
}
function ProtoOAAccountAuthRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAAccountAuthRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES,
    emitter
  );
}
function ProtoOAErrorRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAErrorRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_ERROR_RES,
    emitter
  );
}
function ProtoOAVersionRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAVersionRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_RES,
    emitter
  );
}
function ProtoOAAssetListRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAAssetListRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES,
    emitter
  );
}
function ProtoOASymbolsListRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOASymbolsListRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES,
    emitter
  );
}
function ProtoOASymbolByIdRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOASymbolByIdRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES,
    emitter
  );
}
function ProtoOASymbolsForConversionRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOASymbolsForConversionRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES,
    emitter
  );
}
function ProtoOAAssetClassListRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAAssetClassListRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES,
    emitter
  );
}
function ProtoOATraderRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOATraderRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_RES,
    emitter
  );
}
function ProtoOAReconcileRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAReconcileRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_RECONCILE_RES,
    emitter
  );
}
function ProtoOADealListRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOADealListRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES,
    emitter
  );
}
function ProtoOAExpectedMarginRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAExpectedMarginRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES,
    emitter
  );
}
function ProtoOACashFlowHistoryListRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOACashFlowHistoryListRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES,
    emitter
  );
}
function ProtoOAGetAccountListByAccessTokenRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAGetAccountListByAccessTokenRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
    emitter
  );
}
function ProtoOASubscribeSpotsRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOASubscribeSpotsRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES,
    emitter
  );
}
function ProtoOAUnsubscribeSpotsRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAUnsubscribeSpotsRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
    emitter
  );
}
function ProtoOAGetTrendbarsRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAGetTrendbarsRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES,
    emitter
  );
}
function ProtoOAGetTickDataRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAGetTickDataRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES,
    emitter
  );
}
function ProtoOAGetCtidProfileByTokenRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAGetCtidProfileByTokenRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES,
    emitter
  );
}
function ProtoOASubscribeDepthQuotesRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOASubscribeDepthQuotesRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES,
    emitter
  );
}
function ProtoOAUnsubscribeDepthQuotesRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAUnsubscribeDepthQuotesRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES,
    emitter
  );
}
function ProtoOASymbolCategoryListRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOASymbolCategoryListRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES,
    emitter
  );
}
function ProtoOAAccountLogoutRes(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAAccountLogoutRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES,
    emitter
  );
}
export default function registerResponseHandlers(emitter: EventEmitter): void {
  ProtoOAApplicationAuthRes(emitter);
  ProtoOAAccountAuthRes(emitter);
  ProtoOAErrorRes(emitter);
  ProtoOAVersionRes(emitter);
  ProtoOAAssetListRes(emitter);
  ProtoOASymbolsListRes(emitter);
  ProtoOASymbolByIdRes(emitter);
  ProtoOASymbolsForConversionRes(emitter);
  ProtoOAAssetClassListRes(emitter);
  ProtoOATraderRes(emitter);
  ProtoOAReconcileRes(emitter);
  ProtoOADealListRes(emitter);
  ProtoOAExpectedMarginRes(emitter);
  ProtoOACashFlowHistoryListRes(emitter);
  ProtoOAGetAccountListByAccessTokenRes(emitter);
  ProtoOASubscribeSpotsRes(emitter);
  ProtoOAUnsubscribeSpotsRes(emitter);
  ProtoOAGetTrendbarsRes(emitter);
  ProtoOAGetTickDataRes(emitter);
  ProtoOAGetCtidProfileByTokenRes(emitter);
  ProtoOASubscribeDepthQuotesRes(emitter);
  ProtoOAUnsubscribeDepthQuotesRes(emitter);
  ProtoOASymbolCategoryListRes(emitter);
  ProtoOAAccountLogoutRes(emitter);
}
