import tls from "tls";
import { Duplex } from "stream";
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

export declare interface SpotwareClientStream extends Duplex {
  read(size?: number): $.ProtoMessages;
  unshift(message: $.ProtoMessages, encoding?: BufferEncoding): void;
  push(message: $.ProtoMessages, encoding?: string): boolean;
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

  write(
    message: $.ProtoMessages,
    encoding?: string,
    cb?: (error: Error | null | undefined) => void
  ): boolean;
  write(
    message: $.ProtoMessages,
    cb?: (error: Error | null | undefined) => void
  ): boolean;
  end(cb?: () => void): void;
  end(message: $.ProtoMessages, cb?: () => void): void;
  end(message: $.ProtoMessages, encoding?: string, cb?: () => void): void;
}

export class SpotwareClientStream extends Duplex {
  socket;
  listening = false;
  constructor(port: number, host: string) {
    super({ allowHalfOpen: false, objectMode: true });
    this.socket = tls.connect(port, host);
    this.socket.on("error", (err) => this.destroy(err));
  }

  _read(_size: number): void {
    if (!this.listening) {
      const listener = (chunk: Buffer) => {
        if (chunk) {
          const msg = read(chunk);
          logInput(msg);
          const bla = this.push(msg);
          if (!bla) {
            console.log("stopping");
            this.listening = false;
            this.socket.off("data", listener);
          }
        }
      };
      console.log("starting");
      this.listening = true;
      this.socket.on("data", listener);
    }
  }

  _write(
    chunk: any,
    _encoding: string,
    callback: (error?: Error | null) => void
  ): void {
    const msg = chunk as $.ProtoMessages;
    logOutput(msg);
    const data = write(msg);
    this.socket.write(data, callback);
  }

