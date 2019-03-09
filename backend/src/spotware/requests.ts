import * as $spotware from "../generated/spotware";
import * as $base from "./message_handler";
import { Gateway } from "./gateway";
import { EventEmitter } from "events";
import { Reader } from "protobufjs";

export function emitProtoOAApplicationAuthReq(
  properties: $spotware.IProtoOAApplicationAuthReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAApplicationAuthReq,
    properties,
    clientMsgId,
    emitter
  );
}
export async function ProtoOAApplicationAuthReq(
  properties: $spotware.IProtoOAApplicationAuthReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): Promise<$spotware.IProtoOAApplicationAuthRes> {
  return new Promise<$spotware.IProtoOAApplicationAuthRes>(
    (resolve, reject) => {
      emitProtoOAApplicationAuthReq(properties, clientMsgId, emitter);
      const wrappedResolve = (
        value?:
          | $spotware.IProtoOAApplicationAuthRes
          | PromiseLike<$spotware.IProtoOAApplicationAuthRes>
      ) => {
        unregister();
        resolve(value);
      };
      const wrappedReject = (reason?: any) => {
        unregister();
        reject(reason);
      };
      const TYPE = $spotware.ProtoOAApplicationAuthRes;
      const listener = $base.createListener(TYPE, clientMsgId, {
        resolve: wrappedResolve,
        reject: wrappedReject
      });

      $base.registerListener(TYPE, emitter, listener);
      const timeout = setTimeout(() => {
        wrappedReject(
          new Error("Did not receive response in a timely manner.")
        );
      }, 2000);
      function unregister() {
        console.log("unregister!");
        clearTimeout(timeout);
        $base.unregisterListener(TYPE, emitter, listener);
      }
    }
  );
}
export function emitProtoOAAccountAuthReq(
  properties: $spotware.IProtoOAAccountAuthReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAAccountAuthReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAVersionReq(
  properties: $spotware.IProtoOAVersionReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAVersionReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOANewOrderReq(
  properties: $spotware.IProtoOANewOrderReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOANewOrderReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOACancelOrderReq(
  properties: $spotware.IProtoOACancelOrderReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOACancelOrderReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAAmendOrderReq(
  properties: $spotware.IProtoOAAmendOrderReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAAmendOrderReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAAmendPositionSLTPReq(
  properties: $spotware.IProtoOAAmendPositionSLTPReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAAmendPositionSLTPReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAClosePositionReq(
  properties: $spotware.IProtoOAClosePositionReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAClosePositionReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAAssetListReq(
  properties: $spotware.IProtoOAAssetListReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAAssetListReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOASymbolsListReq(
  properties: $spotware.IProtoOASymbolsListReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOASymbolsListReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOASymbolByIdReq(
  properties: $spotware.IProtoOASymbolByIdReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOASymbolByIdReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOASymbolsForConversionReq(
  properties: $spotware.IProtoOASymbolsForConversionReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOASymbolsForConversionReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAAssetClassListReq(
  properties: $spotware.IProtoOAAssetClassListReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAAssetClassListReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOATraderReq(
  properties: $spotware.IProtoOATraderReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOATraderReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAReconcileReq(
  properties: $spotware.IProtoOAReconcileReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAReconcileReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOADealListReq(
  properties: $spotware.IProtoOADealListReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOADealListReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAExpectedMarginReq(
  properties: $spotware.IProtoOAExpectedMarginReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAExpectedMarginReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOACashFlowHistoryListReq(
  properties: $spotware.IProtoOACashFlowHistoryListReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOACashFlowHistoryListReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAGetAccountListByAccessTokenReq(
  properties: $spotware.IProtoOAGetAccountListByAccessTokenReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAGetAccountListByAccessTokenReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOASubscribeSpotsReq(
  properties: $spotware.IProtoOASubscribeSpotsReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOASubscribeSpotsReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAUnsubscribeSpotsReq(
  properties: $spotware.IProtoOAUnsubscribeSpotsReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAUnsubscribeSpotsReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOASubscribeLiveTrendbarReq(
  properties: $spotware.IProtoOASubscribeLiveTrendbarReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOASubscribeLiveTrendbarReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAUnsubscribeLiveTrendbarReq(
  properties: $spotware.IProtoOAUnsubscribeLiveTrendbarReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAUnsubscribeLiveTrendbarReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAGetTrendbarsReq(
  properties: $spotware.IProtoOAGetTrendbarsReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAGetTrendbarsReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAGetTickDataReq(
  properties: $spotware.IProtoOAGetTickDataReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAGetTickDataReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAGetCtidProfileByTokenReq(
  properties: $spotware.IProtoOAGetCtidProfileByTokenReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAGetCtidProfileByTokenReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOASubscribeDepthQuotesReq(
  properties: $spotware.IProtoOASubscribeDepthQuotesReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOASubscribeDepthQuotesReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAUnsubscribeDepthQuotesReq(
  properties: $spotware.IProtoOAUnsubscribeDepthQuotesReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAUnsubscribeDepthQuotesReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOASymbolCategoryListReq(
  properties: $spotware.IProtoOASymbolCategoryListReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOASymbolCategoryListReq,
    properties,
    clientMsgId,
    emitter
  );
}
export function emitProtoOAAccountLogoutReq(
  properties: $spotware.IProtoOAAccountLogoutReq,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmitOpenApiMessage(
    $spotware.ProtoOAAccountLogoutReq,
    properties,
    clientMsgId,
    emitter
  );
}
export default function registerRequestHandlers(gateway: Gateway): void {
  $base.registerRequest(
    $spotware.ProtoOAApplicationAuthReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAAccountAuthReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAVersionReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOANewOrderReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOACancelOrderReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAAmendOrderReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAAmendPositionSLTPReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAClosePositionReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAAssetListReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOASymbolsListReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOASymbolByIdReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOASymbolsForConversionReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAAssetClassListReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOATraderReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAReconcileReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOADealListReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAExpectedMarginReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOACashFlowHistoryListReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAGetAccountListByAccessTokenReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOASubscribeSpotsReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAUnsubscribeSpotsReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOASubscribeLiveTrendbarReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAUnsubscribeLiveTrendbarReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAGetTrendbarsReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAGetTickDataReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAGetCtidProfileByTokenReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOASubscribeDepthQuotesReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAUnsubscribeDepthQuotesReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOASymbolCategoryListReq.prototype.payloadType,
    gateway
  );
  $base.registerRequest(
    $spotware.ProtoOAAccountLogoutReq.prototype.payloadType,
    gateway
  );
}
