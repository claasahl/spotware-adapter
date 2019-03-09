import * as $spotware from "../generated/spotware";
import { EventEmitter } from "events";
import { PROTO_MESSAGE_EVENT, Gateway } from "./gateway";
import { Reader } from "protobufjs";

// aliasing "ProtoOAApplicationAuthRes", because it only contains exactly one field "payloadType"
export type wrapperOpenApi = typeof $spotware.ProtoOAApplicationAuthRes;
export type wrapperCommon = typeof $spotware.ProtoHeartbeatEvent;
export type wrapper = wrapperCommon | wrapperOpenApi;

export function createAndEmitCommonMessage<P>(
  TYPE: wrapperCommon,
  properties: P,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
) {
  const payloadType = TYPE.prototype.payloadType;
  const message = TYPE.create({ ...properties });
  const payload = TYPE.encode(message).finish();
  const pm: $spotware.IProtoMessage = { payloadType, payload, clientMsgId };
  emitter.emit(`${payloadType}.${TYPE.name}`, { ...properties });
  emitter.emit(`${payloadType}.${PROTO_MESSAGE_EVENT}`, pm);
  emitter.emit(PROTO_MESSAGE_EVENT, pm);
}

export function createAndEmitOpenApiMessage<P>(
  TYPE: wrapperOpenApi,
  properties: P,
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
) {
  const payloadType = TYPE.prototype.payloadType;
  const message = TYPE.create({ ...properties });
  const payload = TYPE.encode(message).finish();
  const pm: $spotware.IProtoMessage = { payloadType, payload, clientMsgId };
  emitter.emit(`${payloadType}.${TYPE.name}`, { ...properties });
  emitter.emit(`${payloadType}.${PROTO_MESSAGE_EVENT}`, pm);
  emitter.emit(PROTO_MESSAGE_EVENT, pm);
}

export function registerRequest(
  EVENT: $spotware.ProtoOAPayloadType | $spotware.ProtoPayloadType,
  gateway: Gateway
) {
  const { emitter } = gateway;
  emitter.on(`${EVENT}.${PROTO_MESSAGE_EVENT}`, gateway.writeProtoMessage);
}

export function registerResponse(
  TYPE: wrapper,
  EVENT: $spotware.ProtoOAPayloadType | $spotware.ProtoPayloadType,
  emitter: EventEmitter
): void {
  emitter.on(
    `${EVENT}.${PROTO_MESSAGE_EVENT}`,
    parseAndEmitMessage(TYPE, emitter)
  );
}

function parseAndEmitMessage(TYPE: wrapper, emitter: EventEmitter): LISTENER {
  return message => {
    if (message.payload) {
      const msg = TYPE.decode(message.payload);
      if (msg) {
        emitter.emit(`${message.payloadType}.${TYPE.name}`, msg);
      }
    }
  };
}

export type LISTENER = (message: $spotware.IProtoMessage) => void;
export type PromiseCallbacks<T> = {
  resolve: (value?: T | PromiseLike<T>) => void;
  reject: (reason?: any) => void;
};
export function createListener(
  TYPE: wrapper,
  clientMsgId: string | null | undefined,
  callbacks: PromiseCallbacks<$spotware.IProtoOAApplicationAuthRes>
): LISTENER {
  return message => {
    try {
      if (message.clientMsgId === clientMsgId) {
        if (!!!message.payload) {
          return callbacks.reject(
            new Error(
              `Got expected message (${
                message.payloadType
              }), but it did not have a payload.`
            )
          );
        }
        switch (message.payloadType) {
          case TYPE.prototype.payloadType:
            return treatResponse(TYPE, message.payload, callbacks);
          case $spotware.ProtoOAErrorRes.prototype.payloadType:
            return treatOpenApiError(message.payload, callbacks);
          case $spotware.ProtoErrorRes.prototype.payloadType:
            return treatCommonError(message.payload, callbacks);
          default:
            return callbacks.reject(
              new Error(`Got unexpected message (${message.payloadType}).`)
            );
        }
      }
    } catch (error) {
      callbacks.reject(error);
    }
  };
}
function treatResponse<T>(
  TYPE: wrapper,
  payload: Reader | Uint8Array,
  callbacks: PromiseCallbacks<T>
) {
  const msg = TYPE.decode(payload);
  // :(
  callbacks.resolve(TYPE.toObject(msg as any) as any);
}
function treatOpenApiError<T>(
  payload: Reader | Uint8Array,
  callbacks: PromiseCallbacks<T>
) {
  const msg = $spotware.ProtoOAErrorRes.decode(payload);
  callbacks.reject(
    new Error(
      `${msg.description} [error code: ${msg.errorCode}; cTID: ${
        msg.ctidTraderAccountId
      }]`
    )
  );
}
function treatCommonError<T>(
  payload: Reader | Uint8Array,
  callbacks: PromiseCallbacks<T>
) {
  const msg = $spotware.ProtoErrorRes.decode(payload);
  callbacks.reject(
    new Error(`${msg.description} [error code: ${msg.errorCode}]`)
  );
}
export function registerListener(
  TYPE: wrapper,
  emitter: EventEmitter,
  listener: LISTENER
) {
  registerListenerResponse(TYPE, emitter, listener);
  registerListenerOpenApiError(emitter, listener);
  registerListenerCommonError(emitter, listener);
}
function registerListenerResponse(
  TYPE: wrapper,
  emitter: EventEmitter,
  listener: LISTENER
) {
  const { payloadType } = TYPE.prototype;
  emitter.on(`${payloadType}.${PROTO_MESSAGE_EVENT}`, listener);
}
function registerListenerOpenApiError(
  emitter: EventEmitter,
  listener: LISTENER
) {
  const { payloadType } = $spotware.ProtoOAErrorRes.prototype;
  emitter.on(`${payloadType}.${PROTO_MESSAGE_EVENT}`, listener);
}
function registerListenerCommonError(
  emitter: EventEmitter,
  listener: LISTENER
) {
  const { payloadType } = $spotware.ProtoErrorRes.prototype;
  emitter.on(`${payloadType}.${PROTO_MESSAGE_EVENT}`, listener);
}
export function unregisterListener(
  TYPE: wrapper,
  emitter: EventEmitter,
  listener: LISTENER
): void {
  unregisterListenerResponse(TYPE, emitter, listener);
  unregisterListenerOpenApiError(emitter, listener);
  unregisterListenerCommonError(emitter, listener);
}
function unregisterListenerResponse(
  TYPE: wrapper,
  emitter: EventEmitter,
  listener: LISTENER
): void {
  const { payloadType } = TYPE.prototype;
  emitter.off(`${payloadType}.${PROTO_MESSAGE_EVENT}`, listener);
}
function unregisterListenerOpenApiError(
  emitter: EventEmitter,
  listener: LISTENER
): void {
  const { payloadType } = $spotware.ProtoOAErrorRes.prototype;
  emitter.off(`${payloadType}.${PROTO_MESSAGE_EVENT}`, listener);
}
function unregisterListenerCommonError(
  emitter: EventEmitter,
  listener: LISTENER
): void {
  const { payloadType } = $spotware.ProtoErrorRes.prototype;
  emitter.off(`${payloadType}.${PROTO_MESSAGE_EVENT}`, listener);
}
