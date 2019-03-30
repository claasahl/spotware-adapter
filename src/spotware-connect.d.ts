import * as $protobuf from "protobufjs";
/** Properties of a ProtoMessage. */
export interface IProtoMessage {
  /** ProtoMessage payloadType */
  payloadType: number;

  /** ProtoMessage payload */
  payload?: Uint8Array | null;

  /** ProtoMessage clientMsgId */
  clientMsgId?: string | null;
}

/** Represents a ProtoMessage. */
export class ProtoMessage implements IProtoMessage {
  /**
   * Constructs a new ProtoMessage.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoMessage);

  /** ProtoMessage payloadType. */
  public payloadType: number;

  /** ProtoMessage payload. */
  public payload: Uint8Array;

  /** ProtoMessage clientMsgId. */
  public clientMsgId: string;

  /**
   * Creates a new ProtoMessage instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoMessage instance
   */
  public static create(properties?: IProtoMessage): ProtoMessage;

  /**
   * Encodes the specified ProtoMessage message. Does not implicitly {@link ProtoMessage.verify|verify} messages.
   * @param message ProtoMessage message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoMessage,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoMessage message, length delimited. Does not implicitly {@link ProtoMessage.verify|verify} messages.
   * @param message ProtoMessage message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoMessage,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoMessage message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoMessage
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoMessage;

  /**
   * Decodes a ProtoMessage message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoMessage
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoMessage;

  /**
   * Verifies a ProtoMessage message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoMessage message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoMessage
   */
  public static fromObject(object: { [k: string]: any }): ProtoMessage;

  /**
   * Creates a plain object from a ProtoMessage message. Also converts values to other types if specified.
   * @param message ProtoMessage
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoMessage,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoMessage to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoErrorRes. */
export interface IProtoErrorRes {
  /** ProtoErrorRes payloadType */
  payloadType?: ProtoPayloadType | null;

  /** ProtoErrorRes errorCode */
  errorCode: string;

  /** ProtoErrorRes description */
  description?: string | null;

  /** ProtoErrorRes maintenanceEndTimestamp */
  maintenanceEndTimestamp?: number | Long | null;
}

/** Represents a ProtoErrorRes. */
export class ProtoErrorRes implements IProtoErrorRes {
  /**
   * Constructs a new ProtoErrorRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoErrorRes);

  /** ProtoErrorRes payloadType. */
  public payloadType: ProtoPayloadType;

  /** ProtoErrorRes errorCode. */
  public errorCode: string;

  /** ProtoErrorRes description. */
  public description: string;

  /** ProtoErrorRes maintenanceEndTimestamp. */
  public maintenanceEndTimestamp: number | Long;

  /**
   * Creates a new ProtoErrorRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoErrorRes instance
   */
  public static create(properties?: IProtoErrorRes): ProtoErrorRes;

  /**
   * Encodes the specified ProtoErrorRes message. Does not implicitly {@link ProtoErrorRes.verify|verify} messages.
   * @param message ProtoErrorRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoErrorRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoErrorRes message, length delimited. Does not implicitly {@link ProtoErrorRes.verify|verify} messages.
   * @param message ProtoErrorRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoErrorRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoErrorRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoErrorRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoErrorRes;

  /**
   * Decodes a ProtoErrorRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoErrorRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoErrorRes;

  /**
   * Verifies a ProtoErrorRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoErrorRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoErrorRes
   */
  public static fromObject(object: { [k: string]: any }): ProtoErrorRes;

  /**
   * Creates a plain object from a ProtoErrorRes message. Also converts values to other types if specified.
   * @param message ProtoErrorRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoErrorRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoErrorRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoHeartbeatEvent. */
export interface IProtoHeartbeatEvent {
  /** ProtoHeartbeatEvent payloadType */
  payloadType?: ProtoPayloadType | null;
}

/** Event that is sent from Open API proxy and can be used as criteria that connection is healthy when no other messages are sent by cTrader platform. Open API client can send this message when he needs to keep the connection open for a period without other messages longer than 30 seconds */
export class ProtoHeartbeatEvent implements IProtoHeartbeatEvent {
  /**
   * Constructs a new ProtoHeartbeatEvent.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoHeartbeatEvent);

  /** ProtoHeartbeatEvent payloadType. */
  public payloadType: ProtoPayloadType;

  /**
   * Creates a new ProtoHeartbeatEvent instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoHeartbeatEvent instance
   */
  public static create(properties?: IProtoHeartbeatEvent): ProtoHeartbeatEvent;

  /**
   * Encodes the specified ProtoHeartbeatEvent message. Does not implicitly {@link ProtoHeartbeatEvent.verify|verify} messages.
   * @param message ProtoHeartbeatEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoHeartbeatEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoHeartbeatEvent message, length delimited. Does not implicitly {@link ProtoHeartbeatEvent.verify|verify} messages.
   * @param message ProtoHeartbeatEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoHeartbeatEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoHeartbeatEvent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoHeartbeatEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoHeartbeatEvent;

  /**
   * Decodes a ProtoHeartbeatEvent message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoHeartbeatEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoHeartbeatEvent;

  /**
   * Verifies a ProtoHeartbeatEvent message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoHeartbeatEvent message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoHeartbeatEvent
   */
  public static fromObject(object: { [k: string]: any }): ProtoHeartbeatEvent;

  /**
   * Creates a plain object from a ProtoHeartbeatEvent message. Also converts values to other types if specified.
   * @param message ProtoHeartbeatEvent
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoHeartbeatEvent,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoHeartbeatEvent to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** ProtoPayloadType enum. */
export enum ProtoPayloadType {
  PROTO_MESSAGE = 5,
  ERROR_RES = 50,
  HEARTBEAT_EVENT = 51
}

/** ProtoErrorCode enum. */
export enum ProtoErrorCode {
  UNKNOWN_ERROR = 1,
  UNSUPPORTED_MESSAGE = 2,
  INVALID_REQUEST = 3,
  WRONG_PASSWORD = 4,
  TIMEOUT_ERROR = 5,
  ENTITY_NOT_FOUND = 6,
  CANT_ROUTE_REQUEST = 7,
  FRAME_TOO_LONG = 8,
  MARKET_CLOSED = 9,
  CONCURRENT_MODIFICATION = 10,
  BLOCKED_PAYLOAD_TYPE = 11
}

/** Properties of a ProtoOAApplicationAuthReq. */
export interface IProtoOAApplicationAuthReq {
  /** ProtoOAApplicationAuthReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAApplicationAuthReq clientId */
  clientId: string;

  /** ProtoOAApplicationAuthReq clientSecret */
  clientSecret: string;
}

/** Request for the authorizing an application to work with the cTrader platform Proxies. */
export class ProtoOAApplicationAuthReq implements IProtoOAApplicationAuthReq {
  /**
   * Constructs a new ProtoOAApplicationAuthReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAApplicationAuthReq);

  /** ProtoOAApplicationAuthReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAApplicationAuthReq clientId. */
  public clientId: string;

  /** ProtoOAApplicationAuthReq clientSecret. */
  public clientSecret: string;

  /**
   * Creates a new ProtoOAApplicationAuthReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAApplicationAuthReq instance
   */
  public static create(
    properties?: IProtoOAApplicationAuthReq
  ): ProtoOAApplicationAuthReq;

  /**
   * Encodes the specified ProtoOAApplicationAuthReq message. Does not implicitly {@link ProtoOAApplicationAuthReq.verify|verify} messages.
   * @param message ProtoOAApplicationAuthReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAApplicationAuthReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAApplicationAuthReq message, length delimited. Does not implicitly {@link ProtoOAApplicationAuthReq.verify|verify} messages.
   * @param message ProtoOAApplicationAuthReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAApplicationAuthReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAApplicationAuthReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAApplicationAuthReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAApplicationAuthReq;

  /**
   * Decodes a ProtoOAApplicationAuthReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAApplicationAuthReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAApplicationAuthReq;

  /**
   * Verifies a ProtoOAApplicationAuthReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAApplicationAuthReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAApplicationAuthReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAApplicationAuthReq;

  /**
   * Creates a plain object from a ProtoOAApplicationAuthReq message. Also converts values to other types if specified.
   * @param message ProtoOAApplicationAuthReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAApplicationAuthReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAApplicationAuthReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAApplicationAuthRes. */
export interface IProtoOAApplicationAuthRes {
  /** ProtoOAApplicationAuthRes payloadType */
  payloadType?: ProtoOAPayloadType | null;
}

/** Response to the ProtoOAApplicationAuthReq request. */
export class ProtoOAApplicationAuthRes implements IProtoOAApplicationAuthRes {
  /**
   * Constructs a new ProtoOAApplicationAuthRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAApplicationAuthRes);

  /** ProtoOAApplicationAuthRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /**
   * Creates a new ProtoOAApplicationAuthRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAApplicationAuthRes instance
   */
  public static create(
    properties?: IProtoOAApplicationAuthRes
  ): ProtoOAApplicationAuthRes;

  /**
   * Encodes the specified ProtoOAApplicationAuthRes message. Does not implicitly {@link ProtoOAApplicationAuthRes.verify|verify} messages.
   * @param message ProtoOAApplicationAuthRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAApplicationAuthRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAApplicationAuthRes message, length delimited. Does not implicitly {@link ProtoOAApplicationAuthRes.verify|verify} messages.
   * @param message ProtoOAApplicationAuthRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAApplicationAuthRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAApplicationAuthRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAApplicationAuthRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAApplicationAuthRes;

  /**
   * Decodes a ProtoOAApplicationAuthRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAApplicationAuthRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAApplicationAuthRes;

  /**
   * Verifies a ProtoOAApplicationAuthRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAApplicationAuthRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAApplicationAuthRes
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAApplicationAuthRes;

  /**
   * Creates a plain object from a ProtoOAApplicationAuthRes message. Also converts values to other types if specified.
   * @param message ProtoOAApplicationAuthRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAApplicationAuthRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAApplicationAuthRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAAccountAuthReq. */
export interface IProtoOAAccountAuthReq {
  /** ProtoOAAccountAuthReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAccountAuthReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAAccountAuthReq accessToken */
  accessToken: string;
}

/** Request for the authorizing trading account session. Requires established authorized connection with the client application using ProtoOAApplicationAuthReq. */
export class ProtoOAAccountAuthReq implements IProtoOAAccountAuthReq {
  /**
   * Constructs a new ProtoOAAccountAuthReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAAccountAuthReq);

  /** ProtoOAAccountAuthReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAAccountAuthReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAAccountAuthReq accessToken. */
  public accessToken: string;

  /**
   * Creates a new ProtoOAAccountAuthReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAAccountAuthReq instance
   */
  public static create(
    properties?: IProtoOAAccountAuthReq
  ): ProtoOAAccountAuthReq;

  /**
   * Encodes the specified ProtoOAAccountAuthReq message. Does not implicitly {@link ProtoOAAccountAuthReq.verify|verify} messages.
   * @param message ProtoOAAccountAuthReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAAccountAuthReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAAccountAuthReq message, length delimited. Does not implicitly {@link ProtoOAAccountAuthReq.verify|verify} messages.
   * @param message ProtoOAAccountAuthReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAAccountAuthReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAAccountAuthReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAAccountAuthReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAAccountAuthReq;

  /**
   * Decodes a ProtoOAAccountAuthReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAAccountAuthReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAAccountAuthReq;

  /**
   * Verifies a ProtoOAAccountAuthReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAAccountAuthReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAAccountAuthReq
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAAccountAuthReq;

  /**
   * Creates a plain object from a ProtoOAAccountAuthReq message. Also converts values to other types if specified.
   * @param message ProtoOAAccountAuthReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAAccountAuthReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAAccountAuthReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAAccountAuthRes. */
export interface IProtoOAAccountAuthRes {
  /** ProtoOAAccountAuthRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAccountAuthRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;
}

/** Response to the ProtoOAApplicationAuthRes request. */
export class ProtoOAAccountAuthRes implements IProtoOAAccountAuthRes {
  /**
   * Constructs a new ProtoOAAccountAuthRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAAccountAuthRes);

  /** ProtoOAAccountAuthRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAAccountAuthRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /**
   * Creates a new ProtoOAAccountAuthRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAAccountAuthRes instance
   */
  public static create(
    properties?: IProtoOAAccountAuthRes
  ): ProtoOAAccountAuthRes;

  /**
   * Encodes the specified ProtoOAAccountAuthRes message. Does not implicitly {@link ProtoOAAccountAuthRes.verify|verify} messages.
   * @param message ProtoOAAccountAuthRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAAccountAuthRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAAccountAuthRes message, length delimited. Does not implicitly {@link ProtoOAAccountAuthRes.verify|verify} messages.
   * @param message ProtoOAAccountAuthRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAAccountAuthRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAAccountAuthRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAAccountAuthRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAAccountAuthRes;

  /**
   * Decodes a ProtoOAAccountAuthRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAAccountAuthRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAAccountAuthRes;

  /**
   * Verifies a ProtoOAAccountAuthRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAAccountAuthRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAAccountAuthRes
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAAccountAuthRes;

  /**
   * Creates a plain object from a ProtoOAAccountAuthRes message. Also converts values to other types if specified.
   * @param message ProtoOAAccountAuthRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAAccountAuthRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAAccountAuthRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAErrorRes. */
export interface IProtoOAErrorRes {
  /** ProtoOAErrorRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAErrorRes ctidTraderAccountId */
  ctidTraderAccountId?: number | Long | null;

  /** ProtoOAErrorRes errorCode */
  errorCode: string;

  /** ProtoOAErrorRes description */
  description?: string | null;
}

/** Generic response when an ERROR occurred. */
export class ProtoOAErrorRes implements IProtoOAErrorRes {
  /**
   * Constructs a new ProtoOAErrorRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAErrorRes);

  /** ProtoOAErrorRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAErrorRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAErrorRes errorCode. */
  public errorCode: string;

  /** ProtoOAErrorRes description. */
  public description: string;

  /**
   * Creates a new ProtoOAErrorRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAErrorRes instance
   */
  public static create(properties?: IProtoOAErrorRes): ProtoOAErrorRes;

