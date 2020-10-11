import tls from "tls";
import { SpotwareClientSocket, ProtoOAPayloadType, FACTORY } from "..";

const host = "demo.ctraderapi.com";
const port = 5035;

const socket = tls.connect(port, host);
socket.once("secureConnect", () => {
  console.log(`requesting version number from ${host}:${port}`);
  s.write(FACTORY.PROTO_OA_VERSION_REQ());
});

const s = new SpotwareClientSocket(socket);
s.on("data", (message) => {
  switch (message.payloadType) {
    case ProtoOAPayloadType.PROTO_OA_VERSION_RES:
      console.log(`got response from ${host}:${port}`);
      console.log(`server version: ${message.payload.version}`);
      s.end();
      break;
    // ...
  }
});
