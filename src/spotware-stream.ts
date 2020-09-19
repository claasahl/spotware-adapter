import tls from "tls";
import { Transform, TransformCallback } from "stream";
import { read } from "./readProtoMessages";
import debug from "debug";
import {
  ProtoPayloadType,
  ProtoOAPayloadType,
} from "@claasahl/spotware-protobuf";

import * as $ from "./spotware-messages";
import { write } from "./writeProtoMessages";

const spotware = debug("spotware");
const input = spotware.extend("input");
const inputHuman = input.extend("human");
const output = spotware.extend("output");
const outputHuman = output.extend("human");

function logInput(msg: $.ProtoMessages) {
  spotware.extend(`${msg.payloadType}`)("%j", {
    payload: msg.payload,
    clientMsgId: msg.clientMsgId,
  });
  input("%j", {
    payloadType: msg.payloadType,
    payload: msg.payload,
    clientMsgId: msg.clientMsgId,
  });
  const payloadTypeText =
    ProtoPayloadType[msg.payloadType] || ProtoOAPayloadType[msg.payloadType];
  if (payloadTypeText) {
    spotware.extend(payloadTypeText)("%j", {
      payload: msg.payload,
      clientMsgId: msg.clientMsgId,
    });
    inputHuman("%j", {
      payloadType: payloadTypeText,
      payload: msg.payload,
      clientMsgId: msg.clientMsgId,
    });
  }
}

function logOutput(msg: $.ProtoMessages) {
  spotware.extend(`${msg.payloadType}`)("%j", {
    payload: msg.payload,
    clientMsgId: msg.clientMsgId,
  });
  output("%j", {
    payloadType: msg.payloadType,
    payload: msg.payload,
    clientMsgId: msg.clientMsgId,
  });
  const payloadTypeText =
    ProtoPayloadType[msg.payloadType] || ProtoOAPayloadType[msg.payloadType];
  if (payloadTypeText) {
    spotware.extend(payloadTypeText)("%j", {
      payload: msg.payload,
      clientMsgId: msg.clientMsgId,
    });
    outputHuman("%j", {
      payloadType: payloadTypeText,
      payload: msg.payload,
      clientMsgId: msg.clientMsgId,
    });
  }
}

export declare interface SpotwareReadableStream extends Transform {
  addListener(event: "close", listener: () => void): this;
  addListener(
    event: "data",
    listener: (message: $.ProtoMessages) => void
  ): this;
  addListener(event: "end", listener: () => void): this;
  addListener(event: "error", listener: (err: Error) => void): this;
  addListener(event: "pause", listener: () => void): this;
  addListener(event: "readable", listener: () => void): this;
  addListener(event: "resume", listener: () => void): this;
  addListener(event: string | symbol, listener: (...args: any[]) => void): this;

  emit(event: "close"): boolean;
  emit(event: "data", message: $.ProtoMessages): boolean;
  emit(event: "end"): boolean;
  emit(event: "error", err: Error): boolean;
  emit(event: "pause"): boolean;
  emit(event: "readable"): boolean;
  emit(event: "resume"): boolean;
  emit(event: string | symbol, ...args: any[]): boolean;

  on(event: "close", listener: () => void): this;
  on(event: "data", listener: (message: $.ProtoMessages) => void): this;
  on(event: "end", listener: () => void): this;
  on(event: "error", listener: (err: Error) => void): this;
  on(event: "pause", listener: () => void): this;
  on(event: "readable", listener: () => void): this;
  on(event: "resume", listener: () => void): this;
  on(event: string | symbol, listener: (...args: any[]) => void): this;

  once(event: "close", listener: () => void): this;
  once(event: "data", listener: (message: $.ProtoMessages) => void): this;
  once(event: "end", listener: () => void): this;
  once(event: "error", listener: (err: Error) => void): this;
  once(event: "pause", listener: () => void): this;
  once(event: "readable", listener: () => void): this;
  once(event: "resume", listener: () => void): this;
  once(event: string | symbol, listener: (...args: any[]) => void): this;

