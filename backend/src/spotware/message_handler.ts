import * as $spotware from "../generated/spotware";
import { EventEmitter } from "events";
import { PROTO_MESSAGE_EVENT, Gateway } from "./gateway";

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

function parseAndEmitMessage(
  TYPE: wrapper,
  emitter: EventEmitter
): (message: $spotware.IProtoMessage) => void {
  return (message: $spotware.IProtoMessage) => {
    if (message.payload) {
      const msg = TYPE.decode(message.payload);
      if (msg) {
        emitter.emit(`${message.payloadType}.${TYPE.name}`, msg);
      }
    }
  };
}
