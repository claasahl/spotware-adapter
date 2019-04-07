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
   * Encodes the specified ProtoMessage message. Does not implicitly {@link ProtoMessage.verify|verify} messages.
   * @param message ProtoMessage message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoMessage,
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
  maintenanceEndTimestamp?: Long | null;
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
  public maintenanceEndTimestamp: Long;

  /**
   * Encodes the specified ProtoErrorRes message. Does not implicitly {@link ProtoErrorRes.verify|verify} messages.
   * @param message ProtoErrorRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoErrorRes,
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
   * Encodes the specified ProtoHeartbeatEvent message. Does not implicitly {@link ProtoHeartbeatEvent.verify|verify} messages.
   * @param message ProtoHeartbeatEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoHeartbeatEvent,
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
   * Encodes the specified ProtoOAApplicationAuthReq message. Does not implicitly {@link ProtoOAApplicationAuthReq.verify|verify} messages.
   * @param message ProtoOAApplicationAuthReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAApplicationAuthReq,
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
   * Encodes the specified ProtoOAApplicationAuthRes message. Does not implicitly {@link ProtoOAApplicationAuthRes.verify|verify} messages.
   * @param message ProtoOAApplicationAuthRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAApplicationAuthRes,
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
}

/** Properties of a ProtoOAAccountAuthReq. */
export interface IProtoOAAccountAuthReq {
  /** ProtoOAAccountAuthReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAccountAuthReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

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
  public ctidTraderAccountId: Long;

  /** ProtoOAAccountAuthReq accessToken. */
  public accessToken: string;

  /**
   * Encodes the specified ProtoOAAccountAuthReq message. Does not implicitly {@link ProtoOAAccountAuthReq.verify|verify} messages.
   * @param message ProtoOAAccountAuthReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAAccountAuthReq,
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
}

/** Properties of a ProtoOAAccountAuthRes. */
export interface IProtoOAAccountAuthRes {
  /** ProtoOAAccountAuthRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAccountAuthRes ctidTraderAccountId */
  ctidTraderAccountId: Long;
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
  public ctidTraderAccountId: Long;

  /**
   * Encodes the specified ProtoOAAccountAuthRes message. Does not implicitly {@link ProtoOAAccountAuthRes.verify|verify} messages.
   * @param message ProtoOAAccountAuthRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAAccountAuthRes,
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
}

/** Properties of a ProtoOAErrorRes. */
export interface IProtoOAErrorRes {
  /** ProtoOAErrorRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAErrorRes ctidTraderAccountId */
  ctidTraderAccountId?: Long | null;

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
  public ctidTraderAccountId: Long;

  /** ProtoOAErrorRes errorCode. */
  public errorCode: string;

  /** ProtoOAErrorRes description. */
  public description: string;

  /**
   * Encodes the specified ProtoOAErrorRes message. Does not implicitly {@link ProtoOAErrorRes.verify|verify} messages.
   * @param message ProtoOAErrorRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAErrorRes,
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
   * Encodes the specified ProtoOAClientDisconnectEvent message. Does not implicitly {@link ProtoOAClientDisconnectEvent.verify|verify} messages.
   * @param message ProtoOAClientDisconnectEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAClientDisconnectEvent,
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
}

/** Properties of a ProtoOAAccountsTokenInvalidatedEvent. */
export interface IProtoOAAccountsTokenInvalidatedEvent {
  /** ProtoOAAccountsTokenInvalidatedEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAccountsTokenInvalidatedEvent ctidTraderAccountIds */
  ctidTraderAccountIds?: Long[] | null;

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
  public ctidTraderAccountIds: Long[];

  /** ProtoOAAccountsTokenInvalidatedEvent reason. */
  public reason: string;

  /**
   * Encodes the specified ProtoOAAccountsTokenInvalidatedEvent message. Does not implicitly {@link ProtoOAAccountsTokenInvalidatedEvent.verify|verify} messages.
   * @param message ProtoOAAccountsTokenInvalidatedEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAAccountsTokenInvalidatedEvent,
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
   * Encodes the specified ProtoOAVersionReq message. Does not implicitly {@link ProtoOAVersionReq.verify|verify} messages.
   * @param message ProtoOAVersionReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAVersionReq,
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
   * Encodes the specified ProtoOAVersionRes message. Does not implicitly {@link ProtoOAVersionRes.verify|verify} messages.
   * @param message ProtoOAVersionRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAVersionRes,
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
}

/** Properties of a ProtoOANewOrderReq. */
export interface IProtoOANewOrderReq {
  /** ProtoOANewOrderReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOANewOrderReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOANewOrderReq symbolId */
  symbolId: Long;

  /** ProtoOANewOrderReq orderType */
  orderType: ProtoOAOrderType;

  /** ProtoOANewOrderReq tradeSide */
  tradeSide: ProtoOATradeSide;

  /** ProtoOANewOrderReq volume */
  volume: Long;

  /** ProtoOANewOrderReq limitPrice */
  limitPrice?: number | null;

  /** ProtoOANewOrderReq stopPrice */
  stopPrice?: number | null;

  /** ProtoOANewOrderReq timeInForce */
  timeInForce?: ProtoOATimeInForce | null;

  /** ProtoOANewOrderReq expirationTimestamp */
  expirationTimestamp?: Long | null;

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
  positionId?: Long | null;

  /** ProtoOANewOrderReq clientOrderId */
  clientOrderId?: string | null;

  /** ProtoOANewOrderReq relativeStopLoss */
  relativeStopLoss?: Long | null;

  /** ProtoOANewOrderReq relativeTakeProfit */
  relativeTakeProfit?: Long | null;

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
  public ctidTraderAccountId: Long;

  /** ProtoOANewOrderReq symbolId. */
  public symbolId: Long;

  /** ProtoOANewOrderReq orderType. */
  public orderType: ProtoOAOrderType;

  /** ProtoOANewOrderReq tradeSide. */
  public tradeSide: ProtoOATradeSide;

  /** ProtoOANewOrderReq volume. */
  public volume: Long;

  /** ProtoOANewOrderReq limitPrice. */
  public limitPrice: number;

  /** ProtoOANewOrderReq stopPrice. */
  public stopPrice: number;

  /** ProtoOANewOrderReq timeInForce. */
  public timeInForce: ProtoOATimeInForce;

  /** ProtoOANewOrderReq expirationTimestamp. */
  public expirationTimestamp: Long;

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
  public positionId: Long;

  /** ProtoOANewOrderReq clientOrderId. */
  public clientOrderId: string;

  /** ProtoOANewOrderReq relativeStopLoss. */
  public relativeStopLoss: Long;

  /** ProtoOANewOrderReq relativeTakeProfit. */
  public relativeTakeProfit: Long;

  /** ProtoOANewOrderReq guaranteedStopLoss. */
  public guaranteedStopLoss: boolean;

  /** ProtoOANewOrderReq trailingStopLoss. */
  public trailingStopLoss: boolean;

  /** ProtoOANewOrderReq stopTriggerMethod. */
  public stopTriggerMethod: ProtoOAOrderTriggerMethod;

  /**
   * Encodes the specified ProtoOANewOrderReq message. Does not implicitly {@link ProtoOANewOrderReq.verify|verify} messages.
   * @param message ProtoOANewOrderReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOANewOrderReq,
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
}

/** Properties of a ProtoOAExecutionEvent. */
export interface IProtoOAExecutionEvent {
  /** ProtoOAExecutionEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAExecutionEvent ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAExecutionEvent executionType */
  executionType: ProtoOAExecutionType;

  /** ProtoOAExecutionEvent position */
  position?: IProtoOAPosition | null;

  /** ProtoOAExecutionEvent order */
  order?: IProtoOAOrder | null;

  /** ProtoOAExecutionEvent deal */
  deal?: IProtoOADeal | null;

  /** ProtoOAExecutionEvent bonusDepositWithdraw */
  bonusDepositWithdraw?: IProtoOABonusDepositWithdraw | null;

  /** ProtoOAExecutionEvent depositWithdraw */
  depositWithdraw?: IProtoOADepositWithdraw | null;

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
  public ctidTraderAccountId: Long;

  /** ProtoOAExecutionEvent executionType. */
  public executionType: ProtoOAExecutionType;

  /** ProtoOAExecutionEvent position. */
  public position?: IProtoOAPosition | null;

  /** ProtoOAExecutionEvent order. */
  public order?: IProtoOAOrder | null;

  /** ProtoOAExecutionEvent deal. */
  public deal?: IProtoOADeal | null;

  /** ProtoOAExecutionEvent bonusDepositWithdraw. */
  public bonusDepositWithdraw?: IProtoOABonusDepositWithdraw | null;

  /** ProtoOAExecutionEvent depositWithdraw. */
  public depositWithdraw?: IProtoOADepositWithdraw | null;

  /** ProtoOAExecutionEvent errorCode. */
  public errorCode: string;

  /** ProtoOAExecutionEvent isServerEvent. */
  public isServerEvent: boolean;

  /**
   * Encodes the specified ProtoOAExecutionEvent message. Does not implicitly {@link ProtoOAExecutionEvent.verify|verify} messages.
   * @param message ProtoOAExecutionEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAExecutionEvent,
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
}

/** Properties of a ProtoOACancelOrderReq. */
export interface IProtoOACancelOrderReq {
  /** ProtoOACancelOrderReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOACancelOrderReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOACancelOrderReq orderId */
  orderId: Long;
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
  public ctidTraderAccountId: Long;

  /** ProtoOACancelOrderReq orderId. */
  public orderId: Long;