  prependListener(event: "close", listener: () => void): this;
  prependListener(
    event: "data",
    listener: (message: $.ProtoMessages) => void
  ): this;
  prependListener(event: "end", listener: () => void): this;
  prependListener(event: "error", listener: (err: Error) => void): this;
  prependListener(event: "pause", listener: () => void): this;
  prependListener(event: "readable", listener: () => void): this;
  prependListener(event: "resume", listener: () => void): this;
  prependListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this;

  prependOnceListener(event: "close", listener: () => void): this;
  prependOnceListener(
    event: "data",
    listener: (message: $.ProtoMessages) => void
  ): this;
  prependOnceListener(event: "end", listener: () => void): this;
  prependOnceListener(event: "error", listener: (err: Error) => void): this;
  prependOnceListener(event: "pause", listener: () => void): this;
  prependOnceListener(event: "readable", listener: () => void): this;
  prependOnceListener(event: "resume", listener: () => void): this;
  prependOnceListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this;

  removeListener(event: "close", listener: () => void): this;
  removeListener(
    event: "data",
    listener: (message: $.ProtoMessages) => void
  ): this;
  removeListener(event: "end", listener: () => void): this;
  removeListener(event: "error", listener: (err: Error) => void): this;
  removeListener(event: "pause", listener: () => void): this;
  removeListener(event: "readable", listener: () => void): this;
  removeListener(event: "resume", listener: () => void): this;
  removeListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this;
}

export class SpotwareReadableStream extends Transform {
  constructor() {
    super({ readableObjectMode: true, defaultEncoding: "binary" });
  }

  _transform(
    chunk: any,
    _encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    if (!Buffer.isBuffer(chunk)) {
      return;
    }
    const msg = read(chunk);
    logInput(msg);
    callback(null, msg);
  }
}

export declare interface SpotwareWritableStream extends Transform {
  write(
    message: $.ProtoMessages,
    encoding?: string,
    cb?: (error: Error | null | undefined) => void
  ): boolean;
  write(
    message: $.ProtoMessages,
    cb?: (error: Error | null | undefined) => void
  ): boolean;
}

export class SpotwareWritableStream extends Transform {
  constructor() {
    super({ writableObjectMode: true, defaultEncoding: "binary" });
  }

  _transform(
    chunk: any,
    _encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    const msg = chunk as $.ProtoMessages;
    logOutput(msg);
    const data = write(msg);
    callback(null, data);
  }
}

function isError(msg: $.ProtoMessages): msg is $.ProtoMessage50 {
  return msg.payloadType === ProtoPayloadType.ERROR_RES;
}

function isOAError(msg: $.ProtoMessages): msg is $.ProtoMessage2142 {
  return msg.payloadType === ProtoOAPayloadType.PROTO_OA_ERROR_RES;
}

function isOrderError(msg: $.ProtoMessages): msg is $.ProtoMessage2132 {
  return msg.payloadType === ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT;
}

function toError(
  msg: $.ProtoMessage50 | $.ProtoMessage2142 | $.ProtoMessage2132
): Error {
  const { errorCode, description } = msg.payload;
  return new Error(`${errorCode}, ${description}`);
}

function testResponse<T extends $.ProtoMessages>(
  payloadType: T["payloadType"]
) {
  return (msg: $.ProtoMessages): msg is T => {
    return msg.payloadType === payloadType;
  };
}

