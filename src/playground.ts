import {
  ProtoOAPayloadType,
  ProtoPayloadType,
} from "@claasahl/spotware-protobuf";
import { SpotwareStream } from "./spotware-stream";
import { Action, applyMiddleware, createStore } from "redux";
import { ProtoMessages } from "./spotware-messages";
// FIXME: combineReducers
interface HeartbeatsState {
  heartbeats: number;
}
function heartbeats(
  state: HeartbeatsState = { heartbeats: 0 },
  action: Action<ProtoMessages>
): HeartbeatsState {
  switch (action.type.payloadType) {
    case ProtoPayloadType.HEARTBEAT_EVENT:
      return { ...state, heartbeats: state.heartbeats + 1 };
    default:
      return state;
  }
}

interface AuthenticationState {
  application: boolean;
  account: boolean;
}
function authenticate(
  state: AuthenticationState = { application: false, account: false },
  action: Action<ProtoMessages>
): AuthenticationState {
  switch (action.type.payloadType) {
    case ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES:
      return { ...state, application: true };
    case ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES:
      return { ...state, account: true };
    default:
      return state;
  }
}

interface State {
  heartbeats: HeartbeatsState;
  authentication: AuthenticationState;
}
function sampleApplication(
  state: State | undefined,
  action: Action<ProtoMessages>
): State {
  return {
    heartbeats: heartbeats(state?.heartbeats, action),
    authentication: authenticate(state?.authentication, action),
  };
}
const store = createStore(
  sampleApplication,
  applyMiddleware((store) => (next) => (action) => {
    console.group(action.type);
    console.info("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    console.groupEnd();
    return result;
  })
);
// store.subscribe(() => console.log(store.getState()))

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
s.on("data", (msg) => store.dispatch({ type: msg }));
