import { SpotwareStream } from "./spotware-stream";
import * as $ from "./spotware-messages";
import { createMachine, interpret } from "xstate";
import {
  ProtoOAPayloadType,
  ProtoPayloadType,
} from "@claasahl/spotware-protobuf";

interface ToggleContext {
  heartbeats: number;
  authenticated: {
    application: boolean;
    account: boolean;
  };
}

type ToggleEvent =
  | ($.ProtoMessage5 & { type: "PROTO_MESSAGE" })
  | ($.ProtoMessage50 & { type: "ERROR_RES" })
  | ($.ProtoMessage51 & { type: "HEARTBEAT_EVENT" })
  | ($.ProtoMessage2100 & { type: "PROTO_OA_APPLICATION_AUTH_REQ" })
  | ($.ProtoMessage2101 & { type: "PROTO_OA_APPLICATION_AUTH_RES" })
  | ($.ProtoMessage2102 & { type: "PROTO_OA_ACCOUNT_AUTH_REQ" })
  | ($.ProtoMessage2103 & { type: "PROTO_OA_ACCOUNT_AUTH_RES" })
  | ($.ProtoMessage2104 & { type: "PROTO_OA_VERSION_REQ" })
  | ($.ProtoMessage2105 & { type: "PROTO_OA_VERSION_RES" })
  | ($.ProtoMessage2106 & { type: "PROTO_OA_NEW_ORDER_REQ" })
  | ($.ProtoMessage2107 & { type: "PROTO_OA_TRAILING_SL_CHANGED_EVENT" })
  | ($.ProtoMessage2108 & { type: "PROTO_OA_CANCEL_ORDER_REQ" })
  | ($.ProtoMessage2109 & { type: "PROTO_OA_AMEND_ORDER_REQ" })
  | ($.ProtoMessage2110 & { type: "PROTO_OA_AMEND_POSITION_SLTP_REQ" })
  | ($.ProtoMessage2111 & { type: "PROTO_OA_CLOSE_POSITION_REQ" })
  | ($.ProtoMessage2112 & { type: "PROTO_OA_ASSET_LIST_REQ" })
  | ($.ProtoMessage2113 & { type: "PROTO_OA_ASSET_LIST_RES" })
  | ($.ProtoMessage2114 & { type: "PROTO_OA_SYMBOLS_LIST_REQ" })
  | ($.ProtoMessage2115 & { type: "PROTO_OA_SYMBOLS_LIST_RES" })
  | ($.ProtoMessage2116 & { type: "PROTO_OA_SYMBOL_BY_ID_REQ" })
  | ($.ProtoMessage2117 & { type: "PROTO_OA_SYMBOL_BY_ID_RES" })
  | ($.ProtoMessage2118 & { type: "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ" })
  | ($.ProtoMessage2119 & { type: "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES" })
  | ($.ProtoMessage2120 & { type: "PROTO_OA_SYMBOL_CHANGED_EVENT" })
  | ($.ProtoMessage2121 & { type: "PROTO_OA_TRADER_REQ" })
  | ($.ProtoMessage2122 & { type: "PROTO_OA_TRADER_RES" })
  | ($.ProtoMessage2123 & { type: "PROTO_OA_TRADER_UPDATE_EVENT" })
  | ($.ProtoMessage2124 & { type: "PROTO_OA_RECONCILE_REQ" })
  | ($.ProtoMessage2125 & { type: "PROTO_OA_RECONCILE_RES" })
  | ($.ProtoMessage2126 & { type: "PROTO_OA_EXECUTION_EVENT" })
  | ($.ProtoMessage2127 & { type: "PROTO_OA_SUBSCRIBE_SPOTS_REQ" })
  | ($.ProtoMessage2128 & { type: "PROTO_OA_SUBSCRIBE_SPOTS_RES" })
  | ($.ProtoMessage2129 & { type: "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ" })
  | ($.ProtoMessage2130 & { type: "PROTO_OA_UNSUBSCRIBE_SPOTS_RES" })
  | ($.ProtoMessage2131 & { type: "PROTO_OA_SPOT_EVENT" })
  | ($.ProtoMessage2132 & { type: "PROTO_OA_ORDER_ERROR_EVENT" })
  | ($.ProtoMessage2133 & { type: "PROTO_OA_DEAL_LIST_REQ" })
  | ($.ProtoMessage2134 & { type: "PROTO_OA_DEAL_LIST_RES" })
  | ($.ProtoMessage2135 & { type: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ" })
  | ($.ProtoMessage2136 & { type: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ" })
  | ($.ProtoMessage2137 & { type: "PROTO_OA_GET_TRENDBARS_REQ" })
  | ($.ProtoMessage2138 & { type: "PROTO_OA_GET_TRENDBARS_RES" })
  | ($.ProtoMessage2139 & { type: "PROTO_OA_EXPECTED_MARGIN_REQ" })
  | ($.ProtoMessage2140 & { type: "PROTO_OA_EXPECTED_MARGIN_RES" })
  | ($.ProtoMessage2141 & { type: "PROTO_OA_MARGIN_CHANGED_EVENT" })
  | ($.ProtoMessage2142 & { type: "PROTO_OA_ERROR_RES" })
  | ($.ProtoMessage2143 & { type: "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ" })
  | ($.ProtoMessage2144 & { type: "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES" })
  | ($.ProtoMessage2145 & { type: "PROTO_OA_GET_TICKDATA_REQ" })
  | ($.ProtoMessage2146 & { type: "PROTO_OA_GET_TICKDATA_RES" })
  | ($.ProtoMessage2147 & { type: "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT" })
  | ($.ProtoMessage2148 & { type: "PROTO_OA_CLIENT_DISCONNECT_EVENT" })
  | ($.ProtoMessage2149 & { type: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ" })
  | ($.ProtoMessage2150 & { type: "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES" })
  | ($.ProtoMessage2151 & { type: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ" })
  | ($.ProtoMessage2152 & { type: "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES" })
  | ($.ProtoMessage2153 & { type: "PROTO_OA_ASSET_CLASS_LIST_REQ" })
  | ($.ProtoMessage2154 & { type: "PROTO_OA_ASSET_CLASS_LIST_RES" })
  | ($.ProtoMessage2155 & { type: "PROTO_OA_DEPTH_EVENT" })
  | ($.ProtoMessage2156 & { type: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ" })
  | ($.ProtoMessage2157 & { type: "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES" })
  | ($.ProtoMessage2158 & { type: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ" })
  | ($.ProtoMessage2159 & { type: "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES" })
  | ($.ProtoMessage2160 & { type: "PROTO_OA_SYMBOL_CATEGORY_REQ" })
  | ($.ProtoMessage2161 & { type: "PROTO_OA_SYMBOL_CATEGORY_RES" })
  | ($.ProtoMessage2162 & { type: "PROTO_OA_ACCOUNT_LOGOUT_REQ" })
  | ($.ProtoMessage2163 & { type: "PROTO_OA_ACCOUNT_LOGOUT_RES" })
  | ($.ProtoMessage2164 & { type: "PROTO_OA_ACCOUNT_DISCONNECT_EVENT" })
  | ($.ProtoMessage2165 & { type: "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES" })
  | ($.ProtoMessage2166 & { type: "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES" })
  | ($.ProtoMessage2167 & { type: "PROTO_OA_MARGIN_CALL_LIST_REQ" })
  | ($.ProtoMessage2168 & { type: "PROTO_OA_MARGIN_CALL_LIST_RES" })
  | ($.ProtoMessage2169 & { type: "PROTO_OA_MARGIN_CALL_UPDATE_REQ" })
  | ($.ProtoMessage2170 & { type: "PROTO_OA_MARGIN_CALL_UPDATE_RES" })
  | ($.ProtoMessage2171 & { type: "PROTO_OA_MARGIN_CALL_UPDATE_EVENT" })
  | ($.ProtoMessage2172 & { type: "PROTO_OA_MARGIN_CALL_TRIGGER_EVENT" })
  | ($.ProtoMessage2173 & { type: "PROTO_OA_REFRESH_TOKEN_REQ" })
  | ($.ProtoMessage2174 & { type: "PROTO_OA_REFRESH_TOKEN_RES" });

// Edit your machine(s) here
const machine = createMachine<ToggleContext, ToggleEvent>(
  {
    id: "machine",
    initial: "inactive",
    context: {
      heartbeats: 0,
      authenticated: {
        application: false,
        account: false,
      },
    },
    states: {
      inactive: {
        on: { PROTO_OA_APPLICATION_AUTH_RES: { actions: ["heartbeat"] } },
      },
      active: {
        on: {},
      },
    },
  },
  {
    actions: {
      heartbeat: (context, _event) => context.heartbeats++,
    },
  }
);

// Edit your service(s) here
const service = interpret(machine)
  .onTransition((state) => {
    console.log(state.value);
  })
  .onChange((context) => console.log(context));

service.start();

service.send("ERROR_RES", {});
service.send("HEARTBEAT_EVENT");

function asEvent(msg: $.ProtoMessages): ToggleEvent {
  const type =
    ProtoOAPayloadType[msg.payloadType] || ProtoPayloadType[msg.payloadType];
  return { ...msg, type } as ToggleEvent;
}

const config = {
  host: process.env.SPOTWARE__HOST || "live.ctraderapi.com",
  port: Number(process.env.SPOTWARE__PORT) || 5035,
  clientId: process.env.SPOTWARE__CLIENT_ID || "",
  clientSecret: process.env.SPOTWARE__CLIENT_SECRET || "",
  accessToken: process.env.access_token || "",
};

const s = new SpotwareStream(config.port, config.host);
setTimeout(() => {
  s.versionReq({}, () => {});
  s.applicationAuthReq(config, () => {});
}, 1000);
setInterval(() => s.heartbeat(() => {}), 10000);
s.on("data", (msg) => service.send(asEvent(msg)));