function request<REQ extends $.ProtoMessages, RES extends $.ProtoMessages>(
  reqPayloadType: REQ["payloadType"],
  resPayloadType: RES["payloadType"],
  writable: SpotwareWritableStream,
  readable: SpotwareReadableStream
) {
  return (
    req: REQ["payload"],
    cb: (err?: Error, res?: RES["payload"]) => void
  ) => {
    const clientMsgId = undefined;
    const msg: any = {
      // fixme
      payloadType: reqPayloadType,
      payload: req,
      clientMsgId,
    };
    const isResponse = testResponse<RES>(resPayloadType);
    writable.write(msg);
    const listener = (msg: $.ProtoMessages) => {
      if (msg.clientMsgId !== clientMsgId) {
        return;
      }
      if (isResponse(msg)) {
        cb(undefined, msg.payload);
        readable.off("data", listener);
      } else if (isError(msg)) {
        const err = toError(msg);
        cb(err);
        readable.off("data", listener);
      } else if (isOAError(msg)) {
        const err = toError(msg);
        cb(err);
        readable.off("data", listener);
      } else if (isOrderError(msg)) {
        const err = toError(msg);
        cb(err);
        readable.off("data", listener);
      }
    };
    readable.on("data", listener);
  };
}

function helpers(
  writable: SpotwareWritableStream,
  readable: SpotwareReadableStream
) {
  return {
    applicationAuthReq: request<$.ProtoMessage2100, $.ProtoMessage2101>(
      ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ,
      ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES,
      writable,
      readable
    ),
    accountAuthReq: request<$.ProtoMessage2102, $.ProtoMessage2103>(
      ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ,
      ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES,
      writable,
      readable
    ),
    versionReq: request<$.ProtoMessage2104, $.ProtoMessage2105>(
      ProtoOAPayloadType.PROTO_OA_VERSION_REQ,
      ProtoOAPayloadType.PROTO_OA_VERSION_RES,
      writable,
      readable
    ),
    newOrderReq: request<$.ProtoMessage2106, $.ProtoMessage2126>(
      ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ,
      ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
      writable,
      readable
    ),
    // PROTO_OA_TRAILING_SL_CHANGED_EVENT = 2107,
    cancelOrderReq: request<$.ProtoMessage2108, $.ProtoMessage2126>(
      ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ,
      ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
      writable,
      readable
    ),
    amendOrderReq: request<$.ProtoMessage2109, $.ProtoMessage2126>(
      ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ,
      ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
      writable,
      readable
    ),
    amendPositionSltpReq: request<$.ProtoMessage2110, $.ProtoMessage2126>(
      ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ,
      ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
      writable,
      readable
    ),
    closePositionReq: request<$.ProtoMessage2111, $.ProtoMessage2126>(
      ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ,
      ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
      writable,
      readable
    ),
    assetListReq: request<$.ProtoMessage2112, $.ProtoMessage2113>(
      ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ,
      ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES,
      writable,
      readable
    ),
    symbolsListReq: request<$.ProtoMessage2114, $.ProtoMessage2115>(
      ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ,
      ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES,
      writable,
      readable
    ),
    symbolByIdReq: request<$.ProtoMessage2116, $.ProtoMessage2117>(
      ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ,
      ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES,
      writable,
      readable
    ),
    symbolsForConversionReq: request<$.ProtoMessage2118, $.ProtoMessage2119>(
      ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ,
      ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES,
      writable,
      readable
    ),
    // PROTO_OA_SYMBOL_CHANGED_EVENT = 2120,
    traderReq: request<$.ProtoMessage2121, $.ProtoMessage2122>(
      ProtoOAPayloadType.PROTO_OA_TRADER_REQ,
      ProtoOAPayloadType.PROTO_OA_TRADER_RES,
      writable,
      readable
    ),
    // PROTO_OA_TRADER_UPDATE_EVENT = 2123,
    reconcileReq: request<$.ProtoMessage2124, $.ProtoMessage2125>(
      ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ,
      ProtoOAPayloadType.PROTO_OA_RECONCILE_RES,
      writable,
      readable
    ),
    // PROTO_OA_EXECUTION_EVENT = 2126,
    subscribeSpotsReq: request<$.ProtoMessage2127, $.ProtoMessage2128>(
      ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ,
      ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES,
      writable,
      readable
    ),
    unsubscribeSpotReq: request<$.ProtoMessage2129, $.ProtoMessage2130>(
      ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
      ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
      writable,
      readable
    ),
    // PROTO_OA_SPOT_EVENT = 2131,
    // PROTO_OA_ORDER_ERROR_EVENT = 2132,
    dealListReq: request<$.ProtoMessage2133, $.ProtoMessage2134>(
      ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ,
      ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES,
      writable,
      readable
    ),
    subscribeLiveTrendbarReq: request<$.ProtoMessage2135, $.ProtoMessage2165>(
      ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ,
      ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES,
      writable,
      readable
    ),
    unsubscribeLiveTrendbarReq: request<$.ProtoMessage2136, $.ProtoMessage2166>(
      ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ,
      ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES,
      writable,
      readable
    ),

    getTrendbarsReq: request<$.ProtoMessage2137, $.ProtoMessage2138>(
      ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ,
      ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES,
      writable,
      readable
    ),
    expectedMarginReq: request<$.ProtoMessage2139, $.ProtoMessage2140>(
      ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ,
      ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES,
      writable,
      readable
    ),
    // PROTO_OA_MARGIN_CHANGED_EVENT = 2141,
    // PROTO_OA_ERROR_RES = 2142,
    cashFlowHistoryReq: request<$.ProtoMessage2143, $.ProtoMessage2144>(
      ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ,
      ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES,
      writable,
      readable
    ),
    getTickdataReq: request<$.ProtoMessage2145, $.ProtoMessage2146>(
      ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ,
      ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES,
      writable,
      readable
    ),
    // PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT = 2147,
    // PROTO_OA_CLIENT_DISCONNECT_EVENT = 2148,
    accountsByAccessTokenReq: request<$.ProtoMessage2149, $.ProtoMessage2150>(
      ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
      ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
      writable,
      readable
    ),
    getCtidProfileByTokenReq: request<$.ProtoMessage2151, $.ProtoMessage2152>(
      ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ,
      ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES,
      writable,
      readable
    ),

    assetClassListReq: request<$.ProtoMessage2153, $.ProtoMessage2154>(
      ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ,
      ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES,
      writable,
      readable
    ),
    // PROTO_OA_DEPTH_EVENT = 2155,
    subscribeDepthQuotesReq: request<$.ProtoMessage2156, $.ProtoMessage2157>(
      ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ,
      ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES,
      writable,
      readable
    ),
    unsubscribeDepthQuotesReq: request<$.ProtoMessage2158, $.ProtoMessage2159>(
      ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ,
      ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES,
      writable,
      readable
    ),
    symbolCategoryReq: request<$.ProtoMessage2160, $.ProtoMessage2161>(
      ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ,
      ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES,
      writable,
      readable
    ),
    accountLogoutReq: request<$.ProtoMessage2162, $.ProtoMessage2163>(
      ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ,
      ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES,
      writable,
      readable
    ),
    // PROTO_OA_ACCOUNT_DISCONNECT_EVENT = 2164,
    marginCallListReq: request<$.ProtoMessage2167, $.ProtoMessage2168>(
      ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_REQ,
      ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_RES,
      writable,
      readable
    ),
    marginCallUpdateReq: request<$.ProtoMessage2169, $.ProtoMessage2170>(
      ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ,
      ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES,
      writable,
      readable
    ),
    // PROTO_OA_MARGIN_CALL_UPDATE_EVENT = 2171,
    // PROTO_OA_MARGIN_CALL_TRIGGER_EVENT = 2172,
    refreshTokenReq: request<$.ProtoMessage2173, $.ProtoMessage2174>(
      ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_REQ,
      ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_RES,
      writable,
      readable
    ),
  };
}

export function connect(
  port: number,
  host: string,
  options?: tls.ConnectionOptions
) {
  const socket = tls
    .connect(port, host, options)
    .setEncoding("binary")
    .setDefaultEncoding("binary");

  const readable = socket.pipe(new SpotwareReadableStream());
  const writable = new SpotwareWritableStream();
  writable.pipe(socket);

  return { readable, writable, ...helpers(writable, readable) };
}