  /**
   * Encodes the specified ProtoOACancelOrderReq message. Does not implicitly {@link ProtoOACancelOrderReq.verify|verify} messages.
   * @param message ProtoOACancelOrderReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOACancelOrderReq,
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
}

/** Properties of a ProtoOAAmendOrderReq. */
export interface IProtoOAAmendOrderReq {
  /** ProtoOAAmendOrderReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAmendOrderReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAAmendOrderReq orderId */
  orderId: Long;

  /** ProtoOAAmendOrderReq volume */
  volume?: Long | null;

  /** ProtoOAAmendOrderReq limitPrice */
  limitPrice?: number | null;

  /** ProtoOAAmendOrderReq stopPrice */
  stopPrice?: number | null;

  /** ProtoOAAmendOrderReq expirationTimestamp */
  expirationTimestamp?: Long | null;

  /** ProtoOAAmendOrderReq stopLoss */
  stopLoss?: number | null;

  /** ProtoOAAmendOrderReq takeProfit */
  takeProfit?: number | null;

  /** ProtoOAAmendOrderReq slippageInPoints */
  slippageInPoints?: number | null;

  /** ProtoOAAmendOrderReq relativeStopLoss */
  relativeStopLoss?: Long | null;

  /** ProtoOAAmendOrderReq relativeTakeProfit */
  relativeTakeProfit?: Long | null;

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
  public ctidTraderAccountId: Long;

  /** ProtoOAAmendOrderReq orderId. */
  public orderId: Long;

  /** ProtoOAAmendOrderReq volume. */
  public volume: Long;

  /** ProtoOAAmendOrderReq limitPrice. */
  public limitPrice: number;

  /** ProtoOAAmendOrderReq stopPrice. */
  public stopPrice: number;

  /** ProtoOAAmendOrderReq expirationTimestamp. */
  public expirationTimestamp: Long;

  /** ProtoOAAmendOrderReq stopLoss. */
  public stopLoss: number;

  /** ProtoOAAmendOrderReq takeProfit. */
  public takeProfit: number;

  /** ProtoOAAmendOrderReq slippageInPoints. */
  public slippageInPoints: number;

  /** ProtoOAAmendOrderReq relativeStopLoss. */
  public relativeStopLoss: Long;

  /** ProtoOAAmendOrderReq relativeTakeProfit. */
  public relativeTakeProfit: Long;

  /** ProtoOAAmendOrderReq guaranteedStopLoss. */
  public guaranteedStopLoss: boolean;

  /** ProtoOAAmendOrderReq trailingStopLoss. */
  public trailingStopLoss: boolean;

  /** ProtoOAAmendOrderReq stopTriggerMethod. */
  public stopTriggerMethod: ProtoOAOrderTriggerMethod;

  /**
   * Encodes the specified ProtoOAAmendOrderReq message. Does not implicitly {@link ProtoOAAmendOrderReq.verify|verify} messages.
   * @param message ProtoOAAmendOrderReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAAmendOrderReq,
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
}

/** Properties of a ProtoOAAmendPositionSLTPReq. */
export interface IProtoOAAmendPositionSLTPReq {
  /** ProtoOAAmendPositionSLTPReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAmendPositionSLTPReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAAmendPositionSLTPReq positionId */
  positionId: Long;

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
  public ctidTraderAccountId: Long;

  /** ProtoOAAmendPositionSLTPReq positionId. */
  public positionId: Long;

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
   * Encodes the specified ProtoOAAmendPositionSLTPReq message. Does not implicitly {@link ProtoOAAmendPositionSLTPReq.verify|verify} messages.
   * @param message ProtoOAAmendPositionSLTPReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAAmendPositionSLTPReq,
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
}

/** Properties of a ProtoOAClosePositionReq. */
export interface IProtoOAClosePositionReq {
  /** ProtoOAClosePositionReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAClosePositionReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAClosePositionReq positionId */
  positionId: Long;

  /** ProtoOAClosePositionReq volume */
  volume: Long;
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
  public ctidTraderAccountId: Long;

  /** ProtoOAClosePositionReq positionId. */
  public positionId: Long;

  /** ProtoOAClosePositionReq volume. */
  public volume: Long;

  /**
   * Encodes the specified ProtoOAClosePositionReq message. Does not implicitly {@link ProtoOAClosePositionReq.verify|verify} messages.
   * @param message ProtoOAClosePositionReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAClosePositionReq,
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
}

/** Properties of a ProtoOATrailingSLChangedEvent. */
export interface IProtoOATrailingSLChangedEvent {
  /** ProtoOATrailingSLChangedEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOATrailingSLChangedEvent ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOATrailingSLChangedEvent positionId */
  positionId: Long;

  /** ProtoOATrailingSLChangedEvent orderId */
  orderId: Long;

  /** ProtoOATrailingSLChangedEvent stopPrice */
  stopPrice: number;

  /** ProtoOATrailingSLChangedEvent utcLastUpdateTimestamp */
  utcLastUpdateTimestamp: Long;
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
  public ctidTraderAccountId: Long;

  /** ProtoOATrailingSLChangedEvent positionId. */
  public positionId: Long;

  /** ProtoOATrailingSLChangedEvent orderId. */
  public orderId: Long;

  /** ProtoOATrailingSLChangedEvent stopPrice. */
  public stopPrice: number;

  /** ProtoOATrailingSLChangedEvent utcLastUpdateTimestamp. */
  public utcLastUpdateTimestamp: Long;

  /**
   * Encodes the specified ProtoOATrailingSLChangedEvent message. Does not implicitly {@link ProtoOATrailingSLChangedEvent.verify|verify} messages.
   * @param message ProtoOATrailingSLChangedEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOATrailingSLChangedEvent,
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
}

/** Properties of a ProtoOAAssetListReq. */
export interface IProtoOAAssetListReq {
  /** ProtoOAAssetListReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAssetListReq ctidTraderAccountId */
  ctidTraderAccountId: Long;
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
  public ctidTraderAccountId: Long;

