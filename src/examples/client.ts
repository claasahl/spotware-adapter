import tls from "tls";
import { ProtoOaPayloadType, FACTORY } from "..";
import { Protocol } from "../protocol";

const host = "demo.ctraderapi.com";
const port = 5035;

const socket = tls.connect(port, host);
socket.once("secureConnect", () => {
  console.log(`requesting version number from ${host}:${port}`);
  protocol.send(FACTORY.PROTO_OA_VERSION_REQ({}));
});

const protocol = new Protocol(socket);

(async () => {
  // read typed messages
  for await (const message of protocol.messages()) {
    console.log(
      "Got:",
      ProtoOaPayloadType[message.payloadType] || message.payloadType,
    );

    switch (message.payloadType) {
      case ProtoOaPayloadType.PROTO_OA_VERSION_RES:
        console.log(`got response from ${host}:${port}`);
        console.log(`server version: ${message.payload.version}`);
        protocol.close();
        break;
      // ...
    }
  }
})();
