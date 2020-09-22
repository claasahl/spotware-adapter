import {
  ProtoOAPayloadType,
  ProtoPayloadType,
} from "@claasahl/spotware-protobuf";
import { SpotwareStream } from "./spotware-stream";
import { ProtoMessages } from "./spotware-messages";

interface HeartbeatsState {
  heartbeats: number;
}
function heartbeats(
  state: HeartbeatsState = { heartbeats: 0 },
  message: ProtoMessages
): HeartbeatsState {
  switch (message.payloadType) {
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
  message: ProtoMessages
): AuthenticationState {
  switch (message.payloadType) {
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
  message: ProtoMessages
): State {
  return {
    heartbeats: heartbeats(state?.heartbeats, message),
    authentication: authenticate(state?.authentication, message),
  };
}

const store = {
  state: sampleApplication(undefined, {
    payloadType: ProtoPayloadType.PROTO_MESSAGE,
    payload: { payloadType: ProtoPayloadType.PROTO_MESSAGE },
  }),
  handle(message: ProtoMessages) {
    this.state = sampleApplication(this.state, message);
  },
};

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
s.on("data", (msg) => store.handle(msg));