  /**
   * Encodes the specified ProtoOAAssetListReq message. Does not implicitly {@link ProtoOAAssetListReq.verify|verify} messages.
   * @param message ProtoOAAssetListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAAssetListReq,
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
}

/** Properties of a ProtoOAAssetListRes. */
export interface IProtoOAAssetListRes {
  /** ProtoOAAssetListRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAssetListRes ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAAssetListRes asset */
  asset?: IProtoOAAsset[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOAAssetListRes asset. */
  public asset: IProtoOAAsset[];

  /**
   * Encodes the specified ProtoOAAssetListRes message. Does not implicitly {@link ProtoOAAssetListRes.verify|verify} messages.
   * @param message ProtoOAAssetListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAAssetListRes,
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
}

/** Properties of a ProtoOASymbolsListReq. */
export interface IProtoOASymbolsListReq {
  /** ProtoOASymbolsListReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolsListReq ctidTraderAccountId */
  ctidTraderAccountId: Long;
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
  public ctidTraderAccountId: Long;

  /**
   * Encodes the specified ProtoOASymbolsListReq message. Does not implicitly {@link ProtoOASymbolsListReq.verify|verify} messages.
   * @param message ProtoOASymbolsListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASymbolsListReq,
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
}

/** Properties of a ProtoOASymbolsListRes. */
export interface IProtoOASymbolsListRes {
  /** ProtoOASymbolsListRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolsListRes ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOASymbolsListRes symbol */
  symbol?: IProtoOALightSymbol[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOASymbolsListRes symbol. */
  public symbol: IProtoOALightSymbol[];

  /**
   * Encodes the specified ProtoOASymbolsListRes message. Does not implicitly {@link ProtoOASymbolsListRes.verify|verify} messages.
   * @param message ProtoOASymbolsListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASymbolsListRes,
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
}

/** Properties of a ProtoOASymbolByIdReq. */
export interface IProtoOASymbolByIdReq {
  /** ProtoOASymbolByIdReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolByIdReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOASymbolByIdReq symbolId */
  symbolId?: Long[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOASymbolByIdReq symbolId. */
  public symbolId: Long[];

  /**
   * Encodes the specified ProtoOASymbolByIdReq message. Does not implicitly {@link ProtoOASymbolByIdReq.verify|verify} messages.
   * @param message ProtoOASymbolByIdReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASymbolByIdReq,
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
}

/** Properties of a ProtoOASymbolByIdRes. */
export interface IProtoOASymbolByIdRes {
  /** ProtoOASymbolByIdRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolByIdRes ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOASymbolByIdRes symbol */
  symbol?: IProtoOASymbol[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOASymbolByIdRes symbol. */
  public symbol: IProtoOASymbol[];

  /**
   * Encodes the specified ProtoOASymbolByIdRes message. Does not implicitly {@link ProtoOASymbolByIdRes.verify|verify} messages.
   * @param message ProtoOASymbolByIdRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASymbolByIdRes,
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
}

/** Properties of a ProtoOASymbolsForConversionReq. */
export interface IProtoOASymbolsForConversionReq {
  /** ProtoOASymbolsForConversionReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolsForConversionReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOASymbolsForConversionReq firstAssetId */
  firstAssetId: Long;

  /** ProtoOASymbolsForConversionReq lastAssetId */
  lastAssetId: Long;
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
  public ctidTraderAccountId: Long;

  /** ProtoOASymbolsForConversionReq firstAssetId. */
  public firstAssetId: Long;

  /** ProtoOASymbolsForConversionReq lastAssetId. */
  public lastAssetId: Long;

  /**
   * Encodes the specified ProtoOASymbolsForConversionReq message. Does not implicitly {@link ProtoOASymbolsForConversionReq.verify|verify} messages.
   * @param message ProtoOASymbolsForConversionReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASymbolsForConversionReq,
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
}

/** Properties of a ProtoOASymbolsForConversionRes. */
export interface IProtoOASymbolsForConversionRes {
  /** ProtoOASymbolsForConversionRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolsForConversionRes ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOASymbolsForConversionRes symbol */
  symbol?: IProtoOALightSymbol[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOASymbolsForConversionRes symbol. */
  public symbol: IProtoOALightSymbol[];

  /**
   * Encodes the specified ProtoOASymbolsForConversionRes message. Does not implicitly {@link ProtoOASymbolsForConversionRes.verify|verify} messages.
   * @param message ProtoOASymbolsForConversionRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASymbolsForConversionRes,
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
}

/** Properties of a ProtoOASymbolChangedEvent. */
export interface IProtoOASymbolChangedEvent {
  /** ProtoOASymbolChangedEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolChangedEvent ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOASymbolChangedEvent symbolId */
  symbolId?: Long[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOASymbolChangedEvent symbolId. */
  public symbolId: Long[];

  /**
   * Encodes the specified ProtoOASymbolChangedEvent message. Does not implicitly {@link ProtoOASymbolChangedEvent.verify|verify} messages.
   * @param message ProtoOASymbolChangedEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASymbolChangedEvent,
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
}

/** Properties of a ProtoOAAssetClassListReq. */
export interface IProtoOAAssetClassListReq {
  /** ProtoOAAssetClassListReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAssetClassListReq ctidTraderAccountId */
  ctidTraderAccountId: Long;
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
  public ctidTraderAccountId: Long;

  /**
   * Encodes the specified ProtoOAAssetClassListReq message. Does not implicitly {@link ProtoOAAssetClassListReq.verify|verify} messages.
   * @param message ProtoOAAssetClassListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAAssetClassListReq,
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
}

/** Properties of a ProtoOAAssetClassListRes. */
export interface IProtoOAAssetClassListRes {
  /** ProtoOAAssetClassListRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAssetClassListRes ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAAssetClassListRes assetClass */
  assetClass?: IProtoOAAssetClass[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOAAssetClassListRes assetClass. */
  public assetClass: IProtoOAAssetClass[];

  /**
   * Encodes the specified ProtoOAAssetClassListRes message. Does not implicitly {@link ProtoOAAssetClassListRes.verify|verify} messages.
   * @param message ProtoOAAssetClassListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAAssetClassListRes,
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
}

/** Properties of a ProtoOATraderReq. */
export interface IProtoOATraderReq {
  /** ProtoOATraderReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOATraderReq ctidTraderAccountId */
  ctidTraderAccountId: Long;
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
  public ctidTraderAccountId: Long;

  /**
   * Encodes the specified ProtoOATraderReq message. Does not implicitly {@link ProtoOATraderReq.verify|verify} messages.
   * @param message ProtoOATraderReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOATraderReq,
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
}

/** Properties of a ProtoOATraderRes. */
export interface IProtoOATraderRes {
  /** ProtoOATraderRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOATraderRes ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOATraderRes trader */
  trader: IProtoOATrader;
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
  public ctidTraderAccountId: Long;

  /** ProtoOATraderRes trader. */
  public trader: IProtoOATrader;

  /**
   * Encodes the specified ProtoOATraderRes message. Does not implicitly {@link ProtoOATraderRes.verify|verify} messages.
   * @param message ProtoOATraderRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOATraderRes,
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
}

/** Properties of a ProtoOATraderUpdatedEvent. */
export interface IProtoOATraderUpdatedEvent {
  /** ProtoOATraderUpdatedEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOATraderUpdatedEvent ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOATraderUpdatedEvent trader */
  trader: IProtoOATrader;
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
  public ctidTraderAccountId: Long;

  /** ProtoOATraderUpdatedEvent trader. */
  public trader: IProtoOATrader;

  /**
   * Encodes the specified ProtoOATraderUpdatedEvent message. Does not implicitly {@link ProtoOATraderUpdatedEvent.verify|verify} messages.
   * @param message ProtoOATraderUpdatedEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOATraderUpdatedEvent,
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
}

/** Properties of a ProtoOAReconcileReq. */
export interface IProtoOAReconcileReq {
  /** ProtoOAReconcileReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAReconcileReq ctidTraderAccountId */
  ctidTraderAccountId: Long;
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
  public ctidTraderAccountId: Long;

  /**
   * Encodes the specified ProtoOAReconcileReq message. Does not implicitly {@link ProtoOAReconcileReq.verify|verify} messages.
   * @param message ProtoOAReconcileReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAReconcileReq,
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
}

/** Properties of a ProtoOAReconcileRes. */
export interface IProtoOAReconcileRes {
  /** ProtoOAReconcileRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAReconcileRes ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAReconcileRes position */
  position?: IProtoOAPosition[] | null;

  /** ProtoOAReconcileRes order */
  order?: IProtoOAOrder[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOAReconcileRes position. */
  public position: IProtoOAPosition[];

  /** ProtoOAReconcileRes order. */
  public order: IProtoOAOrder[];

  /**
   * Encodes the specified ProtoOAReconcileRes message. Does not implicitly {@link ProtoOAReconcileRes.verify|verify} messages.
   * @param message ProtoOAReconcileRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAReconcileRes,
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
}

/** Properties of a ProtoOAOrderErrorEvent. */
export interface IProtoOAOrderErrorEvent {
  /** ProtoOAOrderErrorEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAOrderErrorEvent ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAOrderErrorEvent errorCode */
  errorCode: string;

  /** ProtoOAOrderErrorEvent orderId */
  orderId?: Long | null;

  /** ProtoOAOrderErrorEvent positionId */
  positionId?: Long | null;

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
  public ctidTraderAccountId: Long;

  /** ProtoOAOrderErrorEvent errorCode. */
  public errorCode: string;

  /** ProtoOAOrderErrorEvent orderId. */
  public orderId: Long;

  /** ProtoOAOrderErrorEvent positionId. */
  public positionId: Long;

  /** ProtoOAOrderErrorEvent description. */
  public description: string;

  /**
   * Encodes the specified ProtoOAOrderErrorEvent message. Does not implicitly {@link ProtoOAOrderErrorEvent.verify|verify} messages.
   * @param message ProtoOAOrderErrorEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAOrderErrorEvent,
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
}

/** Properties of a ProtoOADealListReq. */
export interface IProtoOADealListReq {
  /** ProtoOADealListReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOADealListReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOADealListReq fromTimestamp */
  fromTimestamp: Long;

  /** ProtoOADealListReq toTimestamp */
  toTimestamp: Long;

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
  public ctidTraderAccountId: Long;

  /** ProtoOADealListReq fromTimestamp. */
  public fromTimestamp: Long;

  /** ProtoOADealListReq toTimestamp. */
  public toTimestamp: Long;

  /** ProtoOADealListReq maxRows. */
  public maxRows: number;

  /**
   * Encodes the specified ProtoOADealListReq message. Does not implicitly {@link ProtoOADealListReq.verify|verify} messages.
   * @param message ProtoOADealListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOADealListReq,
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
}

/** Properties of a ProtoOADealListRes. */
export interface IProtoOADealListRes {
  /** ProtoOADealListRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOADealListRes ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOADealListRes deal */
  deal?: IProtoOADeal[] | null;

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
  public ctidTraderAccountId: Long;

  /** ProtoOADealListRes deal. */
  public deal: IProtoOADeal[];

  /** ProtoOADealListRes hasMore. */
  public hasMore: boolean;

  /**
   * Encodes the specified ProtoOADealListRes message. Does not implicitly {@link ProtoOADealListRes.verify|verify} messages.
   * @param message ProtoOADealListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOADealListRes,
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
}

/** Properties of a ProtoOAExpectedMarginReq. */
export interface IProtoOAExpectedMarginReq {
  /** ProtoOAExpectedMarginReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAExpectedMarginReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAExpectedMarginReq symbolId */
  symbolId: Long;

  /** ProtoOAExpectedMarginReq volume */
  volume?: Long[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOAExpectedMarginReq symbolId. */
  public symbolId: Long;

  /** ProtoOAExpectedMarginReq volume. */
  public volume: Long[];

  /**
   * Encodes the specified ProtoOAExpectedMarginReq message. Does not implicitly {@link ProtoOAExpectedMarginReq.verify|verify} messages.
   * @param message ProtoOAExpectedMarginReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAExpectedMarginReq,
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
}

/** Properties of a ProtoOAExpectedMarginRes. */
export interface IProtoOAExpectedMarginRes {
  /** ProtoOAExpectedMarginRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAExpectedMarginRes ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAExpectedMarginRes margin */
  margin?: IProtoOAExpectedMargin[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOAExpectedMarginRes margin. */
  public margin: IProtoOAExpectedMargin[];

  /**
   * Encodes the specified ProtoOAExpectedMarginRes message. Does not implicitly {@link ProtoOAExpectedMarginRes.verify|verify} messages.
   * @param message ProtoOAExpectedMarginRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAExpectedMarginRes,
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
}

/** Properties of a ProtoOAMarginChangedEvent. */
export interface IProtoOAMarginChangedEvent {
  /** ProtoOAMarginChangedEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAMarginChangedEvent ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAMarginChangedEvent positionId */
  positionId: Long;

  /** ProtoOAMarginChangedEvent usedMargin */
  usedMargin: Long;
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
  public ctidTraderAccountId: Long;

  /** ProtoOAMarginChangedEvent positionId. */
  public positionId: Long;

  /** ProtoOAMarginChangedEvent usedMargin. */
  public usedMargin: Long;

  /**
   * Encodes the specified ProtoOAMarginChangedEvent message. Does not implicitly {@link ProtoOAMarginChangedEvent.verify|verify} messages.
   * @param message ProtoOAMarginChangedEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAMarginChangedEvent,
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
}

/** Properties of a ProtoOACashFlowHistoryListReq. */
export interface IProtoOACashFlowHistoryListReq {
  /** ProtoOACashFlowHistoryListReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOACashFlowHistoryListReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOACashFlowHistoryListReq fromTimestamp */
  fromTimestamp: Long;

  /** ProtoOACashFlowHistoryListReq toTimestamp */
  toTimestamp: Long;
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
  public ctidTraderAccountId: Long;

  /** ProtoOACashFlowHistoryListReq fromTimestamp. */
  public fromTimestamp: Long;

  /** ProtoOACashFlowHistoryListReq toTimestamp. */
  public toTimestamp: Long;

  /**
   * Encodes the specified ProtoOACashFlowHistoryListReq message. Does not implicitly {@link ProtoOACashFlowHistoryListReq.verify|verify} messages.
   * @param message ProtoOACashFlowHistoryListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOACashFlowHistoryListReq,
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
}

/** Properties of a ProtoOACashFlowHistoryListRes. */
export interface IProtoOACashFlowHistoryListRes {
  /** ProtoOACashFlowHistoryListRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOACashFlowHistoryListRes ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOACashFlowHistoryListRes depositWithdraw */
  depositWithdraw?: IProtoOADepositWithdraw[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOACashFlowHistoryListRes depositWithdraw. */
  public depositWithdraw: IProtoOADepositWithdraw[];

  /**
   * Encodes the specified ProtoOACashFlowHistoryListRes message. Does not implicitly {@link ProtoOACashFlowHistoryListRes.verify|verify} messages.
   * @param message ProtoOACashFlowHistoryListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOACashFlowHistoryListRes,
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
   * Encodes the specified ProtoOAGetAccountListByAccessTokenReq message. Does not implicitly {@link ProtoOAGetAccountListByAccessTokenReq.verify|verify} messages.
   * @param message ProtoOAGetAccountListByAccessTokenReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAGetAccountListByAccessTokenReq,
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
  ctidTraderAccount?: IProtoOACtidTraderAccount[] | null;
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
  public ctidTraderAccount: IProtoOACtidTraderAccount[];

  /**
   * Encodes the specified ProtoOAGetAccountListByAccessTokenRes message. Does not implicitly {@link ProtoOAGetAccountListByAccessTokenRes.verify|verify} messages.
   * @param message ProtoOAGetAccountListByAccessTokenRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAGetAccountListByAccessTokenRes,
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
}

/** Properties of a ProtoOASubscribeSpotsReq. */
export interface IProtoOASubscribeSpotsReq {
  /** ProtoOASubscribeSpotsReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASubscribeSpotsReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOASubscribeSpotsReq symbolId */
  symbolId?: Long[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOASubscribeSpotsReq symbolId. */
  public symbolId: Long[];

  /**
   * Encodes the specified ProtoOASubscribeSpotsReq message. Does not implicitly {@link ProtoOASubscribeSpotsReq.verify|verify} messages.
   * @param message ProtoOASubscribeSpotsReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASubscribeSpotsReq,
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
}

/** Properties of a ProtoOASubscribeSpotsRes. */
export interface IProtoOASubscribeSpotsRes {
  /** ProtoOASubscribeSpotsRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASubscribeSpotsRes ctidTraderAccountId */
  ctidTraderAccountId: Long;
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
  public ctidTraderAccountId: Long;

  /**
   * Encodes the specified ProtoOASubscribeSpotsRes message. Does not implicitly {@link ProtoOASubscribeSpotsRes.verify|verify} messages.
   * @param message ProtoOASubscribeSpotsRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASubscribeSpotsRes,
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
}

/** Properties of a ProtoOAUnsubscribeSpotsReq. */
export interface IProtoOAUnsubscribeSpotsReq {
  /** ProtoOAUnsubscribeSpotsReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAUnsubscribeSpotsReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAUnsubscribeSpotsReq symbolId */
  symbolId?: Long[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOAUnsubscribeSpotsReq symbolId. */
  public symbolId: Long[];

  /**
   * Encodes the specified ProtoOAUnsubscribeSpotsReq message. Does not implicitly {@link ProtoOAUnsubscribeSpotsReq.verify|verify} messages.
   * @param message ProtoOAUnsubscribeSpotsReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAUnsubscribeSpotsReq,
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
}

/** Properties of a ProtoOAUnsubscribeSpotsRes. */
export interface IProtoOAUnsubscribeSpotsRes {
  /** ProtoOAUnsubscribeSpotsRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAUnsubscribeSpotsRes ctidTraderAccountId */
  ctidTraderAccountId: Long;
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
  public ctidTraderAccountId: Long;

  /**
   * Encodes the specified ProtoOAUnsubscribeSpotsRes message. Does not implicitly {@link ProtoOAUnsubscribeSpotsRes.verify|verify} messages.
   * @param message ProtoOAUnsubscribeSpotsRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAUnsubscribeSpotsRes,
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
}

/** Properties of a ProtoOASpotEvent. */
export interface IProtoOASpotEvent {
  /** ProtoOASpotEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASpotEvent ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOASpotEvent symbolId */
  symbolId: Long;

  /** ProtoOASpotEvent bid */
  bid?: Long | null;

  /** ProtoOASpotEvent ask */
  ask?: Long | null;

  /** ProtoOASpotEvent trendbar */
  trendbar?: IProtoOATrendbar[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOASpotEvent symbolId. */
  public symbolId: Long;

  /** ProtoOASpotEvent bid. */
  public bid: Long;

  /** ProtoOASpotEvent ask. */
  public ask: Long;

  /** ProtoOASpotEvent trendbar. */
  public trendbar: IProtoOATrendbar[];

  /**
   * Encodes the specified ProtoOASpotEvent message. Does not implicitly {@link ProtoOASpotEvent.verify|verify} messages.
   * @param message ProtoOASpotEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASpotEvent,
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
}

/** Properties of a ProtoOASubscribeLiveTrendbarReq. */
export interface IProtoOASubscribeLiveTrendbarReq {
  /** ProtoOASubscribeLiveTrendbarReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASubscribeLiveTrendbarReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOASubscribeLiveTrendbarReq period */
  period: ProtoOATrendbarPeriod;

  /** ProtoOASubscribeLiveTrendbarReq symbolId */
  symbolId: Long;
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
  public ctidTraderAccountId: Long;

  /** ProtoOASubscribeLiveTrendbarReq period. */
  public period: ProtoOATrendbarPeriod;

  /** ProtoOASubscribeLiveTrendbarReq symbolId. */
  public symbolId: Long;

  /**
   * Encodes the specified ProtoOASubscribeLiveTrendbarReq message. Does not implicitly {@link ProtoOASubscribeLiveTrendbarReq.verify|verify} messages.
   * @param message ProtoOASubscribeLiveTrendbarReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASubscribeLiveTrendbarReq,
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
}

/** Properties of a ProtoOAUnsubscribeLiveTrendbarReq. */
export interface IProtoOAUnsubscribeLiveTrendbarReq {
  /** ProtoOAUnsubscribeLiveTrendbarReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAUnsubscribeLiveTrendbarReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAUnsubscribeLiveTrendbarReq period */
  period: ProtoOATrendbarPeriod;

  /** ProtoOAUnsubscribeLiveTrendbarReq symbolId */
  symbolId: Long;
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
  public ctidTraderAccountId: Long;

  /** ProtoOAUnsubscribeLiveTrendbarReq period. */
  public period: ProtoOATrendbarPeriod;

  /** ProtoOAUnsubscribeLiveTrendbarReq symbolId. */
  public symbolId: Long;

  /**
   * Encodes the specified ProtoOAUnsubscribeLiveTrendbarReq message. Does not implicitly {@link ProtoOAUnsubscribeLiveTrendbarReq.verify|verify} messages.
   * @param message ProtoOAUnsubscribeLiveTrendbarReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAUnsubscribeLiveTrendbarReq,
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
}

/** Properties of a ProtoOAGetTrendbarsReq. */
export interface IProtoOAGetTrendbarsReq {
  /** ProtoOAGetTrendbarsReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAGetTrendbarsReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAGetTrendbarsReq fromTimestamp */
  fromTimestamp: Long;

  /** ProtoOAGetTrendbarsReq toTimestamp */
  toTimestamp: Long;

  /** ProtoOAGetTrendbarsReq period */
  period: ProtoOATrendbarPeriod;

  /** ProtoOAGetTrendbarsReq symbolId */
  symbolId: Long;
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
  public ctidTraderAccountId: Long;

  /** ProtoOAGetTrendbarsReq fromTimestamp. */
  public fromTimestamp: Long;

  /** ProtoOAGetTrendbarsReq toTimestamp. */
  public toTimestamp: Long;

  /** ProtoOAGetTrendbarsReq period. */
  public period: ProtoOATrendbarPeriod;

  /** ProtoOAGetTrendbarsReq symbolId. */
  public symbolId: Long;

  /**
   * Encodes the specified ProtoOAGetTrendbarsReq message. Does not implicitly {@link ProtoOAGetTrendbarsReq.verify|verify} messages.
   * @param message ProtoOAGetTrendbarsReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAGetTrendbarsReq,
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
}

/** Properties of a ProtoOAGetTrendbarsRes. */
export interface IProtoOAGetTrendbarsRes {
  /** ProtoOAGetTrendbarsRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAGetTrendbarsRes ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAGetTrendbarsRes period */
  period: ProtoOATrendbarPeriod;

  /** ProtoOAGetTrendbarsRes timestamp */
  timestamp: Long;

  /** ProtoOAGetTrendbarsRes trendbar */
  trendbar?: IProtoOATrendbar[] | null;

  /** ProtoOAGetTrendbarsRes symbolId */
  symbolId?: Long | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOAGetTrendbarsRes period. */
  public period: ProtoOATrendbarPeriod;

  /** ProtoOAGetTrendbarsRes timestamp. */
  public timestamp: Long;

  /** ProtoOAGetTrendbarsRes trendbar. */
  public trendbar: IProtoOATrendbar[];

  /** ProtoOAGetTrendbarsRes symbolId. */
  public symbolId: Long;

  /**
   * Encodes the specified ProtoOAGetTrendbarsRes message. Does not implicitly {@link ProtoOAGetTrendbarsRes.verify|verify} messages.
   * @param message ProtoOAGetTrendbarsRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAGetTrendbarsRes,
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
}

/** Properties of a ProtoOAGetTickDataReq. */
export interface IProtoOAGetTickDataReq {
  /** ProtoOAGetTickDataReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAGetTickDataReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAGetTickDataReq symbolId */
  symbolId: Long;

  /** ProtoOAGetTickDataReq type */
  type: ProtoOAQuoteType;

  /** ProtoOAGetTickDataReq fromTimestamp */
  fromTimestamp: Long;

  /** ProtoOAGetTickDataReq toTimestamp */
  toTimestamp: Long;
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
  public ctidTraderAccountId: Long;

  /** ProtoOAGetTickDataReq symbolId. */
  public symbolId: Long;

  /** ProtoOAGetTickDataReq type. */
  public type: ProtoOAQuoteType;

  /** ProtoOAGetTickDataReq fromTimestamp. */
  public fromTimestamp: Long;

  /** ProtoOAGetTickDataReq toTimestamp. */
  public toTimestamp: Long;

  /**
   * Encodes the specified ProtoOAGetTickDataReq message. Does not implicitly {@link ProtoOAGetTickDataReq.verify|verify} messages.
   * @param message ProtoOAGetTickDataReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAGetTickDataReq,
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
}

/** Properties of a ProtoOAGetTickDataRes. */
export interface IProtoOAGetTickDataRes {
  /** ProtoOAGetTickDataRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAGetTickDataRes ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAGetTickDataRes tickData */
  tickData?: IProtoOATickData[] | null;

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
  public ctidTraderAccountId: Long;

  /** ProtoOAGetTickDataRes tickData. */
  public tickData: IProtoOATickData[];

  /** ProtoOAGetTickDataRes hasMore. */
  public hasMore: boolean;

  /**
   * Encodes the specified ProtoOAGetTickDataRes message. Does not implicitly {@link ProtoOAGetTickDataRes.verify|verify} messages.
   * @param message ProtoOAGetTickDataRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAGetTickDataRes,
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
   * Encodes the specified ProtoOAGetCtidProfileByTokenReq message. Does not implicitly {@link ProtoOAGetCtidProfileByTokenReq.verify|verify} messages.
   * @param message ProtoOAGetCtidProfileByTokenReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAGetCtidProfileByTokenReq,
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
}

/** Properties of a ProtoOAGetCtidProfileByTokenRes. */
export interface IProtoOAGetCtidProfileByTokenRes {
  /** ProtoOAGetCtidProfileByTokenRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAGetCtidProfileByTokenRes profile */
  profile: IProtoOACtidProfile;
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
  public profile: IProtoOACtidProfile;

  /**
   * Encodes the specified ProtoOAGetCtidProfileByTokenRes message. Does not implicitly {@link ProtoOAGetCtidProfileByTokenRes.verify|verify} messages.
   * @param message ProtoOAGetCtidProfileByTokenRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAGetCtidProfileByTokenRes,
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
}

/** Properties of a ProtoOADepthEvent. */
export interface IProtoOADepthEvent {
  /** ProtoOADepthEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOADepthEvent ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOADepthEvent symbolId */
  symbolId: Long;

  /** ProtoOADepthEvent newQuotes */
  newQuotes?: IProtoOADepthQuote[] | null;

  /** ProtoOADepthEvent deletedQuotes */
  deletedQuotes?: Long[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOADepthEvent symbolId. */
  public symbolId: Long;

  /** ProtoOADepthEvent newQuotes. */
  public newQuotes: IProtoOADepthQuote[];

  /** ProtoOADepthEvent deletedQuotes. */
  public deletedQuotes: Long[];

  /**
   * Encodes the specified ProtoOADepthEvent message. Does not implicitly {@link ProtoOADepthEvent.verify|verify} messages.
   * @param message ProtoOADepthEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOADepthEvent,
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
}

/** Properties of a ProtoOASubscribeDepthQuotesReq. */
export interface IProtoOASubscribeDepthQuotesReq {
  /** ProtoOASubscribeDepthQuotesReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASubscribeDepthQuotesReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOASubscribeDepthQuotesReq symbolId */
  symbolId?: Long[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOASubscribeDepthQuotesReq symbolId. */
  public symbolId: Long[];

  /**
   * Encodes the specified ProtoOASubscribeDepthQuotesReq message. Does not implicitly {@link ProtoOASubscribeDepthQuotesReq.verify|verify} messages.
   * @param message ProtoOASubscribeDepthQuotesReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASubscribeDepthQuotesReq,
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
}

/** Properties of a ProtoOASubscribeDepthQuotesRes. */
export interface IProtoOASubscribeDepthQuotesRes {
  /** ProtoOASubscribeDepthQuotesRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASubscribeDepthQuotesRes ctidTraderAccountId */
  ctidTraderAccountId: Long;
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
  public ctidTraderAccountId: Long;

  /**
   * Encodes the specified ProtoOASubscribeDepthQuotesRes message. Does not implicitly {@link ProtoOASubscribeDepthQuotesRes.verify|verify} messages.
   * @param message ProtoOASubscribeDepthQuotesRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASubscribeDepthQuotesRes,
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
}

/** Properties of a ProtoOAUnsubscribeDepthQuotesReq. */
export interface IProtoOAUnsubscribeDepthQuotesReq {
  /** ProtoOAUnsubscribeDepthQuotesReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAUnsubscribeDepthQuotesReq ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOAUnsubscribeDepthQuotesReq symbolId */
  symbolId?: Long[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOAUnsubscribeDepthQuotesReq symbolId. */
  public symbolId: Long[];

  /**
   * Encodes the specified ProtoOAUnsubscribeDepthQuotesReq message. Does not implicitly {@link ProtoOAUnsubscribeDepthQuotesReq.verify|verify} messages.
   * @param message ProtoOAUnsubscribeDepthQuotesReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAUnsubscribeDepthQuotesReq,
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
}

/** Properties of a ProtoOAUnsubscribeDepthQuotesRes. */
export interface IProtoOAUnsubscribeDepthQuotesRes {
  /** ProtoOAUnsubscribeDepthQuotesRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAUnsubscribeDepthQuotesRes ctidTraderAccountId */
  ctidTraderAccountId: Long;
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
  public ctidTraderAccountId: Long;

  /**
   * Encodes the specified ProtoOAUnsubscribeDepthQuotesRes message. Does not implicitly {@link ProtoOAUnsubscribeDepthQuotesRes.verify|verify} messages.
   * @param message ProtoOAUnsubscribeDepthQuotesRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAUnsubscribeDepthQuotesRes,
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
}

/** Properties of a ProtoOASymbolCategoryListReq. */
export interface IProtoOASymbolCategoryListReq {
  /** ProtoOASymbolCategoryListReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolCategoryListReq ctidTraderAccountId */
  ctidTraderAccountId: Long;
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
  public ctidTraderAccountId: Long;

  /**
   * Encodes the specified ProtoOASymbolCategoryListReq message. Does not implicitly {@link ProtoOASymbolCategoryListReq.verify|verify} messages.
   * @param message ProtoOASymbolCategoryListReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASymbolCategoryListReq,
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
}

/** Properties of a ProtoOASymbolCategoryListRes. */
export interface IProtoOASymbolCategoryListRes {
  /** ProtoOASymbolCategoryListRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOASymbolCategoryListRes ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOASymbolCategoryListRes symbolCategory */
  symbolCategory?: IProtoOASymbolCategory[] | null;
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
  public ctidTraderAccountId: Long;

  /** ProtoOASymbolCategoryListRes symbolCategory. */
  public symbolCategory: IProtoOASymbolCategory[];

  /**
   * Encodes the specified ProtoOASymbolCategoryListRes message. Does not implicitly {@link ProtoOASymbolCategoryListRes.verify|verify} messages.
   * @param message ProtoOASymbolCategoryListRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASymbolCategoryListRes,
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
}

/** Properties of a ProtoOAAccountLogoutReq. */
export interface IProtoOAAccountLogoutReq {
  /** ProtoOAAccountLogoutReq payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAccountLogoutReq ctidTraderAccountId */
  ctidTraderAccountId: Long;
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
  public ctidTraderAccountId: Long;

  /**
   * Encodes the specified ProtoOAAccountLogoutReq message. Does not implicitly {@link ProtoOAAccountLogoutReq.verify|verify} messages.
   * @param message ProtoOAAccountLogoutReq message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAAccountLogoutReq,
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
}

/** Properties of a ProtoOAAccountLogoutRes. */
export interface IProtoOAAccountLogoutRes {
  /** ProtoOAAccountLogoutRes payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAccountLogoutRes ctidTraderAccountId */
  ctidTraderAccountId: Long;
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
  public ctidTraderAccountId: Long;

  /**
   * Encodes the specified ProtoOAAccountLogoutRes message. Does not implicitly {@link ProtoOAAccountLogoutRes.verify|verify} messages.
   * @param message ProtoOAAccountLogoutRes message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAAccountLogoutRes,
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
}

/** Properties of a ProtoOAAccountDisconnectEvent. */
export interface IProtoOAAccountDisconnectEvent {
  /** ProtoOAAccountDisconnectEvent payloadType */
  payloadType?: ProtoOAPayloadType | null;

  /** ProtoOAAccountDisconnectEvent ctidTraderAccountId */
  ctidTraderAccountId: Long;
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
  public ctidTraderAccountId: Long;

  /**
   * Encodes the specified ProtoOAAccountDisconnectEvent message. Does not implicitly {@link ProtoOAAccountDisconnectEvent.verify|verify} messages.
   * @param message ProtoOAAccountDisconnectEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAAccountDisconnectEvent,
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
  assetId: Long;

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
  public assetId: Long;

  /** ProtoOAAsset name. */
  public name: string;

  /** ProtoOAAsset displayName. */
  public displayName: string;

  /**
   * Encodes the specified ProtoOAAsset message. Does not implicitly {@link ProtoOAAsset.verify|verify} messages.
   * @param message ProtoOAAsset message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAAsset,
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
}

/** Properties of a ProtoOASymbol. */
export interface IProtoOASymbol {
  /** ProtoOASymbol symbolId */
  symbolId: Long;

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
  maxVolume?: Long | null;

  /** ProtoOASymbol minVolume */
  minVolume?: Long | null;

  /** ProtoOASymbol stepVolume */
  stepVolume?: Long | null;

  /** ProtoOASymbol maxExposure */
  maxExposure?: Long | null;

  /** ProtoOASymbol schedule */
  schedule?: IProtoOAInterval[] | null;

  /** ProtoOASymbol commission */
  commission: Long;

  /** ProtoOASymbol commissionType */
  commissionType?: ProtoOACommissionType | null;

  /** ProtoOASymbol slDistance */
  slDistance?: number | null;

  /** ProtoOASymbol tpDistance */
  tpDistance?: number | null;

  /** ProtoOASymbol gslDistance */
  gslDistance?: number | null;

  /** ProtoOASymbol gslCharge */
  gslCharge?: Long | null;

  /** ProtoOASymbol distanceSetIn */
  distanceSetIn?: ProtoOASymbolDistanceType | null;

  /** ProtoOASymbol minCommission */
  minCommission?: Long | null;

  /** ProtoOASymbol minCommissionType */
  minCommissionType?: ProtoOAMinCommissionType | null;

  /** ProtoOASymbol minCommissionAsset */
  minCommissionAsset?: string | null;

  /** ProtoOASymbol rolloverCommission */
  rolloverCommission?: Long | null;

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
  public symbolId: Long;

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
  public maxVolume: Long;

  /** ProtoOASymbol minVolume. */
  public minVolume: Long;

  /** ProtoOASymbol stepVolume. */
  public stepVolume: Long;

  /** ProtoOASymbol maxExposure. */
  public maxExposure: Long;

  /** ProtoOASymbol schedule. */
  public schedule: IProtoOAInterval[];

  /** ProtoOASymbol commission. */
  public commission: Long;

  /** ProtoOASymbol commissionType. */
  public commissionType: ProtoOACommissionType;

  /** ProtoOASymbol slDistance. */
  public slDistance: number;

  /** ProtoOASymbol tpDistance. */
  public tpDistance: number;

  /** ProtoOASymbol gslDistance. */
  public gslDistance: number;

  /** ProtoOASymbol gslCharge. */
  public gslCharge: Long;

  /** ProtoOASymbol distanceSetIn. */
  public distanceSetIn: ProtoOASymbolDistanceType;

  /** ProtoOASymbol minCommission. */
  public minCommission: Long;

  /** ProtoOASymbol minCommissionType. */
  public minCommissionType: ProtoOAMinCommissionType;

  /** ProtoOASymbol minCommissionAsset. */
  public minCommissionAsset: string;

  /** ProtoOASymbol rolloverCommission. */
  public rolloverCommission: Long;

  /** ProtoOASymbol skipRolloverDays. */
  public skipRolloverDays: number;

  /** ProtoOASymbol scheduleTimeZone. */
  public scheduleTimeZone: string;

  /** ProtoOASymbol tradingMode. */
  public tradingMode: ProtoOATradingMode;

  /** ProtoOASymbol rolloverCommission3Days. */
  public rolloverCommission3Days: ProtoOADayOfWeek;

  /**
   * Encodes the specified ProtoOASymbol message. Does not implicitly {@link ProtoOASymbol.verify|verify} messages.
   * @param message ProtoOASymbol message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASymbol,
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
}

/** Properties of a ProtoOALightSymbol. */
export interface IProtoOALightSymbol {
  /** ProtoOALightSymbol symbolId */
  symbolId: Long;

  /** ProtoOALightSymbol symbolName */
  symbolName?: string | null;

  /** ProtoOALightSymbol enabled */
  enabled?: boolean | null;

  /** ProtoOALightSymbol baseAssetId */
  baseAssetId?: Long | null;

  /** ProtoOALightSymbol quoteAssetId */
  quoteAssetId?: Long | null;

  /** ProtoOALightSymbol symbolCategoryId */
  symbolCategoryId?: Long | null;

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
  public symbolId: Long;

  /** ProtoOALightSymbol symbolName. */
  public symbolName: string;

  /** ProtoOALightSymbol enabled. */
  public enabled: boolean;

  /** ProtoOALightSymbol baseAssetId. */
  public baseAssetId: Long;

  /** ProtoOALightSymbol quoteAssetId. */
  public quoteAssetId: Long;

  /** ProtoOALightSymbol symbolCategoryId. */
  public symbolCategoryId: Long;

  /** ProtoOALightSymbol description. */
  public description: string;

  /**
   * Encodes the specified ProtoOALightSymbol message. Does not implicitly {@link ProtoOALightSymbol.verify|verify} messages.
   * @param message ProtoOALightSymbol message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOALightSymbol,
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
}

/** Properties of a ProtoOASymbolCategory. */
export interface IProtoOASymbolCategory {
  /** ProtoOASymbolCategory id */
  id: Long;

  /** ProtoOASymbolCategory assetClassId */
  assetClassId: Long;

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
  public id: Long;

  /** ProtoOASymbolCategory assetClassId. */
  public assetClassId: Long;

  /** ProtoOASymbolCategory name. */
  public name: string;

  /**
   * Encodes the specified ProtoOASymbolCategory message. Does not implicitly {@link ProtoOASymbolCategory.verify|verify} messages.
   * @param message ProtoOASymbolCategory message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOASymbolCategory,
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
   * Encodes the specified ProtoOAInterval message. Does not implicitly {@link ProtoOAInterval.verify|verify} messages.
   * @param message ProtoOAInterval message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAInterval,
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
  ctidTraderAccountId: Long;

  /** ProtoOATrader balance */
  balance: Long;

  /** ProtoOATrader balanceVersion */
  balanceVersion?: Long | null;

  /** ProtoOATrader managerBonus */
  managerBonus?: Long | null;

  /** ProtoOATrader ibBonus */
  ibBonus?: Long | null;

  /** ProtoOATrader nonWithdrawableBonus */
  nonWithdrawableBonus?: Long | null;

  /** ProtoOATrader accessRights */
  accessRights?: ProtoOAAccessRights | null;

  /** ProtoOATrader depositAssetId */
  depositAssetId: Long;

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
  traderLogin?: Long | null;

  /** ProtoOATrader accountType */
  accountType?: ProtoOAAccountType | null;

  /** ProtoOATrader brokerName */
  brokerName?: string | null;

  /** ProtoOATrader registrationTimestamp */
  registrationTimestamp?: Long | null;
}

/** Trading account entity. */
export class ProtoOATrader implements IProtoOATrader {
  /**
   * Constructs a new ProtoOATrader.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOATrader);

  /** ProtoOATrader ctidTraderAccountId. */
  public ctidTraderAccountId: Long;

  /** ProtoOATrader balance. */
  public balance: Long;

  /** ProtoOATrader balanceVersion. */
  public balanceVersion: Long;

  /** ProtoOATrader managerBonus. */
  public managerBonus: Long;

  /** ProtoOATrader ibBonus. */
  public ibBonus: Long;

  /** ProtoOATrader nonWithdrawableBonus. */
  public nonWithdrawableBonus: Long;

  /** ProtoOATrader accessRights. */
  public accessRights: ProtoOAAccessRights;

  /** ProtoOATrader depositAssetId. */
  public depositAssetId: Long;

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
  public traderLogin: Long;

  /** ProtoOATrader accountType. */
  public accountType: ProtoOAAccountType;

  /** ProtoOATrader brokerName. */
  public brokerName: string;

  /** ProtoOATrader registrationTimestamp. */
  public registrationTimestamp: Long;

  /**
   * Encodes the specified ProtoOATrader message. Does not implicitly {@link ProtoOATrader.verify|verify} messages.
   * @param message ProtoOATrader message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOATrader,
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
  positionId: Long;

  /** ProtoOAPosition tradeData */
  tradeData: IProtoOATradeData;

  /** ProtoOAPosition positionStatus */
  positionStatus: ProtoOAPositionStatus;

  /** ProtoOAPosition swap */
  swap: Long;

  /** ProtoOAPosition price */
  price?: number | null;

  /** ProtoOAPosition stopLoss */
  stopLoss?: number | null;

  /** ProtoOAPosition takeProfit */
  takeProfit?: number | null;

  /** ProtoOAPosition utcLastUpdateTimestamp */
  utcLastUpdateTimestamp?: Long | null;

  /** ProtoOAPosition commission */
  commission?: Long | null;

  /** ProtoOAPosition marginRate */
  marginRate?: number | null;

  /** ProtoOAPosition mirroringCommission */
  mirroringCommission?: Long | null;

  /** ProtoOAPosition guaranteedStopLoss */
  guaranteedStopLoss?: boolean | null;

  /** ProtoOAPosition usedMargin */
  usedMargin?: Long | null;

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
  public positionId: Long;

  /** ProtoOAPosition tradeData. */
  public tradeData: IProtoOATradeData;

  /** ProtoOAPosition positionStatus. */
  public positionStatus: ProtoOAPositionStatus;

  /** ProtoOAPosition swap. */
  public swap: Long;

  /** ProtoOAPosition price. */
  public price: number;

  /** ProtoOAPosition stopLoss. */
  public stopLoss: number;

  /** ProtoOAPosition takeProfit. */
  public takeProfit: number;

  /** ProtoOAPosition utcLastUpdateTimestamp. */
  public utcLastUpdateTimestamp: Long;

  /** ProtoOAPosition commission. */
  public commission: Long;

  /** ProtoOAPosition marginRate. */
  public marginRate: number;

  /** ProtoOAPosition mirroringCommission. */
  public mirroringCommission: Long;

  /** ProtoOAPosition guaranteedStopLoss. */
  public guaranteedStopLoss: boolean;

  /** ProtoOAPosition usedMargin. */
  public usedMargin: Long;

  /** ProtoOAPosition stopLossTriggerMethod. */
  public stopLossTriggerMethod: ProtoOAOrderTriggerMethod;

  /**
   * Encodes the specified ProtoOAPosition message. Does not implicitly {@link ProtoOAPosition.verify|verify} messages.
   * @param message ProtoOAPosition message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAPosition,
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
}

/** Properties of a ProtoOATradeData. */
export interface IProtoOATradeData {
  /** ProtoOATradeData symbolId */
  symbolId: Long;

  /** ProtoOATradeData volume */
  volume: Long;

  /** ProtoOATradeData tradeSide */
  tradeSide: ProtoOATradeSide;

  /** ProtoOATradeData openTimestamp */
  openTimestamp?: Long | null;

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
  public symbolId: Long;

  /** ProtoOATradeData volume. */
  public volume: Long;

  /** ProtoOATradeData tradeSide. */
  public tradeSide: ProtoOATradeSide;

  /** ProtoOATradeData openTimestamp. */
  public openTimestamp: Long;

  /** ProtoOATradeData label. */
  public label: string;

  /** ProtoOATradeData guaranteedStopLoss. */
  public guaranteedStopLoss: boolean;

  /**
   * Encodes the specified ProtoOATradeData message. Does not implicitly {@link ProtoOATradeData.verify|verify} messages.
   * @param message ProtoOATradeData message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOATradeData,
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
}

/** Properties of a ProtoOAOrder. */
export interface IProtoOAOrder {
  /** ProtoOAOrder orderId */
  orderId: Long;

  /** ProtoOAOrder tradeData */
  tradeData: IProtoOATradeData;

  /** ProtoOAOrder orderType */
  orderType: ProtoOAOrderType;

  /** ProtoOAOrder orderStatus */
  orderStatus: ProtoOAOrderStatus;

  /** ProtoOAOrder expirationTimestamp */
  expirationTimestamp?: Long | null;

  /** ProtoOAOrder executionPrice */
  executionPrice?: number | null;

  /** ProtoOAOrder executedVolume */
  executedVolume?: Long | null;

  /** ProtoOAOrder utcLastUpdateTimestamp */
  utcLastUpdateTimestamp?: Long | null;

  /** ProtoOAOrder baseSlippagePrice */
  baseSlippagePrice?: number | null;

  /** ProtoOAOrder slippageInPoints */
  slippageInPoints?: Long | null;

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
  positionId?: Long | null;

  /** ProtoOAOrder relativeStopLoss */
  relativeStopLoss?: Long | null;

  /** ProtoOAOrder relativeTakeProfit */
  relativeTakeProfit?: Long | null;

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
  public orderId: Long;

  /** ProtoOAOrder tradeData. */
  public tradeData: IProtoOATradeData;

  /** ProtoOAOrder orderType. */
  public orderType: ProtoOAOrderType;

  /** ProtoOAOrder orderStatus. */
  public orderStatus: ProtoOAOrderStatus;

  /** ProtoOAOrder expirationTimestamp. */
  public expirationTimestamp: Long;

  /** ProtoOAOrder executionPrice. */
  public executionPrice: number;

  /** ProtoOAOrder executedVolume. */
  public executedVolume: Long;

  /** ProtoOAOrder utcLastUpdateTimestamp. */
  public utcLastUpdateTimestamp: Long;

  /** ProtoOAOrder baseSlippagePrice. */
  public baseSlippagePrice: number;

  /** ProtoOAOrder slippageInPoints. */
  public slippageInPoints: Long;

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
  public positionId: Long;

  /** ProtoOAOrder relativeStopLoss. */
  public relativeStopLoss: Long;

  /** ProtoOAOrder relativeTakeProfit. */
  public relativeTakeProfit: Long;

  /** ProtoOAOrder isStopOut. */
  public isStopOut: boolean;

  /** ProtoOAOrder trailingStopLoss. */
  public trailingStopLoss: boolean;

  /** ProtoOAOrder stopTriggerMethod. */
  public stopTriggerMethod: ProtoOAOrderTriggerMethod;

  /**
   * Encodes the specified ProtoOAOrder message. Does not implicitly {@link ProtoOAOrder.verify|verify} messages.
   * @param message ProtoOAOrder message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAOrder,
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
  bonusHistoryId: Long;

  /** ProtoOABonusDepositWithdraw managerBonus */
  managerBonus: Long;

  /** ProtoOABonusDepositWithdraw managerDelta */
  managerDelta: Long;

  /** ProtoOABonusDepositWithdraw ibBonus */
  ibBonus: Long;

  /** ProtoOABonusDepositWithdraw ibDelta */
  ibDelta: Long;

  /** ProtoOABonusDepositWithdraw changeBonusTimestamp */
  changeBonusTimestamp: Long;

  /** ProtoOABonusDepositWithdraw externalNote */
  externalNote?: string | null;

  /** ProtoOABonusDepositWithdraw introducingBrokerId */
  introducingBrokerId?: Long | null;
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
  public bonusHistoryId: Long;

  /** ProtoOABonusDepositWithdraw managerBonus. */
  public managerBonus: Long;

  /** ProtoOABonusDepositWithdraw managerDelta. */
  public managerDelta: Long;

  /** ProtoOABonusDepositWithdraw ibBonus. */
  public ibBonus: Long;

  /** ProtoOABonusDepositWithdraw ibDelta. */
  public ibDelta: Long;

  /** ProtoOABonusDepositWithdraw changeBonusTimestamp. */
  public changeBonusTimestamp: Long;

  /** ProtoOABonusDepositWithdraw externalNote. */
  public externalNote: string;

  /** ProtoOABonusDepositWithdraw introducingBrokerId. */
  public introducingBrokerId: Long;

  /**
   * Encodes the specified ProtoOABonusDepositWithdraw message. Does not implicitly {@link ProtoOABonusDepositWithdraw.verify|verify} messages.
   * @param message ProtoOABonusDepositWithdraw message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOABonusDepositWithdraw,
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
  balanceHistoryId: Long;

  /** ProtoOADepositWithdraw balance */
  balance: Long;

  /** ProtoOADepositWithdraw delta */
  delta: Long;

  /** ProtoOADepositWithdraw changeBalanceTimestamp */
  changeBalanceTimestamp: Long;

  /** ProtoOADepositWithdraw externalNote */
  externalNote?: string | null;

  /** ProtoOADepositWithdraw balanceVersion */
  balanceVersion?: Long | null;

  /** ProtoOADepositWithdraw equity */
  equity?: Long | null;
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
  public balanceHistoryId: Long;

  /** ProtoOADepositWithdraw balance. */
  public balance: Long;

  /** ProtoOADepositWithdraw delta. */
  public delta: Long;

  /** ProtoOADepositWithdraw changeBalanceTimestamp. */
  public changeBalanceTimestamp: Long;

  /** ProtoOADepositWithdraw externalNote. */
  public externalNote: string;

  /** ProtoOADepositWithdraw balanceVersion. */
  public balanceVersion: Long;

  /** ProtoOADepositWithdraw equity. */
  public equity: Long;

  /**
   * Encodes the specified ProtoOADepositWithdraw message. Does not implicitly {@link ProtoOADepositWithdraw.verify|verify} messages.
   * @param message ProtoOADepositWithdraw message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOADepositWithdraw,
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
  dealId: Long;

  /** ProtoOADeal orderId */
  orderId: Long;

  /** ProtoOADeal positionId */
  positionId: Long;

  /** ProtoOADeal volume */
  volume: Long;

  /** ProtoOADeal filledVolume */
  filledVolume: Long;

  /** ProtoOADeal symbolId */
  symbolId: Long;

  /** ProtoOADeal createTimestamp */
  createTimestamp: Long;

  /** ProtoOADeal executionTimestamp */
  executionTimestamp: Long;

  /** ProtoOADeal utcLastUpdateTimestamp */
  utcLastUpdateTimestamp?: Long | null;

  /** ProtoOADeal executionPrice */
  executionPrice?: number | null;

  /** ProtoOADeal tradeSide */
  tradeSide: ProtoOATradeSide;

  /** ProtoOADeal dealStatus */
  dealStatus: ProtoOADealStatus;

  /** ProtoOADeal marginRate */
  marginRate?: number | null;

  /** ProtoOADeal commission */
  commission?: Long | null;

  /** ProtoOADeal baseToUsdConversionRate */
  baseToUsdConversionRate?: number | null;

  /** ProtoOADeal closePositionDetail */
  closePositionDetail?: IProtoOAClosePositionDetail | null;
}

/** Execution entity. */
export class ProtoOADeal implements IProtoOADeal {
  /**
   * Constructs a new ProtoOADeal.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOADeal);

  /** ProtoOADeal dealId. */
  public dealId: Long;

  /** ProtoOADeal orderId. */
  public orderId: Long;

  /** ProtoOADeal positionId. */
  public positionId: Long;

  /** ProtoOADeal volume. */
  public volume: Long;

  /** ProtoOADeal filledVolume. */
  public filledVolume: Long;

  /** ProtoOADeal symbolId. */
  public symbolId: Long;

  /** ProtoOADeal createTimestamp. */
  public createTimestamp: Long;

  /** ProtoOADeal executionTimestamp. */
  public executionTimestamp: Long;

  /** ProtoOADeal utcLastUpdateTimestamp. */
  public utcLastUpdateTimestamp: Long;

  /** ProtoOADeal executionPrice. */
  public executionPrice: number;

  /** ProtoOADeal tradeSide. */
  public tradeSide: ProtoOATradeSide;

  /** ProtoOADeal dealStatus. */
  public dealStatus: ProtoOADealStatus;

  /** ProtoOADeal marginRate. */
  public marginRate: number;

  /** ProtoOADeal commission. */
  public commission: Long;

  /** ProtoOADeal baseToUsdConversionRate. */
  public baseToUsdConversionRate: number;

  /** ProtoOADeal closePositionDetail. */
  public closePositionDetail?: IProtoOAClosePositionDetail | null;

  /**
   * Encodes the specified ProtoOADeal message. Does not implicitly {@link ProtoOADeal.verify|verify} messages.
   * @param message ProtoOADeal message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOADeal,
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
  grossProfit: Long;

  /** ProtoOAClosePositionDetail swap */
  swap: Long;

  /** ProtoOAClosePositionDetail commission */
  commission: Long;

  /** ProtoOAClosePositionDetail balance */
  balance: Long;

  /** ProtoOAClosePositionDetail quoteToDepositConversionRate */
  quoteToDepositConversionRate?: number | null;

  /** ProtoOAClosePositionDetail closedVolume */
  closedVolume?: Long | null;

  /** ProtoOAClosePositionDetail balanceVersion */
  balanceVersion?: Long | null;
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
  public grossProfit: Long;

  /** ProtoOAClosePositionDetail swap. */
  public swap: Long;

  /** ProtoOAClosePositionDetail commission. */
  public commission: Long;

  /** ProtoOAClosePositionDetail balance. */
  public balance: Long;

  /** ProtoOAClosePositionDetail quoteToDepositConversionRate. */
  public quoteToDepositConversionRate: number;

  /** ProtoOAClosePositionDetail closedVolume. */
  public closedVolume: Long;

  /** ProtoOAClosePositionDetail balanceVersion. */
  public balanceVersion: Long;

  /**
   * Encodes the specified ProtoOAClosePositionDetail message. Does not implicitly {@link ProtoOAClosePositionDetail.verify|verify} messages.
   * @param message ProtoOAClosePositionDetail message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAClosePositionDetail,
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
  volume: Long;

  /** ProtoOATrendbar period */
  period?: ProtoOATrendbarPeriod | null;

  /** ProtoOATrendbar low */
  low?: Long | null;

  /** ProtoOATrendbar deltaOpen */
  deltaOpen?: Long | null;

  /** ProtoOATrendbar deltaClose */
  deltaClose?: Long | null;

  /** ProtoOATrendbar deltaHigh */
  deltaHigh?: Long | null;

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
  public volume: Long;

  /** ProtoOATrendbar period. */
  public period: ProtoOATrendbarPeriod;

  /** ProtoOATrendbar low. */
  public low: Long;

  /** ProtoOATrendbar deltaOpen. */
  public deltaOpen: Long;

  /** ProtoOATrendbar deltaClose. */
  public deltaClose: Long;

  /** ProtoOATrendbar deltaHigh. */
  public deltaHigh: Long;

  /** ProtoOATrendbar utcTimestampInMinutes. */
  public utcTimestampInMinutes: number;

  /**
   * Encodes the specified ProtoOATrendbar message. Does not implicitly {@link ProtoOATrendbar.verify|verify} messages.
   * @param message ProtoOATrendbar message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOATrendbar,
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
}

/** Properties of a ProtoOAExpectedMargin. */
export interface IProtoOAExpectedMargin {
  /** ProtoOAExpectedMargin volume */
  volume: Long;

  /** ProtoOAExpectedMargin buyMargin */
  buyMargin: Long;

  /** ProtoOAExpectedMargin sellMargin */
  sellMargin: Long;
}

/** Expected margin computation entity. */
export class ProtoOAExpectedMargin implements IProtoOAExpectedMargin {
  /**
   * Constructs a new ProtoOAExpectedMargin.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOAExpectedMargin);

  /** ProtoOAExpectedMargin volume. */
  public volume: Long;

  /** ProtoOAExpectedMargin buyMargin. */
  public buyMargin: Long;

  /** ProtoOAExpectedMargin sellMargin. */
  public sellMargin: Long;

  /**
   * Encodes the specified ProtoOAExpectedMargin message. Does not implicitly {@link ProtoOAExpectedMargin.verify|verify} messages.
   * @param message ProtoOAExpectedMargin message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAExpectedMargin,
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
}

/** Price quote type. */
export enum ProtoOAQuoteType {
  BID = 1,
  ASK = 2
}

/** Properties of a ProtoOATickData. */
export interface IProtoOATickData {
  /** ProtoOATickData timestamp */
  timestamp: Long;

  /** ProtoOATickData tick */
  tick: Long;
}

/** Historical tick data type. */
export class ProtoOATickData implements IProtoOATickData {
  /**
   * Constructs a new ProtoOATickData.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOATickData);

  /** ProtoOATickData timestamp. */
  public timestamp: Long;

  /** ProtoOATickData tick. */
  public tick: Long;

  /**
   * Encodes the specified ProtoOATickData message. Does not implicitly {@link ProtoOATickData.verify|verify} messages.
   * @param message ProtoOATickData message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOATickData,
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
}

/** Open API application permission in regards to token ENUM. */
export enum ProtoOAClientPermissionScope {
  SCOPE_VIEW = 0,
  SCOPE_TRADE = 1
}

/** Properties of a ProtoOACtidProfile. */
export interface IProtoOACtidProfile {
  /** ProtoOACtidProfile userId */
  userId: Long;
}

/** Trader profile entity. Empty due to GDPR. */
export class ProtoOACtidProfile implements IProtoOACtidProfile {
  /**
   * Constructs a new ProtoOACtidProfile.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOACtidProfile);

  /** ProtoOACtidProfile userId. */
  public userId: Long;

  /**
   * Encodes the specified ProtoOACtidProfile message. Does not implicitly {@link ProtoOACtidProfile.verify|verify} messages.
   * @param message ProtoOACtidProfile message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOACtidProfile,
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
}

/** Properties of a ProtoOACtidTraderAccount. */
export interface IProtoOACtidTraderAccount {
  /** ProtoOACtidTraderAccount ctidTraderAccountId */
  ctidTraderAccountId: Long;

  /** ProtoOACtidTraderAccount isLive */
  isLive?: boolean | null;

  /** ProtoOACtidTraderAccount traderLogin */
  traderLogin?: Long | null;
}

/** Trader account entity. */
export class ProtoOACtidTraderAccount implements IProtoOACtidTraderAccount {
  /**
   * Constructs a new ProtoOACtidTraderAccount.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOACtidTraderAccount);

  /** ProtoOACtidTraderAccount ctidTraderAccountId. */
  public ctidTraderAccountId: Long;

  /** ProtoOACtidTraderAccount isLive. */
  public isLive: boolean;

  /** ProtoOACtidTraderAccount traderLogin. */
  public traderLogin: Long;

  /**
   * Encodes the specified ProtoOACtidTraderAccount message. Does not implicitly {@link ProtoOACtidTraderAccount.verify|verify} messages.
   * @param message ProtoOACtidTraderAccount message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOACtidTraderAccount,
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
}

/** Properties of a ProtoOAAssetClass. */
export interface IProtoOAAssetClass {
  /** ProtoOAAssetClass id */
  id?: Long | null;

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
  public id: Long;

  /** ProtoOAAssetClass name. */
  public name: string;

  /**
   * Encodes the specified ProtoOAAssetClass message. Does not implicitly {@link ProtoOAAssetClass.verify|verify} messages.
   * @param message ProtoOAAssetClass message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOAAssetClass,
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
}

/** Properties of a ProtoOADepthQuote. */
export interface IProtoOADepthQuote {
  /** ProtoOADepthQuote id */
  id: Long;

  /** ProtoOADepthQuote size */
  size: Long;

  /** ProtoOADepthQuote bid */
  bid?: Long | null;

  /** ProtoOADepthQuote ask */
  ask?: Long | null;
}

/** Depth of market entity. */
export class ProtoOADepthQuote implements IProtoOADepthQuote {
  /**
   * Constructs a new ProtoOADepthQuote.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProtoOADepthQuote);

  /** ProtoOADepthQuote id. */
  public id: Long;

  /** ProtoOADepthQuote size. */
  public size: Long;

  /** ProtoOADepthQuote bid. */
  public bid: Long;

  /** ProtoOADepthQuote ask. */
  public ask: Long;

  /**
   * Encodes the specified ProtoOADepthQuote message. Does not implicitly {@link ProtoOADepthQuote.verify|verify} messages.
   * @param message ProtoOADepthQuote message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IProtoOADepthQuote,
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
}

/** Error code ENUM. */
export enum ProtoOAErrorCode {
  OA_AUTH_TOKEN_EXPIRED = 1,
  ACCOUNT_NOT_AUTHORIZED = 2,
  INCORRECT_BOUNDARIES = 35,
  CONNECTIONS_LIMIT_EXCEEDED = 67
}