  PROTO_MESSAGE(
    payload: $.ProtoMessage5["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      { payloadType: ProtoPayloadType.PROTO_MESSAGE, payload, clientMsgId },
      cb
    );
  }
  // ERROR_RES(
  //   payload: $.ProtoMessage50["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     { payloadType: ProtoPayloadType.ERROR_RES, payload, clientMsgId },
  //     cb
  //   );
  // }
  HEARTBEAT_EVENT(
    payload: $.ProtoMessage51["payload"] = {},
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      { payloadType: ProtoPayloadType.HEARTBEAT_EVENT, payload, clientMsgId },
      cb
    );
  }
  OA_APPLICATION_AUTH_REQ(
    payload: $.ProtoMessage2100["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_APPLICATION_AUTH_RES(
  //   payload: $.ProtoMessage2101["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_ACCOUNT_AUTH_REQ(
    payload: $.ProtoMessage2102["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_ACCOUNT_AUTH_RES(
  //   payload: $.ProtoMessage2103["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_VERSION_REQ(
    payload: $.ProtoMessage2104["payload"] = {},
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_VERSION_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_VERSION_RES(
  //   payload: $.ProtoMessage2105["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_VERSION_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_NEW_ORDER_REQ(
    payload: $.ProtoMessage2106["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_TRAILING_SL_CHANGED_EVENT(
  //   payload: $.ProtoMessage2107["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_CANCEL_ORDER_REQ(
    payload: $.ProtoMessage2108["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  OA_AMEND_ORDER_REQ(
    payload: $.ProtoMessage2109["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  OA_AMEND_POSITION_SLTP_REQ(
    payload: $.ProtoMessage2110["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  OA_CLOSE_POSITION_REQ(
    payload: $.ProtoMessage2111["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  OA_ASSET_LIST_REQ(
    payload: $.ProtoMessage2112["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_ASSET_LIST_RES(
  //   payload: $.ProtoMessage2113["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_SYMBOLS_LIST_REQ(
    payload: $.ProtoMessage2114["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_SYMBOLS_LIST_RES(
  //   payload: $.ProtoMessage2115["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_SYMBOL_BY_ID_REQ(
    payload: $.ProtoMessage2116["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_SYMBOL_BY_ID_RES(
  //   payload: $.ProtoMessage2117["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_SYMBOLS_FOR_CONVERSION_REQ(
    payload: $.ProtoMessage2118["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_SYMBOLS_FOR_CONVERSION_RES(
  //   payload: $.ProtoMessage2119["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  // OA_SYMBOL_CHANGED_EVENT(
  //   payload: $.ProtoMessage2120["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_TRADER_REQ(
    payload: $.ProtoMessage2121["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_TRADER_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_TRADER_RES(
  //   payload: $.ProtoMessage2122["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_TRADER_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  // OA_TRADER_UPDATE_EVENT(
  //   payload: $.ProtoMessage2123["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_RECONCILE_REQ(
    payload: $.ProtoMessage2124["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_RECONCILE_RES(
  //   payload: $.ProtoMessage2125["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_RECONCILE_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  // OA_EXECUTION_EVENT(
  //   payload: $.ProtoMessage2126["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_SUBSCRIBE_SPOTS_REQ(
    payload: $.ProtoMessage2127["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_SUBSCRIBE_SPOTS_RES(
  //   payload: $.ProtoMessage2128["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_UNSUBSCRIBE_SPOTS_REQ(
    payload: $.ProtoMessage2129["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_UNSUBSCRIBE_SPOTS_RES(
  //   payload: $.ProtoMessage2130["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  // OA_SPOT_EVENT(
  //   payload: $.ProtoMessage2131["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_SPOT_EVENT,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  // OA_ORDER_ERROR_EVENT(
  //   payload: $.ProtoMessage2132["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_DEAL_LIST_REQ(
    payload: $.ProtoMessage2133["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_DEAL_LIST_RES(
  //   payload: $.ProtoMessage2134["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_SUBSCRIBE_LIVE_TRENDBAR_REQ(
    payload: $.ProtoMessage2135["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ(
    payload: $.ProtoMessage2136["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  OA_GET_TRENDBARS_REQ(
    payload: $.ProtoMessage2137["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_GET_TRENDBARS_RES(
  //   payload: $.ProtoMessage2138["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_EXPECTED_MARGIN_REQ(
    payload: $.ProtoMessage2139["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_EXPECTED_MARGIN_RES(
  //   payload: $.ProtoMessage2140["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  // OA_MARGIN_CHANGED_EVENT(
  //   payload: $.ProtoMessage2141["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  // OA_ERROR_RES(
  //   payload: $.ProtoMessage2142["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_ERROR_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_CASH_FLOW_HISTORY_LIST_REQ(
    payload: $.ProtoMessage2143["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_CASH_FLOW_HISTORY_LIST_RES(
  //   payload: $.ProtoMessage2144["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_GET_TICKDATA_REQ(
    payload: $.ProtoMessage2145["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_GET_TICKDATA_RES(
  //   payload: $.ProtoMessage2146["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  // OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT(
  //   payload: $.ProtoMessage2147["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType:
  //         ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  // OA_CLIENT_DISCONNECT_EVENT(
  //   payload: $.ProtoMessage2148["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ(
    payload: $.ProtoMessage2149["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType:
          ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES(
  //   payload: $.ProtoMessage2150["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType:
  //         ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_GET_CTID_PROFILE_BY_TOKEN_REQ(
    payload: $.ProtoMessage2151["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_GET_CTID_PROFILE_BY_TOKEN_RES(
  //   payload: $.ProtoMessage2152["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_ASSET_CLASS_LIST_REQ(
    payload: $.ProtoMessage2153["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_ASSET_CLASS_LIST_RES(
  //   payload: $.ProtoMessage2154["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  // OA_DEPTH_EVENT(
  //   payload: $.ProtoMessage2155["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_SUBSCRIBE_DEPTH_QUOTES_REQ(
    payload: $.ProtoMessage2156["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_SUBSCRIBE_DEPTH_QUOTES_RES(
  //   payload: $.ProtoMessage2157["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ(
    payload: $.ProtoMessage2158["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_UNSUBSCRIBE_DEPTH_QUOTES_RES(
  //   payload: $.ProtoMessage2159["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_SYMBOL_CATEGORY_REQ(
    payload: $.ProtoMessage2160["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_SYMBOL_CATEGORY_RES(
  //   payload: $.ProtoMessage2161["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_ACCOUNT_LOGOUT_REQ(
    payload: $.ProtoMessage2162["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_ACCOUNT_LOGOUT_RES(
  //   payload: $.ProtoMessage2163["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  // OA_ACCOUNT_DISCONNECT_EVENT(
  //   payload: $.ProtoMessage2164["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  // OA_SUBSCRIBE_LIVE_TRENDBAR_RES(
  //   payload: $.ProtoMessage2165["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  // OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES(
  //   payload: $.ProtoMessage2166["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_MARGIN_CALL_LIST_REQ(
    payload: $.ProtoMessage2167["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_MARGIN_CALL_LIST_RES(
  //   payload: $.ProtoMessage2168["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_MARGIN_CALL_UPDATE_REQ(
    payload: $.ProtoMessage2169["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_MARGIN_CALL_UPDATE_RES(
  //   payload: $.ProtoMessage2170["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  // OA_MARGIN_CALL_UPDATE_EVENT(
  //   payload: $.ProtoMessage2171["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_EVENT,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  // OA_MARGIN_CALL_TRIGGER_EVENT(
  //   payload: $.ProtoMessage2172["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_TRIGGER_EVENT,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
  OA_REFRESH_TOKEN_REQ(
    payload: $.ProtoMessage2173["payload"],
    clientMsgId?: string,
    cb?: (err?: Error | undefined | null) => void
  ) {
    return this.write(
      {
        payloadType: ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_REQ,
        payload,
        clientMsgId,
      },
      cb
    );
  }
  // OA_REFRESH_TOKEN_RES(
  //   payload: $.ProtoMessage2174["payload"],
  //   clientMsgId?: string,
  //   cb?: (err?: Error | undefined | null) => void
  // ) {
  //   return this.write(
  //     {
  //       payloadType: ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_RES,
  //       payload,
  //       clientMsgId,
  //     },
  //     cb
  //   );
  // }
}
