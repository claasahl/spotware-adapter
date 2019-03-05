import * as $spotware from "../generated/spotware";
import { EventEmitter } from "events";
import * as $base from "./message_handler";

export function ProtoOAApplicationAuthRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAApplicationAuthRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES,
    emitter
  );
}
export function ProtoOAAccountAuthRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAAccountAuthRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES,
    emitter
  );
}
export function ProtoOAErrorRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAErrorRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_ERROR_RES,
    emitter
  );
}
export function ProtoOAVersionRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAVersionRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_RES,
    emitter
  );
}
export function ProtoOAAssetListRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAAssetListRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES,
    emitter
  );
}
export function ProtoOASymbolsListRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOASymbolsListRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES,
    emitter
  );
}
export function ProtoOASymbolByIdRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOASymbolByIdRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES,
    emitter
  );
}
export function ProtoOASymbolsForConversionRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOASymbolsForConversionRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES,
    emitter
  );
}
export function ProtoOAAssetClassListRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAAssetClassListRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES,
    emitter
  );
}
export function ProtoOATraderRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOATraderRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_RES,
    emitter
  );
}
export function ProtoOAReconcileRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAReconcileRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_RECONCILE_RES,
    emitter
  );
}
export function ProtoOADealListRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOADealListRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES,
    emitter
  );
}
export function ProtoOAExpectedMarginRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAExpectedMarginRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES,
    emitter
  );
}
export function ProtoOACashFlowHistoryListRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOACashFlowHistoryListRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES,
    emitter
  );
}
export function ProtoOAGetAccountListByAccessTokenRes(
  emitter: EventEmitter
): void {
  $base.register(
    $spotware.ProtoOAGetAccountListByAccessTokenRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
    emitter
  );
}
export function ProtoOASubscribeSpotsRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOASubscribeSpotsRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES,
    emitter
  );
}
export function ProtoOAUnsubscribeSpotsRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAUnsubscribeSpotsRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
    emitter
  );
}
export function ProtoOAGetTrendbarsRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAGetTrendbarsRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES,
    emitter
  );
}
export function ProtoOAGetTickDataRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAGetTickDataRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES,
    emitter
  );
}
export function ProtoOAGetCtidProfileByTokenRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAGetCtidProfileByTokenRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES,
    emitter
  );
}
export function ProtoOASubscribeDepthQuotesRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOASubscribeDepthQuotesRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES,
    emitter
  );
}
export function ProtoOAUnsubscribeDepthQuotesRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAUnsubscribeDepthQuotesRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES,
    emitter
  );
}
export function ProtoOASymbolCategoryListRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOASymbolCategoryListRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES,
    emitter
  );
}
export function ProtoOAAccountLogoutRes(emitter: EventEmitter): void {
  $base.register(
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