  /**
   * Encodes the specified ProtoOAErrorRes message. Does not implicitly {@link ProtoOAErrorRes.verify|verify} messages.
   * @param message ProtoOAErrorRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAErrorRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAErrorRes message, length delimited. Does not implicitly {@link ProtoOAErrorRes.verify|verify} messages.
   * @param message ProtoOAErrorRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAErrorRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAErrorRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAErrorRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAErrorRes;

  /**
   * Decodes a ProtoOAErrorRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAErrorRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAErrorRes;

  /**
   * Verifies a ProtoOAErrorRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAErrorRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAErrorRes
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAErrorRes;

  /**
   * Creates a plain object from a ProtoOAErrorRes message. Also converts values to other types if specified.
   * @param message ProtoOAErrorRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAErrorRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAErrorRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAClientDisconnectEvent. */
export interface IProtoOAClientDisconnectEvent {
  /** ProtoOAClientDisconnectEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAClientDisconnectEvent reason */
  reason?: string | null;
}

/** The event that is sent when the connection with the client application is cancelled by the server. All the sessions for the traders' accounts will be terminated. */
export class ProtoOAClientDisconnectEvent
  implements IProtoOAClientDisconnectEvent {
  /**
   * Constructs a new ProtoOAClientDisconnectEvent.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAClientDisconnectEvent);

  /** ProtoOAClientDisconnectEvent payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAClientDisconnectEvent reason. */
  public reason: string;

  /**
   * Creates a new ProtoOAClientDisconnectEvent instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAClientDisconnectEvent instance
   */
  public static create(
    properties?: IProtoOAClientDisconnectEvent
  ): ProtoOAClientDisconnectEvent;

  /**
   * Encodes the specified ProtoOAClientDisconnectEvent message. Does not implicitly {@link ProtoOAClientDisconnectEvent.verify|verify} messages.
   * @param message ProtoOAClientDisconnectEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAClientDisconnectEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAClientDisconnectEvent message, length delimited. Does not implicitly {@link ProtoOAClientDisconnectEvent.verify|verify} messages.
   * @param message ProtoOAClientDisconnectEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAClientDisconnectEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAClientDisconnectEvent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAClientDisconnectEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAClientDisconnectEvent;

  /**
   * Decodes a ProtoOAClientDisconnectEvent message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAClientDisconnectEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAClientDisconnectEvent;

  /**
   * Verifies a ProtoOAClientDisconnectEvent message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAClientDisconnectEvent message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAClientDisconnectEvent
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAClientDisconnectEvent;

  /**
   * Creates a plain object from a ProtoOAClientDisconnectEvent message. Also converts values to other types if specified.
   * @param message ProtoOAClientDisconnectEvent
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAClientDisconnectEvent,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAClientDisconnectEvent to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAAccountsTokenInvalidatedEvent. */
export interface IProtoOAAccountsTokenInvalidatedEvent {
  /** ProtoOAAccountsTokenInvalidatedEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAccountsTokenInvalidatedEvent ctidTraderAccountIds */
  ctidTraderAccountIds?: (number | Long)[] | null;

  /** ProtoOAAccountsTokenInvalidatedEvent reason */
  reason?: string | null;
}

/** Event that is sent when a session to a specific trader's account is terminated by the server but the existing connections with the other trader's accounts are maintained. */
export class ProtoOAAccountsTokenInvalidatedEvent
  implements IProtoOAAccountsTokenInvalidatedEvent {
  /**
   * Constructs a new ProtoOAAccountsTokenInvalidatedEvent.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAAccountsTokenInvalidatedEvent);

  /** ProtoOAAccountsTokenInvalidatedEvent payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAAccountsTokenInvalidatedEvent ctidTraderAccountIds. */
  public ctidTraderAccountIds: (number | Long)[];

  /** ProtoOAAccountsTokenInvalidatedEvent reason. */
  public reason: string;

  /**
   * Creates a new ProtoOAAccountsTokenInvalidatedEvent instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAAccountsTokenInvalidatedEvent instance
   */
  public static create(
    properties?: IProtoOAAccountsTokenInvalidatedEvent
  ): ProtoOAAccountsTokenInvalidatedEvent;

  /**
   * Encodes the specified ProtoOAAccountsTokenInvalidatedEvent message. Does not implicitly {@link ProtoOAAccountsTokenInvalidatedEvent.verify|verify} messages.
   * @param message ProtoOAAccountsTokenInvalidatedEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAAccountsTokenInvalidatedEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAAccountsTokenInvalidatedEvent message, length delimited. Does not implicitly {@link ProtoOAAccountsTokenInvalidatedEvent.verify|verify} messages.
   * @param message ProtoOAAccountsTokenInvalidatedEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAAccountsTokenInvalidatedEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAAccountsTokenInvalidatedEvent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAAccountsTokenInvalidatedEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAAccountsTokenInvalidatedEvent;

  /**
   * Decodes a ProtoOAAccountsTokenInvalidatedEvent message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAAccountsTokenInvalidatedEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAAccountsTokenInvalidatedEvent;

  /**
   * Verifies a ProtoOAAccountsTokenInvalidatedEvent message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAAccountsTokenInvalidatedEvent message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAAccountsTokenInvalidatedEvent
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAAccountsTokenInvalidatedEvent;

  /**
   * Creates a plain object from a ProtoOAAccountsTokenInvalidatedEvent message. Also converts values to other types if specified.
   * @param message ProtoOAAccountsTokenInvalidatedEvent
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAAccountsTokenInvalidatedEvent,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAAccountsTokenInvalidatedEvent to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAVersionReq. */
export interface IProtoOAVersionReq {
  /** ProtoOAVersionReq payloadType */
  payloadType?: ProtoOAPayloadType | null;
}

/** Request for getting the proxy version. Can be used to check the current version of the Open API scheme. */
export class ProtoOAVersionReq implements IProtoOAVersionReq {
  /**
   * Constructs a new ProtoOAVersionReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAVersionReq);

  /** ProtoOAVersionReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /**
   * Creates a new ProtoOAVersionReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAVersionReq instance
   */
  public static create(properties?: IProtoOAVersionReq): ProtoOAVersionReq;

  /**
   * Encodes the specified ProtoOAVersionReq message. Does not implicitly {@link ProtoOAVersionReq.verify|verify} messages.
   * @param message ProtoOAVersionReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAVersionReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAVersionReq message, length delimited. Does not implicitly {@link ProtoOAVersionReq.verify|verify} messages.
   * @param message ProtoOAVersionReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAVersionReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAVersionReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAVersionReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAVersionReq;

  /**
   * Decodes a ProtoOAVersionReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAVersionReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAVersionReq;

  /**
   * Verifies a ProtoOAVersionReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAVersionReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAVersionReq
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAVersionReq;

  /**
   * Creates a plain object from a ProtoOAVersionReq message. Also converts values to other types if specified.
   * @param message ProtoOAVersionReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAVersionReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAVersionReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAVersionRes. */
export interface IProtoOAVersionRes {
  /** ProtoOAVersionRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAVersionRes version */
  version: string;
}

/** Response to the ProtoOAVersionReq request. */
export class ProtoOAVersionRes implements IProtoOAVersionRes {
  /**
   * Constructs a new ProtoOAVersionRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAVersionRes);

  /** ProtoOAVersionRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAVersionRes version. */
  public version: string;

  /**
   * Creates a new ProtoOAVersionRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAVersionRes instance
   */
  public static create(properties?: IProtoOAVersionRes): ProtoOAVersionRes;

  /**
   * Encodes the specified ProtoOAVersionRes message. Does not implicitly {@link ProtoOAVersionRes.verify|verify} messages.
   * @param message ProtoOAVersionRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAVersionRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAVersionRes message, length delimited. Does not implicitly {@link ProtoOAVersionRes.verify|verify} messages.
   * @param message ProtoOAVersionRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAVersionRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAVersionRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAVersionRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAVersionRes;

  /**
   * Decodes a ProtoOAVersionRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAVersionRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAVersionRes;

  /**
   * Verifies a ProtoOAVersionRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAVersionRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAVersionRes
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAVersionRes;

  /**
   * Creates a plain object from a ProtoOAVersionRes message. Also converts values to other types if specified.
   * @param message ProtoOAVersionRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAVersionRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAVersionRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOANewOrderReq. */
export interface IProtoOANewOrderReq {
  /** ProtoOANewOrderReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOANewOrderReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOANewOrderReq symbolId */
  symbolId: number | Long;

  /** ProtoOANewOrderReq orderType */
  orderType: ProtoOAOrderType;

  /** ProtoOANewOrderReq tradeSide */
  tradeSide: ProtoOATradeSide;

  /** ProtoOANewOrderReq volume */
  volume: number | Long;

  /** ProtoOANewOrderReq limitPrice */
  limitPrice?: number | null;

  /** ProtoOANewOrderReq stopPrice */
  stopPrice?: number | null;

  /** ProtoOANewOrderReq timeInForce */
  timeInForce?: ProtoOATimeInForce | null;

  /** ProtoOANewOrderReq expirationTimestamp */
  expirationTimestamp?: number | Long | null;

  /** ProtoOANewOrderReq stopLoss */
  stopLoss?: number | null;

  /** ProtoOANewOrderReq takeProfit */
  takeProfit?: number | null;

  /** ProtoOANewOrderReq comment */
  comment?: string | null;

  /** ProtoOANewOrderReq baseSlippagePrice */
  baseSlippagePrice?: number | null;

  /** ProtoOANewOrderReq slippageInPoints */
  slippageInPoints?: number | null;

  /** ProtoOANewOrderReq label */
  label?: string | null;

  /** ProtoOANewOrderReq positionId */
  positionId?: number | Long | null;

  /** ProtoOANewOrderReq clientOrderId */
  clientOrderId?: string | null;

  /** ProtoOANewOrderReq relativeStopLoss */
  relativeStopLoss?: number | Long | null;

  /** ProtoOANewOrderReq relativeTakeProfit */
  relativeTakeProfit?: number | Long | null;

  /** ProtoOANewOrderReq guaranteedStopLoss */
  guaranteedStopLoss?: boolean | null;

  /** ProtoOANewOrderReq trailingStopLoss */
  trailingStopLoss?: boolean | null;

  /** ProtoOANewOrderReq stopTriggerMethod */
  stopTriggerMethod?: ProtoOAOrderTriggerMethod | null;
}

/** Request for sending a new trading order. Allowed only if the accessToken has the "trade" permissions for the trading account. */
export class ProtoOANewOrderReq implements IProtoOANewOrderReq {
  /**
   * Constructs a new ProtoOANewOrderReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOANewOrderReq);

  /** ProtoOANewOrderReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOANewOrderReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOANewOrderReq symbolId. */
  public symbolId: number | Long;

  /** ProtoOANewOrderReq orderType. */
  public orderType: ProtoOAOrderType;

  /** ProtoOANewOrderReq tradeSide. */
  public tradeSide: ProtoOATradeSide;

  /** ProtoOANewOrderReq volume. */
  public volume: number | Long;

  /** ProtoOANewOrderReq limitPrice. */
  public limitPrice: number;

  /** ProtoOANewOrderReq stopPrice. */
  public stopPrice: number;

  /** ProtoOANewOrderReq timeInForce. */
  public timeInForce: ProtoOATimeInForce;

  /** ProtoOANewOrderReq expirationTimestamp. */
  public expirationTimestamp: number | Long;

  /** ProtoOANewOrderReq stopLoss. */
  public stopLoss: number;

  /** ProtoOANewOrderReq takeProfit. */
  public takeProfit: number;

  /** ProtoOANewOrderReq comment. */
  public comment: string;

  /** ProtoOANewOrderReq baseSlippagePrice. */
  public baseSlippagePrice: number;

  /** ProtoOANewOrderReq slippageInPoints. */
  public slippageInPoints: number;

  /** ProtoOANewOrderReq label. */
  public label: string;

  /** ProtoOANewOrderReq positionId. */
  public positionId: number | Long;

  /** ProtoOANewOrderReq clientOrderId. */
  public clientOrderId: string;

  /** ProtoOANewOrderReq relativeStopLoss. */
  public relativeStopLoss: number | Long;

  /** ProtoOANewOrderReq relativeTakeProfit. */
  public relativeTakeProfit: number | Long;

  /** ProtoOANewOrderReq guaranteedStopLoss. */
  public guaranteedStopLoss: boolean;

  /** ProtoOANewOrderReq trailingStopLoss. */
  public trailingStopLoss: boolean;

  /** ProtoOANewOrderReq stopTriggerMethod. */
  public stopTriggerMethod: ProtoOAOrderTriggerMethod;

  /**
   * Creates a new ProtoOANewOrderReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOANewOrderReq instance
   */
  public static create(properties?: IProtoOANewOrderReq): ProtoOANewOrderReq;

  /**
   * Encodes the specified ProtoOANewOrderReq message. Does not implicitly {@link ProtoOANewOrderReq.verify|verify} messages.
   * @param message ProtoOANewOrderReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOANewOrderReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOANewOrderReq message, length delimited. Does not implicitly {@link ProtoOANewOrderReq.verify|verify} messages.
   * @param message ProtoOANewOrderReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOANewOrderReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOANewOrderReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOANewOrderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOANewOrderReq;

  /**
   * Decodes a ProtoOANewOrderReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOANewOrderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOANewOrderReq;

  /**
   * Verifies a ProtoOANewOrderReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOANewOrderReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOANewOrderReq
   */
  public static fromObject(object: { [k: string]: any }): ProtoOANewOrderReq;

  /**
   * Creates a plain object from a ProtoOANewOrderReq message. Also converts values to other types if specified.
   * @param message ProtoOANewOrderReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOANewOrderReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOANewOrderReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAExecutionEvent. */
export interface IProtoOAExecutionEvent {
  /** ProtoOAExecutionEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAExecutionEvent ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAExecutionEvent executionType */
  executionType: ProtoOAExecutionType;

  /** ProtoOAExecutionEvent position */
  position?: ProtoOAPosition | null;

  /** ProtoOAExecutionEvent order */
  order?: ProtoOAOrder | null;

  /** ProtoOAExecutionEvent deal */
  deal?: ProtoOADeal | null;

  /** ProtoOAExecutionEvent bonusDepositWithdraw */
  bonusDepositWithdraw?: ProtoOABonusDepositWithdraw | null;

  /** ProtoOAExecutionEvent depositWithdraw */
  depositWithdraw?: ProtoOADepositWithdraw | null;

  /** ProtoOAExecutionEvent errorCode */
  errorCode?: string | null;

  /** ProtoOAExecutionEvent isServerEvent */
  isServerEvent?: boolean | null;
}

/** The event that is sent following the successful order acceptance or execution by the server. Acts as response to the ProtoOANewOrderReq, ProtoOACancelOrderReq, ProtoOAAmendOrderReq, ProtoOAAmendPositionSLTPReq, ProtoOAClosePositionReq requests. Also, the event is sent when a Deposit/Withdrawal took place. */
export class ProtoOAExecutionEvent implements IProtoOAExecutionEvent {
  /**
   * Constructs a new ProtoOAExecutionEvent.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAExecutionEvent);

  /** ProtoOAExecutionEvent payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAExecutionEvent ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAExecutionEvent executionType. */
  public executionType: ProtoOAExecutionType;

  /** ProtoOAExecutionEvent position. */
  public position?: ProtoOAPosition | null;

  /** ProtoOAExecutionEvent order. */
  public order?: ProtoOAOrder | null;

  /** ProtoOAExecutionEvent deal. */
  public deal?: ProtoOADeal | null;

  /** ProtoOAExecutionEvent bonusDepositWithdraw. */
  public bonusDepositWithdraw?: ProtoOABonusDepositWithdraw | null;

  /** ProtoOAExecutionEvent depositWithdraw. */
  public depositWithdraw?: ProtoOADepositWithdraw | null;

  /** ProtoOAExecutionEvent errorCode. */
  public errorCode: string;

  /** ProtoOAExecutionEvent isServerEvent. */
  public isServerEvent: boolean;

  /**
   * Creates a new ProtoOAExecutionEvent instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAExecutionEvent instance
   */
  public static create(
    properties?: IProtoOAExecutionEvent
  ): ProtoOAExecutionEvent;

  /**
   * Encodes the specified ProtoOAExecutionEvent message. Does not implicitly {@link ProtoOAExecutionEvent.verify|verify} messages.
   * @param message ProtoOAExecutionEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAExecutionEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAExecutionEvent message, length delimited. Does not implicitly {@link ProtoOAExecutionEvent.verify|verify} messages.
   * @param message ProtoOAExecutionEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAExecutionEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAExecutionEvent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAExecutionEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAExecutionEvent;

  /**
   * Decodes a ProtoOAExecutionEvent message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAExecutionEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAExecutionEvent;

  /**
   * Verifies a ProtoOAExecutionEvent message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAExecutionEvent message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAExecutionEvent
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAExecutionEvent;

  /**
   * Creates a plain object from a ProtoOAExecutionEvent message. Also converts values to other types if specified.
   * @param message ProtoOAExecutionEvent
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAExecutionEvent,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAExecutionEvent to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOACancelOrderReq. */
export interface IProtoOACancelOrderReq {
  /** ProtoOACancelOrderReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOACancelOrderReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOACancelOrderReq orderId */
  orderId: number | Long;
}

/** Request for cancelling existing pending order. Allowed only if the accessToken has "trade" permissions for the trading account. */
export class ProtoOACancelOrderReq implements IProtoOACancelOrderReq {
  /**
   * Constructs a new ProtoOACancelOrderReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOACancelOrderReq);

  /** ProtoOACancelOrderReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOACancelOrderReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOACancelOrderReq orderId. */
  public orderId: number | Long;

  /**
   * Creates a new ProtoOACancelOrderReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOACancelOrderReq instance
   */
  public static create(
    properties?: IProtoOACancelOrderReq
  ): ProtoOACancelOrderReq;

  /**
   * Encodes the specified ProtoOACancelOrderReq message. Does not implicitly {@link ProtoOACancelOrderReq.verify|verify} messages.
   * @param message ProtoOACancelOrderReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOACancelOrderReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOACancelOrderReq message, length delimited. Does not implicitly {@link ProtoOACancelOrderReq.verify|verify} messages.
   * @param message ProtoOACancelOrderReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOACancelOrderReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOACancelOrderReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOACancelOrderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOACancelOrderReq;

  /**
   * Decodes a ProtoOACancelOrderReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOACancelOrderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOACancelOrderReq;

  /**
   * Verifies a ProtoOACancelOrderReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOACancelOrderReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOACancelOrderReq
   */
  public static fromObject(object: { [k: string]: any }): ProtoOACancelOrderReq;

  /**
   * Creates a plain object from a ProtoOACancelOrderReq message. Also converts values to other types if specified.
   * @param message ProtoOACancelOrderReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOACancelOrderReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOACancelOrderReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAAmendOrderReq. */
export interface IProtoOAAmendOrderReq {
  /** ProtoOAAmendOrderReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAmendOrderReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAAmendOrderReq orderId */
  orderId: number | Long;

  /** ProtoOAAmendOrderReq volume */
  volume?: number | Long | null;

  /** ProtoOAAmendOrderReq limitPrice */
  limitPrice?: number | null;

  /** ProtoOAAmendOrderReq stopPrice */
  stopPrice?: number | null;

  /** ProtoOAAmendOrderReq expirationTimestamp */
  expirationTimestamp?: number | Long | null;

  /** ProtoOAAmendOrderReq stopLoss */
  stopLoss?: number | null;

  /** ProtoOAAmendOrderReq takeProfit */
  takeProfit?: number | null;

  /** ProtoOAAmendOrderReq slippageInPoints */
  slippageInPoints?: number | null;

  /** ProtoOAAmendOrderReq relativeStopLoss */
  relativeStopLoss?: number | Long | null;

  /** ProtoOAAmendOrderReq relativeTakeProfit */
  relativeTakeProfit?: number | Long | null;

  /** ProtoOAAmendOrderReq guaranteedStopLoss */
  guaranteedStopLoss?: boolean | null;

  /** ProtoOAAmendOrderReq trailingStopLoss */
  trailingStopLoss?: boolean | null;

  /** ProtoOAAmendOrderReq stopTriggerMethod */
  stopTriggerMethod?: ProtoOAOrderTriggerMethod | null;
}

/** Request for amending the existing pending order. Allowed only if the Access Token has "trade" permissions for the trading account. */
export class ProtoOAAmendOrderReq implements IProtoOAAmendOrderReq {
  /**
   * Constructs a new ProtoOAAmendOrderReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAAmendOrderReq);

  /** ProtoOAAmendOrderReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAAmendOrderReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAAmendOrderReq orderId. */
  public orderId: number | Long;

  /** ProtoOAAmendOrderReq volume. */
  public volume: number | Long;

  /** ProtoOAAmendOrderReq limitPrice. */
  public limitPrice: number;

  /** ProtoOAAmendOrderReq stopPrice. */
  public stopPrice: number;

  /** ProtoOAAmendOrderReq expirationTimestamp. */
  public expirationTimestamp: number | Long;

  /** ProtoOAAmendOrderReq stopLoss. */
  public stopLoss: number;

  /** ProtoOAAmendOrderReq takeProfit. */
  public takeProfit: number;

  /** ProtoOAAmendOrderReq slippageInPoints. */
  public slippageInPoints: number;

  /** ProtoOAAmendOrderReq relativeStopLoss. */
  public relativeStopLoss: number | Long;

  /** ProtoOAAmendOrderReq relativeTakeProfit. */
  public relativeTakeProfit: number | Long;

  /** ProtoOAAmendOrderReq guaranteedStopLoss. */
  public guaranteedStopLoss: boolean;

  /** ProtoOAAmendOrderReq trailingStopLoss. */
  public trailingStopLoss: boolean;

  /** ProtoOAAmendOrderReq stopTriggerMethod. */
  public stopTriggerMethod: ProtoOAOrderTriggerMethod;

  /**
   * Creates a new ProtoOAAmendOrderReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAAmendOrderReq instance
   */
  public static create(
    properties?: IProtoOAAmendOrderReq
  ): ProtoOAAmendOrderReq;

  /**
   * Encodes the specified ProtoOAAmendOrderReq message. Does not implicitly {@link ProtoOAAmendOrderReq.verify|verify} messages.
   * @param message ProtoOAAmendOrderReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAAmendOrderReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAAmendOrderReq message, length delimited. Does not implicitly {@link ProtoOAAmendOrderReq.verify|verify} messages.
   * @param message ProtoOAAmendOrderReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAAmendOrderReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAAmendOrderReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAAmendOrderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAAmendOrderReq;

  /**
   * Decodes a ProtoOAAmendOrderReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAAmendOrderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAAmendOrderReq;

  /**
   * Verifies a ProtoOAAmendOrderReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAAmendOrderReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAAmendOrderReq
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAAmendOrderReq;

  /**
   * Creates a plain object from a ProtoOAAmendOrderReq message. Also converts values to other types if specified.
   * @param message ProtoOAAmendOrderReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAAmendOrderReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAAmendOrderReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAAmendPositionSLTPReq. */
export interface IProtoOAAmendPositionSLTPReq {
  /** ProtoOAAmendPositionSLTPReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAmendPositionSLTPReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAAmendPositionSLTPReq positionId */
  positionId: number | Long;

  /** ProtoOAAmendPositionSLTPReq stopLoss */
  stopLoss?: number | null;

  /** ProtoOAAmendPositionSLTPReq takeProfit */
  takeProfit?: number | null;

  /** ProtoOAAmendPositionSLTPReq guaranteedStopLoss */
  guaranteedStopLoss?: boolean | null;

  /** ProtoOAAmendPositionSLTPReq trailingStopLoss */
  trailingStopLoss?: boolean | null;

  /** ProtoOAAmendPositionSLTPReq stopLossTriggerMethod */
  stopLossTriggerMethod?: ProtoOAOrderTriggerMethod | null;
}

/** Request for amending StopLoss and TakeProfit of existing position. Allowed only if the accessToken has "trade" permissions for the trading account. */
export class ProtoOAAmendPositionSLTPReq
  implements IProtoOAAmendPositionSLTPReq {
  /**
   * Constructs a new ProtoOAAmendPositionSLTPReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAAmendPositionSLTPReq);

  /** ProtoOAAmendPositionSLTPReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAAmendPositionSLTPReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAAmendPositionSLTPReq positionId. */
  public positionId: number | Long;

  /** ProtoOAAmendPositionSLTPReq stopLoss. */
  public stopLoss: number;

  /** ProtoOAAmendPositionSLTPReq takeProfit. */
  public takeProfit: number;

  /** ProtoOAAmendPositionSLTPReq guaranteedStopLoss. */
  public guaranteedStopLoss: boolean;

  /** ProtoOAAmendPositionSLTPReq trailingStopLoss. */
  public trailingStopLoss: boolean;

  /** ProtoOAAmendPositionSLTPReq stopLossTriggerMethod. */
  public stopLossTriggerMethod: ProtoOAOrderTriggerMethod;

  /**
   * Creates a new ProtoOAAmendPositionSLTPReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAAmendPositionSLTPReq instance
   */
  public static create(
    properties?: IProtoOAAmendPositionSLTPReq
  ): ProtoOAAmendPositionSLTPReq;

  /**
   * Encodes the specified ProtoOAAmendPositionSLTPReq message. Does not implicitly {@link ProtoOAAmendPositionSLTPReq.verify|verify} messages.
   * @param message ProtoOAAmendPositionSLTPReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAAmendPositionSLTPReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAAmendPositionSLTPReq message, length delimited. Does not implicitly {@link ProtoOAAmendPositionSLTPReq.verify|verify} messages.
   * @param message ProtoOAAmendPositionSLTPReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAAmendPositionSLTPReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAAmendPositionSLTPReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAAmendPositionSLTPReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAAmendPositionSLTPReq;

  /**
   * Decodes a ProtoOAAmendPositionSLTPReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAAmendPositionSLTPReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAAmendPositionSLTPReq;

  /**
   * Verifies a ProtoOAAmendPositionSLTPReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAAmendPositionSLTPReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAAmendPositionSLTPReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAAmendPositionSLTPReq;

  /**
   * Creates a plain object from a ProtoOAAmendPositionSLTPReq message. Also converts values to other types if specified.
   * @param message ProtoOAAmendPositionSLTPReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAAmendPositionSLTPReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAAmendPositionSLTPReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAClosePositionReq. */
export interface IProtoOAClosePositionReq {
  /** ProtoOAClosePositionReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAClosePositionReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAClosePositionReq positionId */
  positionId: number | Long;

  /** ProtoOAClosePositionReq volume */
  volume: number | Long;
}

/** Request for closing or partially closing of an existing position. Allowed only if the accessToken has "trade" permissions for the trading account. */
export class ProtoOAClosePositionReq implements IProtoOAClosePositionReq {
  /**
   * Constructs a new ProtoOAClosePositionReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAClosePositionReq);

  /** ProtoOAClosePositionReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAClosePositionReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAClosePositionReq positionId. */
  public positionId: number | Long;

  /** ProtoOAClosePositionReq volume. */
  public volume: number | Long;

  /**
   * Creates a new ProtoOAClosePositionReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAClosePositionReq instance
   */
  public static create(
    properties?: IProtoOAClosePositionReq
  ): ProtoOAClosePositionReq;

  /**
   * Encodes the specified ProtoOAClosePositionReq message. Does not implicitly {@link ProtoOAClosePositionReq.verify|verify} messages.
   * @param message ProtoOAClosePositionReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAClosePositionReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAClosePositionReq message, length delimited. Does not implicitly {@link ProtoOAClosePositionReq.verify|verify} messages.
   * @param message ProtoOAClosePositionReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAClosePositionReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAClosePositionReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAClosePositionReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAClosePositionReq;

  /**
   * Decodes a ProtoOAClosePositionReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAClosePositionReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAClosePositionReq;

  /**
   * Verifies a ProtoOAClosePositionReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAClosePositionReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAClosePositionReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAClosePositionReq;

  /**
   * Creates a plain object from a ProtoOAClosePositionReq message. Also converts values to other types if specified.
   * @param message ProtoOAClosePositionReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAClosePositionReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAClosePositionReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOATrailingSLChangedEvent. */
export interface IProtoOATrailingSLChangedEvent {
  /** ProtoOATrailingSLChangedEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOATrailingSLChangedEvent ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOATrailingSLChangedEvent positionId */
  positionId: number | Long;

  /** ProtoOATrailingSLChangedEvent orderId */
  orderId: number | Long;

  /** ProtoOATrailingSLChangedEvent stopPrice */
  stopPrice: number;

  /** ProtoOATrailingSLChangedEvent utcLastUpdateTimestamp */
  utcLastUpdateTimestamp: number | Long;
}

/** Event that is sent when the level of the Trailing Stop Loss is changed due to the price level changes. */
export class ProtoOATrailingSLChangedEvent
  implements IProtoOATrailingSLChangedEvent {
  /**
   * Constructs a new ProtoOATrailingSLChangedEvent.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOATrailingSLChangedEvent);

  /** ProtoOATrailingSLChangedEvent payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOATrailingSLChangedEvent ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOATrailingSLChangedEvent positionId. */
  public positionId: number | Long;

  /** ProtoOATrailingSLChangedEvent orderId. */
  public orderId: number | Long;

  /** ProtoOATrailingSLChangedEvent stopPrice. */
  public stopPrice: number;

  /** ProtoOATrailingSLChangedEvent utcLastUpdateTimestamp. */
  public utcLastUpdateTimestamp: number | Long;

  /**
   * Creates a new ProtoOATrailingSLChangedEvent instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOATrailingSLChangedEvent instance
   */
  public static create(
    properties?: IProtoOATrailingSLChangedEvent
  ): ProtoOATrailingSLChangedEvent;

  /**
   * Encodes the specified ProtoOATrailingSLChangedEvent message. Does not implicitly {@link ProtoOATrailingSLChangedEvent.verify|verify} messages.
   * @param message ProtoOATrailingSLChangedEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOATrailingSLChangedEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOATrailingSLChangedEvent message, length delimited. Does not implicitly {@link ProtoOATrailingSLChangedEvent.verify|verify} messages.
   * @param message ProtoOATrailingSLChangedEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOATrailingSLChangedEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOATrailingSLChangedEvent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOATrailingSLChangedEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOATrailingSLChangedEvent;

  /**
   * Decodes a ProtoOATrailingSLChangedEvent message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOATrailingSLChangedEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOATrailingSLChangedEvent;

  /**
   * Verifies a ProtoOATrailingSLChangedEvent message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOATrailingSLChangedEvent message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOATrailingSLChangedEvent
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOATrailingSLChangedEvent;

  /**
   * Creates a plain object from a ProtoOATrailingSLChangedEvent message. Also converts values to other types if specified.
   * @param message ProtoOATrailingSLChangedEvent
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOATrailingSLChangedEvent,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOATrailingSLChangedEvent to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAAssetListReq. */
export interface IProtoOAAssetListReq {
  /** ProtoOAAssetListReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAssetListReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;
}

/** Request for the list of assets available for a trader's account. */
export class ProtoOAAssetListReq implements IProtoOAAssetListReq {
  /**
   * Constructs a new ProtoOAAssetListReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAAssetListReq);

  /** ProtoOAAssetListReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAAssetListReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /**
   * Creates a new ProtoOAAssetListReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAAssetListReq instance
   */
  public static create(properties?: IProtoOAAssetListReq): ProtoOAAssetListReq;

  /**
   * Encodes the specified ProtoOAAssetListReq message. Does not implicitly {@link ProtoOAAssetListReq.verify|verify} messages.
   * @param message ProtoOAAssetListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAAssetListReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAAssetListReq message, length delimited. Does not implicitly {@link ProtoOAAssetListReq.verify|verify} messages.
   * @param message ProtoOAAssetListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAAssetListReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAAssetListReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAAssetListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAAssetListReq;

  /**
   * Decodes a ProtoOAAssetListReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAAssetListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAAssetListReq;

  /**
   * Verifies a ProtoOAAssetListReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAAssetListReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAAssetListReq
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAAssetListReq;

  /**
   * Creates a plain object from a ProtoOAAssetListReq message. Also converts values to other types if specified.
   * @param message ProtoOAAssetListReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAAssetListReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAAssetListReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAAssetListRes. */
export interface IProtoOAAssetListRes {
  /** ProtoOAAssetListRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAssetListRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAAssetListRes asset */
  asset?: ProtoOAAsset[] | null;
}

/** Response to the ProtoOAAssetListReq request. */
export class ProtoOAAssetListRes implements IProtoOAAssetListRes {
  /**
   * Constructs a new ProtoOAAssetListRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAAssetListRes);

  /** ProtoOAAssetListRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAAssetListRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAAssetListRes asset. */
  public asset: ProtoOAAsset[];

  /**
   * Creates a new ProtoOAAssetListRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAAssetListRes instance
   */
  public static create(properties?: IProtoOAAssetListRes): ProtoOAAssetListRes;

  /**
   * Encodes the specified ProtoOAAssetListRes message. Does not implicitly {@link ProtoOAAssetListRes.verify|verify} messages.
   * @param message ProtoOAAssetListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAAssetListRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAAssetListRes message, length delimited. Does not implicitly {@link ProtoOAAssetListRes.verify|verify} messages.
   * @param message ProtoOAAssetListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAAssetListRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAAssetListRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAAssetListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAAssetListRes;

  /**
   * Decodes a ProtoOAAssetListRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAAssetListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAAssetListRes;

  /**
   * Verifies a ProtoOAAssetListRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAAssetListRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAAssetListRes
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAAssetListRes;

  /**
   * Creates a plain object from a ProtoOAAssetListRes message. Also converts values to other types if specified.
   * @param message ProtoOAAssetListRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAAssetListRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAAssetListRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASymbolsListReq. */
export interface IProtoOASymbolsListReq {
  /** ProtoOASymbolsListReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolsListReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;
}

/** Request for a list of symbols available for a trading account. Symbol entries are returned with the limited set of fields. */
export class ProtoOASymbolsListReq implements IProtoOASymbolsListReq {
  /**
   * Constructs a new ProtoOASymbolsListReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASymbolsListReq);

  /** ProtoOASymbolsListReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOASymbolsListReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /**
   * Creates a new ProtoOASymbolsListReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASymbolsListReq instance
   */
  public static create(
    properties?: IProtoOASymbolsListReq
  ): ProtoOASymbolsListReq;

  /**
   * Encodes the specified ProtoOASymbolsListReq message. Does not implicitly {@link ProtoOASymbolsListReq.verify|verify} messages.
   * @param message ProtoOASymbolsListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASymbolsListReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASymbolsListReq message, length delimited. Does not implicitly {@link ProtoOASymbolsListReq.verify|verify} messages.
   * @param message ProtoOASymbolsListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASymbolsListReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASymbolsListReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASymbolsListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASymbolsListReq;

  /**
   * Decodes a ProtoOASymbolsListReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASymbolsListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASymbolsListReq;

  /**
   * Verifies a ProtoOASymbolsListReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASymbolsListReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASymbolsListReq
   */
  public static fromObject(object: { [k: string]: any }): ProtoOASymbolsListReq;

  /**
   * Creates a plain object from a ProtoOASymbolsListReq message. Also converts values to other types if specified.
   * @param message ProtoOASymbolsListReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASymbolsListReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASymbolsListReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASymbolsListRes. */
export interface IProtoOASymbolsListRes {
  /** ProtoOASymbolsListRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolsListRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOASymbolsListRes symbol */
  symbol?: ProtoOALightSymbol[] | null;
}

/** Response to the ProtoOASymbolsListReq request. */
export class ProtoOASymbolsListRes implements IProtoOASymbolsListRes {
  /**
   * Constructs a new ProtoOASymbolsListRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASymbolsListRes);

  /** ProtoOASymbolsListRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOASymbolsListRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOASymbolsListRes symbol. */
  public symbol: ProtoOALightSymbol[];

  /**
   * Creates a new ProtoOASymbolsListRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASymbolsListRes instance
   */
  public static create(
    properties?: IProtoOASymbolsListRes
  ): ProtoOASymbolsListRes;

  /**
   * Encodes the specified ProtoOASymbolsListRes message. Does not implicitly {@link ProtoOASymbolsListRes.verify|verify} messages.
   * @param message ProtoOASymbolsListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASymbolsListRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASymbolsListRes message, length delimited. Does not implicitly {@link ProtoOASymbolsListRes.verify|verify} messages.
   * @param message ProtoOASymbolsListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASymbolsListRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASymbolsListRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASymbolsListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASymbolsListRes;

  /**
   * Decodes a ProtoOASymbolsListRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASymbolsListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASymbolsListRes;

  /**
   * Verifies a ProtoOASymbolsListRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASymbolsListRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASymbolsListRes
   */
  public static fromObject(object: { [k: string]: any }): ProtoOASymbolsListRes;

  /**
   * Creates a plain object from a ProtoOASymbolsListRes message. Also converts values to other types if specified.
   * @param message ProtoOASymbolsListRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASymbolsListRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASymbolsListRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASymbolByIdReq. */
export interface IProtoOASymbolByIdReq {
  /** ProtoOASymbolByIdReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolByIdReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOASymbolByIdReq symbolId */
  symbolId?: (number | Long)[] | null;
}

/** Request for getting a full symbol entity. */
export class ProtoOASymbolByIdReq implements IProtoOASymbolByIdReq {
  /**
   * Constructs a new ProtoOASymbolByIdReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASymbolByIdReq);

  /** ProtoOASymbolByIdReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOASymbolByIdReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOASymbolByIdReq symbolId. */
  public symbolId: (number | Long)[];

  /**
   * Creates a new ProtoOASymbolByIdReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASymbolByIdReq instance
   */
  public static create(
    properties?: IProtoOASymbolByIdReq
  ): ProtoOASymbolByIdReq;

  /**
   * Encodes the specified ProtoOASymbolByIdReq message. Does not implicitly {@link ProtoOASymbolByIdReq.verify|verify} messages.
   * @param message ProtoOASymbolByIdReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASymbolByIdReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASymbolByIdReq message, length delimited. Does not implicitly {@link ProtoOASymbolByIdReq.verify|verify} messages.
   * @param message ProtoOASymbolByIdReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASymbolByIdReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASymbolByIdReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASymbolByIdReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASymbolByIdReq;

  /**
   * Decodes a ProtoOASymbolByIdReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASymbolByIdReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASymbolByIdReq;

  /**
   * Verifies a ProtoOASymbolByIdReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASymbolByIdReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASymbolByIdReq
   */
  public static fromObject(object: { [k: string]: any }): ProtoOASymbolByIdReq;

  /**
   * Creates a plain object from a ProtoOASymbolByIdReq message. Also converts values to other types if specified.
   * @param message ProtoOASymbolByIdReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASymbolByIdReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASymbolByIdReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASymbolByIdRes. */
export interface IProtoOASymbolByIdRes {
  /** ProtoOASymbolByIdRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolByIdRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOASymbolByIdRes symbol */
  symbol?: ProtoOASymbol[] | null;
}

/** Response to the ProtoOASymbolByIdReq request. */
export class ProtoOASymbolByIdRes implements IProtoOASymbolByIdRes {
  /**
   * Constructs a new ProtoOASymbolByIdRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASymbolByIdRes);

  /** ProtoOASymbolByIdRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOASymbolByIdRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOASymbolByIdRes symbol. */
  public symbol: ProtoOASymbol[];

  /**
   * Creates a new ProtoOASymbolByIdRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASymbolByIdRes instance
   */
  public static create(
    properties?: IProtoOASymbolByIdRes
  ): ProtoOASymbolByIdRes;

  /**
   * Encodes the specified ProtoOASymbolByIdRes message. Does not implicitly {@link ProtoOASymbolByIdRes.verify|verify} messages.
   * @param message ProtoOASymbolByIdRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASymbolByIdRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASymbolByIdRes message, length delimited. Does not implicitly {@link ProtoOASymbolByIdRes.verify|verify} messages.
   * @param message ProtoOASymbolByIdRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASymbolByIdRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASymbolByIdRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASymbolByIdRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASymbolByIdRes;

  /**
   * Decodes a ProtoOASymbolByIdRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASymbolByIdRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASymbolByIdRes;

  /**
   * Verifies a ProtoOASymbolByIdRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASymbolByIdRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASymbolByIdRes
   */
  public static fromObject(object: { [k: string]: any }): ProtoOASymbolByIdRes;

  /**
   * Creates a plain object from a ProtoOASymbolByIdRes message. Also converts values to other types if specified.
   * @param message ProtoOASymbolByIdRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASymbolByIdRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASymbolByIdRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASymbolsForConversionReq. */
export interface IProtoOASymbolsForConversionReq {
  /** ProtoOASymbolsForConversionReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolsForConversionReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOASymbolsForConversionReq firstAssetId */
  firstAssetId: number | Long;

  /** ProtoOASymbolsForConversionReq lastAssetId */
  lastAssetId: number | Long;
}

/** Request for getting a conversion chain between two assets that consists of several symbols. Use when no direct quote is available */
export class ProtoOASymbolsForConversionReq
  implements IProtoOASymbolsForConversionReq {
  /**
   * Constructs a new ProtoOASymbolsForConversionReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASymbolsForConversionReq);

  /** ProtoOASymbolsForConversionReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOASymbolsForConversionReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOASymbolsForConversionReq firstAssetId. */
  public firstAssetId: number | Long;

  /** ProtoOASymbolsForConversionReq lastAssetId. */
  public lastAssetId: number | Long;

  /**
   * Creates a new ProtoOASymbolsForConversionReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASymbolsForConversionReq instance
   */
  public static create(
    properties?: IProtoOASymbolsForConversionReq
  ): ProtoOASymbolsForConversionReq;

  /**
   * Encodes the specified ProtoOASymbolsForConversionReq message. Does not implicitly {@link ProtoOASymbolsForConversionReq.verify|verify} messages.
   * @param message ProtoOASymbolsForConversionReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASymbolsForConversionReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASymbolsForConversionReq message, length delimited. Does not implicitly {@link ProtoOASymbolsForConversionReq.verify|verify} messages.
   * @param message ProtoOASymbolsForConversionReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASymbolsForConversionReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASymbolsForConversionReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASymbolsForConversionReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASymbolsForConversionReq;

  /**
   * Decodes a ProtoOASymbolsForConversionReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASymbolsForConversionReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASymbolsForConversionReq;

  /**
   * Verifies a ProtoOASymbolsForConversionReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASymbolsForConversionReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASymbolsForConversionReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOASymbolsForConversionReq;

  /**
   * Creates a plain object from a ProtoOASymbolsForConversionReq message. Also converts values to other types if specified.
   * @param message ProtoOASymbolsForConversionReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASymbolsForConversionReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASymbolsForConversionReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASymbolsForConversionRes. */
export interface IProtoOASymbolsForConversionRes {
  /** ProtoOASymbolsForConversionRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolsForConversionRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOASymbolsForConversionRes symbol */
  symbol?: ProtoOALightSymbol[] | null;
}

/** Response to the ProtoOASymbolsForConversionReq request. */
export class ProtoOASymbolsForConversionRes
  implements IProtoOASymbolsForConversionRes {
  /**
   * Constructs a new ProtoOASymbolsForConversionRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASymbolsForConversionRes);

  /** ProtoOASymbolsForConversionRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOASymbolsForConversionRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOASymbolsForConversionRes symbol. */
  public symbol: ProtoOALightSymbol[];

  /**
   * Creates a new ProtoOASymbolsForConversionRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASymbolsForConversionRes instance
   */
  public static create(
    properties?: IProtoOASymbolsForConversionRes
  ): ProtoOASymbolsForConversionRes;

  /**
   * Encodes the specified ProtoOASymbolsForConversionRes message. Does not implicitly {@link ProtoOASymbolsForConversionRes.verify|verify} messages.
   * @param message ProtoOASymbolsForConversionRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASymbolsForConversionRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASymbolsForConversionRes message, length delimited. Does not implicitly {@link ProtoOASymbolsForConversionRes.verify|verify} messages.
   * @param message ProtoOASymbolsForConversionRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASymbolsForConversionRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASymbolsForConversionRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASymbolsForConversionRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASymbolsForConversionRes;

  /**
   * Decodes a ProtoOASymbolsForConversionRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASymbolsForConversionRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASymbolsForConversionRes;

  /**
   * Verifies a ProtoOASymbolsForConversionRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASymbolsForConversionRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASymbolsForConversionRes
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOASymbolsForConversionRes;

  /**
   * Creates a plain object from a ProtoOASymbolsForConversionRes message. Also converts values to other types if specified.
   * @param message ProtoOASymbolsForConversionRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASymbolsForConversionRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASymbolsForConversionRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASymbolChangedEvent. */
export interface IProtoOASymbolChangedEvent {
  /** ProtoOASymbolChangedEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolChangedEvent ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOASymbolChangedEvent symbolId */
  symbolId?: (number | Long)[] | null;
}

/** Event that is sent when the symbol is changed on the Server side. */
export class ProtoOASymbolChangedEvent implements IProtoOASymbolChangedEvent {
  /**
   * Constructs a new ProtoOASymbolChangedEvent.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASymbolChangedEvent);

  /** ProtoOASymbolChangedEvent payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOASymbolChangedEvent ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOASymbolChangedEvent symbolId. */
  public symbolId: (number | Long)[];

  /**
   * Creates a new ProtoOASymbolChangedEvent instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASymbolChangedEvent instance
   */
  public static create(
    properties?: IProtoOASymbolChangedEvent
  ): ProtoOASymbolChangedEvent;

  /**
   * Encodes the specified ProtoOASymbolChangedEvent message. Does not implicitly {@link ProtoOASymbolChangedEvent.verify|verify} messages.
   * @param message ProtoOASymbolChangedEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASymbolChangedEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASymbolChangedEvent message, length delimited. Does not implicitly {@link ProtoOASymbolChangedEvent.verify|verify} messages.
   * @param message ProtoOASymbolChangedEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASymbolChangedEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASymbolChangedEvent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASymbolChangedEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASymbolChangedEvent;

  /**
   * Decodes a ProtoOASymbolChangedEvent message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASymbolChangedEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASymbolChangedEvent;

  /**
   * Verifies a ProtoOASymbolChangedEvent message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASymbolChangedEvent message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASymbolChangedEvent
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOASymbolChangedEvent;

  /**
   * Creates a plain object from a ProtoOASymbolChangedEvent message. Also converts values to other types if specified.
   * @param message ProtoOASymbolChangedEvent
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASymbolChangedEvent,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASymbolChangedEvent to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAAssetClassListReq. */
export interface IProtoOAAssetClassListReq {
  /** ProtoOAAssetClassListReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAssetClassListReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;
}

/** Request for a list of asset classes available for the trader's account. */
export class ProtoOAAssetClassListReq implements IProtoOAAssetClassListReq {
  /**
   * Constructs a new ProtoOAAssetClassListReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAAssetClassListReq);

  /** ProtoOAAssetClassListReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAAssetClassListReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /**
   * Creates a new ProtoOAAssetClassListReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAAssetClassListReq instance
   */
  public static create(
    properties?: IProtoOAAssetClassListReq
  ): ProtoOAAssetClassListReq;

  /**
   * Encodes the specified ProtoOAAssetClassListReq message. Does not implicitly {@link ProtoOAAssetClassListReq.verify|verify} messages.
   * @param message ProtoOAAssetClassListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAAssetClassListReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAAssetClassListReq message, length delimited. Does not implicitly {@link ProtoOAAssetClassListReq.verify|verify} messages.
   * @param message ProtoOAAssetClassListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAAssetClassListReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAAssetClassListReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAAssetClassListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAAssetClassListReq;

  /**
   * Decodes a ProtoOAAssetClassListReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAAssetClassListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAAssetClassListReq;

  /**
   * Verifies a ProtoOAAssetClassListReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAAssetClassListReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAAssetClassListReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAAssetClassListReq;

  /**
   * Creates a plain object from a ProtoOAAssetClassListReq message. Also converts values to other types if specified.
   * @param message ProtoOAAssetClassListReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAAssetClassListReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAAssetClassListReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAAssetClassListRes. */
export interface IProtoOAAssetClassListRes {
  /** ProtoOAAssetClassListRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAssetClassListRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAAssetClassListRes assetClass */
  assetClass?: ProtoOAAssetClass[] | null;
}

/** Response to the ProtoOAAssetListReq request. */
export class ProtoOAAssetClassListRes implements IProtoOAAssetClassListRes {
  /**
   * Constructs a new ProtoOAAssetClassListRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAAssetClassListRes);

  /** ProtoOAAssetClassListRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAAssetClassListRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAAssetClassListRes assetClass. */
  public assetClass: ProtoOAAssetClass[];

  /**
   * Creates a new ProtoOAAssetClassListRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAAssetClassListRes instance
   */
  public static create(
    properties?: IProtoOAAssetClassListRes
  ): ProtoOAAssetClassListRes;

  /**
   * Encodes the specified ProtoOAAssetClassListRes message. Does not implicitly {@link ProtoOAAssetClassListRes.verify|verify} messages.
   * @param message ProtoOAAssetClassListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAAssetClassListRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAAssetClassListRes message, length delimited. Does not implicitly {@link ProtoOAAssetClassListRes.verify|verify} messages.
   * @param message ProtoOAAssetClassListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAAssetClassListRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAAssetClassListRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAAssetClassListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAAssetClassListRes;

  /**
   * Decodes a ProtoOAAssetClassListRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAAssetClassListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAAssetClassListRes;

  /**
   * Verifies a ProtoOAAssetClassListRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAAssetClassListRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAAssetClassListRes
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAAssetClassListRes;

  /**
   * Creates a plain object from a ProtoOAAssetClassListRes message. Also converts values to other types if specified.
   * @param message ProtoOAAssetClassListRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAAssetClassListRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAAssetClassListRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOATraderReq. */
export interface IProtoOATraderReq {
  /** ProtoOATraderReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOATraderReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;
}

/** Request for getting data of Trader's Account. */
export class ProtoOATraderReq implements IProtoOATraderReq {
  /**
   * Constructs a new ProtoOATraderReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOATraderReq);

  /** ProtoOATraderReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOATraderReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /**
   * Creates a new ProtoOATraderReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOATraderReq instance
   */
  public static create(properties?: IProtoOATraderReq): ProtoOATraderReq;

  /**
   * Encodes the specified ProtoOATraderReq message. Does not implicitly {@link ProtoOATraderReq.verify|verify} messages.
   * @param message ProtoOATraderReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOATraderReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOATraderReq message, length delimited. Does not implicitly {@link ProtoOATraderReq.verify|verify} messages.
   * @param message ProtoOATraderReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOATraderReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOATraderReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOATraderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOATraderReq;

  /**
   * Decodes a ProtoOATraderReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOATraderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOATraderReq;

  /**
   * Verifies a ProtoOATraderReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOATraderReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOATraderReq
   */
  public static fromObject(object: { [k: string]: any }): ProtoOATraderReq;

  /**
   * Creates a plain object from a ProtoOATraderReq message. Also converts values to other types if specified.
   * @param message ProtoOATraderReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOATraderReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOATraderReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOATraderRes. */
export interface IProtoOATraderRes {
  /** ProtoOATraderRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOATraderRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOATraderRes trader */
  trader: ProtoOATrader;
}

/** Response to the ProtoOATraderReq request. */
export class ProtoOATraderRes implements IProtoOATraderRes {
  /**
   * Constructs a new ProtoOATraderRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOATraderRes);

  /** ProtoOATraderRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOATraderRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOATraderRes trader. */
  public trader: ProtoOATrader;

  /**
   * Creates a new ProtoOATraderRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOATraderRes instance
   */
  public static create(properties?: IProtoOATraderRes): ProtoOATraderRes;

  /**
   * Encodes the specified ProtoOATraderRes message. Does not implicitly {@link ProtoOATraderRes.verify|verify} messages.
   * @param message ProtoOATraderRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOATraderRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOATraderRes message, length delimited. Does not implicitly {@link ProtoOATraderRes.verify|verify} messages.
   * @param message ProtoOATraderRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOATraderRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOATraderRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOATraderRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOATraderRes;

  /**
   * Decodes a ProtoOATraderRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOATraderRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOATraderRes;

  /**
   * Verifies a ProtoOATraderRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOATraderRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOATraderRes
   */
  public static fromObject(object: { [k: string]: any }): ProtoOATraderRes;

  /**
   * Creates a plain object from a ProtoOATraderRes message. Also converts values to other types if specified.
   * @param message ProtoOATraderRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOATraderRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOATraderRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOATraderUpdatedEvent. */
export interface IProtoOATraderUpdatedEvent {
  /** ProtoOATraderUpdatedEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOATraderUpdatedEvent ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOATraderUpdatedEvent trader */
  trader: ProtoOATrader;
}

/** Event that is sent when a Trader is updated on Server side. */
export class ProtoOATraderUpdatedEvent implements IProtoOATraderUpdatedEvent {
  /**
   * Constructs a new ProtoOATraderUpdatedEvent.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOATraderUpdatedEvent);

  /** ProtoOATraderUpdatedEvent payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOATraderUpdatedEvent ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOATraderUpdatedEvent trader. */
  public trader: ProtoOATrader;

  /**
   * Creates a new ProtoOATraderUpdatedEvent instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOATraderUpdatedEvent instance
   */
  public static create(
    properties?: IProtoOATraderUpdatedEvent
  ): ProtoOATraderUpdatedEvent;

  /**
   * Encodes the specified ProtoOATraderUpdatedEvent message. Does not implicitly {@link ProtoOATraderUpdatedEvent.verify|verify} messages.
   * @param message ProtoOATraderUpdatedEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOATraderUpdatedEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOATraderUpdatedEvent message, length delimited. Does not implicitly {@link ProtoOATraderUpdatedEvent.verify|verify} messages.
   * @param message ProtoOATraderUpdatedEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOATraderUpdatedEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOATraderUpdatedEvent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOATraderUpdatedEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOATraderUpdatedEvent;

  /**
   * Decodes a ProtoOATraderUpdatedEvent message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOATraderUpdatedEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOATraderUpdatedEvent;

  /**
   * Verifies a ProtoOATraderUpdatedEvent message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOATraderUpdatedEvent message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOATraderUpdatedEvent
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOATraderUpdatedEvent;

  /**
   * Creates a plain object from a ProtoOATraderUpdatedEvent message. Also converts values to other types if specified.
   * @param message ProtoOATraderUpdatedEvent
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOATraderUpdatedEvent,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOATraderUpdatedEvent to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAReconcileReq. */
export interface IProtoOAReconcileReq {
  /** ProtoOAReconcileReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAReconcileReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;
}

/** Request for getting Trader's current open positions and pending orders data. */
export class ProtoOAReconcileReq implements IProtoOAReconcileReq {
  /**
   * Constructs a new ProtoOAReconcileReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAReconcileReq);

  /** ProtoOAReconcileReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAReconcileReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /**
   * Creates a new ProtoOAReconcileReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAReconcileReq instance
   */
  public static create(properties?: IProtoOAReconcileReq): ProtoOAReconcileReq;

  /**
   * Encodes the specified ProtoOAReconcileReq message. Does not implicitly {@link ProtoOAReconcileReq.verify|verify} messages.
   * @param message ProtoOAReconcileReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAReconcileReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAReconcileReq message, length delimited. Does not implicitly {@link ProtoOAReconcileReq.verify|verify} messages.
   * @param message ProtoOAReconcileReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAReconcileReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAReconcileReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAReconcileReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAReconcileReq;

  /**
   * Decodes a ProtoOAReconcileReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAReconcileReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAReconcileReq;

  /**
   * Verifies a ProtoOAReconcileReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAReconcileReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAReconcileReq
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAReconcileReq;

  /**
   * Creates a plain object from a ProtoOAReconcileReq message. Also converts values to other types if specified.
   * @param message ProtoOAReconcileReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAReconcileReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAReconcileReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAReconcileRes. */
export interface IProtoOAReconcileRes {
  /** ProtoOAReconcileRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAReconcileRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAReconcileRes position */
  position?: ProtoOAPosition[] | null;

  /** ProtoOAReconcileRes order */
  order?: ProtoOAOrder[] | null;
}

/** The response to the ProtoOAReconcileReq request. */
export class ProtoOAReconcileRes implements IProtoOAReconcileRes {
  /**
   * Constructs a new ProtoOAReconcileRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAReconcileRes);

  /** ProtoOAReconcileRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAReconcileRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAReconcileRes position. */
  public position: ProtoOAPosition[];

  /** ProtoOAReconcileRes order. */
  public order: ProtoOAOrder[];

  /**
   * Creates a new ProtoOAReconcileRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAReconcileRes instance
   */
  public static create(properties?: IProtoOAReconcileRes): ProtoOAReconcileRes;

  /**
   * Encodes the specified ProtoOAReconcileRes message. Does not implicitly {@link ProtoOAReconcileRes.verify|verify} messages.
   * @param message ProtoOAReconcileRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAReconcileRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAReconcileRes message, length delimited. Does not implicitly {@link ProtoOAReconcileRes.verify|verify} messages.
   * @param message ProtoOAReconcileRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAReconcileRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAReconcileRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAReconcileRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAReconcileRes;

  /**
   * Decodes a ProtoOAReconcileRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAReconcileRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAReconcileRes;

  /**
   * Verifies a ProtoOAReconcileRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAReconcileRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAReconcileRes
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAReconcileRes;

  /**
   * Creates a plain object from a ProtoOAReconcileRes message. Also converts values to other types if specified.
   * @param message ProtoOAReconcileRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAReconcileRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAReconcileRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAOrderErrorEvent. */
export interface IProtoOAOrderErrorEvent {
  /** ProtoOAOrderErrorEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAOrderErrorEvent ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAOrderErrorEvent errorCode */
  errorCode: string;

  /** ProtoOAOrderErrorEvent orderId */
  orderId?: number | Long | null;

  /** ProtoOAOrderErrorEvent positionId */
  positionId?: number | Long | null;

  /** ProtoOAOrderErrorEvent description */
  description?: string | null;
}

/** Event that is sent when errors occur during the order requests. */
export class ProtoOAOrderErrorEvent implements IProtoOAOrderErrorEvent {
  /**
   * Constructs a new ProtoOAOrderErrorEvent.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAOrderErrorEvent);

  /** ProtoOAOrderErrorEvent payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAOrderErrorEvent ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAOrderErrorEvent errorCode. */
  public errorCode: string;

  /** ProtoOAOrderErrorEvent orderId. */
  public orderId: number | Long;

  /** ProtoOAOrderErrorEvent positionId. */
  public positionId: number | Long;

  /** ProtoOAOrderErrorEvent description. */
  public description: string;

  /**
   * Creates a new ProtoOAOrderErrorEvent instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAOrderErrorEvent instance
   */
  public static create(
    properties?: IProtoOAOrderErrorEvent
  ): ProtoOAOrderErrorEvent;

  /**
   * Encodes the specified ProtoOAOrderErrorEvent message. Does not implicitly {@link ProtoOAOrderErrorEvent.verify|verify} messages.
   * @param message ProtoOAOrderErrorEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAOrderErrorEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAOrderErrorEvent message, length delimited. Does not implicitly {@link ProtoOAOrderErrorEvent.verify|verify} messages.
   * @param message ProtoOAOrderErrorEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAOrderErrorEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAOrderErrorEvent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAOrderErrorEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAOrderErrorEvent;

  /**
   * Decodes a ProtoOAOrderErrorEvent message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAOrderErrorEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAOrderErrorEvent;

  /**
   * Verifies a ProtoOAOrderErrorEvent message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAOrderErrorEvent message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAOrderErrorEvent
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAOrderErrorEvent;

  /**
   * Creates a plain object from a ProtoOAOrderErrorEvent message. Also converts values to other types if specified.
   * @param message ProtoOAOrderErrorEvent
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAOrderErrorEvent,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAOrderErrorEvent to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOADealListReq. */
export interface IProtoOADealListReq {
  /** ProtoOADealListReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOADealListReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOADealListReq fromTimestamp */
  fromTimestamp: number | Long;

  /** ProtoOADealListReq toTimestamp */
  toTimestamp: number | Long;

  /** ProtoOADealListReq maxRows */
  maxRows?: number | null;
}

/** Request for getting Trader's deals historical data (execution details). */
export class ProtoOADealListReq implements IProtoOADealListReq {
  /**
   * Constructs a new ProtoOADealListReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOADealListReq);

  /** ProtoOADealListReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOADealListReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOADealListReq fromTimestamp. */
  public fromTimestamp: number | Long;

  /** ProtoOADealListReq toTimestamp. */
  public toTimestamp: number | Long;

  /** ProtoOADealListReq maxRows. */
  public maxRows: number;

  /**
   * Creates a new ProtoOADealListReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOADealListReq instance
   */
  public static create(properties?: IProtoOADealListReq): ProtoOADealListReq;

  /**
   * Encodes the specified ProtoOADealListReq message. Does not implicitly {@link ProtoOADealListReq.verify|verify} messages.
   * @param message ProtoOADealListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOADealListReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOADealListReq message, length delimited. Does not implicitly {@link ProtoOADealListReq.verify|verify} messages.
   * @param message ProtoOADealListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOADealListReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOADealListReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOADealListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOADealListReq;

  /**
   * Decodes a ProtoOADealListReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOADealListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOADealListReq;

  /**
   * Verifies a ProtoOADealListReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOADealListReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOADealListReq
   */
  public static fromObject(object: { [k: string]: any }): ProtoOADealListReq;

  /**
   * Creates a plain object from a ProtoOADealListReq message. Also converts values to other types if specified.
   * @param message ProtoOADealListReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOADealListReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOADealListReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOADealListRes. */
export interface IProtoOADealListRes {
  /** ProtoOADealListRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOADealListRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOADealListRes deal */
  deal?: ProtoOADeal[] | null;

  /** ProtoOADealListRes hasMore */
  hasMore: boolean;
}

/** The response to the ProtoOADealListRes request. */
export class ProtoOADealListRes implements IProtoOADealListRes {
  /**
   * Constructs a new ProtoOADealListRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOADealListRes);

  /** ProtoOADealListRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOADealListRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOADealListRes deal. */
  public deal: ProtoOADeal[];

  /** ProtoOADealListRes hasMore. */
  public hasMore: boolean;

  /**
   * Creates a new ProtoOADealListRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOADealListRes instance
   */
  public static create(properties?: IProtoOADealListRes): ProtoOADealListRes;

  /**
   * Encodes the specified ProtoOADealListRes message. Does not implicitly {@link ProtoOADealListRes.verify|verify} messages.
   * @param message ProtoOADealListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOADealListRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOADealListRes message, length delimited. Does not implicitly {@link ProtoOADealListRes.verify|verify} messages.
   * @param message ProtoOADealListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOADealListRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOADealListRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOADealListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOADealListRes;

  /**
   * Decodes a ProtoOADealListRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOADealListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOADealListRes;

  /**
   * Verifies a ProtoOADealListRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOADealListRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOADealListRes
   */
  public static fromObject(object: { [k: string]: any }): ProtoOADealListRes;

  /**
   * Creates a plain object from a ProtoOADealListRes message. Also converts values to other types if specified.
   * @param message ProtoOADealListRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOADealListRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOADealListRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAExpectedMarginReq. */
export interface IProtoOAExpectedMarginReq {
  /** ProtoOAExpectedMarginReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAExpectedMarginReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAExpectedMarginReq symbolId */
  symbolId: number | Long;

  /** ProtoOAExpectedMarginReq volume */
  volume?: (number | Long)[] | null;
}

/** Request for getting the margin estimate. Can be used before sending a new order request. */
export class ProtoOAExpectedMarginReq implements IProtoOAExpectedMarginReq {
  /**
   * Constructs a new ProtoOAExpectedMarginReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAExpectedMarginReq);

  /** ProtoOAExpectedMarginReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAExpectedMarginReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAExpectedMarginReq symbolId. */
  public symbolId: number | Long;

  /** ProtoOAExpectedMarginReq volume. */
  public volume: (number | Long)[];

  /**
   * Creates a new ProtoOAExpectedMarginReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAExpectedMarginReq instance
   */
  public static create(
    properties?: IProtoOAExpectedMarginReq
  ): ProtoOAExpectedMarginReq;

  /**
   * Encodes the specified ProtoOAExpectedMarginReq message. Does not implicitly {@link ProtoOAExpectedMarginReq.verify|verify} messages.
   * @param message ProtoOAExpectedMarginReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAExpectedMarginReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAExpectedMarginReq message, length delimited. Does not implicitly {@link ProtoOAExpectedMarginReq.verify|verify} messages.
   * @param message ProtoOAExpectedMarginReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAExpectedMarginReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAExpectedMarginReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAExpectedMarginReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAExpectedMarginReq;

  /**
   * Decodes a ProtoOAExpectedMarginReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAExpectedMarginReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAExpectedMarginReq;

  /**
   * Verifies a ProtoOAExpectedMarginReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAExpectedMarginReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAExpectedMarginReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAExpectedMarginReq;

  /**
   * Creates a plain object from a ProtoOAExpectedMarginReq message. Also converts values to other types if specified.
   * @param message ProtoOAExpectedMarginReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAExpectedMarginReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAExpectedMarginReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAExpectedMarginRes. */
export interface IProtoOAExpectedMarginRes {
  /** ProtoOAExpectedMarginRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAExpectedMarginRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAExpectedMarginRes margin */
  margin?: ProtoOAExpectedMargin[] | null;
}

/** The response to the ProtoOAExpectedMarginReq request. */
export class ProtoOAExpectedMarginRes implements IProtoOAExpectedMarginRes {
  /**
   * Constructs a new ProtoOAExpectedMarginRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAExpectedMarginRes);

  /** ProtoOAExpectedMarginRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAExpectedMarginRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAExpectedMarginRes margin. */
  public margin: ProtoOAExpectedMargin[];

  /**
   * Creates a new ProtoOAExpectedMarginRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAExpectedMarginRes instance
   */
  public static create(
    properties?: IProtoOAExpectedMarginRes
  ): ProtoOAExpectedMarginRes;

  /**
   * Encodes the specified ProtoOAExpectedMarginRes message. Does not implicitly {@link ProtoOAExpectedMarginRes.verify|verify} messages.
   * @param message ProtoOAExpectedMarginRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAExpectedMarginRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAExpectedMarginRes message, length delimited. Does not implicitly {@link ProtoOAExpectedMarginRes.verify|verify} messages.
   * @param message ProtoOAExpectedMarginRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAExpectedMarginRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAExpectedMarginRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAExpectedMarginRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAExpectedMarginRes;

  /**
   * Decodes a ProtoOAExpectedMarginRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAExpectedMarginRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAExpectedMarginRes;

  /**
   * Verifies a ProtoOAExpectedMarginRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAExpectedMarginRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAExpectedMarginRes
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAExpectedMarginRes;

  /**
   * Creates a plain object from a ProtoOAExpectedMarginRes message. Also converts values to other types if specified.
   * @param message ProtoOAExpectedMarginRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAExpectedMarginRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAExpectedMarginRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAMarginChangedEvent. */
export interface IProtoOAMarginChangedEvent {
  /** ProtoOAMarginChangedEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAMarginChangedEvent ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAMarginChangedEvent positionId */
  positionId: number | Long;

  /** ProtoOAMarginChangedEvent usedMargin */
  usedMargin: number | Long;
}

/** Event that is sent when the margin allocated to a specific position is changed. */
export class ProtoOAMarginChangedEvent implements IProtoOAMarginChangedEvent {
  /**
   * Constructs a new ProtoOAMarginChangedEvent.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAMarginChangedEvent);

  /** ProtoOAMarginChangedEvent payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAMarginChangedEvent ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAMarginChangedEvent positionId. */
  public positionId: number | Long;

  /** ProtoOAMarginChangedEvent usedMargin. */
  public usedMargin: number | Long;

  /**
   * Creates a new ProtoOAMarginChangedEvent instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAMarginChangedEvent instance
   */
  public static create(
    properties?: IProtoOAMarginChangedEvent
  ): ProtoOAMarginChangedEvent;

  /**
   * Encodes the specified ProtoOAMarginChangedEvent message. Does not implicitly {@link ProtoOAMarginChangedEvent.verify|verify} messages.
   * @param message ProtoOAMarginChangedEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAMarginChangedEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAMarginChangedEvent message, length delimited. Does not implicitly {@link ProtoOAMarginChangedEvent.verify|verify} messages.
   * @param message ProtoOAMarginChangedEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAMarginChangedEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAMarginChangedEvent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAMarginChangedEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAMarginChangedEvent;

  /**
   * Decodes a ProtoOAMarginChangedEvent message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAMarginChangedEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAMarginChangedEvent;

  /**
   * Verifies a ProtoOAMarginChangedEvent message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAMarginChangedEvent message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAMarginChangedEvent
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAMarginChangedEvent;

  /**
   * Creates a plain object from a ProtoOAMarginChangedEvent message. Also converts values to other types if specified.
   * @param message ProtoOAMarginChangedEvent
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAMarginChangedEvent,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAMarginChangedEvent to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOACashFlowHistoryListReq. */
export interface IProtoOACashFlowHistoryListReq {
  /** ProtoOACashFlowHistoryListReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOACashFlowHistoryListReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOACashFlowHistoryListReq fromTimestamp */
  fromTimestamp: number | Long;

  /** ProtoOACashFlowHistoryListReq toTimestamp */
  toTimestamp: number | Long;
}

/** Request for getting Trader's historical data of deposits and withdrawals. */
export class ProtoOACashFlowHistoryListReq
  implements IProtoOACashFlowHistoryListReq {
  /**
   * Constructs a new ProtoOACashFlowHistoryListReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOACashFlowHistoryListReq);

  /** ProtoOACashFlowHistoryListReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOACashFlowHistoryListReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOACashFlowHistoryListReq fromTimestamp. */
  public fromTimestamp: number | Long;

  /** ProtoOACashFlowHistoryListReq toTimestamp. */
  public toTimestamp: number | Long;

  /**
   * Creates a new ProtoOACashFlowHistoryListReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOACashFlowHistoryListReq instance
   */
  public static create(
    properties?: IProtoOACashFlowHistoryListReq
  ): ProtoOACashFlowHistoryListReq;

  /**
   * Encodes the specified ProtoOACashFlowHistoryListReq message. Does not implicitly {@link ProtoOACashFlowHistoryListReq.verify|verify} messages.
   * @param message ProtoOACashFlowHistoryListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOACashFlowHistoryListReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOACashFlowHistoryListReq message, length delimited. Does not implicitly {@link ProtoOACashFlowHistoryListReq.verify|verify} messages.
   * @param message ProtoOACashFlowHistoryListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOACashFlowHistoryListReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOACashFlowHistoryListReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOACashFlowHistoryListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOACashFlowHistoryListReq;

  /**
   * Decodes a ProtoOACashFlowHistoryListReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOACashFlowHistoryListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOACashFlowHistoryListReq;

  /**
   * Verifies a ProtoOACashFlowHistoryListReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOACashFlowHistoryListReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOACashFlowHistoryListReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOACashFlowHistoryListReq;

  /**
   * Creates a plain object from a ProtoOACashFlowHistoryListReq message. Also converts values to other types if specified.
   * @param message ProtoOACashFlowHistoryListReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOACashFlowHistoryListReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOACashFlowHistoryListReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOACashFlowHistoryListRes. */
export interface IProtoOACashFlowHistoryListRes {
  /** ProtoOACashFlowHistoryListRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOACashFlowHistoryListRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOACashFlowHistoryListRes depositWithdraw */
  depositWithdraw?: ProtoOADepositWithdraw[] | null;
}

/** Response to the ProtoOACashFlowHistoryListReq request. */
export class ProtoOACashFlowHistoryListRes
  implements IProtoOACashFlowHistoryListRes {
  /**
   * Constructs a new ProtoOACashFlowHistoryListRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOACashFlowHistoryListRes);

  /** ProtoOACashFlowHistoryListRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOACashFlowHistoryListRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOACashFlowHistoryListRes depositWithdraw. */
  public depositWithdraw: ProtoOADepositWithdraw[];

  /**
   * Creates a new ProtoOACashFlowHistoryListRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOACashFlowHistoryListRes instance
   */
  public static create(
    properties?: IProtoOACashFlowHistoryListRes
  ): ProtoOACashFlowHistoryListRes;

  /**
   * Encodes the specified ProtoOACashFlowHistoryListRes message. Does not implicitly {@link ProtoOACashFlowHistoryListRes.verify|verify} messages.
   * @param message ProtoOACashFlowHistoryListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOACashFlowHistoryListRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOACashFlowHistoryListRes message, length delimited. Does not implicitly {@link ProtoOACashFlowHistoryListRes.verify|verify} messages.
   * @param message ProtoOACashFlowHistoryListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOACashFlowHistoryListRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOACashFlowHistoryListRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOACashFlowHistoryListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOACashFlowHistoryListRes;

  /**
   * Decodes a ProtoOACashFlowHistoryListRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOACashFlowHistoryListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOACashFlowHistoryListRes;

  /**
   * Verifies a ProtoOACashFlowHistoryListRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOACashFlowHistoryListRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOACashFlowHistoryListRes
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOACashFlowHistoryListRes;

  /**
   * Creates a plain object from a ProtoOACashFlowHistoryListRes message. Also converts values to other types if specified.
   * @param message ProtoOACashFlowHistoryListRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOACashFlowHistoryListRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOACashFlowHistoryListRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAGetAccountListByAccessTokenReq. */
export interface IProtoOAGetAccountListByAccessTokenReq {
  /** ProtoOAGetAccountListByAccessTokenReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAGetAccountListByAccessTokenReq accessToken */
  accessToken: string;
}

/** Request for getting the list of granted trader's account for the access token. */
export class ProtoOAGetAccountListByAccessTokenReq
  implements IProtoOAGetAccountListByAccessTokenReq {
  /**
   * Constructs a new ProtoOAGetAccountListByAccessTokenReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAGetAccountListByAccessTokenReq);

  /** ProtoOAGetAccountListByAccessTokenReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAGetAccountListByAccessTokenReq accessToken. */
  public accessToken: string;

  /**
   * Creates a new ProtoOAGetAccountListByAccessTokenReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAGetAccountListByAccessTokenReq instance
   */
  public static create(
    properties?: IProtoOAGetAccountListByAccessTokenReq
  ): ProtoOAGetAccountListByAccessTokenReq;

  /**
   * Encodes the specified ProtoOAGetAccountListByAccessTokenReq message. Does not implicitly {@link ProtoOAGetAccountListByAccessTokenReq.verify|verify} messages.
   * @param message ProtoOAGetAccountListByAccessTokenReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAGetAccountListByAccessTokenReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAGetAccountListByAccessTokenReq message, length delimited. Does not implicitly {@link ProtoOAGetAccountListByAccessTokenReq.verify|verify} messages.
   * @param message ProtoOAGetAccountListByAccessTokenReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAGetAccountListByAccessTokenReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAGetAccountListByAccessTokenReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAGetAccountListByAccessTokenReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAGetAccountListByAccessTokenReq;

  /**
   * Decodes a ProtoOAGetAccountListByAccessTokenReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAGetAccountListByAccessTokenReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAGetAccountListByAccessTokenReq;

  /**
   * Verifies a ProtoOAGetAccountListByAccessTokenReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAGetAccountListByAccessTokenReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAGetAccountListByAccessTokenReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAGetAccountListByAccessTokenReq;

  /**
   * Creates a plain object from a ProtoOAGetAccountListByAccessTokenReq message. Also converts values to other types if specified.
   * @param message ProtoOAGetAccountListByAccessTokenReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAGetAccountListByAccessTokenReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAGetAccountListByAccessTokenReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAGetAccountListByAccessTokenRes. */
export interface IProtoOAGetAccountListByAccessTokenRes {
  /** ProtoOAGetAccountListByAccessTokenRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAGetAccountListByAccessTokenRes accessToken */
  accessToken: string;

  /** ProtoOAGetAccountListByAccessTokenRes permissionScope */
  permissionScope?: ProtoOAClientPermissionScope | null;

  /** ProtoOAGetAccountListByAccessTokenRes ctidTraderAccount */
  ctidTraderAccount?: ProtoOACtidTraderAccount[] | null;
}

/** Response to the ProtoOAGetAccountListByAccessTokenReq request. */
export class ProtoOAGetAccountListByAccessTokenRes
  implements IProtoOAGetAccountListByAccessTokenRes {
  /**
   * Constructs a new ProtoOAGetAccountListByAccessTokenRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAGetAccountListByAccessTokenRes);

  /** ProtoOAGetAccountListByAccessTokenRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAGetAccountListByAccessTokenRes accessToken. */
  public accessToken: string;

  /** ProtoOAGetAccountListByAccessTokenRes permissionScope. */
  public permissionScope: ProtoOAClientPermissionScope;

  /** ProtoOAGetAccountListByAccessTokenRes ctidTraderAccount. */
  public ctidTraderAccount: ProtoOACtidTraderAccount[];

  /**
   * Creates a new ProtoOAGetAccountListByAccessTokenRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAGetAccountListByAccessTokenRes instance
   */
  public static create(
    properties?: IProtoOAGetAccountListByAccessTokenRes
  ): ProtoOAGetAccountListByAccessTokenRes;

  /**
   * Encodes the specified ProtoOAGetAccountListByAccessTokenRes message. Does not implicitly {@link ProtoOAGetAccountListByAccessTokenRes.verify|verify} messages.
   * @param message ProtoOAGetAccountListByAccessTokenRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAGetAccountListByAccessTokenRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAGetAccountListByAccessTokenRes message, length delimited. Does not implicitly {@link ProtoOAGetAccountListByAccessTokenRes.verify|verify} messages.
   * @param message ProtoOAGetAccountListByAccessTokenRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAGetAccountListByAccessTokenRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAGetAccountListByAccessTokenRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAGetAccountListByAccessTokenRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAGetAccountListByAccessTokenRes;

  /**
   * Decodes a ProtoOAGetAccountListByAccessTokenRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAGetAccountListByAccessTokenRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAGetAccountListByAccessTokenRes;

  /**
   * Verifies a ProtoOAGetAccountListByAccessTokenRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAGetAccountListByAccessTokenRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAGetAccountListByAccessTokenRes
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAGetAccountListByAccessTokenRes;

  /**
   * Creates a plain object from a ProtoOAGetAccountListByAccessTokenRes message. Also converts values to other types if specified.
   * @param message ProtoOAGetAccountListByAccessTokenRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAGetAccountListByAccessTokenRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAGetAccountListByAccessTokenRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASubscribeSpotsReq. */
export interface IProtoOASubscribeSpotsReq {
  /** ProtoOASubscribeSpotsReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASubscribeSpotsReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOASubscribeSpotsReq symbolId */
  symbolId?: (number | Long)[] | null;
}

/** Request for subscribing on spot events of the specified symbol. */
export class ProtoOASubscribeSpotsReq implements IProtoOASubscribeSpotsReq {
  /**
   * Constructs a new ProtoOASubscribeSpotsReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASubscribeSpotsReq);

  /** ProtoOASubscribeSpotsReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOASubscribeSpotsReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOASubscribeSpotsReq symbolId. */
  public symbolId: (number | Long)[];

  /**
   * Creates a new ProtoOASubscribeSpotsReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASubscribeSpotsReq instance
   */
  public static create(
    properties?: IProtoOASubscribeSpotsReq
  ): ProtoOASubscribeSpotsReq;

  /**
   * Encodes the specified ProtoOASubscribeSpotsReq message. Does not implicitly {@link ProtoOASubscribeSpotsReq.verify|verify} messages.
   * @param message ProtoOASubscribeSpotsReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASubscribeSpotsReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASubscribeSpotsReq message, length delimited. Does not implicitly {@link ProtoOASubscribeSpotsReq.verify|verify} messages.
   * @param message ProtoOASubscribeSpotsReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASubscribeSpotsReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASubscribeSpotsReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASubscribeSpotsReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASubscribeSpotsReq;

  /**
   * Decodes a ProtoOASubscribeSpotsReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASubscribeSpotsReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASubscribeSpotsReq;

  /**
   * Verifies a ProtoOASubscribeSpotsReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASubscribeSpotsReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASubscribeSpotsReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOASubscribeSpotsReq;

  /**
   * Creates a plain object from a ProtoOASubscribeSpotsReq message. Also converts values to other types if specified.
   * @param message ProtoOASubscribeSpotsReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASubscribeSpotsReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASubscribeSpotsReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASubscribeSpotsRes. */
export interface IProtoOASubscribeSpotsRes {
  /** ProtoOASubscribeSpotsRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASubscribeSpotsRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;
}

/** Response to the ProtoOASubscribeSpotsReq request. */
export class ProtoOASubscribeSpotsRes implements IProtoOASubscribeSpotsRes {
  /**
   * Constructs a new ProtoOASubscribeSpotsRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASubscribeSpotsRes);

  /** ProtoOASubscribeSpotsRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOASubscribeSpotsRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /**
   * Creates a new ProtoOASubscribeSpotsRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASubscribeSpotsRes instance
   */
  public static create(
    properties?: IProtoOASubscribeSpotsRes
  ): ProtoOASubscribeSpotsRes;

  /**
   * Encodes the specified ProtoOASubscribeSpotsRes message. Does not implicitly {@link ProtoOASubscribeSpotsRes.verify|verify} messages.
   * @param message ProtoOASubscribeSpotsRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASubscribeSpotsRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASubscribeSpotsRes message, length delimited. Does not implicitly {@link ProtoOASubscribeSpotsRes.verify|verify} messages.
   * @param message ProtoOASubscribeSpotsRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASubscribeSpotsRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASubscribeSpotsRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASubscribeSpotsRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASubscribeSpotsRes;

  /**
   * Decodes a ProtoOASubscribeSpotsRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASubscribeSpotsRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASubscribeSpotsRes;

  /**
   * Verifies a ProtoOASubscribeSpotsRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASubscribeSpotsRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASubscribeSpotsRes
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOASubscribeSpotsRes;

  /**
   * Creates a plain object from a ProtoOASubscribeSpotsRes message. Also converts values to other types if specified.
   * @param message ProtoOASubscribeSpotsRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASubscribeSpotsRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASubscribeSpotsRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAUnsubscribeSpotsReq. */
export interface IProtoOAUnsubscribeSpotsReq {
  /** ProtoOAUnsubscribeSpotsReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAUnsubscribeSpotsReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAUnsubscribeSpotsReq symbolId */
  symbolId?: (number | Long)[] | null;
}

/** Request for unsubscribing from the spot events of the specified symbol. */
export class ProtoOAUnsubscribeSpotsReq implements IProtoOAUnsubscribeSpotsReq {
  /**
   * Constructs a new ProtoOAUnsubscribeSpotsReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAUnsubscribeSpotsReq);

  /** ProtoOAUnsubscribeSpotsReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAUnsubscribeSpotsReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAUnsubscribeSpotsReq symbolId. */
  public symbolId: (number | Long)[];

  /**
   * Creates a new ProtoOAUnsubscribeSpotsReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAUnsubscribeSpotsReq instance
   */
  public static create(
    properties?: IProtoOAUnsubscribeSpotsReq
  ): ProtoOAUnsubscribeSpotsReq;

  /**
   * Encodes the specified ProtoOAUnsubscribeSpotsReq message. Does not implicitly {@link ProtoOAUnsubscribeSpotsReq.verify|verify} messages.
   * @param message ProtoOAUnsubscribeSpotsReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAUnsubscribeSpotsReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAUnsubscribeSpotsReq message, length delimited. Does not implicitly {@link ProtoOAUnsubscribeSpotsReq.verify|verify} messages.
   * @param message ProtoOAUnsubscribeSpotsReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAUnsubscribeSpotsReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAUnsubscribeSpotsReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAUnsubscribeSpotsReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAUnsubscribeSpotsReq;

  /**
   * Decodes a ProtoOAUnsubscribeSpotsReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAUnsubscribeSpotsReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAUnsubscribeSpotsReq;

  /**
   * Verifies a ProtoOAUnsubscribeSpotsReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAUnsubscribeSpotsReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAUnsubscribeSpotsReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAUnsubscribeSpotsReq;

  /**
   * Creates a plain object from a ProtoOAUnsubscribeSpotsReq message. Also converts values to other types if specified.
   * @param message ProtoOAUnsubscribeSpotsReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAUnsubscribeSpotsReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAUnsubscribeSpotsReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAUnsubscribeSpotsRes. */
export interface IProtoOAUnsubscribeSpotsRes {
  /** ProtoOAUnsubscribeSpotsRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAUnsubscribeSpotsRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;
}

/** Response to the ProtoOASubscribeSpotsRes request. */
export class ProtoOAUnsubscribeSpotsRes implements IProtoOAUnsubscribeSpotsRes {
  /**
   * Constructs a new ProtoOAUnsubscribeSpotsRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAUnsubscribeSpotsRes);

  /** ProtoOAUnsubscribeSpotsRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAUnsubscribeSpotsRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /**
   * Creates a new ProtoOAUnsubscribeSpotsRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAUnsubscribeSpotsRes instance
   */
  public static create(
    properties?: IProtoOAUnsubscribeSpotsRes
  ): ProtoOAUnsubscribeSpotsRes;

  /**
   * Encodes the specified ProtoOAUnsubscribeSpotsRes message. Does not implicitly {@link ProtoOAUnsubscribeSpotsRes.verify|verify} messages.
   * @param message ProtoOAUnsubscribeSpotsRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAUnsubscribeSpotsRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAUnsubscribeSpotsRes message, length delimited. Does not implicitly {@link ProtoOAUnsubscribeSpotsRes.verify|verify} messages.
   * @param message ProtoOAUnsubscribeSpotsRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAUnsubscribeSpotsRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAUnsubscribeSpotsRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAUnsubscribeSpotsRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAUnsubscribeSpotsRes;

  /**
   * Decodes a ProtoOAUnsubscribeSpotsRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAUnsubscribeSpotsRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAUnsubscribeSpotsRes;

  /**
   * Verifies a ProtoOAUnsubscribeSpotsRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAUnsubscribeSpotsRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAUnsubscribeSpotsRes
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAUnsubscribeSpotsRes;

  /**
   * Creates a plain object from a ProtoOAUnsubscribeSpotsRes message. Also converts values to other types if specified.
   * @param message ProtoOAUnsubscribeSpotsRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAUnsubscribeSpotsRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAUnsubscribeSpotsRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASpotEvent. */
export interface IProtoOASpotEvent {
  /** ProtoOASpotEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASpotEvent ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOASpotEvent symbolId */
  symbolId: number | Long;

  /** ProtoOASpotEvent bid */
  bid?: number | Long | null;

  /** ProtoOASpotEvent ask */
  ask?: number | Long | null;

  /** ProtoOASpotEvent trendbar */
  trendbar?: ProtoOATrendbar[] | null;
}

/** Event that is sent when a new spot event is generated on the server side. Requires subscription on the spot events, see ProtoOASubscribeSpotsReq. */
export class ProtoOASpotEvent implements IProtoOASpotEvent {
  /**
   * Constructs a new ProtoOASpotEvent.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASpotEvent);

  /** ProtoOASpotEvent payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOASpotEvent ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOASpotEvent symbolId. */
  public symbolId: number | Long;

  /** ProtoOASpotEvent bid. */
  public bid: number | Long;

  /** ProtoOASpotEvent ask. */
  public ask: number | Long;

  /** ProtoOASpotEvent trendbar. */
  public trendbar: ProtoOATrendbar[];

  /**
   * Creates a new ProtoOASpotEvent instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASpotEvent instance
   */
  public static create(properties?: IProtoOASpotEvent): ProtoOASpotEvent;

  /**
   * Encodes the specified ProtoOASpotEvent message. Does not implicitly {@link ProtoOASpotEvent.verify|verify} messages.
   * @param message ProtoOASpotEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASpotEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASpotEvent message, length delimited. Does not implicitly {@link ProtoOASpotEvent.verify|verify} messages.
   * @param message ProtoOASpotEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASpotEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASpotEvent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASpotEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASpotEvent;

  /**
   * Decodes a ProtoOASpotEvent message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASpotEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASpotEvent;

  /**
   * Verifies a ProtoOASpotEvent message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASpotEvent message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASpotEvent
   */
  public static fromObject(object: { [k: string]: any }): ProtoOASpotEvent;

  /**
   * Creates a plain object from a ProtoOASpotEvent message. Also converts values to other types if specified.
   * @param message ProtoOASpotEvent
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASpotEvent,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASpotEvent to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASubscribeLiveTrendbarReq. */
export interface IProtoOASubscribeLiveTrendbarReq {
  /** ProtoOASubscribeLiveTrendbarReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASubscribeLiveTrendbarReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOASubscribeLiveTrendbarReq period */
  period: ProtoOATrendbarPeriod;

  /** ProtoOASubscribeLiveTrendbarReq symbolId */
  symbolId: number | Long;
}

/** Request for subscribing for live trend bars. Requires subscription on the spot events, see ProtoOASubscribeSpotsReq. */
export class ProtoOASubscribeLiveTrendbarReq
  implements IProtoOASubscribeLiveTrendbarReq {
  /**
   * Constructs a new ProtoOASubscribeLiveTrendbarReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASubscribeLiveTrendbarReq);

  /** ProtoOASubscribeLiveTrendbarReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOASubscribeLiveTrendbarReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOASubscribeLiveTrendbarReq period. */
  public period: ProtoOATrendbarPeriod;

  /** ProtoOASubscribeLiveTrendbarReq symbolId. */
  public symbolId: number | Long;

  /**
   * Creates a new ProtoOASubscribeLiveTrendbarReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASubscribeLiveTrendbarReq instance
   */
  public static create(
    properties?: IProtoOASubscribeLiveTrendbarReq
  ): ProtoOASubscribeLiveTrendbarReq;

  /**
   * Encodes the specified ProtoOASubscribeLiveTrendbarReq message. Does not implicitly {@link ProtoOASubscribeLiveTrendbarReq.verify|verify} messages.
   * @param message ProtoOASubscribeLiveTrendbarReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASubscribeLiveTrendbarReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASubscribeLiveTrendbarReq message, length delimited. Does not implicitly {@link ProtoOASubscribeLiveTrendbarReq.verify|verify} messages.
   * @param message ProtoOASubscribeLiveTrendbarReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASubscribeLiveTrendbarReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASubscribeLiveTrendbarReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASubscribeLiveTrendbarReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASubscribeLiveTrendbarReq;

  /**
   * Decodes a ProtoOASubscribeLiveTrendbarReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASubscribeLiveTrendbarReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASubscribeLiveTrendbarReq;

  /**
   * Verifies a ProtoOASubscribeLiveTrendbarReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASubscribeLiveTrendbarReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASubscribeLiveTrendbarReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOASubscribeLiveTrendbarReq;

  /**
   * Creates a plain object from a ProtoOASubscribeLiveTrendbarReq message. Also converts values to other types if specified.
   * @param message ProtoOASubscribeLiveTrendbarReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASubscribeLiveTrendbarReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASubscribeLiveTrendbarReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAUnsubscribeLiveTrendbarReq. */
export interface IProtoOAUnsubscribeLiveTrendbarReq {
  /** ProtoOAUnsubscribeLiveTrendbarReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAUnsubscribeLiveTrendbarReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAUnsubscribeLiveTrendbarReq period */
  period: ProtoOATrendbarPeriod;

  /** ProtoOAUnsubscribeLiveTrendbarReq symbolId */
  symbolId: number | Long;
}

/** Request for unsubscribing from the live trend bars. */
export class ProtoOAUnsubscribeLiveTrendbarReq
  implements IProtoOAUnsubscribeLiveTrendbarReq {
  /**
   * Constructs a new ProtoOAUnsubscribeLiveTrendbarReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAUnsubscribeLiveTrendbarReq);

  /** ProtoOAUnsubscribeLiveTrendbarReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAUnsubscribeLiveTrendbarReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAUnsubscribeLiveTrendbarReq period. */
  public period: ProtoOATrendbarPeriod;

  /** ProtoOAUnsubscribeLiveTrendbarReq symbolId. */
  public symbolId: number | Long;

  /**
   * Creates a new ProtoOAUnsubscribeLiveTrendbarReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAUnsubscribeLiveTrendbarReq instance
   */
  public static create(
    properties?: IProtoOAUnsubscribeLiveTrendbarReq
  ): ProtoOAUnsubscribeLiveTrendbarReq;

  /**
   * Encodes the specified ProtoOAUnsubscribeLiveTrendbarReq message. Does not implicitly {@link ProtoOAUnsubscribeLiveTrendbarReq.verify|verify} messages.
   * @param message ProtoOAUnsubscribeLiveTrendbarReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAUnsubscribeLiveTrendbarReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAUnsubscribeLiveTrendbarReq message, length delimited. Does not implicitly {@link ProtoOAUnsubscribeLiveTrendbarReq.verify|verify} messages.
   * @param message ProtoOAUnsubscribeLiveTrendbarReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAUnsubscribeLiveTrendbarReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAUnsubscribeLiveTrendbarReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAUnsubscribeLiveTrendbarReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAUnsubscribeLiveTrendbarReq;

  /**
   * Decodes a ProtoOAUnsubscribeLiveTrendbarReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAUnsubscribeLiveTrendbarReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAUnsubscribeLiveTrendbarReq;

  /**
   * Verifies a ProtoOAUnsubscribeLiveTrendbarReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAUnsubscribeLiveTrendbarReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAUnsubscribeLiveTrendbarReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAUnsubscribeLiveTrendbarReq;

  /**
   * Creates a plain object from a ProtoOAUnsubscribeLiveTrendbarReq message. Also converts values to other types if specified.
   * @param message ProtoOAUnsubscribeLiveTrendbarReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAUnsubscribeLiveTrendbarReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAUnsubscribeLiveTrendbarReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAGetTrendbarsReq. */
export interface IProtoOAGetTrendbarsReq {
  /** ProtoOAGetTrendbarsReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAGetTrendbarsReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAGetTrendbarsReq fromTimestamp */
  fromTimestamp: number | Long;

  /** ProtoOAGetTrendbarsReq toTimestamp */
  toTimestamp: number | Long;

  /** ProtoOAGetTrendbarsReq period */
  period: ProtoOATrendbarPeriod;

  /** ProtoOAGetTrendbarsReq symbolId */
  symbolId: number | Long;
}

/** Request for getting historical trend bars for the symbol. */
export class ProtoOAGetTrendbarsReq implements IProtoOAGetTrendbarsReq {
  /**
   * Constructs a new ProtoOAGetTrendbarsReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAGetTrendbarsReq);

  /** ProtoOAGetTrendbarsReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAGetTrendbarsReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAGetTrendbarsReq fromTimestamp. */
  public fromTimestamp: number | Long;

  /** ProtoOAGetTrendbarsReq toTimestamp. */
  public toTimestamp: number | Long;

  /** ProtoOAGetTrendbarsReq period. */
  public period: ProtoOATrendbarPeriod;

  /** ProtoOAGetTrendbarsReq symbolId. */
  public symbolId: number | Long;

  /**
   * Creates a new ProtoOAGetTrendbarsReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAGetTrendbarsReq instance
   */
  public static create(
    properties?: IProtoOAGetTrendbarsReq
  ): ProtoOAGetTrendbarsReq;

  /**
   * Encodes the specified ProtoOAGetTrendbarsReq message. Does not implicitly {@link ProtoOAGetTrendbarsReq.verify|verify} messages.
   * @param message ProtoOAGetTrendbarsReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAGetTrendbarsReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAGetTrendbarsReq message, length delimited. Does not implicitly {@link ProtoOAGetTrendbarsReq.verify|verify} messages.
   * @param message ProtoOAGetTrendbarsReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAGetTrendbarsReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAGetTrendbarsReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAGetTrendbarsReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAGetTrendbarsReq;

  /**
   * Decodes a ProtoOAGetTrendbarsReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAGetTrendbarsReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAGetTrendbarsReq;

  /**
   * Verifies a ProtoOAGetTrendbarsReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAGetTrendbarsReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAGetTrendbarsReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAGetTrendbarsReq;

  /**
   * Creates a plain object from a ProtoOAGetTrendbarsReq message. Also converts values to other types if specified.
   * @param message ProtoOAGetTrendbarsReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAGetTrendbarsReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAGetTrendbarsReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAGetTrendbarsRes. */
export interface IProtoOAGetTrendbarsRes {
  /** ProtoOAGetTrendbarsRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAGetTrendbarsRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAGetTrendbarsRes period */
  period: ProtoOATrendbarPeriod;

  /** ProtoOAGetTrendbarsRes timestamp */
  timestamp: number | Long;

  /** ProtoOAGetTrendbarsRes trendbar */
  trendbar?: ProtoOATrendbar[] | null;

  /** ProtoOAGetTrendbarsRes symbolId */
  symbolId?: number | Long | null;
}

/** Response to the ProtoOAGetTrendbarsReq request. */
export class ProtoOAGetTrendbarsRes implements IProtoOAGetTrendbarsRes {
  /**
   * Constructs a new ProtoOAGetTrendbarsRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAGetTrendbarsRes);

  /** ProtoOAGetTrendbarsRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAGetTrendbarsRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAGetTrendbarsRes period. */
  public period: ProtoOATrendbarPeriod;

  /** ProtoOAGetTrendbarsRes timestamp. */
  public timestamp: number | Long;

  /** ProtoOAGetTrendbarsRes trendbar. */
  public trendbar: ProtoOATrendbar[];

  /** ProtoOAGetTrendbarsRes symbolId. */
  public symbolId: number | Long;

  /**
   * Creates a new ProtoOAGetTrendbarsRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAGetTrendbarsRes instance
   */
  public static create(
    properties?: IProtoOAGetTrendbarsRes
  ): ProtoOAGetTrendbarsRes;

  /**
   * Encodes the specified ProtoOAGetTrendbarsRes message. Does not implicitly {@link ProtoOAGetTrendbarsRes.verify|verify} messages.
   * @param message ProtoOAGetTrendbarsRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAGetTrendbarsRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAGetTrendbarsRes message, length delimited. Does not implicitly {@link ProtoOAGetTrendbarsRes.verify|verify} messages.
   * @param message ProtoOAGetTrendbarsRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAGetTrendbarsRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAGetTrendbarsRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAGetTrendbarsRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAGetTrendbarsRes;

  /**
   * Decodes a ProtoOAGetTrendbarsRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAGetTrendbarsRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAGetTrendbarsRes;

  /**
   * Verifies a ProtoOAGetTrendbarsRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAGetTrendbarsRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAGetTrendbarsRes
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAGetTrendbarsRes;

  /**
   * Creates a plain object from a ProtoOAGetTrendbarsRes message. Also converts values to other types if specified.
   * @param message ProtoOAGetTrendbarsRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAGetTrendbarsRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAGetTrendbarsRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAGetTickDataReq. */
export interface IProtoOAGetTickDataReq {
  /** ProtoOAGetTickDataReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAGetTickDataReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAGetTickDataReq symbolId */
  symbolId: number | Long;

  /** ProtoOAGetTickDataReq type */
  type: ProtoOAQuoteType;

  /** ProtoOAGetTickDataReq fromTimestamp */
  fromTimestamp: number | Long;

  /** ProtoOAGetTickDataReq toTimestamp */
  toTimestamp: number | Long;
}

/** Request for getting historical tick data for the symbol. */
export class ProtoOAGetTickDataReq implements IProtoOAGetTickDataReq {
  /**
   * Constructs a new ProtoOAGetTickDataReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAGetTickDataReq);

  /** ProtoOAGetTickDataReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAGetTickDataReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAGetTickDataReq symbolId. */
  public symbolId: number | Long;

  /** ProtoOAGetTickDataReq type. */
  public type: ProtoOAQuoteType;

  /** ProtoOAGetTickDataReq fromTimestamp. */
  public fromTimestamp: number | Long;

  /** ProtoOAGetTickDataReq toTimestamp. */
  public toTimestamp: number | Long;

  /**
   * Creates a new ProtoOAGetTickDataReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAGetTickDataReq instance
   */
  public static create(
    properties?: IProtoOAGetTickDataReq
  ): ProtoOAGetTickDataReq;

  /**
   * Encodes the specified ProtoOAGetTickDataReq message. Does not implicitly {@link ProtoOAGetTickDataReq.verify|verify} messages.
   * @param message ProtoOAGetTickDataReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAGetTickDataReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAGetTickDataReq message, length delimited. Does not implicitly {@link ProtoOAGetTickDataReq.verify|verify} messages.
   * @param message ProtoOAGetTickDataReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAGetTickDataReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAGetTickDataReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAGetTickDataReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAGetTickDataReq;

  /**
   * Decodes a ProtoOAGetTickDataReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAGetTickDataReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAGetTickDataReq;

  /**
   * Verifies a ProtoOAGetTickDataReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAGetTickDataReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAGetTickDataReq
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAGetTickDataReq;

  /**
   * Creates a plain object from a ProtoOAGetTickDataReq message. Also converts values to other types if specified.
   * @param message ProtoOAGetTickDataReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAGetTickDataReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAGetTickDataReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAGetTickDataRes. */
export interface IProtoOAGetTickDataRes {
  /** ProtoOAGetTickDataRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAGetTickDataRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAGetTickDataRes tickData */
  tickData?: ProtoOATickData[] | null;

  /** ProtoOAGetTickDataRes hasMore */
  hasMore: boolean;
}

/** Response to the ProtoOAGetTickDataReq request. */
export class ProtoOAGetTickDataRes implements IProtoOAGetTickDataRes {
  /**
   * Constructs a new ProtoOAGetTickDataRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAGetTickDataRes);

  /** ProtoOAGetTickDataRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAGetTickDataRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAGetTickDataRes tickData. */
  public tickData: ProtoOATickData[];

  /** ProtoOAGetTickDataRes hasMore. */
  public hasMore: boolean;

  /**
   * Creates a new ProtoOAGetTickDataRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAGetTickDataRes instance
   */
  public static create(
    properties?: IProtoOAGetTickDataRes
  ): ProtoOAGetTickDataRes;

  /**
   * Encodes the specified ProtoOAGetTickDataRes message. Does not implicitly {@link ProtoOAGetTickDataRes.verify|verify} messages.
   * @param message ProtoOAGetTickDataRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAGetTickDataRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAGetTickDataRes message, length delimited. Does not implicitly {@link ProtoOAGetTickDataRes.verify|verify} messages.
   * @param message ProtoOAGetTickDataRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAGetTickDataRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAGetTickDataRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAGetTickDataRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAGetTickDataRes;

  /**
   * Decodes a ProtoOAGetTickDataRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAGetTickDataRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAGetTickDataRes;

  /**
   * Verifies a ProtoOAGetTickDataRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAGetTickDataRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAGetTickDataRes
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAGetTickDataRes;

  /**
   * Creates a plain object from a ProtoOAGetTickDataRes message. Also converts values to other types if specified.
   * @param message ProtoOAGetTickDataRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAGetTickDataRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAGetTickDataRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAGetCtidProfileByTokenReq. */
export interface IProtoOAGetCtidProfileByTokenReq {
  /** ProtoOAGetCtidProfileByTokenReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAGetCtidProfileByTokenReq accessToken */
  accessToken: string;
}

/** Request for getting details of Trader's profile. Limited due to GDRP requirements. */
export class ProtoOAGetCtidProfileByTokenReq
  implements IProtoOAGetCtidProfileByTokenReq {
  /**
   * Constructs a new ProtoOAGetCtidProfileByTokenReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAGetCtidProfileByTokenReq);

  /** ProtoOAGetCtidProfileByTokenReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAGetCtidProfileByTokenReq accessToken. */
  public accessToken: string;

  /**
   * Creates a new ProtoOAGetCtidProfileByTokenReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAGetCtidProfileByTokenReq instance
   */
  public static create(
    properties?: IProtoOAGetCtidProfileByTokenReq
  ): ProtoOAGetCtidProfileByTokenReq;

  /**
   * Encodes the specified ProtoOAGetCtidProfileByTokenReq message. Does not implicitly {@link ProtoOAGetCtidProfileByTokenReq.verify|verify} messages.
   * @param message ProtoOAGetCtidProfileByTokenReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAGetCtidProfileByTokenReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAGetCtidProfileByTokenReq message, length delimited. Does not implicitly {@link ProtoOAGetCtidProfileByTokenReq.verify|verify} messages.
   * @param message ProtoOAGetCtidProfileByTokenReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAGetCtidProfileByTokenReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAGetCtidProfileByTokenReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAGetCtidProfileByTokenReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAGetCtidProfileByTokenReq;

  /**
   * Decodes a ProtoOAGetCtidProfileByTokenReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAGetCtidProfileByTokenReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAGetCtidProfileByTokenReq;

  /**
   * Verifies a ProtoOAGetCtidProfileByTokenReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAGetCtidProfileByTokenReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAGetCtidProfileByTokenReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAGetCtidProfileByTokenReq;

  /**
   * Creates a plain object from a ProtoOAGetCtidProfileByTokenReq message. Also converts values to other types if specified.
   * @param message ProtoOAGetCtidProfileByTokenReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAGetCtidProfileByTokenReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAGetCtidProfileByTokenReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAGetCtidProfileByTokenRes. */
export interface IProtoOAGetCtidProfileByTokenRes {
  /** ProtoOAGetCtidProfileByTokenRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAGetCtidProfileByTokenRes profile */
  profile: ProtoOACtidProfile;
}

/** Response to the ProtoOAGetCtidProfileByTokenReq request. */
export class ProtoOAGetCtidProfileByTokenRes
  implements IProtoOAGetCtidProfileByTokenRes {
  /**
   * Constructs a new ProtoOAGetCtidProfileByTokenRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAGetCtidProfileByTokenRes);

  /** ProtoOAGetCtidProfileByTokenRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAGetCtidProfileByTokenRes profile. */
  public profile: ProtoOACtidProfile;

  /**
   * Creates a new ProtoOAGetCtidProfileByTokenRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAGetCtidProfileByTokenRes instance
   */
  public static create(
    properties?: IProtoOAGetCtidProfileByTokenRes
  ): ProtoOAGetCtidProfileByTokenRes;

  /**
   * Encodes the specified ProtoOAGetCtidProfileByTokenRes message. Does not implicitly {@link ProtoOAGetCtidProfileByTokenRes.verify|verify} messages.
   * @param message ProtoOAGetCtidProfileByTokenRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAGetCtidProfileByTokenRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAGetCtidProfileByTokenRes message, length delimited. Does not implicitly {@link ProtoOAGetCtidProfileByTokenRes.verify|verify} messages.
   * @param message ProtoOAGetCtidProfileByTokenRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAGetCtidProfileByTokenRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAGetCtidProfileByTokenRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAGetCtidProfileByTokenRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAGetCtidProfileByTokenRes;

  /**
   * Decodes a ProtoOAGetCtidProfileByTokenRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAGetCtidProfileByTokenRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAGetCtidProfileByTokenRes;

  /**
   * Verifies a ProtoOAGetCtidProfileByTokenRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAGetCtidProfileByTokenRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAGetCtidProfileByTokenRes
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAGetCtidProfileByTokenRes;

  /**
   * Creates a plain object from a ProtoOAGetCtidProfileByTokenRes message. Also converts values to other types if specified.
   * @param message ProtoOAGetCtidProfileByTokenRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAGetCtidProfileByTokenRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAGetCtidProfileByTokenRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOADepthEvent. */
export interface IProtoOADepthEvent {
  /** ProtoOADepthEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOADepthEvent ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOADepthEvent symbolId */
  symbolId: number | Long;

  /** ProtoOADepthEvent newQuotes */
  newQuotes?: ProtoOADepthQuote[] | null;

  /** ProtoOADepthEvent deletedQuotes */
  deletedQuotes?: (number | Long)[] | null;
}

/** Event that is sent when the structure of depth of market is changed. Requires subscription on the depth of markets for the symbol, see ProtoOASubscribeDepthQuotesReq. */
export class ProtoOADepthEvent implements IProtoOADepthEvent {
  /**
   * Constructs a new ProtoOADepthEvent.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOADepthEvent);

  /** ProtoOADepthEvent payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOADepthEvent ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOADepthEvent symbolId. */
  public symbolId: number | Long;

  /** ProtoOADepthEvent newQuotes. */
  public newQuotes: ProtoOADepthQuote[];

  /** ProtoOADepthEvent deletedQuotes. */
  public deletedQuotes: (number | Long)[];

  /**
   * Creates a new ProtoOADepthEvent instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOADepthEvent instance
   */
  public static create(properties?: IProtoOADepthEvent): ProtoOADepthEvent;

  /**
   * Encodes the specified ProtoOADepthEvent message. Does not implicitly {@link ProtoOADepthEvent.verify|verify} messages.
   * @param message ProtoOADepthEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOADepthEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOADepthEvent message, length delimited. Does not implicitly {@link ProtoOADepthEvent.verify|verify} messages.
   * @param message ProtoOADepthEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOADepthEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOADepthEvent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOADepthEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOADepthEvent;

  /**
   * Decodes a ProtoOADepthEvent message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOADepthEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOADepthEvent;

  /**
   * Verifies a ProtoOADepthEvent message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOADepthEvent message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOADepthEvent
   */
  public static fromObject(object: { [k: string]: any }): ProtoOADepthEvent;

  /**
   * Creates a plain object from a ProtoOADepthEvent message. Also converts values to other types if specified.
   * @param message ProtoOADepthEvent
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOADepthEvent,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOADepthEvent to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASubscribeDepthQuotesReq. */
export interface IProtoOASubscribeDepthQuotesReq {
  /** ProtoOASubscribeDepthQuotesReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASubscribeDepthQuotesReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOASubscribeDepthQuotesReq symbolId */
  symbolId?: (number | Long)[] | null;
}

/** Request for subscribing on depth of market of the specified symbol. */
export class ProtoOASubscribeDepthQuotesReq
  implements IProtoOASubscribeDepthQuotesReq {
  /**
   * Constructs a new ProtoOASubscribeDepthQuotesReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASubscribeDepthQuotesReq);

  /** ProtoOASubscribeDepthQuotesReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOASubscribeDepthQuotesReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOASubscribeDepthQuotesReq symbolId. */
  public symbolId: (number | Long)[];

  /**
   * Creates a new ProtoOASubscribeDepthQuotesReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASubscribeDepthQuotesReq instance
   */
  public static create(
    properties?: IProtoOASubscribeDepthQuotesReq
  ): ProtoOASubscribeDepthQuotesReq;

  /**
   * Encodes the specified ProtoOASubscribeDepthQuotesReq message. Does not implicitly {@link ProtoOASubscribeDepthQuotesReq.verify|verify} messages.
   * @param message ProtoOASubscribeDepthQuotesReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASubscribeDepthQuotesReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASubscribeDepthQuotesReq message, length delimited. Does not implicitly {@link ProtoOASubscribeDepthQuotesReq.verify|verify} messages.
   * @param message ProtoOASubscribeDepthQuotesReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASubscribeDepthQuotesReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASubscribeDepthQuotesReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASubscribeDepthQuotesReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASubscribeDepthQuotesReq;

  /**
   * Decodes a ProtoOASubscribeDepthQuotesReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASubscribeDepthQuotesReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASubscribeDepthQuotesReq;

  /**
   * Verifies a ProtoOASubscribeDepthQuotesReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASubscribeDepthQuotesReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASubscribeDepthQuotesReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOASubscribeDepthQuotesReq;

  /**
   * Creates a plain object from a ProtoOASubscribeDepthQuotesReq message. Also converts values to other types if specified.
   * @param message ProtoOASubscribeDepthQuotesReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASubscribeDepthQuotesReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASubscribeDepthQuotesReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASubscribeDepthQuotesRes. */
export interface IProtoOASubscribeDepthQuotesRes {
  /** ProtoOASubscribeDepthQuotesRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASubscribeDepthQuotesRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;
}

/** Response to the ProtoOASubscribeDepthQuotesReq request. */
export class ProtoOASubscribeDepthQuotesRes
  implements IProtoOASubscribeDepthQuotesRes {
  /**
   * Constructs a new ProtoOASubscribeDepthQuotesRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASubscribeDepthQuotesRes);

  /** ProtoOASubscribeDepthQuotesRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOASubscribeDepthQuotesRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /**
   * Creates a new ProtoOASubscribeDepthQuotesRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASubscribeDepthQuotesRes instance
   */
  public static create(
    properties?: IProtoOASubscribeDepthQuotesRes
  ): ProtoOASubscribeDepthQuotesRes;

  /**
   * Encodes the specified ProtoOASubscribeDepthQuotesRes message. Does not implicitly {@link ProtoOASubscribeDepthQuotesRes.verify|verify} messages.
   * @param message ProtoOASubscribeDepthQuotesRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASubscribeDepthQuotesRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASubscribeDepthQuotesRes message, length delimited. Does not implicitly {@link ProtoOASubscribeDepthQuotesRes.verify|verify} messages.
   * @param message ProtoOASubscribeDepthQuotesRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASubscribeDepthQuotesRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASubscribeDepthQuotesRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASubscribeDepthQuotesRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASubscribeDepthQuotesRes;

  /**
   * Decodes a ProtoOASubscribeDepthQuotesRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASubscribeDepthQuotesRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASubscribeDepthQuotesRes;

  /**
   * Verifies a ProtoOASubscribeDepthQuotesRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASubscribeDepthQuotesRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASubscribeDepthQuotesRes
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOASubscribeDepthQuotesRes;

  /**
   * Creates a plain object from a ProtoOASubscribeDepthQuotesRes message. Also converts values to other types if specified.
   * @param message ProtoOASubscribeDepthQuotesRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASubscribeDepthQuotesRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASubscribeDepthQuotesRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAUnsubscribeDepthQuotesReq. */
export interface IProtoOAUnsubscribeDepthQuotesReq {
  /** ProtoOAUnsubscribeDepthQuotesReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAUnsubscribeDepthQuotesReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOAUnsubscribeDepthQuotesReq symbolId */
  symbolId?: (number | Long)[] | null;
}

/** Request for unsubscribing from the depth of market of the specified symbol. */
export class ProtoOAUnsubscribeDepthQuotesReq
  implements IProtoOAUnsubscribeDepthQuotesReq {
  /**
   * Constructs a new ProtoOAUnsubscribeDepthQuotesReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAUnsubscribeDepthQuotesReq);

  /** ProtoOAUnsubscribeDepthQuotesReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAUnsubscribeDepthQuotesReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOAUnsubscribeDepthQuotesReq symbolId. */
  public symbolId: (number | Long)[];

  /**
   * Creates a new ProtoOAUnsubscribeDepthQuotesReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAUnsubscribeDepthQuotesReq instance
   */
  public static create(
    properties?: IProtoOAUnsubscribeDepthQuotesReq
  ): ProtoOAUnsubscribeDepthQuotesReq;

  /**
   * Encodes the specified ProtoOAUnsubscribeDepthQuotesReq message. Does not implicitly {@link ProtoOAUnsubscribeDepthQuotesReq.verify|verify} messages.
   * @param message ProtoOAUnsubscribeDepthQuotesReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAUnsubscribeDepthQuotesReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAUnsubscribeDepthQuotesReq message, length delimited. Does not implicitly {@link ProtoOAUnsubscribeDepthQuotesReq.verify|verify} messages.
   * @param message ProtoOAUnsubscribeDepthQuotesReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAUnsubscribeDepthQuotesReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAUnsubscribeDepthQuotesReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAUnsubscribeDepthQuotesReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAUnsubscribeDepthQuotesReq;

  /**
   * Decodes a ProtoOAUnsubscribeDepthQuotesReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAUnsubscribeDepthQuotesReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAUnsubscribeDepthQuotesReq;

  /**
   * Verifies a ProtoOAUnsubscribeDepthQuotesReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAUnsubscribeDepthQuotesReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAUnsubscribeDepthQuotesReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAUnsubscribeDepthQuotesReq;

  /**
   * Creates a plain object from a ProtoOAUnsubscribeDepthQuotesReq message. Also converts values to other types if specified.
   * @param message ProtoOAUnsubscribeDepthQuotesReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAUnsubscribeDepthQuotesReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAUnsubscribeDepthQuotesReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAUnsubscribeDepthQuotesRes. */
export interface IProtoOAUnsubscribeDepthQuotesRes {
  /** ProtoOAUnsubscribeDepthQuotesRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAUnsubscribeDepthQuotesRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;
}

/** Response to the ProtoOAUnsubscribeDepthQuotesReq request. */
export class ProtoOAUnsubscribeDepthQuotesRes
  implements IProtoOAUnsubscribeDepthQuotesRes {
  /**
   * Constructs a new ProtoOAUnsubscribeDepthQuotesRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAUnsubscribeDepthQuotesRes);

  /** ProtoOAUnsubscribeDepthQuotesRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAUnsubscribeDepthQuotesRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /**
   * Creates a new ProtoOAUnsubscribeDepthQuotesRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAUnsubscribeDepthQuotesRes instance
   */
  public static create(
    properties?: IProtoOAUnsubscribeDepthQuotesRes
  ): ProtoOAUnsubscribeDepthQuotesRes;

  /**
   * Encodes the specified ProtoOAUnsubscribeDepthQuotesRes message. Does not implicitly {@link ProtoOAUnsubscribeDepthQuotesRes.verify|verify} messages.
   * @param message ProtoOAUnsubscribeDepthQuotesRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAUnsubscribeDepthQuotesRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAUnsubscribeDepthQuotesRes message, length delimited. Does not implicitly {@link ProtoOAUnsubscribeDepthQuotesRes.verify|verify} messages.
   * @param message ProtoOAUnsubscribeDepthQuotesRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAUnsubscribeDepthQuotesRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAUnsubscribeDepthQuotesRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAUnsubscribeDepthQuotesRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAUnsubscribeDepthQuotesRes;

  /**
   * Decodes a ProtoOAUnsubscribeDepthQuotesRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAUnsubscribeDepthQuotesRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAUnsubscribeDepthQuotesRes;

  /**
   * Verifies a ProtoOAUnsubscribeDepthQuotesRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAUnsubscribeDepthQuotesRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAUnsubscribeDepthQuotesRes
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAUnsubscribeDepthQuotesRes;

  /**
   * Creates a plain object from a ProtoOAUnsubscribeDepthQuotesRes message. Also converts values to other types if specified.
   * @param message ProtoOAUnsubscribeDepthQuotesRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAUnsubscribeDepthQuotesRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAUnsubscribeDepthQuotesRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASymbolCategoryListReq. */
export interface IProtoOASymbolCategoryListReq {
  /** ProtoOASymbolCategoryListReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolCategoryListReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;
}

/** Request for a list of symbol categories available for a trading account. */
export class ProtoOASymbolCategoryListReq
  implements IProtoOASymbolCategoryListReq {
  /**
   * Constructs a new ProtoOASymbolCategoryListReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASymbolCategoryListReq);

  /** ProtoOASymbolCategoryListReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOASymbolCategoryListReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /**
   * Creates a new ProtoOASymbolCategoryListReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASymbolCategoryListReq instance
   */
  public static create(
    properties?: IProtoOASymbolCategoryListReq
  ): ProtoOASymbolCategoryListReq;

  /**
   * Encodes the specified ProtoOASymbolCategoryListReq message. Does not implicitly {@link ProtoOASymbolCategoryListReq.verify|verify} messages.
   * @param message ProtoOASymbolCategoryListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASymbolCategoryListReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASymbolCategoryListReq message, length delimited. Does not implicitly {@link ProtoOASymbolCategoryListReq.verify|verify} messages.
   * @param message ProtoOASymbolCategoryListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASymbolCategoryListReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASymbolCategoryListReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASymbolCategoryListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASymbolCategoryListReq;

  /**
   * Decodes a ProtoOASymbolCategoryListReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASymbolCategoryListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASymbolCategoryListReq;

  /**
   * Verifies a ProtoOASymbolCategoryListReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASymbolCategoryListReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASymbolCategoryListReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOASymbolCategoryListReq;

  /**
   * Creates a plain object from a ProtoOASymbolCategoryListReq message. Also converts values to other types if specified.
   * @param message ProtoOASymbolCategoryListReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASymbolCategoryListReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASymbolCategoryListReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASymbolCategoryListRes. */
export interface IProtoOASymbolCategoryListRes {
  /** ProtoOASymbolCategoryListRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolCategoryListRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOASymbolCategoryListRes symbolCategory */
  symbolCategory?: ProtoOASymbolCategory[] | null;
}

/** Response to the ProtoSymbolCategoryListReq request. */
export class ProtoOASymbolCategoryListRes
  implements IProtoOASymbolCategoryListRes {
  /**
   * Constructs a new ProtoOASymbolCategoryListRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASymbolCategoryListRes);

  /** ProtoOASymbolCategoryListRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOASymbolCategoryListRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOASymbolCategoryListRes symbolCategory. */
  public symbolCategory: ProtoOASymbolCategory[];

  /**
   * Creates a new ProtoOASymbolCategoryListRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASymbolCategoryListRes instance
   */
  public static create(
    properties?: IProtoOASymbolCategoryListRes
  ): ProtoOASymbolCategoryListRes;

  /**
   * Encodes the specified ProtoOASymbolCategoryListRes message. Does not implicitly {@link ProtoOASymbolCategoryListRes.verify|verify} messages.
   * @param message ProtoOASymbolCategoryListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASymbolCategoryListRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASymbolCategoryListRes message, length delimited. Does not implicitly {@link ProtoOASymbolCategoryListRes.verify|verify} messages.
   * @param message ProtoOASymbolCategoryListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASymbolCategoryListRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASymbolCategoryListRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASymbolCategoryListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASymbolCategoryListRes;

  /**
   * Decodes a ProtoOASymbolCategoryListRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASymbolCategoryListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASymbolCategoryListRes;

  /**
   * Verifies a ProtoOASymbolCategoryListRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASymbolCategoryListRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASymbolCategoryListRes
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOASymbolCategoryListRes;

  /**
   * Creates a plain object from a ProtoOASymbolCategoryListRes message. Also converts values to other types if specified.
   * @param message ProtoOASymbolCategoryListRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASymbolCategoryListRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASymbolCategoryListRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAAccountLogoutReq. */
export interface IProtoOAAccountLogoutReq {
  /** ProtoOAAccountLogoutReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAccountLogoutReq ctidTraderAccountId */
  ctidTraderAccountId: number | Long;
}

/** Request for logout of  trading account session. */
export class ProtoOAAccountLogoutReq implements IProtoOAAccountLogoutReq {
  /**
   * Constructs a new ProtoOAAccountLogoutReq.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAAccountLogoutReq);

  /** ProtoOAAccountLogoutReq payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAAccountLogoutReq ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /**
   * Creates a new ProtoOAAccountLogoutReq instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAAccountLogoutReq instance
   */
  public static create(
    properties?: IProtoOAAccountLogoutReq
  ): ProtoOAAccountLogoutReq;

  /**
   * Encodes the specified ProtoOAAccountLogoutReq message. Does not implicitly {@link ProtoOAAccountLogoutReq.verify|verify} messages.
   * @param message ProtoOAAccountLogoutReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAAccountLogoutReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAAccountLogoutReq message, length delimited. Does not implicitly {@link ProtoOAAccountLogoutReq.verify|verify} messages.
   * @param message ProtoOAAccountLogoutReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAAccountLogoutReq,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAAccountLogoutReq message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAAccountLogoutReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAAccountLogoutReq;

  /**
   * Decodes a ProtoOAAccountLogoutReq message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAAccountLogoutReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAAccountLogoutReq;

  /**
   * Verifies a ProtoOAAccountLogoutReq message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAAccountLogoutReq message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAAccountLogoutReq
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAAccountLogoutReq;

  /**
   * Creates a plain object from a ProtoOAAccountLogoutReq message. Also converts values to other types if specified.
   * @param message ProtoOAAccountLogoutReq
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAAccountLogoutReq,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAAccountLogoutReq to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAAccountLogoutRes. */
export interface IProtoOAAccountLogoutRes {
  /** ProtoOAAccountLogoutRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAccountLogoutRes ctidTraderAccountId */
  ctidTraderAccountId: number | Long;
}

/** Response to the ProtoOATraderLogoutReq request. */
export class ProtoOAAccountLogoutRes implements IProtoOAAccountLogoutRes {
  /**
   * Constructs a new ProtoOAAccountLogoutRes.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAAccountLogoutRes);

  /** ProtoOAAccountLogoutRes payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAAccountLogoutRes ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /**
   * Creates a new ProtoOAAccountLogoutRes instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAAccountLogoutRes instance
   */
  public static create(
    properties?: IProtoOAAccountLogoutRes
  ): ProtoOAAccountLogoutRes;

  /**
   * Encodes the specified ProtoOAAccountLogoutRes message. Does not implicitly {@link ProtoOAAccountLogoutRes.verify|verify} messages.
   * @param message ProtoOAAccountLogoutRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAAccountLogoutRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAAccountLogoutRes message, length delimited. Does not implicitly {@link ProtoOAAccountLogoutRes.verify|verify} messages.
   * @param message ProtoOAAccountLogoutRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAAccountLogoutRes,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAAccountLogoutRes message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAAccountLogoutRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAAccountLogoutRes;

  /**
   * Decodes a ProtoOAAccountLogoutRes message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAAccountLogoutRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAAccountLogoutRes;

  /**
   * Verifies a ProtoOAAccountLogoutRes message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAAccountLogoutRes message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAAccountLogoutRes
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAAccountLogoutRes;

  /**
   * Creates a plain object from a ProtoOAAccountLogoutRes message. Also converts values to other types if specified.
   * @param message ProtoOAAccountLogoutRes
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAAccountLogoutRes,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAAccountLogoutRes to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAAccountDisconnectEvent. */
export interface IProtoOAAccountDisconnectEvent {
  /** ProtoOAAccountDisconnectEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAccountDisconnectEvent ctidTraderAccountId */
  ctidTraderAccountId: number | Long;
}

/**
 * Event that is sent when the established session for an account is dropped on the server side.
 * A new session must be authorized for the account.
 */
export class ProtoOAAccountDisconnectEvent
  implements IProtoOAAccountDisconnectEvent {
  /**
   * Constructs a new ProtoOAAccountDisconnectEvent.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAAccountDisconnectEvent);

  /** ProtoOAAccountDisconnectEvent payloadType. */
  public payloadType: ProtoOAPayloadType;

  /** ProtoOAAccountDisconnectEvent ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /**
   * Creates a new ProtoOAAccountDisconnectEvent instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAAccountDisconnectEvent instance
   */
  public static create(
    properties?: IProtoOAAccountDisconnectEvent
  ): ProtoOAAccountDisconnectEvent;

  /**
   * Encodes the specified ProtoOAAccountDisconnectEvent message. Does not implicitly {@link ProtoOAAccountDisconnectEvent.verify|verify} messages.
   * @param message ProtoOAAccountDisconnectEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAAccountDisconnectEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAAccountDisconnectEvent message, length delimited. Does not implicitly {@link ProtoOAAccountDisconnectEvent.verify|verify} messages.
   * @param message ProtoOAAccountDisconnectEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAAccountDisconnectEvent,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAAccountDisconnectEvent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAAccountDisconnectEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAAccountDisconnectEvent;

  /**
   * Decodes a ProtoOAAccountDisconnectEvent message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAAccountDisconnectEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAAccountDisconnectEvent;

  /**
   * Verifies a ProtoOAAccountDisconnectEvent message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAAccountDisconnectEvent message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAAccountDisconnectEvent
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAAccountDisconnectEvent;

  /**
   * Creates a plain object from a ProtoOAAccountDisconnectEvent message. Also converts values to other types if specified.
   * @param message ProtoOAAccountDisconnectEvent
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAAccountDisconnectEvent,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAAccountDisconnectEvent to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** ProtoOAPayloadType enum. */
export enum ProtoOAPayloadType {
  PROTO_OA_APPLICATION_AUTH_REQ = 2100,
  PROTO_OA_APPLICATION_AUTH_RES = 2101,
  PROTO_OA_ACCOUNT_AUTH_REQ = 2102,
  PROTO_OA_ACCOUNT_AUTH_RES = 2103,
  PROTO_OA_VERSION_REQ = 2104,
  PROTO_OA_VERSION_RES = 2105,
  PROTO_OA_NEW_ORDER_REQ = 2106,
  PROTO_OA_TRAILING_SL_CHANGED_EVENT = 2107,
  PROTO_OA_CANCEL_ORDER_REQ = 2108,
  PROTO_OA_AMEND_ORDER_REQ = 2109,
  PROTO_OA_AMEND_POSITION_SLTP_REQ = 2110,
  PROTO_OA_CLOSE_POSITION_REQ = 2111,
  PROTO_OA_ASSET_LIST_REQ = 2112,
  PROTO_OA_ASSET_LIST_RES = 2113,
  PROTO_OA_SYMBOLS_LIST_REQ = 2114,
  PROTO_OA_SYMBOLS_LIST_RES = 2115,
  PROTO_OA_SYMBOL_BY_ID_REQ = 2116,
  PROTO_OA_SYMBOL_BY_ID_RES = 2117,
  PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ = 2118,
  PROTO_OA_SYMBOLS_FOR_CONVERSION_RES = 2119,
  PROTO_OA_SYMBOL_CHANGED_EVENT = 2120,
  PROTO_OA_TRADER_REQ = 2121,
  PROTO_OA_TRADER_RES = 2122,
  PROTO_OA_TRADER_UPDATE_EVENT = 2123,
  PROTO_OA_RECONCILE_REQ = 2124,
  PROTO_OA_RECONCILE_RES = 2125,
  PROTO_OA_EXECUTION_EVENT = 2126,
  PROTO_OA_SUBSCRIBE_SPOTS_REQ = 2127,
  PROTO_OA_SUBSCRIBE_SPOTS_RES = 2128,
  PROTO_OA_UNSUBSCRIBE_SPOTS_REQ = 2129,
  PROTO_OA_UNSUBSCRIBE_SPOTS_RES = 2130,
  PROTO_OA_SPOT_EVENT = 2131,
  PROTO_OA_ORDER_ERROR_EVENT = 2132,
  PROTO_OA_DEAL_LIST_REQ = 2133,
  PROTO_OA_DEAL_LIST_RES = 2134,
  PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ = 2135,
  PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ = 2136,
  PROTO_OA_GET_TRENDBARS_REQ = 2137,
  PROTO_OA_GET_TRENDBARS_RES = 2138,
  PROTO_OA_EXPECTED_MARGIN_REQ = 2139,
  PROTO_OA_EXPECTED_MARGIN_RES = 2140,
  PROTO_OA_MARGIN_CHANGED_EVENT = 2141,
  PROTO_OA_ERROR_RES = 2142,
  PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ = 2143,
  PROTO_OA_CASH_FLOW_HISTORY_LIST_RES = 2144,
  PROTO_OA_GET_TICKDATA_REQ = 2145,
  PROTO_OA_GET_TICKDATA_RES = 2146,
  PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT = 2147,
  PROTO_OA_CLIENT_DISCONNECT_EVENT = 2148,
  PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ = 2149,
  PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES = 2150,
  PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ = 2151,
  PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES = 2152,
  PROTO_OA_ASSET_CLASS_LIST_REQ = 2153,
  PROTO_OA_ASSET_CLASS_LIST_RES = 2154,
  PROTO_OA_DEPTH_EVENT = 2155,
  PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ = 2156,
  PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES = 2157,
  PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ = 2158,
  PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES = 2159,
  PROTO_OA_SYMBOL_CATEGORY_REQ = 2160,
  PROTO_OA_SYMBOL_CATEGORY_RES = 2161,
  PROTO_OA_ACCOUNT_LOGOUT_REQ = 2162,
  PROTO_OA_ACCOUNT_LOGOUT_RES = 2163,
  PROTO_OA_ACCOUNT_DISCONNECT_EVENT = 2164
}

/** Properties of a ProtoOAAsset. */
export interface IProtoOAAsset {
  /** ProtoOAAsset assetId */
  assetId: number | Long;

  /** ProtoOAAsset name */
  name: string;

  /** ProtoOAAsset displayName */
  displayName?: string | null;
}

/** Asset entity. */
export class ProtoOAAsset implements IProtoOAAsset {
  /**
   * Constructs a new ProtoOAAsset.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAAsset);

  /** ProtoOAAsset assetId. */
  public assetId: number | Long;

  /** ProtoOAAsset name. */
  public name: string;

  /** ProtoOAAsset displayName. */
  public displayName: string;

  /**
   * Creates a new ProtoOAAsset instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAAsset instance
   */
  public static create(properties?: IProtoOAAsset): ProtoOAAsset;

  /**
   * Encodes the specified ProtoOAAsset message. Does not implicitly {@link ProtoOAAsset.verify|verify} messages.
   * @param message ProtoOAAsset message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAAsset,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAAsset message, length delimited. Does not implicitly {@link ProtoOAAsset.verify|verify} messages.
   * @param message ProtoOAAsset message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAAsset,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAAsset message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAAsset
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAAsset;

  /**
   * Decodes a ProtoOAAsset message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAAsset
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAAsset;

  /**
   * Verifies a ProtoOAAsset message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAAsset message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAAsset
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAAsset;

  /**
   * Creates a plain object from a ProtoOAAsset message. Also converts values to other types if specified.
   * @param message ProtoOAAsset
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAAsset,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAAsset to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASymbol. */
export interface IProtoOASymbol {
  /** ProtoOASymbol symbolId */
  symbolId: number | Long;

  /** ProtoOASymbol digits */
  digits: number;

  /** ProtoOASymbol pipPosition */
  pipPosition: number;

  /** ProtoOASymbol enableShortSelling */
  enableShortSelling?: boolean | null;

  /** ProtoOASymbol guaranteedStopLoss */
  guaranteedStopLoss?: boolean | null;

  /** ProtoOASymbol swapRollover3Days */
  swapRollover3Days?: ProtoOADayOfWeek | null;

  /** ProtoOASymbol swapLong */
  swapLong?: number | null;

  /** ProtoOASymbol swapShort */
  swapShort?: number | null;

  /** ProtoOASymbol maxVolume */
  maxVolume?: number | Long | null;

  /** ProtoOASymbol minVolume */
  minVolume?: number | Long | null;

  /** ProtoOASymbol stepVolume */
  stepVolume?: number | Long | null;

  /** ProtoOASymbol maxExposure */
  maxExposure?: number | Long | null;

  /** ProtoOASymbol schedule */
  schedule?: ProtoOAInterval[] | null;

  /** ProtoOASymbol commission */
  commission: number | Long;

  /** ProtoOASymbol commissionType */
  commissionType?: ProtoOACommissionType | null;

  /** ProtoOASymbol slDistance */
  slDistance?: number | null;

  /** ProtoOASymbol tpDistance */
  tpDistance?: number | null;

  /** ProtoOASymbol gslDistance */
  gslDistance?: number | null;

  /** ProtoOASymbol gslCharge */
  gslCharge?: number | Long | null;

  /** ProtoOASymbol distanceSetIn */
  distanceSetIn?: ProtoOASymbolDistanceType | null;

  /** ProtoOASymbol minCommission */
  minCommission?: number | Long | null;

  /** ProtoOASymbol minCommissionType */
  minCommissionType?: ProtoOAMinCommissionType | null;

  /** ProtoOASymbol minCommissionAsset */
  minCommissionAsset?: string | null;

  /** ProtoOASymbol rolloverCommission */
  rolloverCommission?: number | Long | null;

  /** ProtoOASymbol skipRolloverDays */
  skipRolloverDays?: number | null;

  /** ProtoOASymbol scheduleTimeZone */
  scheduleTimeZone?: string | null;

  /** ProtoOASymbol tradingMode */
  tradingMode?: ProtoOATradingMode | null;

  /** ProtoOASymbol rolloverCommission3Days */
  rolloverCommission3Days?: ProtoOADayOfWeek | null;
}

/** Trading symbol entity. */
export class ProtoOASymbol implements IProtoOASymbol {
  /**
   * Constructs a new ProtoOASymbol.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASymbol);

  /** ProtoOASymbol symbolId. */
  public symbolId: number | Long;

  /** ProtoOASymbol digits. */
  public digits: number;

  /** ProtoOASymbol pipPosition. */
  public pipPosition: number;

  /** ProtoOASymbol enableShortSelling. */
  public enableShortSelling: boolean;

  /** ProtoOASymbol guaranteedStopLoss. */
  public guaranteedStopLoss: boolean;

  /** ProtoOASymbol swapRollover3Days. */
  public swapRollover3Days: ProtoOADayOfWeek;

  /** ProtoOASymbol swapLong. */
  public swapLong: number;

  /** ProtoOASymbol swapShort. */
  public swapShort: number;

  /** ProtoOASymbol maxVolume. */
  public maxVolume: number | Long;

  /** ProtoOASymbol minVolume. */
  public minVolume: number | Long;

  /** ProtoOASymbol stepVolume. */
  public stepVolume: number | Long;

  /** ProtoOASymbol maxExposure. */
  public maxExposure: number | Long;

  /** ProtoOASymbol schedule. */
  public schedule: ProtoOAInterval[];

  /** ProtoOASymbol commission. */
  public commission: number | Long;

  /** ProtoOASymbol commissionType. */
  public commissionType: ProtoOACommissionType;

  /** ProtoOASymbol slDistance. */
  public slDistance: number;

  /** ProtoOASymbol tpDistance. */
  public tpDistance: number;

  /** ProtoOASymbol gslDistance. */
  public gslDistance: number;

  /** ProtoOASymbol gslCharge. */
  public gslCharge: number | Long;

  /** ProtoOASymbol distanceSetIn. */
  public distanceSetIn: ProtoOASymbolDistanceType;

  /** ProtoOASymbol minCommission. */
  public minCommission: number | Long;

  /** ProtoOASymbol minCommissionType. */
  public minCommissionType: ProtoOAMinCommissionType;

  /** ProtoOASymbol minCommissionAsset. */
  public minCommissionAsset: string;

  /** ProtoOASymbol rolloverCommission. */
  public rolloverCommission: number | Long;

  /** ProtoOASymbol skipRolloverDays. */
  public skipRolloverDays: number;

  /** ProtoOASymbol scheduleTimeZone. */
  public scheduleTimeZone: string;

  /** ProtoOASymbol tradingMode. */
  public tradingMode: ProtoOATradingMode;

  /** ProtoOASymbol rolloverCommission3Days. */
  public rolloverCommission3Days: ProtoOADayOfWeek;

  /**
   * Creates a new ProtoOASymbol instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASymbol instance
   */
  public static create(properties?: IProtoOASymbol): ProtoOASymbol;

  /**
   * Encodes the specified ProtoOASymbol message. Does not implicitly {@link ProtoOASymbol.verify|verify} messages.
   * @param message ProtoOASymbol message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASymbol,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASymbol message, length delimited. Does not implicitly {@link ProtoOASymbol.verify|verify} messages.
   * @param message ProtoOASymbol message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASymbol,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASymbol message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASymbol
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASymbol;

  /**
   * Decodes a ProtoOASymbol message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASymbol
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASymbol;

  /**
   * Verifies a ProtoOASymbol message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASymbol message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASymbol
   */
  public static fromObject(object: { [k: string]: any }): ProtoOASymbol;

  /**
   * Creates a plain object from a ProtoOASymbol message. Also converts values to other types if specified.
   * @param message ProtoOASymbol
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASymbol,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASymbol to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOALightSymbol. */
export interface IProtoOALightSymbol {
  /** ProtoOALightSymbol symbolId */
  symbolId: number | Long;

  /** ProtoOALightSymbol symbolName */
  symbolName?: string | null;

  /** ProtoOALightSymbol enabled */
  enabled?: boolean | null;

  /** ProtoOALightSymbol baseAssetId */
  baseAssetId?: number | Long | null;

  /** ProtoOALightSymbol quoteAssetId */
  quoteAssetId?: number | Long | null;

  /** ProtoOALightSymbol symbolCategoryId */
  symbolCategoryId?: number | Long | null;

  /** ProtoOALightSymbol description */
  description?: string | null;
}

/** Lightweight symbol entity. */
export class ProtoOALightSymbol implements IProtoOALightSymbol {
  /**
   * Constructs a new ProtoOALightSymbol.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOALightSymbol);

  /** ProtoOALightSymbol symbolId. */
  public symbolId: number | Long;

  /** ProtoOALightSymbol symbolName. */
  public symbolName: string;

  /** ProtoOALightSymbol enabled. */
  public enabled: boolean;

  /** ProtoOALightSymbol baseAssetId. */
  public baseAssetId: number | Long;

  /** ProtoOALightSymbol quoteAssetId. */
  public quoteAssetId: number | Long;

  /** ProtoOALightSymbol symbolCategoryId. */
  public symbolCategoryId: number | Long;

  /** ProtoOALightSymbol description. */
  public description: string;

  /**
   * Creates a new ProtoOALightSymbol instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOALightSymbol instance
   */
  public static create(properties?: IProtoOALightSymbol): ProtoOALightSymbol;

  /**
   * Encodes the specified ProtoOALightSymbol message. Does not implicitly {@link ProtoOALightSymbol.verify|verify} messages.
   * @param message ProtoOALightSymbol message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOALightSymbol,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOALightSymbol message, length delimited. Does not implicitly {@link ProtoOALightSymbol.verify|verify} messages.
   * @param message ProtoOALightSymbol message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOALightSymbol,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOALightSymbol message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOALightSymbol
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOALightSymbol;

  /**
   * Decodes a ProtoOALightSymbol message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOALightSymbol
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOALightSymbol;

  /**
   * Verifies a ProtoOALightSymbol message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOALightSymbol message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOALightSymbol
   */
  public static fromObject(object: { [k: string]: any }): ProtoOALightSymbol;

  /**
   * Creates a plain object from a ProtoOALightSymbol message. Also converts values to other types if specified.
   * @param message ProtoOALightSymbol
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOALightSymbol,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOALightSymbol to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOASymbolCategory. */
export interface IProtoOASymbolCategory {
  /** ProtoOASymbolCategory id */
  id: number | Long;

  /** ProtoOASymbolCategory assetClassId */
  assetClassId: number | Long;

  /** ProtoOASymbolCategory name */
  name: string;
}

/** Symbol category entity. */
export class ProtoOASymbolCategory implements IProtoOASymbolCategory {
  /**
   * Constructs a new ProtoOASymbolCategory.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOASymbolCategory);

  /** ProtoOASymbolCategory id. */
  public id: number | Long;

  /** ProtoOASymbolCategory assetClassId. */
  public assetClassId: number | Long;

  /** ProtoOASymbolCategory name. */
  public name: string;

  /**
   * Creates a new ProtoOASymbolCategory instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOASymbolCategory instance
   */
  public static create(
    properties?: IProtoOASymbolCategory
  ): ProtoOASymbolCategory;

  /**
   * Encodes the specified ProtoOASymbolCategory message. Does not implicitly {@link ProtoOASymbolCategory.verify|verify} messages.
   * @param message ProtoOASymbolCategory message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOASymbolCategory,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOASymbolCategory message, length delimited. Does not implicitly {@link ProtoOASymbolCategory.verify|verify} messages.
   * @param message ProtoOASymbolCategory message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOASymbolCategory,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOASymbolCategory message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOASymbolCategory
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOASymbolCategory;

  /**
   * Decodes a ProtoOASymbolCategory message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOASymbolCategory
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOASymbolCategory;

  /**
   * Verifies a ProtoOASymbolCategory message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOASymbolCategory message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOASymbolCategory
   */
  public static fromObject(object: { [k: string]: any }): ProtoOASymbolCategory;

  /**
   * Creates a plain object from a ProtoOASymbolCategory message. Also converts values to other types if specified.
   * @param message ProtoOASymbolCategory
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOASymbolCategory,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOASymbolCategory to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** ProtoOADayOfWeek enum. */
export enum ProtoOADayOfWeek {
  NONE = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 7
}

/** Properties of a ProtoOAInterval. */
export interface IProtoOAInterval {
  /** ProtoOAInterval startSecond */
  startSecond: number;

  /** ProtoOAInterval endSecond */
  endSecond: number;
}

/** Symbol trading session entity. */
export class ProtoOAInterval implements IProtoOAInterval {
  /**
   * Constructs a new ProtoOAInterval.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAInterval);

  /** ProtoOAInterval startSecond. */
  public startSecond: number;

  /** ProtoOAInterval endSecond. */
  public endSecond: number;

  /**
   * Creates a new ProtoOAInterval instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAInterval instance
   */
  public static create(properties?: IProtoOAInterval): ProtoOAInterval;

  /**
   * Encodes the specified ProtoOAInterval message. Does not implicitly {@link ProtoOAInterval.verify|verify} messages.
   * @param message ProtoOAInterval message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAInterval,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAInterval message, length delimited. Does not implicitly {@link ProtoOAInterval.verify|verify} messages.
   * @param message ProtoOAInterval message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAInterval,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAInterval message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAInterval
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAInterval;

  /**
   * Decodes a ProtoOAInterval message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAInterval
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAInterval;

  /**
   * Verifies a ProtoOAInterval message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAInterval message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAInterval
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAInterval;

  /**
   * Creates a plain object from a ProtoOAInterval message. Also converts values to other types if specified.
   * @param message ProtoOAInterval
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAInterval,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAInterval to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Enum for specifying type of trading commission. */
export enum ProtoOACommissionType {
  USD_PER_MIL_USD = 1,
  USD_PER_LOT = 2,
  PERCENTAGE = 3,
  QUOTE_CCY_PER_LOT = 4
}

/** Enum for specifying stop loss and take profit distances. */
export enum ProtoOASymbolDistanceType {
  SYMBOL_DISTANCE_IN_POINTS = 1,
  SYMBOL_DISTANCE_IN_PERCENTAGE = 2
}

/** Enum for specifying type of minimum trading commission. */
export enum ProtoOAMinCommissionType {
  CURRENCY = 1,
  QUOTE_CURRENCY = 2
}

/** Enum for specifying symbol trading mode. */
export enum ProtoOATradingMode {
  ENABLED = 0,
  DISABLED_WITHOUT_PENDINGS_EXECUTION = 1,
  DISABLED_WITH_PENDINGS_EXECUTION = 2,
  CLOSE_ONLY_MODE = 3
}

/** Enum for specifying access right for a trader. */
export enum ProtoOAAccessRights {
  FULL_ACCESS = 0,
  CLOSE_ONLY = 1,
  NO_TRADING = 2,
  NO_LOGIN = 3
}

/** Enum for specifying margin calculation type for an account. */
export enum ProtoOATotalMarginCalculationType {
  MAX = 0,
  SUM = 1,
  NET = 2
}

/** Enum for specifying type of an account. */
export enum ProtoOAAccountType {
  HEDGED = 0,
  NETTED = 1,
  SPREAD_BETTING = 2
}

/** Properties of a ProtoOATrader. */
export interface IProtoOATrader {
  /** ProtoOATrader ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOATrader balance */
  balance: number | Long;

  /** ProtoOATrader balanceVersion */
  balanceVersion?: number | Long | null;

  /** ProtoOATrader managerBonus */
  managerBonus?: number | Long | null;

  /** ProtoOATrader ibBonus */
  ibBonus?: number | Long | null;

  /** ProtoOATrader nonWithdrawableBonus */
  nonWithdrawableBonus?: number | Long | null;

  /** ProtoOATrader accessRights */
  accessRights?: ProtoOAAccessRights | null;

  /** ProtoOATrader depositAssetId */
  depositAssetId: number | Long;

  /** ProtoOATrader swapFree */
  swapFree?: boolean | null;

  /** ProtoOATrader leverageInCents */
  leverageInCents?: number | null;

  /** ProtoOATrader totalMarginCalculationType */
  totalMarginCalculationType?: ProtoOATotalMarginCalculationType | null;

  /** ProtoOATrader maxLeverage */
  maxLeverage?: number | null;

  /** ProtoOATrader frenchRisk */
  frenchRisk?: boolean | null;

  /** ProtoOATrader traderLogin */
  traderLogin?: number | Long | null;

  /** ProtoOATrader accountType */
  accountType?: ProtoOAAccountType | null;

  /** ProtoOATrader brokerName */
  brokerName?: string | null;

  /** ProtoOATrader registrationTimestamp */
  registrationTimestamp?: number | Long | null;
}

/** Trading account entity. */
export class ProtoOATrader implements IProtoOATrader {
  /**
   * Constructs a new ProtoOATrader.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOATrader);

  /** ProtoOATrader ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOATrader balance. */
  public balance: number | Long;

  /** ProtoOATrader balanceVersion. */
  public balanceVersion: number | Long;

  /** ProtoOATrader managerBonus. */
  public managerBonus: number | Long;

  /** ProtoOATrader ibBonus. */
  public ibBonus: number | Long;

  /** ProtoOATrader nonWithdrawableBonus. */
  public nonWithdrawableBonus: number | Long;

  /** ProtoOATrader accessRights. */
  public accessRights: ProtoOAAccessRights;

  /** ProtoOATrader depositAssetId. */
  public depositAssetId: number | Long;

  /** ProtoOATrader swapFree. */
  public swapFree: boolean;

  /** ProtoOATrader leverageInCents. */
  public leverageInCents: number;

  /** ProtoOATrader totalMarginCalculationType. */
  public totalMarginCalculationType: ProtoOATotalMarginCalculationType;

  /** ProtoOATrader maxLeverage. */
  public maxLeverage: number;

  /** ProtoOATrader frenchRisk. */
  public frenchRisk: boolean;

  /** ProtoOATrader traderLogin. */
  public traderLogin: number | Long;

  /** ProtoOATrader accountType. */
  public accountType: ProtoOAAccountType;

  /** ProtoOATrader brokerName. */
  public brokerName: string;

  /** ProtoOATrader registrationTimestamp. */
  public registrationTimestamp: number | Long;

  /**
   * Creates a new ProtoOATrader instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOATrader instance
   */
  public static create(properties?: IProtoOATrader): ProtoOATrader;

  /**
   * Encodes the specified ProtoOATrader message. Does not implicitly {@link ProtoOATrader.verify|verify} messages.
   * @param message ProtoOATrader message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOATrader,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOATrader message, length delimited. Does not implicitly {@link ProtoOATrader.verify|verify} messages.
   * @param message ProtoOATrader message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOATrader,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOATrader message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOATrader
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOATrader;

  /**
   * Decodes a ProtoOATrader message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOATrader
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOATrader;

  /**
   * Verifies a ProtoOATrader message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOATrader message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOATrader
   */
  public static fromObject(object: { [k: string]: any }): ProtoOATrader;

  /**
   * Creates a plain object from a ProtoOATrader message. Also converts values to other types if specified.
   * @param message ProtoOATrader
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOATrader,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOATrader to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Position status ENUM. */
export enum ProtoOAPositionStatus {
  POSITION_STATUS_OPEN = 1,
  POSITION_STATUS_CLOSED = 2,
  POSITION_STATUS_CREATED = 3,
  POSITION_STATUS_ERROR = 4
}

/** Trader side ENUM. Used for order, position, deal. */
export enum ProtoOATradeSide {
  BUY = 1,
  SELL = 2
}

/** Order type ENUM. */
export enum ProtoOAOrderType {
  MARKET = 1,
  LIMIT = 2,
  STOP = 3,
  STOP_LOSS_TAKE_PROFIT = 4,
  MARKET_RANGE = 5,
  STOP_LIMIT = 6
}

/** Order's time in force ENUM. */
export enum ProtoOATimeInForce {
  GOOD_TILL_DATE = 1,
  GOOD_TILL_CANCEL = 2,
  IMMEDIATE_OR_CANCEL = 3,
  FILL_OR_KILL = 4,
  MARKET_ON_OPEN = 5
}

/** Order status ENUM. */
export enum ProtoOAOrderStatus {
  ORDER_STATUS_ACCEPTED = 1,
  ORDER_STATUS_FILLED = 2,
  ORDER_STATUS_REJECTED = 3,
  ORDER_STATUS_EXPIRED = 4,
  ORDER_STATUS_CANCELLED = 5
}

/** Stop Order and Stop Lost triggering method ENUM. */
export enum ProtoOAOrderTriggerMethod {
  TRADE = 1,
  OPPOSITE = 2,
  DOUBLE_TRADE = 3,
  DOUBLE_OPPOSITE = 4
}

/** Properties of a ProtoOAPosition. */
export interface IProtoOAPosition {
  /** ProtoOAPosition positionId */
  positionId: number | Long;

  /** ProtoOAPosition tradeData */
  tradeData: ProtoOATradeData;

  /** ProtoOAPosition positionStatus */
  positionStatus: ProtoOAPositionStatus;

  /** ProtoOAPosition swap */
  swap: number | Long;

  /** ProtoOAPosition price */
  price?: number | null;

  /** ProtoOAPosition stopLoss */
  stopLoss?: number | null;

  /** ProtoOAPosition takeProfit */
  takeProfit?: number | null;

  /** ProtoOAPosition utcLastUpdateTimestamp */
  utcLastUpdateTimestamp?: number | Long | null;

  /** ProtoOAPosition commission */
  commission?: number | Long | null;

  /** ProtoOAPosition marginRate */
  marginRate?: number | null;

  /** ProtoOAPosition mirroringCommission */
  mirroringCommission?: number | Long | null;

  /** ProtoOAPosition guaranteedStopLoss */
  guaranteedStopLoss?: boolean | null;

  /** ProtoOAPosition usedMargin */
  usedMargin?: number | Long | null;

  /** ProtoOAPosition stopLossTriggerMethod */
  stopLossTriggerMethod?: ProtoOAOrderTriggerMethod | null;
}

/** Trade position entity. */
export class ProtoOAPosition implements IProtoOAPosition {
  /**
   * Constructs a new ProtoOAPosition.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAPosition);

  /** ProtoOAPosition positionId. */
  public positionId: number | Long;

  /** ProtoOAPosition tradeData. */
  public tradeData: ProtoOATradeData;

  /** ProtoOAPosition positionStatus. */
  public positionStatus: ProtoOAPositionStatus;

  /** ProtoOAPosition swap. */
  public swap: number | Long;

  /** ProtoOAPosition price. */
  public price: number;

  /** ProtoOAPosition stopLoss. */
  public stopLoss: number;

  /** ProtoOAPosition takeProfit. */
  public takeProfit: number;

  /** ProtoOAPosition utcLastUpdateTimestamp. */
  public utcLastUpdateTimestamp: number | Long;

  /** ProtoOAPosition commission. */
  public commission: number | Long;

  /** ProtoOAPosition marginRate. */
  public marginRate: number;

  /** ProtoOAPosition mirroringCommission. */
  public mirroringCommission: number | Long;

  /** ProtoOAPosition guaranteedStopLoss. */
  public guaranteedStopLoss: boolean;

  /** ProtoOAPosition usedMargin. */
  public usedMargin: number | Long;

  /** ProtoOAPosition stopLossTriggerMethod. */
  public stopLossTriggerMethod: ProtoOAOrderTriggerMethod;

  /**
   * Creates a new ProtoOAPosition instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAPosition instance
   */
  public static create(properties?: IProtoOAPosition): ProtoOAPosition;

  /**
   * Encodes the specified ProtoOAPosition message. Does not implicitly {@link ProtoOAPosition.verify|verify} messages.
   * @param message ProtoOAPosition message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAPosition,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAPosition message, length delimited. Does not implicitly {@link ProtoOAPosition.verify|verify} messages.
   * @param message ProtoOAPosition message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAPosition,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAPosition message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAPosition
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAPosition;

  /**
   * Decodes a ProtoOAPosition message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAPosition
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAPosition;

  /**
   * Verifies a ProtoOAPosition message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAPosition message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAPosition
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAPosition;

  /**
   * Creates a plain object from a ProtoOAPosition message. Also converts values to other types if specified.
   * @param message ProtoOAPosition
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAPosition,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAPosition to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOATradeData. */
export interface IProtoOATradeData {
  /** ProtoOATradeData symbolId */
  symbolId: number | Long;

  /** ProtoOATradeData volume */
  volume: number | Long;

  /** ProtoOATradeData tradeSide */
  tradeSide: ProtoOATradeSide;

  /** ProtoOATradeData openTimestamp */
  openTimestamp?: number | Long | null;

  /** ProtoOATradeData label */
  label?: string | null;

  /** ProtoOATradeData guaranteedStopLoss */
  guaranteedStopLoss?: boolean | null;
}

/** Position/order trading details entity. */
export class ProtoOATradeData implements IProtoOATradeData {
  /**
   * Constructs a new ProtoOATradeData.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOATradeData);

  /** ProtoOATradeData symbolId. */
  public symbolId: number | Long;

  /** ProtoOATradeData volume. */
  public volume: number | Long;

  /** ProtoOATradeData tradeSide. */
  public tradeSide: ProtoOATradeSide;

  /** ProtoOATradeData openTimestamp. */
  public openTimestamp: number | Long;

  /** ProtoOATradeData label. */
  public label: string;

  /** ProtoOATradeData guaranteedStopLoss. */
  public guaranteedStopLoss: boolean;

  /**
   * Creates a new ProtoOATradeData instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOATradeData instance
   */
  public static create(properties?: IProtoOATradeData): ProtoOATradeData;

  /**
   * Encodes the specified ProtoOATradeData message. Does not implicitly {@link ProtoOATradeData.verify|verify} messages.
   * @param message ProtoOATradeData message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOATradeData,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOATradeData message, length delimited. Does not implicitly {@link ProtoOATradeData.verify|verify} messages.
   * @param message ProtoOATradeData message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOATradeData,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOATradeData message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOATradeData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOATradeData;

  /**
   * Decodes a ProtoOATradeData message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOATradeData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOATradeData;

  /**
   * Verifies a ProtoOATradeData message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOATradeData message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOATradeData
   */
  public static fromObject(object: { [k: string]: any }): ProtoOATradeData;

  /**
   * Creates a plain object from a ProtoOATradeData message. Also converts values to other types if specified.
   * @param message ProtoOATradeData
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOATradeData,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOATradeData to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAOrder. */
export interface IProtoOAOrder {
  /** ProtoOAOrder orderId */
  orderId: number | Long;

  /** ProtoOAOrder tradeData */
  tradeData: ProtoOATradeData;

  /** ProtoOAOrder orderType */
  orderType: ProtoOAOrderType;

  /** ProtoOAOrder orderStatus */
  orderStatus: ProtoOAOrderStatus;

  /** ProtoOAOrder expirationTimestamp */
  expirationTimestamp?: number | Long | null;

  /** ProtoOAOrder executionPrice */
  executionPrice?: number | null;

  /** ProtoOAOrder executedVolume */
  executedVolume?: number | Long | null;

  /** ProtoOAOrder utcLastUpdateTimestamp */
  utcLastUpdateTimestamp?: number | Long | null;

  /** ProtoOAOrder baseSlippagePrice */
  baseSlippagePrice?: number | null;

  /** ProtoOAOrder slippageInPoints */
  slippageInPoints?: number | Long | null;

  /** ProtoOAOrder closingOrder */
  closingOrder?: boolean | null;

  /** ProtoOAOrder limitPrice */
  limitPrice?: number | null;

  /** ProtoOAOrder stopPrice */
  stopPrice?: number | null;

  /** ProtoOAOrder stopLoss */
  stopLoss?: number | null;

  /** ProtoOAOrder takeProfit */
  takeProfit?: number | null;

  /** ProtoOAOrder clientOrderId */
  clientOrderId?: string | null;

  /** ProtoOAOrder timeInForce */
  timeInForce?: ProtoOATimeInForce | null;

  /** ProtoOAOrder positionId */
  positionId?: number | Long | null;

  /** ProtoOAOrder relativeStopLoss */
  relativeStopLoss?: number | Long | null;

  /** ProtoOAOrder relativeTakeProfit */
  relativeTakeProfit?: number | Long | null;

  /** ProtoOAOrder isStopOut */
  isStopOut?: boolean | null;

  /** ProtoOAOrder trailingStopLoss */
  trailingStopLoss?: boolean | null;

  /** ProtoOAOrder stopTriggerMethod */
  stopTriggerMethod?: ProtoOAOrderTriggerMethod | null;
}

/** Trade order entity. */
export class ProtoOAOrder implements IProtoOAOrder {
  /**
   * Constructs a new ProtoOAOrder.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAOrder);

  /** ProtoOAOrder orderId. */
  public orderId: number | Long;

  /** ProtoOAOrder tradeData. */
  public tradeData: ProtoOATradeData;

  /** ProtoOAOrder orderType. */
  public orderType: ProtoOAOrderType;

  /** ProtoOAOrder orderStatus. */
  public orderStatus: ProtoOAOrderStatus;

  /** ProtoOAOrder expirationTimestamp. */
  public expirationTimestamp: number | Long;

  /** ProtoOAOrder executionPrice. */
  public executionPrice: number;

  /** ProtoOAOrder executedVolume. */
  public executedVolume: number | Long;

  /** ProtoOAOrder utcLastUpdateTimestamp. */
  public utcLastUpdateTimestamp: number | Long;

  /** ProtoOAOrder baseSlippagePrice. */
  public baseSlippagePrice: number;

  /** ProtoOAOrder slippageInPoints. */
  public slippageInPoints: number | Long;

  /** ProtoOAOrder closingOrder. */
  public closingOrder: boolean;

  /** ProtoOAOrder limitPrice. */
  public limitPrice: number;

  /** ProtoOAOrder stopPrice. */
  public stopPrice: number;

  /** ProtoOAOrder stopLoss. */
  public stopLoss: number;

  /** ProtoOAOrder takeProfit. */
  public takeProfit: number;

  /** ProtoOAOrder clientOrderId. */
  public clientOrderId: string;

  /** ProtoOAOrder timeInForce. */
  public timeInForce: ProtoOATimeInForce;

  /** ProtoOAOrder positionId. */
  public positionId: number | Long;

  /** ProtoOAOrder relativeStopLoss. */
  public relativeStopLoss: number | Long;

  /** ProtoOAOrder relativeTakeProfit. */
  public relativeTakeProfit: number | Long;

  /** ProtoOAOrder isStopOut. */
  public isStopOut: boolean;

  /** ProtoOAOrder trailingStopLoss. */
  public trailingStopLoss: boolean;

  /** ProtoOAOrder stopTriggerMethod. */
  public stopTriggerMethod: ProtoOAOrderTriggerMethod;

  /**
   * Creates a new ProtoOAOrder instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAOrder instance
   */
  public static create(properties?: IProtoOAOrder): ProtoOAOrder;

  /**
   * Encodes the specified ProtoOAOrder message. Does not implicitly {@link ProtoOAOrder.verify|verify} messages.
   * @param message ProtoOAOrder message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAOrder,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAOrder message, length delimited. Does not implicitly {@link ProtoOAOrder.verify|verify} messages.
   * @param message ProtoOAOrder message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAOrder,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAOrder message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAOrder
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAOrder;

  /**
   * Decodes a ProtoOAOrder message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAOrder
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAOrder;

  /**
   * Verifies a ProtoOAOrder message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAOrder message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAOrder
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAOrder;

  /**
   * Creates a plain object from a ProtoOAOrder message. Also converts values to other types if specified.
   * @param message ProtoOAOrder
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAOrder,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAOrder to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Execution event type ENUM. */
export enum ProtoOAExecutionType {
  ORDER_ACCEPTED = 2,
  ORDER_FILLED = 3,
  ORDER_REPLACED = 4,
  ORDER_CANCELLED = 5,
  ORDER_EXPIRED = 6,
  ORDER_REJECTED = 7,
  ORDER_CANCEL_REJECTED = 8,
  SWAP = 9,
  DEPOSIT_WITHDRAW = 10,
  ORDER_PARTIAL_FILL = 11,
  BONUS_DEPOSIT_WITHDRAW = 12
}

/** Properties of a ProtoOABonusDepositWithdraw. */
export interface IProtoOABonusDepositWithdraw {
  /** ProtoOABonusDepositWithdraw operationType */
  operationType: ProtoOAChangeBonusType;

  /** ProtoOABonusDepositWithdraw bonusHistoryId */
  bonusHistoryId: number | Long;

  /** ProtoOABonusDepositWithdraw managerBonus */
  managerBonus: number | Long;

  /** ProtoOABonusDepositWithdraw managerDelta */
  managerDelta: number | Long;

  /** ProtoOABonusDepositWithdraw ibBonus */
  ibBonus: number | Long;

  /** ProtoOABonusDepositWithdraw ibDelta */
  ibDelta: number | Long;

  /** ProtoOABonusDepositWithdraw changeBonusTimestamp */
  changeBonusTimestamp: number | Long;

  /** ProtoOABonusDepositWithdraw externalNote */
  externalNote?: string | null;

  /** ProtoOABonusDepositWithdraw introducingBrokerId */
  introducingBrokerId?: number | Long | null;
}

/** Bonus deposit/withdrawal entity. */
export class ProtoOABonusDepositWithdraw
  implements IProtoOABonusDepositWithdraw {
  /**
   * Constructs a new ProtoOABonusDepositWithdraw.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOABonusDepositWithdraw);

  /** ProtoOABonusDepositWithdraw operationType. */
  public operationType: ProtoOAChangeBonusType;

  /** ProtoOABonusDepositWithdraw bonusHistoryId. */
  public bonusHistoryId: number | Long;

  /** ProtoOABonusDepositWithdraw managerBonus. */
  public managerBonus: number | Long;

  /** ProtoOABonusDepositWithdraw managerDelta. */
  public managerDelta: number | Long;

  /** ProtoOABonusDepositWithdraw ibBonus. */
  public ibBonus: number | Long;

  /** ProtoOABonusDepositWithdraw ibDelta. */
  public ibDelta: number | Long;

  /** ProtoOABonusDepositWithdraw changeBonusTimestamp. */
  public changeBonusTimestamp: number | Long;

  /** ProtoOABonusDepositWithdraw externalNote. */
  public externalNote: string;

  /** ProtoOABonusDepositWithdraw introducingBrokerId. */
  public introducingBrokerId: number | Long;

  /**
   * Creates a new ProtoOABonusDepositWithdraw instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOABonusDepositWithdraw instance
   */
  public static create(
    properties?: IProtoOABonusDepositWithdraw
  ): ProtoOABonusDepositWithdraw;

  /**
   * Encodes the specified ProtoOABonusDepositWithdraw message. Does not implicitly {@link ProtoOABonusDepositWithdraw.verify|verify} messages.
   * @param message ProtoOABonusDepositWithdraw message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOABonusDepositWithdraw,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOABonusDepositWithdraw message, length delimited. Does not implicitly {@link ProtoOABonusDepositWithdraw.verify|verify} messages.
   * @param message ProtoOABonusDepositWithdraw message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOABonusDepositWithdraw,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOABonusDepositWithdraw message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOABonusDepositWithdraw
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOABonusDepositWithdraw;

  /**
   * Decodes a ProtoOABonusDepositWithdraw message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOABonusDepositWithdraw
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOABonusDepositWithdraw;

  /**
   * Verifies a ProtoOABonusDepositWithdraw message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOABonusDepositWithdraw message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOABonusDepositWithdraw
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOABonusDepositWithdraw;

  /**
   * Creates a plain object from a ProtoOABonusDepositWithdraw message. Also converts values to other types if specified.
   * @param message ProtoOABonusDepositWithdraw
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOABonusDepositWithdraw,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOABonusDepositWithdraw to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Bonus operation type ENUM. */
export enum ProtoOAChangeBonusType {
  BONUS_DEPOSIT = 0,
  BONUS_WITHDRAW = 1
}

/** Properties of a ProtoOADepositWithdraw. */
export interface IProtoOADepositWithdraw {
  /** ProtoOADepositWithdraw operationType */
  operationType: ProtoOAChangeBalanceType;

  /** ProtoOADepositWithdraw balanceHistoryId */
  balanceHistoryId: number | Long;

  /** ProtoOADepositWithdraw balance */
  balance: number | Long;

  /** ProtoOADepositWithdraw delta */
  delta: number | Long;

  /** ProtoOADepositWithdraw changeBalanceTimestamp */
  changeBalanceTimestamp: number | Long;

  /** ProtoOADepositWithdraw externalNote */
  externalNote?: string | null;

  /** ProtoOADepositWithdraw balanceVersion */
  balanceVersion?: number | Long | null;

  /** ProtoOADepositWithdraw equity */
  equity?: number | Long | null;
}

/** Account deposit/withdrawal operation entity. */
export class ProtoOADepositWithdraw implements IProtoOADepositWithdraw {
  /**
   * Constructs a new ProtoOADepositWithdraw.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOADepositWithdraw);

  /** ProtoOADepositWithdraw operationType. */
  public operationType: ProtoOAChangeBalanceType;

  /** ProtoOADepositWithdraw balanceHistoryId. */
  public balanceHistoryId: number | Long;

  /** ProtoOADepositWithdraw balance. */
  public balance: number | Long;

  /** ProtoOADepositWithdraw delta. */
  public delta: number | Long;

  /** ProtoOADepositWithdraw changeBalanceTimestamp. */
  public changeBalanceTimestamp: number | Long;

  /** ProtoOADepositWithdraw externalNote. */
  public externalNote: string;

  /** ProtoOADepositWithdraw balanceVersion. */
  public balanceVersion: number | Long;

  /** ProtoOADepositWithdraw equity. */
  public equity: number | Long;

  /**
   * Creates a new ProtoOADepositWithdraw instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOADepositWithdraw instance
   */
  public static create(
    properties?: IProtoOADepositWithdraw
  ): ProtoOADepositWithdraw;

  /**
   * Encodes the specified ProtoOADepositWithdraw message. Does not implicitly {@link ProtoOADepositWithdraw.verify|verify} messages.
   * @param message ProtoOADepositWithdraw message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOADepositWithdraw,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOADepositWithdraw message, length delimited. Does not implicitly {@link ProtoOADepositWithdraw.verify|verify} messages.
   * @param message ProtoOADepositWithdraw message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOADepositWithdraw,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOADepositWithdraw message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOADepositWithdraw
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOADepositWithdraw;

  /**
   * Decodes a ProtoOADepositWithdraw message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOADepositWithdraw
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOADepositWithdraw;

  /**
   * Verifies a ProtoOADepositWithdraw message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOADepositWithdraw message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOADepositWithdraw
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOADepositWithdraw;

  /**
   * Creates a plain object from a ProtoOADepositWithdraw message. Also converts values to other types if specified.
   * @param message ProtoOADepositWithdraw
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOADepositWithdraw,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOADepositWithdraw to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Balance operation entity. Covers all cash movement operations related to account, trading, IB operations, mirroring, etc. */
export enum ProtoOAChangeBalanceType {
  BALANCE_DEPOSIT = 0,
  BALANCE_WITHDRAW = 1,
  BALANCE_DEPOSIT_STRATEGY_COMMISSION_INNER = 3,
  BALANCE_WITHDRAW_STRATEGY_COMMISSION_INNER = 4,
  BALANCE_DEPOSIT_IB_COMMISSIONS = 5,
  BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE = 6,
  BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_SUB_IB = 7,
  BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_BROKER = 8,
  BALANCE_DEPOSIT_REBATE = 9,
  BALANCE_WITHDRAW_REBATE = 10,
  BALANCE_DEPOSIT_STRATEGY_COMMISSION_OUTER = 11,
  BALANCE_WITHDRAW_STRATEGY_COMMISSION_OUTER = 12,
  BALANCE_WITHDRAW_BONUS_COMPENSATION = 13,
  BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE_TO_BROKER = 14,
  BALANCE_DEPOSIT_DIVIDENDS = 15,
  BALANCE_WITHDRAW_DIVIDENDS = 16,
  BALANCE_WITHDRAW_GSL_CHARGE = 17,
  BALANCE_WITHDRAW_ROLLOVER = 18,
  BALANCE_DEPOSIT_NONWITHDRAWABLE_BONUS = 19,
  BALANCE_WITHDRAW_NONWITHDRAWABLE_BONUS = 20,
  BALANCE_DEPOSIT_SWAP = 21,
  BALANCE_WITHDRAW_SWAP = 22,
  BALANCE_DEPOSIT_MANAGEMENT_FEE = 27,
  BALANCE_WITHDRAW_MANAGEMENT_FEE = 28,
  BALANCE_DEPOSIT_PERFORMANCE_FEE = 29,
  BALANCE_WITHDRAW_INACTIVITY_FEE = 35
}

/** Properties of a ProtoOADeal. */
export interface IProtoOADeal {
  /** ProtoOADeal dealId */
  dealId: number | Long;

  /** ProtoOADeal orderId */
  orderId: number | Long;

  /** ProtoOADeal positionId */
  positionId: number | Long;

  /** ProtoOADeal volume */
  volume: number | Long;

  /** ProtoOADeal filledVolume */
  filledVolume: number | Long;

  /** ProtoOADeal symbolId */
  symbolId: number | Long;

  /** ProtoOADeal createTimestamp */
  createTimestamp: number | Long;

  /** ProtoOADeal executionTimestamp */
  executionTimestamp: number | Long;

  /** ProtoOADeal utcLastUpdateTimestamp */
  utcLastUpdateTimestamp?: number | Long | null;

  /** ProtoOADeal executionPrice */
  executionPrice?: number | null;

  /** ProtoOADeal tradeSide */
  tradeSide: ProtoOATradeSide;

  /** ProtoOADeal dealStatus */
  dealStatus: ProtoOADealStatus;

  /** ProtoOADeal marginRate */
  marginRate?: number | null;

  /** ProtoOADeal commission */
  commission?: number | Long | null;

  /** ProtoOADeal baseToUsdConversionRate */
  baseToUsdConversionRate?: number | null;

  /** ProtoOADeal closePositionDetail */
  closePositionDetail?: ProtoOAClosePositionDetail | null;
}

/** Execution entity. */
export class ProtoOADeal implements IProtoOADeal {
  /**
   * Constructs a new ProtoOADeal.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOADeal);

  /** ProtoOADeal dealId. */
  public dealId: number | Long;

  /** ProtoOADeal orderId. */
  public orderId: number | Long;

  /** ProtoOADeal positionId. */
  public positionId: number | Long;

  /** ProtoOADeal volume. */
  public volume: number | Long;

  /** ProtoOADeal filledVolume. */
  public filledVolume: number | Long;

  /** ProtoOADeal symbolId. */
  public symbolId: number | Long;

  /** ProtoOADeal createTimestamp. */
  public createTimestamp: number | Long;

  /** ProtoOADeal executionTimestamp. */
  public executionTimestamp: number | Long;

  /** ProtoOADeal utcLastUpdateTimestamp. */
  public utcLastUpdateTimestamp: number | Long;

  /** ProtoOADeal executionPrice. */
  public executionPrice: number;

  /** ProtoOADeal tradeSide. */
  public tradeSide: ProtoOATradeSide;

  /** ProtoOADeal dealStatus. */
  public dealStatus: ProtoOADealStatus;

  /** ProtoOADeal marginRate. */
  public marginRate: number;

  /** ProtoOADeal commission. */
  public commission: number | Long;

  /** ProtoOADeal baseToUsdConversionRate. */
  public baseToUsdConversionRate: number;

  /** ProtoOADeal closePositionDetail. */
  public closePositionDetail?: ProtoOAClosePositionDetail | null;

  /**
   * Creates a new ProtoOADeal instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOADeal instance
   */
  public static create(properties?: IProtoOADeal): ProtoOADeal;

  /**
   * Encodes the specified ProtoOADeal message. Does not implicitly {@link ProtoOADeal.verify|verify} messages.
   * @param message ProtoOADeal message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOADeal,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOADeal message, length delimited. Does not implicitly {@link ProtoOADeal.verify|verify} messages.
   * @param message ProtoOADeal message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOADeal,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOADeal message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOADeal
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOADeal;

  /**
   * Decodes a ProtoOADeal message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOADeal
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOADeal;

  /**
   * Verifies a ProtoOADeal message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOADeal message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOADeal
   */
  public static fromObject(object: { [k: string]: any }): ProtoOADeal;

  /**
   * Creates a plain object from a ProtoOADeal message. Also converts values to other types if specified.
   * @param message ProtoOADeal
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOADeal,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOADeal to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Deal status ENUM. */
export enum ProtoOADealStatus {
  FILLED = 2,
  PARTIALLY_FILLED = 3,
  REJECTED = 4,
  INTERNALLY_REJECTED = 5,
  ERROR = 6,
  MISSED = 7
}

/** Properties of a ProtoOAClosePositionDetail. */
export interface IProtoOAClosePositionDetail {
  /** ProtoOAClosePositionDetail entryPrice */
  entryPrice: number;

  /** ProtoOAClosePositionDetail grossProfit */
  grossProfit: number | Long;

  /** ProtoOAClosePositionDetail swap */
  swap: number | Long;

  /** ProtoOAClosePositionDetail commission */
  commission: number | Long;

  /** ProtoOAClosePositionDetail balance */
  balance: number | Long;

  /** ProtoOAClosePositionDetail quoteToDepositConversionRate */
  quoteToDepositConversionRate?: number | null;

  /** ProtoOAClosePositionDetail closedVolume */
  closedVolume?: number | Long | null;

  /** ProtoOAClosePositionDetail balanceVersion */
  balanceVersion?: number | Long | null;
}

/** Trading details for closing deal. */
export class ProtoOAClosePositionDetail implements IProtoOAClosePositionDetail {
  /**
   * Constructs a new ProtoOAClosePositionDetail.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAClosePositionDetail);

  /** ProtoOAClosePositionDetail entryPrice. */
  public entryPrice: number;

  /** ProtoOAClosePositionDetail grossProfit. */
  public grossProfit: number | Long;

  /** ProtoOAClosePositionDetail swap. */
  public swap: number | Long;

  /** ProtoOAClosePositionDetail commission. */
  public commission: number | Long;

  /** ProtoOAClosePositionDetail balance. */
  public balance: number | Long;

  /** ProtoOAClosePositionDetail quoteToDepositConversionRate. */
  public quoteToDepositConversionRate: number;

  /** ProtoOAClosePositionDetail closedVolume. */
  public closedVolume: number | Long;

  /** ProtoOAClosePositionDetail balanceVersion. */
  public balanceVersion: number | Long;

  /**
   * Creates a new ProtoOAClosePositionDetail instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAClosePositionDetail instance
   */
  public static create(
    properties?: IProtoOAClosePositionDetail
  ): ProtoOAClosePositionDetail;

  /**
   * Encodes the specified ProtoOAClosePositionDetail message. Does not implicitly {@link ProtoOAClosePositionDetail.verify|verify} messages.
   * @param message ProtoOAClosePositionDetail message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAClosePositionDetail,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAClosePositionDetail message, length delimited. Does not implicitly {@link ProtoOAClosePositionDetail.verify|verify} messages.
   * @param message ProtoOAClosePositionDetail message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAClosePositionDetail,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAClosePositionDetail message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAClosePositionDetail
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAClosePositionDetail;

  /**
   * Decodes a ProtoOAClosePositionDetail message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAClosePositionDetail
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAClosePositionDetail;

  /**
   * Verifies a ProtoOAClosePositionDetail message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAClosePositionDetail message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAClosePositionDetail
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOAClosePositionDetail;

  /**
   * Creates a plain object from a ProtoOAClosePositionDetail message. Also converts values to other types if specified.
   * @param message ProtoOAClosePositionDetail
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAClosePositionDetail,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAClosePositionDetail to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Trendbar period ENUM. */
export enum ProtoOATrendbarPeriod {
  M1 = 1,
  M2 = 2,
  M3 = 3,
  M4 = 4,
  M5 = 5,
  M10 = 6,
  M15 = 7,
  M30 = 8,
  H1 = 9,
  H4 = 10,
  H12 = 11,
  D1 = 12,
  W1 = 13,
  MN1 = 14
}

/** Properties of a ProtoOATrendbar. */
export interface IProtoOATrendbar {
  /** ProtoOATrendbar volume */
  volume: number | Long;

  /** ProtoOATrendbar period */
  period?: ProtoOATrendbarPeriod | null;

  /** ProtoOATrendbar low */
  low?: number | Long | null;

  /** ProtoOATrendbar deltaOpen */
  deltaOpen?: number | Long | null;

  /** ProtoOATrendbar deltaClose */
  deltaClose?: number | Long | null;

  /** ProtoOATrendbar deltaHigh */
  deltaHigh?: number | Long | null;

  /** ProtoOATrendbar utcTimestampInMinutes */
  utcTimestampInMinutes?: number | null;
}

/** Historical Trendbar entity. */
export class ProtoOATrendbar implements IProtoOATrendbar {
  /**
   * Constructs a new ProtoOATrendbar.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOATrendbar);

  /** ProtoOATrendbar volume. */
  public volume: number | Long;

  /** ProtoOATrendbar period. */
  public period: ProtoOATrendbarPeriod;

  /** ProtoOATrendbar low. */
  public low: number | Long;

  /** ProtoOATrendbar deltaOpen. */
  public deltaOpen: number | Long;

  /** ProtoOATrendbar deltaClose. */
  public deltaClose: number | Long;

  /** ProtoOATrendbar deltaHigh. */
  public deltaHigh: number | Long;

  /** ProtoOATrendbar utcTimestampInMinutes. */
  public utcTimestampInMinutes: number;

  /**
   * Creates a new ProtoOATrendbar instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOATrendbar instance
   */
  public static create(properties?: IProtoOATrendbar): ProtoOATrendbar;

  /**
   * Encodes the specified ProtoOATrendbar message. Does not implicitly {@link ProtoOATrendbar.verify|verify} messages.
   * @param message ProtoOATrendbar message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOATrendbar,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOATrendbar message, length delimited. Does not implicitly {@link ProtoOATrendbar.verify|verify} messages.
   * @param message ProtoOATrendbar message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOATrendbar,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOATrendbar message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOATrendbar
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOATrendbar;

  /**
   * Decodes a ProtoOATrendbar message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOATrendbar
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOATrendbar;

  /**
   * Verifies a ProtoOATrendbar message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOATrendbar message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOATrendbar
   */
  public static fromObject(object: { [k: string]: any }): ProtoOATrendbar;

  /**
   * Creates a plain object from a ProtoOATrendbar message. Also converts values to other types if specified.
   * @param message ProtoOATrendbar
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOATrendbar,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOATrendbar to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAExpectedMargin. */
export interface IProtoOAExpectedMargin {
  /** ProtoOAExpectedMargin volume */
  volume: number | Long;

  /** ProtoOAExpectedMargin buyMargin */
  buyMargin: number | Long;

  /** ProtoOAExpectedMargin sellMargin */
  sellMargin: number | Long;
}

/** Expected margin computation entity. */
export class ProtoOAExpectedMargin implements IProtoOAExpectedMargin {
  /**
   * Constructs a new ProtoOAExpectedMargin.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAExpectedMargin);

  /** ProtoOAExpectedMargin volume. */
  public volume: number | Long;

  /** ProtoOAExpectedMargin buyMargin. */
  public buyMargin: number | Long;

  /** ProtoOAExpectedMargin sellMargin. */
  public sellMargin: number | Long;

  /**
   * Creates a new ProtoOAExpectedMargin instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAExpectedMargin instance
   */
  public static create(
    properties?: IProtoOAExpectedMargin
  ): ProtoOAExpectedMargin;

  /**
   * Encodes the specified ProtoOAExpectedMargin message. Does not implicitly {@link ProtoOAExpectedMargin.verify|verify} messages.
   * @param message ProtoOAExpectedMargin message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAExpectedMargin,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAExpectedMargin message, length delimited. Does not implicitly {@link ProtoOAExpectedMargin.verify|verify} messages.
   * @param message ProtoOAExpectedMargin message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAExpectedMargin,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAExpectedMargin message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAExpectedMargin
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAExpectedMargin;

  /**
   * Decodes a ProtoOAExpectedMargin message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAExpectedMargin
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAExpectedMargin;

  /**
   * Verifies a ProtoOAExpectedMargin message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAExpectedMargin message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAExpectedMargin
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAExpectedMargin;

  /**
   * Creates a plain object from a ProtoOAExpectedMargin message. Also converts values to other types if specified.
   * @param message ProtoOAExpectedMargin
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAExpectedMargin,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAExpectedMargin to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Price quote type. */
export enum ProtoOAQuoteType {
  BID = 1,
  ASK = 2
}

/** Properties of a ProtoOATickData. */
export interface IProtoOATickData {
  /** ProtoOATickData timestamp */
  timestamp: number | Long;

  /** ProtoOATickData tick */
  tick: number | Long;
}

/** Historical tick data type. */
export class ProtoOATickData implements IProtoOATickData {
  /**
   * Constructs a new ProtoOATickData.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOATickData);

  /** ProtoOATickData timestamp. */
  public timestamp: number | Long;

  /** ProtoOATickData tick. */
  public tick: number | Long;

  /**
   * Creates a new ProtoOATickData instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOATickData instance
   */
  public static create(properties?: IProtoOATickData): ProtoOATickData;

  /**
   * Encodes the specified ProtoOATickData message. Does not implicitly {@link ProtoOATickData.verify|verify} messages.
   * @param message ProtoOATickData message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOATickData,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOATickData message, length delimited. Does not implicitly {@link ProtoOATickData.verify|verify} messages.
   * @param message ProtoOATickData message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOATickData,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOATickData message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOATickData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOATickData;

  /**
   * Decodes a ProtoOATickData message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOATickData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOATickData;

  /**
   * Verifies a ProtoOATickData message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOATickData message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOATickData
   */
  public static fromObject(object: { [k: string]: any }): ProtoOATickData;

  /**
   * Creates a plain object from a ProtoOATickData message. Also converts values to other types if specified.
   * @param message ProtoOATickData
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOATickData,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOATickData to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Open API application permission in regards to token ENUM. */
export enum ProtoOAClientPermissionScope {
  SCOPE_VIEW = 0,
  SCOPE_TRADE = 1
}

/** Properties of a ProtoOACtidProfile. */
export interface IProtoOACtidProfile {
  /** ProtoOACtidProfile userId */
  userId: number | Long;
}

/** Trader profile entity. Empty due to GDPR. */
export class ProtoOACtidProfile implements IProtoOACtidProfile {
  /**
   * Constructs a new ProtoOACtidProfile.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOACtidProfile);

  /** ProtoOACtidProfile userId. */
  public userId: number | Long;

  /**
   * Creates a new ProtoOACtidProfile instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOACtidProfile instance
   */
  public static create(properties?: IProtoOACtidProfile): ProtoOACtidProfile;

  /**
   * Encodes the specified ProtoOACtidProfile message. Does not implicitly {@link ProtoOACtidProfile.verify|verify} messages.
   * @param message ProtoOACtidProfile message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOACtidProfile,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOACtidProfile message, length delimited. Does not implicitly {@link ProtoOACtidProfile.verify|verify} messages.
   * @param message ProtoOACtidProfile message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOACtidProfile,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOACtidProfile message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOACtidProfile
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOACtidProfile;

  /**
   * Decodes a ProtoOACtidProfile message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOACtidProfile
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOACtidProfile;

  /**
   * Verifies a ProtoOACtidProfile message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOACtidProfile message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOACtidProfile
   */
  public static fromObject(object: { [k: string]: any }): ProtoOACtidProfile;

  /**
   * Creates a plain object from a ProtoOACtidProfile message. Also converts values to other types if specified.
   * @param message ProtoOACtidProfile
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOACtidProfile,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOACtidProfile to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOACtidTraderAccount. */
export interface IProtoOACtidTraderAccount {
  /** ProtoOACtidTraderAccount ctidTraderAccountId */
  ctidTraderAccountId: number | Long;

  /** ProtoOACtidTraderAccount isLive */
  isLive?: boolean | null;

  /** ProtoOACtidTraderAccount traderLogin */
  traderLogin?: number | Long | null;
}

/** Trader account entity. */
export class ProtoOACtidTraderAccount implements IProtoOACtidTraderAccount {
  /**
   * Constructs a new ProtoOACtidTraderAccount.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOACtidTraderAccount);

  /** ProtoOACtidTraderAccount ctidTraderAccountId. */
  public ctidTraderAccountId: number | Long;

  /** ProtoOACtidTraderAccount isLive. */
  public isLive: boolean;

  /** ProtoOACtidTraderAccount traderLogin. */
  public traderLogin: number | Long;

  /**
   * Creates a new ProtoOACtidTraderAccount instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOACtidTraderAccount instance
   */
  public static create(
    properties?: IProtoOACtidTraderAccount
  ): ProtoOACtidTraderAccount;

  /**
   * Encodes the specified ProtoOACtidTraderAccount message. Does not implicitly {@link ProtoOACtidTraderAccount.verify|verify} messages.
   * @param message ProtoOACtidTraderAccount message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOACtidTraderAccount,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOACtidTraderAccount message, length delimited. Does not implicitly {@link ProtoOACtidTraderAccount.verify|verify} messages.
   * @param message ProtoOACtidTraderAccount message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOACtidTraderAccount,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOACtidTraderAccount message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOACtidTraderAccount
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOACtidTraderAccount;

  /**
   * Decodes a ProtoOACtidTraderAccount message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOACtidTraderAccount
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOACtidTraderAccount;

  /**
   * Verifies a ProtoOACtidTraderAccount message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOACtidTraderAccount message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOACtidTraderAccount
   */
  public static fromObject(object: {
    [k: string]: any;
  }): ProtoOACtidTraderAccount;

  /**
   * Creates a plain object from a ProtoOACtidTraderAccount message. Also converts values to other types if specified.
   * @param message ProtoOACtidTraderAccount
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOACtidTraderAccount,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOACtidTraderAccount to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOAAssetClass. */
export interface IProtoOAAssetClass {
  /** ProtoOAAssetClass id */
  id?: number | Long | null;

  /** ProtoOAAssetClass name */
  name?: string | null;
}

/** Asset class entity. */
export class ProtoOAAssetClass implements IProtoOAAssetClass {
  /**
   * Constructs a new ProtoOAAssetClass.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAAssetClass);

  /** ProtoOAAssetClass id. */
  public id: number | Long;

  /** ProtoOAAssetClass name. */
  public name: string;

  /**
   * Creates a new ProtoOAAssetClass instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOAAssetClass instance
   */
  public static create(properties?: IProtoOAAssetClass): ProtoOAAssetClass;

  /**
   * Encodes the specified ProtoOAAssetClass message. Does not implicitly {@link ProtoOAAssetClass.verify|verify} messages.
   * @param message ProtoOAAssetClass message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOAAssetClass,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOAAssetClass message, length delimited. Does not implicitly {@link ProtoOAAssetClass.verify|verify} messages.
   * @param message ProtoOAAssetClass message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOAAssetClass,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOAAssetClass message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOAAssetClass
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOAAssetClass;

  /**
   * Decodes a ProtoOAAssetClass message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOAAssetClass
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOAAssetClass;

  /**
   * Verifies a ProtoOAAssetClass message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOAAssetClass message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOAAssetClass
   */
  public static fromObject(object: { [k: string]: any }): ProtoOAAssetClass;

  /**
   * Creates a plain object from a ProtoOAAssetClass message. Also converts values to other types if specified.
   * @param message ProtoOAAssetClass
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOAAssetClass,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOAAssetClass to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ProtoOADepthQuote. */
export interface IProtoOADepthQuote {
  /** ProtoOADepthQuote id */
  id: number | Long;

  /** ProtoOADepthQuote size */
  size: number | Long;

  /** ProtoOADepthQuote bid */
  bid?: number | Long | null;

  /** ProtoOADepthQuote ask */
  ask?: number | Long | null;
}

/** Depth of market entity. */
export class ProtoOADepthQuote implements IProtoOADepthQuote {
  /**
   * Constructs a new ProtoOADepthQuote.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOADepthQuote);

  /** ProtoOADepthQuote id. */
  public id: number | Long;

  /** ProtoOADepthQuote size. */
  public size: number | Long;

  /** ProtoOADepthQuote bid. */
  public bid: number | Long;

  /** ProtoOADepthQuote ask. */
  public ask: number | Long;

  /**
   * Creates a new ProtoOADepthQuote instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProtoOADepthQuote instance
   */
  public static create(properties?: IProtoOADepthQuote): ProtoOADepthQuote;

  /**
   * Encodes the specified ProtoOADepthQuote message. Does not implicitly {@link ProtoOADepthQuote.verify|verify} messages.
   * @param message ProtoOADepthQuote message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: ProtoOADepthQuote,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified ProtoOADepthQuote message, length delimited. Does not implicitly {@link ProtoOADepthQuote.verify|verify} messages.
   * @param message ProtoOADepthQuote message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: ProtoOADepthQuote,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes a ProtoOADepthQuote message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProtoOADepthQuote
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): ProtoOADepthQuote;

  /**
   * Decodes a ProtoOADepthQuote message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProtoOADepthQuote
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): ProtoOADepthQuote;

  /**
   * Verifies a ProtoOADepthQuote message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a ProtoOADepthQuote message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProtoOADepthQuote
   */
  public static fromObject(object: { [k: string]: any }): ProtoOADepthQuote;

  /**
   * Creates a plain object from a ProtoOADepthQuote message. Also converts values to other types if specified.
   * @param message ProtoOADepthQuote
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: ProtoOADepthQuote,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this ProtoOADepthQuote to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Error code ENUM. */
export enum ProtoOAErrorCode {
  OA_AUTH_TOKEN_EXPIRED = 1,
  ACCOUNT_NOT_AUTHORIZED = 2,
  INCORRECT_BOUNDARIES = 35,
  CONNECTIONS_LIMIT_EXCEEDED = 67
}
