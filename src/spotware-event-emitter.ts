import { EventEmitter } from "events";

import * as $spotware from "./spotware-messages";
import SpotwareEvents from "./spotware-events";

type Listener<T> = (message: T, clientMsgId?: string | null) => void;
export interface SpotwareEventEmitter extends EventEmitter {
  emit(event: "PROTO_MESSAGE", message: $spotware.IProtoMessage): boolean;
  on(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  off(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  once(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  addListener(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  removeListener(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  prependListener(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  prependOnceListener(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  listeners(
    event: "PROTO_MESSAGE"
  ): ((message: $spotware.IProtoMessage) => void)[];
  rawListeners(
    event: "PROTO_MESSAGE"
  ): ((message: $spotware.IProtoMessage) => void)[];

  emit(event: "ERROR_RES", message: $spotware.IProtoErrorRes): boolean;
  on(event: "ERROR_RES", listener: Listener<$spotware.IProtoErrorRes>): this;
  off(event: "ERROR_RES", listener: Listener<$spotware.IProtoErrorRes>): this;
  once(event: "ERROR_RES", listener: Listener<$spotware.IProtoErrorRes>): this;
  addListener(
    event: "ERROR_RES",
    listener: Listener<$spotware.IProtoErrorRes>
  ): this;
  removeListener(
    event: "ERROR_RES",
    listener: Listener<$spotware.IProtoErrorRes>
  ): this;
  prependListener(
    event: "ERROR_RES",
    listener: Listener<$spotware.IProtoErrorRes>
  ): this;
  prependOnceListener(
    event: "ERROR_RES",
    listener: Listener<$spotware.IProtoErrorRes>
  ): this;
  listeners(event: "ERROR_RES"): Listener<$spotware.IProtoErrorRes>[];
  rawListeners(event: "ERROR_RES"): Listener<$spotware.IProtoErrorRes>[];

  emit(
    event: "HEARTBEAT_EVENT",
    message: $spotware.IProtoHeartbeatEvent
  ): boolean;
  on(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  off(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  once(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  addListener(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  removeListener(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  prependListener(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  prependOnceListener(
    event: "HEARTBEAT_EVENT",
    listener: Listener<$spotware.IProtoHeartbeatEvent>
  ): this;
  listeners(
    event: "HEARTBEAT_EVENT"
  ): Listener<$spotware.IProtoHeartbeatEvent>[];
  rawListeners(
    event: "HEARTBEAT_EVENT"
  ): Listener<$spotware.IProtoHeartbeatEvent>[];

  emit(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    message: $spotware.IProtoOAApplicationAuthReq
  ): boolean;
  on(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;
  off(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;
  once(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;
  addListener(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;
  removeListener(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;
  prependListener(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_APPLICATION_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAApplicationAuthReq>
  ): this;
  listeners(
    event: "PROTO_OA_APPLICATION_AUTH_REQ"
  ): Listener<$spotware.IProtoOAApplicationAuthReq>[];
  rawListeners(
    event: "PROTO_OA_APPLICATION_AUTH_REQ"
  ): Listener<$spotware.IProtoOAApplicationAuthReq>[];

  emit(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    message: $spotware.IProtoOAApplicationAuthRes
  ): boolean;
  on(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    listener: Listener<$spotware.IProtoOAApplicationAuthRes>
  ): this;
  off(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    listener: Listener<$spotware.IProtoOAApplicationAuthRes>
  ): this;
  once(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    listener: Listener<$spotware.IProtoOAApplicationAuthRes>
  ): this;
  addListener(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    listener: Listener<$spotware.IProtoOAApplicationAuthRes>
  ): this;
  removeListener(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    listener: Listener<$spotware.IProtoOAApplicationAuthRes>
  ): this;
  prependListener(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    listener: Listener<$spotware.IProtoOAApplicationAuthRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_APPLICATION_AUTH_RES",
    listener: Listener<$spotware.IProtoOAApplicationAuthRes>
  ): this;
  listeners(
    event: "PROTO_OA_APPLICATION_AUTH_RES"
  ): Listener<$spotware.IProtoOAApplicationAuthRes>[];
  rawListeners(
    event: "PROTO_OA_APPLICATION_AUTH_RES"
  ): Listener<$spotware.IProtoOAApplicationAuthRes>[];

  emit(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    message: $spotware.IProtoOAAccountAuthReq
  ): boolean;
  on(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAAccountAuthReq>
  ): this;
  off(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAAccountAuthReq>
  ): this;
  once(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAAccountAuthReq>
  ): this;
  addListener(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAAccountAuthReq>
  ): this;
  removeListener(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAAccountAuthReq>
  ): this;
  prependListener(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAAccountAuthReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ",
    listener: Listener<$spotware.IProtoOAAccountAuthReq>
  ): this;
  listeners(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ"
  ): Listener<$spotware.IProtoOAAccountAuthReq>[];
  rawListeners(
    event: "PROTO_OA_ACCOUNT_AUTH_REQ"
  ): Listener<$spotware.IProtoOAAccountAuthReq>[];

  emit(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    message: $spotware.IProtoOAAccountAuthRes
  ): boolean;
  on(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    listener: Listener<$spotware.IProtoOAAccountAuthRes>
  ): this;
  off(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    listener: Listener<$spotware.IProtoOAAccountAuthRes>
  ): this;
  once(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    listener: Listener<$spotware.IProtoOAAccountAuthRes>
  ): this;
  addListener(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    listener: Listener<$spotware.IProtoOAAccountAuthRes>
  ): this;
  removeListener(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    listener: Listener<$spotware.IProtoOAAccountAuthRes>
  ): this;
  prependListener(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    listener: Listener<$spotware.IProtoOAAccountAuthRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_ACCOUNT_AUTH_RES",
    listener: Listener<$spotware.IProtoOAAccountAuthRes>
  ): this;
  listeners(
    event: "PROTO_OA_ACCOUNT_AUTH_RES"
  ): Listener<$spotware.IProtoOAAccountAuthRes>[];
  rawListeners(
    event: "PROTO_OA_ACCOUNT_AUTH_RES"
  ): Listener<$spotware.IProtoOAAccountAuthRes>[];

  emit(
    event: "PROTO_OA_ERROR_RES",
    message: $spotware.IProtoOAErrorRes
  ): boolean;
  on(
    event: "PROTO_OA_ERROR_RES",
    listener: Listener<$spotware.IProtoOAErrorRes>
  ): this;
  off(
    event: "PROTO_OA_ERROR_RES",
    listener: Listener<$spotware.IProtoOAErrorRes>
  ): this;
  once(
    event: "PROTO_OA_ERROR_RES",
    listener: Listener<$spotware.IProtoOAErrorRes>
  ): this;
  addListener(
    event: "PROTO_OA_ERROR_RES",
    listener: Listener<$spotware.IProtoOAErrorRes>
  ): this;
  removeListener(
    event: "PROTO_OA_ERROR_RES",
    listener: Listener<$spotware.IProtoOAErrorRes>
  ): this;
  prependListener(
    event: "PROTO_OA_ERROR_RES",
    listener: Listener<$spotware.IProtoOAErrorRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_ERROR_RES",
    listener: Listener<$spotware.IProtoOAErrorRes>
  ): this;
  listeners(
    event: "PROTO_OA_ERROR_RES"
  ): Listener<$spotware.IProtoOAErrorRes>[];
  rawListeners(
    event: "PROTO_OA_ERROR_RES"
  ): Listener<$spotware.IProtoOAErrorRes>[];

  emit(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    message: $spotware.IProtoOAClientDisconnectEvent
  ): boolean;
  on(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAClientDisconnectEvent>
  ): this;
  off(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAClientDisconnectEvent>
  ): this;
  once(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAClientDisconnectEvent>
  ): this;
  addListener(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAClientDisconnectEvent>
  ): this;
  removeListener(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAClientDisconnectEvent>
  ): this;
  prependListener(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAClientDisconnectEvent>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAClientDisconnectEvent>
  ): this;
  listeners(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT"
  ): Listener<$spotware.IProtoOAClientDisconnectEvent>[];
  rawListeners(
    event: "PROTO_OA_CLIENT_DISCONNECT_EVENT"
  ): Listener<$spotware.IProtoOAClientDisconnectEvent>[];

  emit(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    message: $spotware.IProtoOAAccountsTokenInvalidatedEvent
  ): boolean;
  on(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    listener: Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>
  ): this;
  off(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    listener: Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>
  ): this;
  once(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    listener: Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>
  ): this;
  addListener(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    listener: Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>
  ): this;
  removeListener(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    listener: Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>
  ): this;
  prependListener(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    listener: Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT",
    listener: Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>
  ): this;
  listeners(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT"
  ): Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>[];
  rawListeners(
    event: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT"
  ): Listener<$spotware.IProtoOAAccountsTokenInvalidatedEvent>[];

  emit(
    event: "PROTO_OA_VERSION_REQ",
    message: $spotware.IProtoOAVersionReq
  ): boolean;
  on(
    event: "PROTO_OA_VERSION_REQ",
    listener: Listener<$spotware.IProtoOAVersionReq>
  ): this;
  off(
    event: "PROTO_OA_VERSION_REQ",
    listener: Listener<$spotware.IProtoOAVersionReq>
  ): this;
  once(
    event: "PROTO_OA_VERSION_REQ",
    listener: Listener<$spotware.IProtoOAVersionReq>
  ): this;
  addListener(
    event: "PROTO_OA_VERSION_REQ",
    listener: Listener<$spotware.IProtoOAVersionReq>
  ): this;
  removeListener(
    event: "PROTO_OA_VERSION_REQ",
    listener: Listener<$spotware.IProtoOAVersionReq>
  ): this;
  prependListener(
    event: "PROTO_OA_VERSION_REQ",
    listener: Listener<$spotware.IProtoOAVersionReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_VERSION_REQ",
    listener: Listener<$spotware.IProtoOAVersionReq>
  ): this;
  listeners(
    event: "PROTO_OA_VERSION_REQ"
  ): Listener<$spotware.IProtoOAVersionReq>[];
  rawListeners(
    event: "PROTO_OA_VERSION_REQ"
  ): Listener<$spotware.IProtoOAVersionReq>[];

  emit(
    event: "PROTO_OA_VERSION_RES",
    message: $spotware.IProtoOAVersionRes
  ): boolean;
  on(
    event: "PROTO_OA_VERSION_RES",
    listener: Listener<$spotware.IProtoOAVersionRes>
  ): this;
  off(
    event: "PROTO_OA_VERSION_RES",
    listener: Listener<$spotware.IProtoOAVersionRes>
  ): this;
  once(
    event: "PROTO_OA_VERSION_RES",
    listener: Listener<$spotware.IProtoOAVersionRes>
  ): this;
  addListener(
    event: "PROTO_OA_VERSION_RES",
    listener: Listener<$spotware.IProtoOAVersionRes>
  ): this;
  removeListener(
    event: "PROTO_OA_VERSION_RES",
    listener: Listener<$spotware.IProtoOAVersionRes>
  ): this;
  prependListener(
    event: "PROTO_OA_VERSION_RES",
    listener: Listener<$spotware.IProtoOAVersionRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_VERSION_RES",
    listener: Listener<$spotware.IProtoOAVersionRes>
  ): this;
  listeners(
    event: "PROTO_OA_VERSION_RES"
  ): Listener<$spotware.IProtoOAVersionRes>[];
  rawListeners(
    event: "PROTO_OA_VERSION_RES"
  ): Listener<$spotware.IProtoOAVersionRes>[];

  emit(
    event: "PROTO_OA_NEW_ORDER_REQ",
    message: $spotware.IProtoOANewOrderReq
  ): boolean;
  on(
    event: "PROTO_OA_NEW_ORDER_REQ",
    listener: Listener<$spotware.IProtoOANewOrderReq>
  ): this;
  off(
    event: "PROTO_OA_NEW_ORDER_REQ",
    listener: Listener<$spotware.IProtoOANewOrderReq>
  ): this;
  once(
    event: "PROTO_OA_NEW_ORDER_REQ",
    listener: Listener<$spotware.IProtoOANewOrderReq>
  ): this;
  addListener(
    event: "PROTO_OA_NEW_ORDER_REQ",
    listener: Listener<$spotware.IProtoOANewOrderReq>
  ): this;
  removeListener(
    event: "PROTO_OA_NEW_ORDER_REQ",
    listener: Listener<$spotware.IProtoOANewOrderReq>
  ): this;
  prependListener(
    event: "PROTO_OA_NEW_ORDER_REQ",
    listener: Listener<$spotware.IProtoOANewOrderReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_NEW_ORDER_REQ",
    listener: Listener<$spotware.IProtoOANewOrderReq>
  ): this;
  listeners(
    event: "PROTO_OA_NEW_ORDER_REQ"
  ): Listener<$spotware.IProtoOANewOrderReq>[];
  rawListeners(
    event: "PROTO_OA_NEW_ORDER_REQ"
  ): Listener<$spotware.IProtoOANewOrderReq>[];

  emit(
    event: "PROTO_OA_EXECUTION_EVENT",
    message: $spotware.IProtoOAExecutionEvent
  ): boolean;
  on(
    event: "PROTO_OA_EXECUTION_EVENT",
    listener: Listener<$spotware.IProtoOAExecutionEvent>
  ): this;
  off(
    event: "PROTO_OA_EXECUTION_EVENT",
    listener: Listener<$spotware.IProtoOAExecutionEvent>
  ): this;
  once(
    event: "PROTO_OA_EXECUTION_EVENT",
    listener: Listener<$spotware.IProtoOAExecutionEvent>
  ): this;
  addListener(
    event: "PROTO_OA_EXECUTION_EVENT",
    listener: Listener<$spotware.IProtoOAExecutionEvent>
  ): this;
  removeListener(
    event: "PROTO_OA_EXECUTION_EVENT",
    listener: Listener<$spotware.IProtoOAExecutionEvent>
  ): this;
  prependListener(
    event: "PROTO_OA_EXECUTION_EVENT",
    listener: Listener<$spotware.IProtoOAExecutionEvent>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_EXECUTION_EVENT",
    listener: Listener<$spotware.IProtoOAExecutionEvent>
  ): this;
  listeners(
    event: "PROTO_OA_EXECUTION_EVENT"
  ): Listener<$spotware.IProtoOAExecutionEvent>[];
  rawListeners(
    event: "PROTO_OA_EXECUTION_EVENT"
  ): Listener<$spotware.IProtoOAExecutionEvent>[];

  emit(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    message: $spotware.IProtoOACancelOrderReq
  ): boolean;
  on(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    listener: Listener<$spotware.IProtoOACancelOrderReq>
  ): this;
  off(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    listener: Listener<$spotware.IProtoOACancelOrderReq>
  ): this;
  once(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    listener: Listener<$spotware.IProtoOACancelOrderReq>
  ): this;
  addListener(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    listener: Listener<$spotware.IProtoOACancelOrderReq>
  ): this;
  removeListener(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    listener: Listener<$spotware.IProtoOACancelOrderReq>
  ): this;
  prependListener(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    listener: Listener<$spotware.IProtoOACancelOrderReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_CANCEL_ORDER_REQ",
    listener: Listener<$spotware.IProtoOACancelOrderReq>
  ): this;
  listeners(
    event: "PROTO_OA_CANCEL_ORDER_REQ"
  ): Listener<$spotware.IProtoOACancelOrderReq>[];
  rawListeners(
    event: "PROTO_OA_CANCEL_ORDER_REQ"
  ): Listener<$spotware.IProtoOACancelOrderReq>[];

  emit(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    message: $spotware.IProtoOAAmendOrderReq
  ): boolean;
  on(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    listener: Listener<$spotware.IProtoOAAmendOrderReq>
  ): this;
  off(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    listener: Listener<$spotware.IProtoOAAmendOrderReq>
  ): this;
  once(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    listener: Listener<$spotware.IProtoOAAmendOrderReq>
  ): this;
  addListener(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    listener: Listener<$spotware.IProtoOAAmendOrderReq>
  ): this;
  removeListener(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    listener: Listener<$spotware.IProtoOAAmendOrderReq>
  ): this;
  prependListener(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    listener: Listener<$spotware.IProtoOAAmendOrderReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_AMEND_ORDER_REQ",
    listener: Listener<$spotware.IProtoOAAmendOrderReq>
  ): this;
  listeners(
    event: "PROTO_OA_AMEND_ORDER_REQ"
  ): Listener<$spotware.IProtoOAAmendOrderReq>[];
  rawListeners(
    event: "PROTO_OA_AMEND_ORDER_REQ"
  ): Listener<$spotware.IProtoOAAmendOrderReq>[];

  emit(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    message: $spotware.IProtoOAAmendPositionSLTPReq
  ): boolean;
  on(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    listener: Listener<$spotware.IProtoOAAmendPositionSLTPReq>
  ): this;
  off(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    listener: Listener<$spotware.IProtoOAAmendPositionSLTPReq>
  ): this;
  once(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    listener: Listener<$spotware.IProtoOAAmendPositionSLTPReq>
  ): this;
  addListener(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    listener: Listener<$spotware.IProtoOAAmendPositionSLTPReq>
  ): this;
  removeListener(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    listener: Listener<$spotware.IProtoOAAmendPositionSLTPReq>
  ): this;
  prependListener(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    listener: Listener<$spotware.IProtoOAAmendPositionSLTPReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ",
    listener: Listener<$spotware.IProtoOAAmendPositionSLTPReq>
  ): this;
  listeners(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ"
  ): Listener<$spotware.IProtoOAAmendPositionSLTPReq>[];
  rawListeners(
    event: "PROTO_OA_AMEND_POSITION_SLTP_REQ"
  ): Listener<$spotware.IProtoOAAmendPositionSLTPReq>[];

  emit(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    message: $spotware.IProtoOAClosePositionReq
  ): boolean;
  on(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    listener: Listener<$spotware.IProtoOAClosePositionReq>
  ): this;
  off(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    listener: Listener<$spotware.IProtoOAClosePositionReq>
  ): this;
  once(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    listener: Listener<$spotware.IProtoOAClosePositionReq>
  ): this;
  addListener(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    listener: Listener<$spotware.IProtoOAClosePositionReq>
  ): this;
  removeListener(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    listener: Listener<$spotware.IProtoOAClosePositionReq>
  ): this;
  prependListener(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    listener: Listener<$spotware.IProtoOAClosePositionReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_CLOSE_POSITION_REQ",
    listener: Listener<$spotware.IProtoOAClosePositionReq>
  ): this;
  listeners(
    event: "PROTO_OA_CLOSE_POSITION_REQ"
  ): Listener<$spotware.IProtoOAClosePositionReq>[];
  rawListeners(
    event: "PROTO_OA_CLOSE_POSITION_REQ"
  ): Listener<$spotware.IProtoOAClosePositionReq>[];

  emit(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    message: $spotware.IProtoOATrailingSLChangedEvent
  ): boolean;
  on(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOATrailingSLChangedEvent>
  ): this;
  off(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOATrailingSLChangedEvent>
  ): this;
  once(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOATrailingSLChangedEvent>
  ): this;
  addListener(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOATrailingSLChangedEvent>
  ): this;
  removeListener(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOATrailingSLChangedEvent>
  ): this;
  prependListener(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOATrailingSLChangedEvent>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOATrailingSLChangedEvent>
  ): this;
  listeners(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT"
  ): Listener<$spotware.IProtoOATrailingSLChangedEvent>[];
  rawListeners(
    event: "PROTO_OA_TRAILING_SL_CHANGED_EVENT"
  ): Listener<$spotware.IProtoOATrailingSLChangedEvent>[];

  emit(
    event: "PROTO_OA_ASSET_LIST_REQ",
    message: $spotware.IProtoOAAssetListReq
  ): boolean;
  on(
    event: "PROTO_OA_ASSET_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetListReq>
  ): this;
  off(
    event: "PROTO_OA_ASSET_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetListReq>
  ): this;
  once(
    event: "PROTO_OA_ASSET_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetListReq>
  ): this;
  addListener(
    event: "PROTO_OA_ASSET_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetListReq>
  ): this;
  removeListener(
    event: "PROTO_OA_ASSET_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetListReq>
  ): this;
  prependListener(
    event: "PROTO_OA_ASSET_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetListReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_ASSET_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetListReq>
  ): this;
  listeners(
    event: "PROTO_OA_ASSET_LIST_REQ"
  ): Listener<$spotware.IProtoOAAssetListReq>[];
  rawListeners(
    event: "PROTO_OA_ASSET_LIST_REQ"
  ): Listener<$spotware.IProtoOAAssetListReq>[];

  emit(
    event: "PROTO_OA_ASSET_LIST_RES",
    message: $spotware.IProtoOAAssetListRes
  ): boolean;
  on(
    event: "PROTO_OA_ASSET_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetListRes>
  ): this;
  off(
    event: "PROTO_OA_ASSET_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetListRes>
  ): this;
  once(
    event: "PROTO_OA_ASSET_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetListRes>
  ): this;
  addListener(
    event: "PROTO_OA_ASSET_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetListRes>
  ): this;
  removeListener(
    event: "PROTO_OA_ASSET_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetListRes>
  ): this;
  prependListener(
    event: "PROTO_OA_ASSET_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetListRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_ASSET_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetListRes>
  ): this;
  listeners(
    event: "PROTO_OA_ASSET_LIST_RES"
  ): Listener<$spotware.IProtoOAAssetListRes>[];
  rawListeners(
    event: "PROTO_OA_ASSET_LIST_RES"
  ): Listener<$spotware.IProtoOAAssetListRes>[];

  emit(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    message: $spotware.IProtoOASymbolsListReq
  ): boolean;
  on(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    listener: Listener<$spotware.IProtoOASymbolsListReq>
  ): this;
  off(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    listener: Listener<$spotware.IProtoOASymbolsListReq>
  ): this;
  once(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    listener: Listener<$spotware.IProtoOASymbolsListReq>
  ): this;
  addListener(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    listener: Listener<$spotware.IProtoOASymbolsListReq>
  ): this;
  removeListener(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    listener: Listener<$spotware.IProtoOASymbolsListReq>
  ): this;
  prependListener(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    listener: Listener<$spotware.IProtoOASymbolsListReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_SYMBOLS_LIST_REQ",
    listener: Listener<$spotware.IProtoOASymbolsListReq>
  ): this;
  listeners(
    event: "PROTO_OA_SYMBOLS_LIST_REQ"
  ): Listener<$spotware.IProtoOASymbolsListReq>[];
  rawListeners(
    event: "PROTO_OA_SYMBOLS_LIST_REQ"
  ): Listener<$spotware.IProtoOASymbolsListReq>[];

  emit(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    message: $spotware.IProtoOASymbolsListRes
  ): boolean;
  on(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    listener: Listener<$spotware.IProtoOASymbolsListRes>
  ): this;
  off(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    listener: Listener<$spotware.IProtoOASymbolsListRes>
  ): this;
  once(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    listener: Listener<$spotware.IProtoOASymbolsListRes>
  ): this;
  addListener(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    listener: Listener<$spotware.IProtoOASymbolsListRes>
  ): this;
  removeListener(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    listener: Listener<$spotware.IProtoOASymbolsListRes>
  ): this;
  prependListener(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    listener: Listener<$spotware.IProtoOASymbolsListRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_SYMBOLS_LIST_RES",
    listener: Listener<$spotware.IProtoOASymbolsListRes>
  ): this;
  listeners(
    event: "PROTO_OA_SYMBOLS_LIST_RES"
  ): Listener<$spotware.IProtoOASymbolsListRes>[];
  rawListeners(
    event: "PROTO_OA_SYMBOLS_LIST_RES"
  ): Listener<$spotware.IProtoOASymbolsListRes>[];

  emit(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    message: $spotware.IProtoOASymbolByIdReq
  ): boolean;
  on(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    listener: Listener<$spotware.IProtoOASymbolByIdReq>
  ): this;
  off(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    listener: Listener<$spotware.IProtoOASymbolByIdReq>
  ): this;
  once(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    listener: Listener<$spotware.IProtoOASymbolByIdReq>
  ): this;
  addListener(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    listener: Listener<$spotware.IProtoOASymbolByIdReq>
  ): this;
  removeListener(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    listener: Listener<$spotware.IProtoOASymbolByIdReq>
  ): this;
  prependListener(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    listener: Listener<$spotware.IProtoOASymbolByIdReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ",
    listener: Listener<$spotware.IProtoOASymbolByIdReq>
  ): this;
  listeners(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ"
  ): Listener<$spotware.IProtoOASymbolByIdReq>[];
  rawListeners(
    event: "PROTO_OA_SYMBOL_BY_ID_REQ"
  ): Listener<$spotware.IProtoOASymbolByIdReq>[];

  emit(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    message: $spotware.IProtoOASymbolByIdRes
  ): boolean;
  on(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    listener: Listener<$spotware.IProtoOASymbolByIdRes>
  ): this;
  off(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    listener: Listener<$spotware.IProtoOASymbolByIdRes>
  ): this;
  once(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    listener: Listener<$spotware.IProtoOASymbolByIdRes>
  ): this;
  addListener(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    listener: Listener<$spotware.IProtoOASymbolByIdRes>
  ): this;
  removeListener(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    listener: Listener<$spotware.IProtoOASymbolByIdRes>
  ): this;
  prependListener(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    listener: Listener<$spotware.IProtoOASymbolByIdRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_SYMBOL_BY_ID_RES",
    listener: Listener<$spotware.IProtoOASymbolByIdRes>
  ): this;
  listeners(
    event: "PROTO_OA_SYMBOL_BY_ID_RES"
  ): Listener<$spotware.IProtoOASymbolByIdRes>[];
  rawListeners(
    event: "PROTO_OA_SYMBOL_BY_ID_RES"
  ): Listener<$spotware.IProtoOASymbolByIdRes>[];

  emit(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    message: $spotware.IProtoOASymbolsForConversionReq
  ): boolean;
  on(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    listener: Listener<$spotware.IProtoOASymbolsForConversionReq>
  ): this;
  off(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    listener: Listener<$spotware.IProtoOASymbolsForConversionReq>
  ): this;
  once(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    listener: Listener<$spotware.IProtoOASymbolsForConversionReq>
  ): this;
  addListener(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    listener: Listener<$spotware.IProtoOASymbolsForConversionReq>
  ): this;
  removeListener(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    listener: Listener<$spotware.IProtoOASymbolsForConversionReq>
  ): this;
  prependListener(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    listener: Listener<$spotware.IProtoOASymbolsForConversionReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ",
    listener: Listener<$spotware.IProtoOASymbolsForConversionReq>
  ): this;
  listeners(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ"
  ): Listener<$spotware.IProtoOASymbolsForConversionReq>[];
  rawListeners(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ"
  ): Listener<$spotware.IProtoOASymbolsForConversionReq>[];

  emit(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    message: $spotware.IProtoOASymbolsForConversionRes
  ): boolean;
  on(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    listener: Listener<$spotware.IProtoOASymbolsForConversionRes>
  ): this;
  off(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    listener: Listener<$spotware.IProtoOASymbolsForConversionRes>
  ): this;
  once(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    listener: Listener<$spotware.IProtoOASymbolsForConversionRes>
  ): this;
  addListener(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    listener: Listener<$spotware.IProtoOASymbolsForConversionRes>
  ): this;
  removeListener(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    listener: Listener<$spotware.IProtoOASymbolsForConversionRes>
  ): this;
  prependListener(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    listener: Listener<$spotware.IProtoOASymbolsForConversionRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES",
    listener: Listener<$spotware.IProtoOASymbolsForConversionRes>
  ): this;
  listeners(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES"
  ): Listener<$spotware.IProtoOASymbolsForConversionRes>[];
  rawListeners(
    event: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES"
  ): Listener<$spotware.IProtoOASymbolsForConversionRes>[];

  emit(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    message: $spotware.IProtoOASymbolChangedEvent
  ): boolean;
  on(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOASymbolChangedEvent>
  ): this;
  off(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOASymbolChangedEvent>
  ): this;
  once(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOASymbolChangedEvent>
  ): this;
  addListener(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOASymbolChangedEvent>
  ): this;
  removeListener(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOASymbolChangedEvent>
  ): this;
  prependListener(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOASymbolChangedEvent>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOASymbolChangedEvent>
  ): this;
  listeners(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT"
  ): Listener<$spotware.IProtoOASymbolChangedEvent>[];
  rawListeners(
    event: "PROTO_OA_SYMBOL_CHANGED_EVENT"
  ): Listener<$spotware.IProtoOASymbolChangedEvent>[];

  emit(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    message: $spotware.IProtoOAAssetClassListReq
  ): boolean;
  on(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetClassListReq>
  ): this;
  off(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetClassListReq>
  ): this;
  once(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetClassListReq>
  ): this;
  addListener(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetClassListReq>
  ): this;
  removeListener(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetClassListReq>
  ): this;
  prependListener(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetClassListReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ",
    listener: Listener<$spotware.IProtoOAAssetClassListReq>
  ): this;
  listeners(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ"
  ): Listener<$spotware.IProtoOAAssetClassListReq>[];
  rawListeners(
    event: "PROTO_OA_ASSET_CLASS_LIST_REQ"
  ): Listener<$spotware.IProtoOAAssetClassListReq>[];

  emit(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    message: $spotware.IProtoOAAssetClassListRes
  ): boolean;
  on(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetClassListRes>
  ): this;
  off(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetClassListRes>
  ): this;
  once(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetClassListRes>
  ): this;
  addListener(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetClassListRes>
  ): this;
  removeListener(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetClassListRes>
  ): this;
  prependListener(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetClassListRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES",
    listener: Listener<$spotware.IProtoOAAssetClassListRes>
  ): this;
  listeners(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES"
  ): Listener<$spotware.IProtoOAAssetClassListRes>[];
  rawListeners(
    event: "PROTO_OA_ASSET_CLASS_LIST_RES"
  ): Listener<$spotware.IProtoOAAssetClassListRes>[];

  emit(
    event: "PROTO_OA_TRADER_REQ",
    message: $spotware.IProtoOATraderReq
  ): boolean;
  on(
    event: "PROTO_OA_TRADER_REQ",
    listener: Listener<$spotware.IProtoOATraderReq>
  ): this;
  off(
    event: "PROTO_OA_TRADER_REQ",
    listener: Listener<$spotware.IProtoOATraderReq>
  ): this;
  once(
    event: "PROTO_OA_TRADER_REQ",
    listener: Listener<$spotware.IProtoOATraderReq>
  ): this;
  addListener(
    event: "PROTO_OA_TRADER_REQ",
    listener: Listener<$spotware.IProtoOATraderReq>
  ): this;
  removeListener(
    event: "PROTO_OA_TRADER_REQ",
    listener: Listener<$spotware.IProtoOATraderReq>
  ): this;
  prependListener(
    event: "PROTO_OA_TRADER_REQ",
    listener: Listener<$spotware.IProtoOATraderReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_TRADER_REQ",
    listener: Listener<$spotware.IProtoOATraderReq>
  ): this;
  listeners(
    event: "PROTO_OA_TRADER_REQ"
  ): Listener<$spotware.IProtoOATraderReq>[];
  rawListeners(
    event: "PROTO_OA_TRADER_REQ"
  ): Listener<$spotware.IProtoOATraderReq>[];

  emit(
    event: "PROTO_OA_TRADER_RES",
    message: $spotware.IProtoOATraderRes
  ): boolean;
  on(
    event: "PROTO_OA_TRADER_RES",
    listener: Listener<$spotware.IProtoOATraderRes>
  ): this;
  off(
    event: "PROTO_OA_TRADER_RES",
    listener: Listener<$spotware.IProtoOATraderRes>
  ): this;
  once(
    event: "PROTO_OA_TRADER_RES",
    listener: Listener<$spotware.IProtoOATraderRes>
  ): this;
  addListener(
    event: "PROTO_OA_TRADER_RES",
    listener: Listener<$spotware.IProtoOATraderRes>
  ): this;
  removeListener(
    event: "PROTO_OA_TRADER_RES",
    listener: Listener<$spotware.IProtoOATraderRes>
  ): this;
  prependListener(
    event: "PROTO_OA_TRADER_RES",
    listener: Listener<$spotware.IProtoOATraderRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_TRADER_RES",
    listener: Listener<$spotware.IProtoOATraderRes>
  ): this;
  listeners(
    event: "PROTO_OA_TRADER_RES"
  ): Listener<$spotware.IProtoOATraderRes>[];
  rawListeners(
    event: "PROTO_OA_TRADER_RES"
  ): Listener<$spotware.IProtoOATraderRes>[];

  emit(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    message: $spotware.IProtoOATraderUpdatedEvent
  ): boolean;
  on(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    listener: Listener<$spotware.IProtoOATraderUpdatedEvent>
  ): this;
  off(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    listener: Listener<$spotware.IProtoOATraderUpdatedEvent>
  ): this;
  once(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    listener: Listener<$spotware.IProtoOATraderUpdatedEvent>
  ): this;
  addListener(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    listener: Listener<$spotware.IProtoOATraderUpdatedEvent>
  ): this;
  removeListener(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    listener: Listener<$spotware.IProtoOATraderUpdatedEvent>
  ): this;
  prependListener(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    listener: Listener<$spotware.IProtoOATraderUpdatedEvent>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_TRADER_UPDATE_EVENT",
    listener: Listener<$spotware.IProtoOATraderUpdatedEvent>
  ): this;
  listeners(
    event: "PROTO_OA_TRADER_UPDATE_EVENT"
  ): Listener<$spotware.IProtoOATraderUpdatedEvent>[];
  rawListeners(
    event: "PROTO_OA_TRADER_UPDATE_EVENT"
  ): Listener<$spotware.IProtoOATraderUpdatedEvent>[];

  emit(
    event: "PROTO_OA_RECONCILE_REQ",
    message: $spotware.IProtoOAReconcileReq
  ): boolean;
  on(
    event: "PROTO_OA_RECONCILE_REQ",
    listener: Listener<$spotware.IProtoOAReconcileReq>
  ): this;
  off(
    event: "PROTO_OA_RECONCILE_REQ",
    listener: Listener<$spotware.IProtoOAReconcileReq>
  ): this;
  once(
    event: "PROTO_OA_RECONCILE_REQ",
    listener: Listener<$spotware.IProtoOAReconcileReq>
  ): this;
  addListener(
    event: "PROTO_OA_RECONCILE_REQ",
    listener: Listener<$spotware.IProtoOAReconcileReq>
  ): this;
  removeListener(
    event: "PROTO_OA_RECONCILE_REQ",
    listener: Listener<$spotware.IProtoOAReconcileReq>
  ): this;
  prependListener(
    event: "PROTO_OA_RECONCILE_REQ",
    listener: Listener<$spotware.IProtoOAReconcileReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_RECONCILE_REQ",
    listener: Listener<$spotware.IProtoOAReconcileReq>
  ): this;
  listeners(
    event: "PROTO_OA_RECONCILE_REQ"
  ): Listener<$spotware.IProtoOAReconcileReq>[];
  rawListeners(
    event: "PROTO_OA_RECONCILE_REQ"
  ): Listener<$spotware.IProtoOAReconcileReq>[];

  emit(
    event: "PROTO_OA_RECONCILE_RES",
    message: $spotware.IProtoOAReconcileRes
  ): boolean;
  on(
    event: "PROTO_OA_RECONCILE_RES",
    listener: Listener<$spotware.IProtoOAReconcileRes>
  ): this;
  off(
    event: "PROTO_OA_RECONCILE_RES",
    listener: Listener<$spotware.IProtoOAReconcileRes>
  ): this;
  once(
    event: "PROTO_OA_RECONCILE_RES",
    listener: Listener<$spotware.IProtoOAReconcileRes>
  ): this;
  addListener(
    event: "PROTO_OA_RECONCILE_RES",
    listener: Listener<$spotware.IProtoOAReconcileRes>
  ): this;
  removeListener(
    event: "PROTO_OA_RECONCILE_RES",
    listener: Listener<$spotware.IProtoOAReconcileRes>
  ): this;
  prependListener(
    event: "PROTO_OA_RECONCILE_RES",
    listener: Listener<$spotware.IProtoOAReconcileRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_RECONCILE_RES",
    listener: Listener<$spotware.IProtoOAReconcileRes>
  ): this;
  listeners(
    event: "PROTO_OA_RECONCILE_RES"
  ): Listener<$spotware.IProtoOAReconcileRes>[];
  rawListeners(
    event: "PROTO_OA_RECONCILE_RES"
  ): Listener<$spotware.IProtoOAReconcileRes>[];

  emit(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    message: $spotware.IProtoOAOrderErrorEvent
  ): boolean;
  on(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    listener: Listener<$spotware.IProtoOAOrderErrorEvent>
  ): this;
  off(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    listener: Listener<$spotware.IProtoOAOrderErrorEvent>
  ): this;
  once(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    listener: Listener<$spotware.IProtoOAOrderErrorEvent>
  ): this;
  addListener(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    listener: Listener<$spotware.IProtoOAOrderErrorEvent>
  ): this;
  removeListener(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    listener: Listener<$spotware.IProtoOAOrderErrorEvent>
  ): this;
  prependListener(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    listener: Listener<$spotware.IProtoOAOrderErrorEvent>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_ORDER_ERROR_EVENT",
    listener: Listener<$spotware.IProtoOAOrderErrorEvent>
  ): this;
  listeners(
    event: "PROTO_OA_ORDER_ERROR_EVENT"
  ): Listener<$spotware.IProtoOAOrderErrorEvent>[];
  rawListeners(
    event: "PROTO_OA_ORDER_ERROR_EVENT"
  ): Listener<$spotware.IProtoOAOrderErrorEvent>[];

  emit(
    event: "PROTO_OA_DEAL_LIST_REQ",
    message: $spotware.IProtoOADealListReq
  ): boolean;
  on(
    event: "PROTO_OA_DEAL_LIST_REQ",
    listener: Listener<$spotware.IProtoOADealListReq>
  ): this;
  off(
    event: "PROTO_OA_DEAL_LIST_REQ",
    listener: Listener<$spotware.IProtoOADealListReq>
  ): this;
  once(
    event: "PROTO_OA_DEAL_LIST_REQ",
    listener: Listener<$spotware.IProtoOADealListReq>
  ): this;
  addListener(
    event: "PROTO_OA_DEAL_LIST_REQ",
    listener: Listener<$spotware.IProtoOADealListReq>
  ): this;
  removeListener(
    event: "PROTO_OA_DEAL_LIST_REQ",
    listener: Listener<$spotware.IProtoOADealListReq>
  ): this;
  prependListener(
    event: "PROTO_OA_DEAL_LIST_REQ",
    listener: Listener<$spotware.IProtoOADealListReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_DEAL_LIST_REQ",
    listener: Listener<$spotware.IProtoOADealListReq>
  ): this;
  listeners(
    event: "PROTO_OA_DEAL_LIST_REQ"
  ): Listener<$spotware.IProtoOADealListReq>[];
  rawListeners(
    event: "PROTO_OA_DEAL_LIST_REQ"
  ): Listener<$spotware.IProtoOADealListReq>[];

  emit(
    event: "PROTO_OA_DEAL_LIST_RES",
    message: $spotware.IProtoOADealListRes
  ): boolean;
  on(
    event: "PROTO_OA_DEAL_LIST_RES",
    listener: Listener<$spotware.IProtoOADealListRes>
  ): this;
  off(
    event: "PROTO_OA_DEAL_LIST_RES",
    listener: Listener<$spotware.IProtoOADealListRes>
  ): this;
  once(
    event: "PROTO_OA_DEAL_LIST_RES",
    listener: Listener<$spotware.IProtoOADealListRes>
  ): this;
  addListener(
    event: "PROTO_OA_DEAL_LIST_RES",
    listener: Listener<$spotware.IProtoOADealListRes>
  ): this;
  removeListener(
    event: "PROTO_OA_DEAL_LIST_RES",
    listener: Listener<$spotware.IProtoOADealListRes>
  ): this;
  prependListener(
    event: "PROTO_OA_DEAL_LIST_RES",
    listener: Listener<$spotware.IProtoOADealListRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_DEAL_LIST_RES",
    listener: Listener<$spotware.IProtoOADealListRes>
  ): this;
  listeners(
    event: "PROTO_OA_DEAL_LIST_RES"
  ): Listener<$spotware.IProtoOADealListRes>[];
  rawListeners(
    event: "PROTO_OA_DEAL_LIST_RES"
  ): Listener<$spotware.IProtoOADealListRes>[];

  emit(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    message: $spotware.IProtoOAExpectedMarginReq
  ): boolean;
  on(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    listener: Listener<$spotware.IProtoOAExpectedMarginReq>
  ): this;
  off(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    listener: Listener<$spotware.IProtoOAExpectedMarginReq>
  ): this;
  once(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    listener: Listener<$spotware.IProtoOAExpectedMarginReq>
  ): this;
  addListener(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    listener: Listener<$spotware.IProtoOAExpectedMarginReq>
  ): this;
  removeListener(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    listener: Listener<$spotware.IProtoOAExpectedMarginReq>
  ): this;
  prependListener(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    listener: Listener<$spotware.IProtoOAExpectedMarginReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ",
    listener: Listener<$spotware.IProtoOAExpectedMarginReq>
  ): this;
  listeners(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ"
  ): Listener<$spotware.IProtoOAExpectedMarginReq>[];
  rawListeners(
    event: "PROTO_OA_EXPECTED_MARGIN_REQ"
  ): Listener<$spotware.IProtoOAExpectedMarginReq>[];

  emit(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    message: $spotware.IProtoOAExpectedMarginRes
  ): boolean;
  on(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    listener: Listener<$spotware.IProtoOAExpectedMarginRes>
  ): this;
  off(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    listener: Listener<$spotware.IProtoOAExpectedMarginRes>
  ): this;
  once(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    listener: Listener<$spotware.IProtoOAExpectedMarginRes>
  ): this;
  addListener(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    listener: Listener<$spotware.IProtoOAExpectedMarginRes>
  ): this;
  removeListener(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    listener: Listener<$spotware.IProtoOAExpectedMarginRes>
  ): this;
  prependListener(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    listener: Listener<$spotware.IProtoOAExpectedMarginRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_EXPECTED_MARGIN_RES",
    listener: Listener<$spotware.IProtoOAExpectedMarginRes>
  ): this;
  listeners(
    event: "PROTO_OA_EXPECTED_MARGIN_RES"
  ): Listener<$spotware.IProtoOAExpectedMarginRes>[];
  rawListeners(
    event: "PROTO_OA_EXPECTED_MARGIN_RES"
  ): Listener<$spotware.IProtoOAExpectedMarginRes>[];

  emit(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    message: $spotware.IProtoOAMarginChangedEvent
  ): boolean;
  on(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOAMarginChangedEvent>
  ): this;
  off(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOAMarginChangedEvent>
  ): this;
  once(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOAMarginChangedEvent>
  ): this;
  addListener(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOAMarginChangedEvent>
  ): this;
  removeListener(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOAMarginChangedEvent>
  ): this;
  prependListener(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOAMarginChangedEvent>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT",
    listener: Listener<$spotware.IProtoOAMarginChangedEvent>
  ): this;
  listeners(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT"
  ): Listener<$spotware.IProtoOAMarginChangedEvent>[];
  rawListeners(
    event: "PROTO_OA_MARGIN_CHANGED_EVENT"
  ): Listener<$spotware.IProtoOAMarginChangedEvent>[];

  emit(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    message: $spotware.IProtoOACashFlowHistoryListReq
  ): boolean;
  on(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListReq>
  ): this;
  off(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListReq>
  ): this;
  once(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListReq>
  ): this;
  addListener(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListReq>
  ): this;
  removeListener(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListReq>
  ): this;
  prependListener(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListReq>
  ): this;
  listeners(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ"
  ): Listener<$spotware.IProtoOACashFlowHistoryListReq>[];
  rawListeners(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ"
  ): Listener<$spotware.IProtoOACashFlowHistoryListReq>[];

  emit(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    message: $spotware.IProtoOACashFlowHistoryListRes
  ): boolean;
  on(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListRes>
  ): this;
  off(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListRes>
  ): this;
  once(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListRes>
  ): this;
  addListener(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListRes>
  ): this;
  removeListener(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListRes>
  ): this;
  prependListener(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES",
    listener: Listener<$spotware.IProtoOACashFlowHistoryListRes>
  ): this;
  listeners(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES"
  ): Listener<$spotware.IProtoOACashFlowHistoryListRes>[];
  rawListeners(
    event: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES"
  ): Listener<$spotware.IProtoOACashFlowHistoryListRes>[];

  emit(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    message: $spotware.IProtoOAGetAccountListByAccessTokenReq
  ): boolean;
  on(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>
  ): this;
  off(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>
  ): this;
  once(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>
  ): this;
  addListener(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>
  ): this;
  removeListener(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>
  ): this;
  prependListener(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>
  ): this;
  listeners(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ"
  ): Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>[];
  rawListeners(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ"
  ): Listener<$spotware.IProtoOAGetAccountListByAccessTokenReq>[];

  emit(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    message: $spotware.IProtoOAGetAccountListByAccessTokenRes
  ): boolean;
  on(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>
  ): this;
  off(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>
  ): this;
  once(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>
  ): this;
  addListener(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>
  ): this;
  removeListener(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>
  ): this;
  prependListener(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>
  ): this;
  listeners(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES"
  ): Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>[];
  rawListeners(
    event: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES"
  ): Listener<$spotware.IProtoOAGetAccountListByAccessTokenRes>[];

  emit(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    message: $spotware.IProtoOASubscribeSpotsReq
  ): boolean;
  on(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOASubscribeSpotsReq>
  ): this;
  off(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOASubscribeSpotsReq>
  ): this;
  once(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOASubscribeSpotsReq>
  ): this;
  addListener(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOASubscribeSpotsReq>
  ): this;
  removeListener(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOASubscribeSpotsReq>
  ): this;
  prependListener(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOASubscribeSpotsReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOASubscribeSpotsReq>
  ): this;
  listeners(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ"
  ): Listener<$spotware.IProtoOASubscribeSpotsReq>[];
  rawListeners(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_REQ"
  ): Listener<$spotware.IProtoOASubscribeSpotsReq>[];

  emit(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    message: $spotware.IProtoOASubscribeSpotsRes
  ): boolean;
  on(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOASubscribeSpotsRes>
  ): this;
  off(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOASubscribeSpotsRes>
  ): this;
  once(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOASubscribeSpotsRes>
  ): this;
  addListener(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOASubscribeSpotsRes>
  ): this;
  removeListener(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOASubscribeSpotsRes>
  ): this;
  prependListener(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOASubscribeSpotsRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOASubscribeSpotsRes>
  ): this;
  listeners(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES"
  ): Listener<$spotware.IProtoOASubscribeSpotsRes>[];
  rawListeners(
    event: "PROTO_OA_SUBSCRIBE_SPOTS_RES"
  ): Listener<$spotware.IProtoOASubscribeSpotsRes>[];

  emit(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    message: $spotware.IProtoOAUnsubscribeSpotsReq
  ): boolean;
  on(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsReq>
  ): this;
  off(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsReq>
  ): this;
  once(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsReq>
  ): this;
  addListener(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsReq>
  ): this;
  removeListener(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsReq>
  ): this;
  prependListener(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsReq>
  ): this;
  listeners(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ"
  ): Listener<$spotware.IProtoOAUnsubscribeSpotsReq>[];
  rawListeners(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ"
  ): Listener<$spotware.IProtoOAUnsubscribeSpotsReq>[];

  emit(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    message: $spotware.IProtoOAUnsubscribeSpotsRes
  ): boolean;
  on(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsRes>
  ): this;
  off(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsRes>
  ): this;
  once(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsRes>
  ): this;
  addListener(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsRes>
  ): this;
  removeListener(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsRes>
  ): this;
  prependListener(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeSpotsRes>
  ): this;
  listeners(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES"
  ): Listener<$spotware.IProtoOAUnsubscribeSpotsRes>[];
  rawListeners(
    event: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES"
  ): Listener<$spotware.IProtoOAUnsubscribeSpotsRes>[];

  emit(
    event: "PROTO_OA_SPOT_EVENT",
    message: $spotware.IProtoOASpotEvent
  ): boolean;
  on(
    event: "PROTO_OA_SPOT_EVENT",
    listener: Listener<$spotware.IProtoOASpotEvent>
  ): this;
  off(
    event: "PROTO_OA_SPOT_EVENT",
    listener: Listener<$spotware.IProtoOASpotEvent>
  ): this;
  once(
    event: "PROTO_OA_SPOT_EVENT",
    listener: Listener<$spotware.IProtoOASpotEvent>
  ): this;
  addListener(
    event: "PROTO_OA_SPOT_EVENT",
    listener: Listener<$spotware.IProtoOASpotEvent>
  ): this;
  removeListener(
    event: "PROTO_OA_SPOT_EVENT",
    listener: Listener<$spotware.IProtoOASpotEvent>
  ): this;
  prependListener(
    event: "PROTO_OA_SPOT_EVENT",
    listener: Listener<$spotware.IProtoOASpotEvent>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_SPOT_EVENT",
    listener: Listener<$spotware.IProtoOASpotEvent>
  ): this;
  listeners(
    event: "PROTO_OA_SPOT_EVENT"
  ): Listener<$spotware.IProtoOASpotEvent>[];
  rawListeners(
    event: "PROTO_OA_SPOT_EVENT"
  ): Listener<$spotware.IProtoOASpotEvent>[];

  emit(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    message: $spotware.IProtoOASubscribeLiveTrendbarReq
  ): boolean;
  on(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>
  ): this;
  off(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>
  ): this;
  once(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>
  ): this;
  addListener(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>
  ): this;
  removeListener(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>
  ): this;
  prependListener(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>
  ): this;
  listeners(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ"
  ): Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>[];
  rawListeners(
    event: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ"
  ): Listener<$spotware.IProtoOASubscribeLiveTrendbarReq>[];

  emit(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    message: $spotware.IProtoOAUnsubscribeLiveTrendbarReq
  ): boolean;
  on(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>
  ): this;
  off(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>
  ): this;
  once(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>
  ): this;
  addListener(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>
  ): this;
  removeListener(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>
  ): this;
  prependListener(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>
  ): this;
  listeners(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ"
  ): Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>[];
  rawListeners(
    event: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ"
  ): Listener<$spotware.IProtoOAUnsubscribeLiveTrendbarReq>[];

  emit(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    message: $spotware.IProtoOAGetTrendbarsReq
  ): boolean;
  on(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    listener: Listener<$spotware.IProtoOAGetTrendbarsReq>
  ): this;
  off(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    listener: Listener<$spotware.IProtoOAGetTrendbarsReq>
  ): this;
  once(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    listener: Listener<$spotware.IProtoOAGetTrendbarsReq>
  ): this;
  addListener(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    listener: Listener<$spotware.IProtoOAGetTrendbarsReq>
  ): this;
  removeListener(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    listener: Listener<$spotware.IProtoOAGetTrendbarsReq>
  ): this;
  prependListener(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    listener: Listener<$spotware.IProtoOAGetTrendbarsReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_GET_TRENDBARS_REQ",
    listener: Listener<$spotware.IProtoOAGetTrendbarsReq>
  ): this;
  listeners(
    event: "PROTO_OA_GET_TRENDBARS_REQ"
  ): Listener<$spotware.IProtoOAGetTrendbarsReq>[];
  rawListeners(
    event: "PROTO_OA_GET_TRENDBARS_REQ"
  ): Listener<$spotware.IProtoOAGetTrendbarsReq>[];

  emit(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    message: $spotware.IProtoOAGetTrendbarsRes
  ): boolean;
  on(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    listener: Listener<$spotware.IProtoOAGetTrendbarsRes>
  ): this;
  off(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    listener: Listener<$spotware.IProtoOAGetTrendbarsRes>
  ): this;
  once(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    listener: Listener<$spotware.IProtoOAGetTrendbarsRes>
  ): this;
  addListener(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    listener: Listener<$spotware.IProtoOAGetTrendbarsRes>
  ): this;
  removeListener(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    listener: Listener<$spotware.IProtoOAGetTrendbarsRes>
  ): this;
  prependListener(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    listener: Listener<$spotware.IProtoOAGetTrendbarsRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_GET_TRENDBARS_RES",
    listener: Listener<$spotware.IProtoOAGetTrendbarsRes>
  ): this;
  listeners(
    event: "PROTO_OA_GET_TRENDBARS_RES"
  ): Listener<$spotware.IProtoOAGetTrendbarsRes>[];
  rawListeners(
    event: "PROTO_OA_GET_TRENDBARS_RES"
  ): Listener<$spotware.IProtoOAGetTrendbarsRes>[];

  emit(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    message: $spotware.IProtoOAGetTickDataReq
  ): boolean;
  on(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    listener: Listener<$spotware.IProtoOAGetTickDataReq>
  ): this;
  off(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    listener: Listener<$spotware.IProtoOAGetTickDataReq>
  ): this;
  once(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    listener: Listener<$spotware.IProtoOAGetTickDataReq>
  ): this;
  addListener(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    listener: Listener<$spotware.IProtoOAGetTickDataReq>
  ): this;
  removeListener(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    listener: Listener<$spotware.IProtoOAGetTickDataReq>
  ): this;
  prependListener(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    listener: Listener<$spotware.IProtoOAGetTickDataReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_GET_TICKDATA_REQ",
    listener: Listener<$spotware.IProtoOAGetTickDataReq>
  ): this;
  listeners(
    event: "PROTO_OA_GET_TICKDATA_REQ"
  ): Listener<$spotware.IProtoOAGetTickDataReq>[];
  rawListeners(
    event: "PROTO_OA_GET_TICKDATA_REQ"
  ): Listener<$spotware.IProtoOAGetTickDataReq>[];

  emit(
    event: "PROTO_OA_GET_TICKDATA_RES",
    message: $spotware.IProtoOAGetTickDataRes
  ): boolean;
  on(
    event: "PROTO_OA_GET_TICKDATA_RES",
    listener: Listener<$spotware.IProtoOAGetTickDataRes>
  ): this;
  off(
    event: "PROTO_OA_GET_TICKDATA_RES",
    listener: Listener<$spotware.IProtoOAGetTickDataRes>
  ): this;
  once(
    event: "PROTO_OA_GET_TICKDATA_RES",
    listener: Listener<$spotware.IProtoOAGetTickDataRes>
  ): this;
  addListener(
    event: "PROTO_OA_GET_TICKDATA_RES",
    listener: Listener<$spotware.IProtoOAGetTickDataRes>
  ): this;
  removeListener(
    event: "PROTO_OA_GET_TICKDATA_RES",
    listener: Listener<$spotware.IProtoOAGetTickDataRes>
  ): this;
  prependListener(
    event: "PROTO_OA_GET_TICKDATA_RES",
    listener: Listener<$spotware.IProtoOAGetTickDataRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_GET_TICKDATA_RES",
    listener: Listener<$spotware.IProtoOAGetTickDataRes>
  ): this;
  listeners(
    event: "PROTO_OA_GET_TICKDATA_RES"
  ): Listener<$spotware.IProtoOAGetTickDataRes>[];
  rawListeners(
    event: "PROTO_OA_GET_TICKDATA_RES"
  ): Listener<$spotware.IProtoOAGetTickDataRes>[];

  emit(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    message: $spotware.IProtoOAGetCtidProfileByTokenReq
  ): boolean;
  on(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>
  ): this;
  off(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>
  ): this;
  once(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>
  ): this;
  addListener(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>
  ): this;
  removeListener(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>
  ): this;
  prependListener(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>
  ): this;
  listeners(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ"
  ): Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>[];
  rawListeners(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ"
  ): Listener<$spotware.IProtoOAGetCtidProfileByTokenReq>[];

  emit(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    message: $spotware.IProtoOAGetCtidProfileByTokenRes
  ): boolean;
  on(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>
  ): this;
  off(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>
  ): this;
  once(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>
  ): this;
  addListener(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>
  ): this;
  removeListener(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>
  ): this;
  prependListener(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES",
    listener: Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>
  ): this;
  listeners(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES"
  ): Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>[];
  rawListeners(
    event: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES"
  ): Listener<$spotware.IProtoOAGetCtidProfileByTokenRes>[];

  emit(
    event: "PROTO_OA_DEPTH_EVENT",
    message: $spotware.IProtoOADepthEvent
  ): boolean;
  on(
    event: "PROTO_OA_DEPTH_EVENT",
    listener: Listener<$spotware.IProtoOADepthEvent>
  ): this;
  off(
    event: "PROTO_OA_DEPTH_EVENT",
    listener: Listener<$spotware.IProtoOADepthEvent>
  ): this;
  once(
    event: "PROTO_OA_DEPTH_EVENT",
    listener: Listener<$spotware.IProtoOADepthEvent>
  ): this;
  addListener(
    event: "PROTO_OA_DEPTH_EVENT",
    listener: Listener<$spotware.IProtoOADepthEvent>
  ): this;
  removeListener(
    event: "PROTO_OA_DEPTH_EVENT",
    listener: Listener<$spotware.IProtoOADepthEvent>
  ): this;
  prependListener(
    event: "PROTO_OA_DEPTH_EVENT",
    listener: Listener<$spotware.IProtoOADepthEvent>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_DEPTH_EVENT",
    listener: Listener<$spotware.IProtoOADepthEvent>
  ): this;
  listeners(
    event: "PROTO_OA_DEPTH_EVENT"
  ): Listener<$spotware.IProtoOADepthEvent>[];
  rawListeners(
    event: "PROTO_OA_DEPTH_EVENT"
  ): Listener<$spotware.IProtoOADepthEvent>[];

  emit(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    message: $spotware.IProtoOASubscribeDepthQuotesReq
  ): boolean;
  on(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesReq>
  ): this;
  off(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesReq>
  ): this;
  once(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesReq>
  ): this;
  addListener(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesReq>
  ): this;
  removeListener(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesReq>
  ): this;
  prependListener(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesReq>
  ): this;
  listeners(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ"
  ): Listener<$spotware.IProtoOASubscribeDepthQuotesReq>[];
  rawListeners(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ"
  ): Listener<$spotware.IProtoOASubscribeDepthQuotesReq>[];

  emit(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    message: $spotware.IProtoOASubscribeDepthQuotesRes
  ): boolean;
  on(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesRes>
  ): this;
  off(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesRes>
  ): this;
  once(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesRes>
  ): this;
  addListener(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesRes>
  ): this;
  removeListener(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesRes>
  ): this;
  prependListener(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOASubscribeDepthQuotesRes>
  ): this;
  listeners(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES"
  ): Listener<$spotware.IProtoOASubscribeDepthQuotesRes>[];
  rawListeners(
    event: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES"
  ): Listener<$spotware.IProtoOASubscribeDepthQuotesRes>[];

  emit(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    message: $spotware.IProtoOAUnsubscribeDepthQuotesReq
  ): boolean;
  on(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>
  ): this;
  off(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>
  ): this;
  once(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>
  ): this;
  addListener(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>
  ): this;
  removeListener(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>
  ): this;
  prependListener(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>
  ): this;
  listeners(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ"
  ): Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>[];
  rawListeners(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ"
  ): Listener<$spotware.IProtoOAUnsubscribeDepthQuotesReq>[];

  emit(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    message: $spotware.IProtoOAUnsubscribeDepthQuotesRes
  ): boolean;
  on(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>
  ): this;
  off(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>
  ): this;
  once(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>
  ): this;
  addListener(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>
  ): this;
  removeListener(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>
  ): this;
  prependListener(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES",
    listener: Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>
  ): this;
  listeners(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES"
  ): Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>[];
  rawListeners(
    event: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES"
  ): Listener<$spotware.IProtoOAUnsubscribeDepthQuotesRes>[];

  emit(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    message: $spotware.IProtoOASymbolCategoryListReq
  ): boolean;
  on(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    listener: Listener<$spotware.IProtoOASymbolCategoryListReq>
  ): this;
  off(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    listener: Listener<$spotware.IProtoOASymbolCategoryListReq>
  ): this;
  once(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    listener: Listener<$spotware.IProtoOASymbolCategoryListReq>
  ): this;
  addListener(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    listener: Listener<$spotware.IProtoOASymbolCategoryListReq>
  ): this;
  removeListener(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    listener: Listener<$spotware.IProtoOASymbolCategoryListReq>
  ): this;
  prependListener(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    listener: Listener<$spotware.IProtoOASymbolCategoryListReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ",
    listener: Listener<$spotware.IProtoOASymbolCategoryListReq>
  ): this;
  listeners(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ"
  ): Listener<$spotware.IProtoOASymbolCategoryListReq>[];
  rawListeners(
    event: "PROTO_OA_SYMBOL_CATEGORY_REQ"
  ): Listener<$spotware.IProtoOASymbolCategoryListReq>[];

  emit(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    message: $spotware.IProtoOASymbolCategoryListRes
  ): boolean;
  on(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    listener: Listener<$spotware.IProtoOASymbolCategoryListRes>
  ): this;
  off(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    listener: Listener<$spotware.IProtoOASymbolCategoryListRes>
  ): this;
  once(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    listener: Listener<$spotware.IProtoOASymbolCategoryListRes>
  ): this;
  addListener(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    listener: Listener<$spotware.IProtoOASymbolCategoryListRes>
  ): this;
  removeListener(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    listener: Listener<$spotware.IProtoOASymbolCategoryListRes>
  ): this;
  prependListener(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    listener: Listener<$spotware.IProtoOASymbolCategoryListRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES",
    listener: Listener<$spotware.IProtoOASymbolCategoryListRes>
  ): this;
  listeners(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES"
  ): Listener<$spotware.IProtoOASymbolCategoryListRes>[];
  rawListeners(
    event: "PROTO_OA_SYMBOL_CATEGORY_RES"
  ): Listener<$spotware.IProtoOASymbolCategoryListRes>[];

  emit(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    message: $spotware.IProtoOAAccountLogoutReq
  ): boolean;
  on(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    listener: Listener<$spotware.IProtoOAAccountLogoutReq>
  ): this;
  off(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    listener: Listener<$spotware.IProtoOAAccountLogoutReq>
  ): this;
  once(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    listener: Listener<$spotware.IProtoOAAccountLogoutReq>
  ): this;
  addListener(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    listener: Listener<$spotware.IProtoOAAccountLogoutReq>
  ): this;
  removeListener(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    listener: Listener<$spotware.IProtoOAAccountLogoutReq>
  ): this;
  prependListener(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    listener: Listener<$spotware.IProtoOAAccountLogoutReq>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ",
    listener: Listener<$spotware.IProtoOAAccountLogoutReq>
  ): this;
  listeners(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ"
  ): Listener<$spotware.IProtoOAAccountLogoutReq>[];
  rawListeners(
    event: "PROTO_OA_ACCOUNT_LOGOUT_REQ"
  ): Listener<$spotware.IProtoOAAccountLogoutReq>[];

  emit(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    message: $spotware.IProtoOAAccountLogoutRes
  ): boolean;
  on(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    listener: Listener<$spotware.IProtoOAAccountLogoutRes>
  ): this;
  off(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    listener: Listener<$spotware.IProtoOAAccountLogoutRes>
  ): this;
  once(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    listener: Listener<$spotware.IProtoOAAccountLogoutRes>
  ): this;
  addListener(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    listener: Listener<$spotware.IProtoOAAccountLogoutRes>
  ): this;
  removeListener(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    listener: Listener<$spotware.IProtoOAAccountLogoutRes>
  ): this;
  prependListener(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    listener: Listener<$spotware.IProtoOAAccountLogoutRes>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES",
    listener: Listener<$spotware.IProtoOAAccountLogoutRes>
  ): this;
  listeners(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES"
  ): Listener<$spotware.IProtoOAAccountLogoutRes>[];
  rawListeners(
    event: "PROTO_OA_ACCOUNT_LOGOUT_RES"
  ): Listener<$spotware.IProtoOAAccountLogoutRes>[];

  emit(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    message: $spotware.IProtoOAAccountDisconnectEvent
  ): boolean;
  on(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAAccountDisconnectEvent>
  ): this;
  off(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAAccountDisconnectEvent>
  ): this;
  once(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAAccountDisconnectEvent>
  ): this;
  addListener(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAAccountDisconnectEvent>
  ): this;
  removeListener(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAAccountDisconnectEvent>
  ): this;
  prependListener(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAAccountDisconnectEvent>
  ): this;
  prependOnceListener(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT",
    listener: Listener<$spotware.IProtoOAAccountDisconnectEvent>
  ): this;
  listeners(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT"
  ): Listener<$spotware.IProtoOAAccountDisconnectEvent>[];
  rawListeners(
    event: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT"
  ): Listener<$spotware.IProtoOAAccountDisconnectEvent>[];

  removeAllListeners(event?: SpotwareEvents): this;
  listenerCount(event: SpotwareEvents): number;
  eventNames(): SpotwareEvents[];
}
export default SpotwareEventEmitter;
