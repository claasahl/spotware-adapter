import * as $spotware from "../generated/spotware";
import { EventEmitter } from "events";
import * as $base from "./message_handler";

export function ProtoOAClientDisconnectEvent(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAClientDisconnectEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT,
    emitter
  );
}
export function ProtoOAAccountsTokenInvalidatedEvent(
  emitter: EventEmitter
): void {
  $base.register(
    $spotware.ProtoOAAccountsTokenInvalidatedEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT,
    emitter
  );
}
export function ProtoOAExecutionEvent(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAExecutionEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
    emitter
  );
}
export function ProtoOATrailingSLChangedEvent(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOATrailingSLChangedEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT,
    emitter
  );
}
export function ProtoOASymbolChangedEvent(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOASymbolChangedEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT,
    emitter
  );
}
export function ProtoOATraderUpdatedEvent(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOATraderUpdatedEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT,
    emitter
  );
}
export function ProtoOAOrderErrorEvent(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAOrderErrorEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT,
    emitter
  );
}
export function ProtoOAMarginChangedEvent(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAMarginChangedEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT,
    emitter
  );
}
export function ProtoOASpotEvent(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOASpotEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_SPOT_EVENT,
    emitter
  );
}
export function ProtoOADepthEvent(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOADepthEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT,
    emitter
  );
}
