import net from "net";
import tls from "tls";
import { SpotwareClientSocket, ProtoOAPayloadType, FACTORY } from "..";

const useTLS = false;
const host = "localhost";
const port = 5035;

const socket = useTLS ? tls.connect(port, host) : net.connect(port, host);
const event = useTLS ? "secureConnect" : "connect";
socket.once(event, () => s.write(FACTORY.PROTO_OA_VERSION_REQ()));

const s = new SpotwareClientSocket(socket);
s.on("data", (message) => {
  switch (message.payloadType) {
    case ProtoOAPayloadType.PROTO_OA_VERSION_RES:
      console.log(`server version: ${message.payload.version}`);
      break;
    // ...
  }
});
