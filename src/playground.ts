import { connect } from "./spotware-client";
console.log("start");
const client = connect(
  5035,
  "live.ctraderapi.com"
);

client.on("PROTO_MESSAGE", console.error);
client.on("PROTO_OA_APPLICATION_AUTH_REQ", console.error);
client.on("PROTO_OA_APPLICATION_AUTH_RES", console.error);
client.on("PROTO_OA_ERROR_RES", console.error);
client.on("HEARTBEAT_EVENT", console.error);
setInterval(() => client.emit("HEARTBEAT_EVENT", {}), 10000);
// const msg: $spotware.IProtoOAApplicationAuthReq = {
//   clientId: "",
//   clientSecret: ""
// };
// client.emit("PROTO_OA_APPLICATION_AUTH_REQ", msg);
