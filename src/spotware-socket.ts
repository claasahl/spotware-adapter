import { connect as tlsConnect, TLSSocket, ConnectionOptions } from "tls";
import { SpotwareEventEmitter } from "./spotware-event-emitter";
import {
  IProtoMessage,
  ProtoPayloadType,
  ProtoOAPayloadType
} from "./spotware-messages";
import { SpotwareClient } from "./spotware-client";

import * as util from "./spotware-utils";

export class SpotwareSocket {
  public emitter: Readonly<SpotwareEventEmitter>;
  private socket: Readonly<TLSSocket>;

  constructor(socket: TLSSocket) {
    this.emitter = new SpotwareClient(socket);
    this.socket = socket;

    this.socket.on("data", this.readProtoMessage);
    this.emitter.on(ProtoPayloadType.PROTO_MESSAGE, this.writeProtoMessage);
  }

  private writeProtoMessage = (message: IProtoMessage) => {
    switch (message.payloadType) {
      case ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ:
      case ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ:
      case ProtoOAPayloadType.PROTO_OA_VERSION_REQ:
      case ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ:
      case ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ:
      case ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ:
      case ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ:
      case ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ:
      case ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ:
      case ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ:
      case ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ:
      case ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ:
      case ProtoOAPayloadType.PROTO_OA_TRADER_REQ:
      case ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ:
      case ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ:
      case ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ:
      case ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ:
      case ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ:
      case ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ:
      case ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ:
      case ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ:
      case ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ:
      case ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ:
      case ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ:
      case ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ:
      case ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ:
      case ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ:
      case ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ:
      case ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ:
      case ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ:
        const buffer = util.serialize(message);
        this.socket.write(buffer);
        break;
      default:
        // only write white-listed messages to socket
        console.log("received message", message);
        break;
    }
  };

  private readProtoMessage = (data: string) => {
    try {
      const buffer = Buffer.from(data, "binary");
      const message = util.deserialize(buffer);
      this.emitter.emit(ProtoPayloadType.PROTO_MESSAGE, message);
    } catch (error) {
      console.log("could not read/parse ProtoMessage", error);
    }
  };
}

export function connect(
  options?: ConnectionOptions,
  secureConnectListener?: () => void
): TLSSocket {
  const host = process.env.SPOTWARE__HOST || "";
  const port = (process.env.SPOTWARE__PORT || 0) as number;
  const socket = tlsConnect(port, host, options, secureConnectListener);
  socket.setEncoding("binary");
  socket.setDefaultEncoding("binary");
  return socket;
}
