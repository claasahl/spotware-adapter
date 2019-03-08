import * as $spotware from "../generated/spotware";
import { EventEmitter } from "events";
import * as $base from "./message_handler";

function ProtoHeartbeatEvent(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoHeartbeatEvent,
    $spotware.ProtoPayloadType.HEARTBEAT_EVENT,
    emitter
  );
}
function ProtoOAClientDisconnectEvent(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAClientDisconnectEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT,
    emitter
  );
}
function ProtoOAAccountsTokenInvalidatedEvent(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAAccountsTokenInvalidatedEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT,
    emitter
  );
}
function ProtoOAExecutionEvent(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAExecutionEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
    emitter
  );
}
function ProtoOATrailingSLChangedEvent(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOATrailingSLChangedEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT,
    emitter
  );
}
function ProtoOASymbolChangedEvent(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOASymbolChangedEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT,
    emitter
  );
}
function ProtoOATraderUpdatedEvent(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOATraderUpdatedEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT,
    emitter
  );
}
function ProtoOAOrderErrorEvent(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAOrderErrorEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT,
    emitter
  );
}
function ProtoOAMarginChangedEvent(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAMarginChangedEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT,
    emitter
  );
}
function ProtoOASpotEvent(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOASpotEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_SPOT_EVENT,
    emitter
  );
}
function ProtoOADepthEvent(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOADepthEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT,
    emitter
  );
}
function ProtoOAAccountDisconnectEvent(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.ProtoOAAccountDisconnectEvent,
    $spotware.ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT,
    emitter
  );
}
export default function registerEventHandlers(emitter: EventEmitter): void {
  ProtoHeartbeatEvent(emitter);
  ProtoOAClientDisconnectEvent(emitter);
  ProtoOAAccountsTokenInvalidatedEvent(emitter);
  ProtoOAExecutionEvent(emitter);
  ProtoOATrailingSLChangedEvent(emitter);
  ProtoOASymbolChangedEvent(emitter);
  ProtoOATraderUpdatedEvent(emitter);
  ProtoOAOrderErrorEvent(emitter);
  ProtoOAMarginChangedEvent(emitter);
  ProtoOASpotEvent(emitter);
  ProtoOADepthEvent(emitter);
  ProtoOAAccountDisconnectEvent(emitter);
}
