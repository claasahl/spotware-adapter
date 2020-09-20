import {
  ProtoOAPayloadType,
  ProtoPayloadType,
} from "@claasahl/spotware-protobuf";
import { SpotwareStream } from "./spotware-stream";
import { Action, applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { ProtoMessages } from "./spotware-messages";
import { call, put, takeEvery } from "redux-saga/effects";
// FIXME: combineReducers

type MessageAction = Action<ProtoMessages>;
interface HeartbeatsState {
  heartbeats: number;
}
function heartbeats(
  state: HeartbeatsState = { heartbeats: 0 },
  action: MessageAction
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
  action: MessageAction
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
  action: MessageAction
): State {
  return {
    heartbeats: heartbeats(state?.heartbeats, action),
    authentication: authenticate(state?.authentication, action),
  };
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  sampleApplication,
  applyMiddleware(
    (store) => (next) => (action) => {
      console.group(action.type);
      console.info("dispatching", action);
      let result = next(action);
      console.log("next state", store.getState());
      console.groupEnd();
      return result;
    },
    sagaMiddleware
  )
);

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action: MessageAction) {
  try {
    const user = yield call(Api.fetchUser, action.payload.userId);
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}
sagaMiddleware.run(mySaga);
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
