import tls from "tls";

import { ProtoOaPayloadType, FACTORY } from "..";
import { Protocol } from "../protocol";
import { Router } from "../router";

const host = "demo.ctraderapi.com";
const port = 5035;

const socket = tls.connect(port, host);
socket.once("secureConnect", () => {
  console.log(`requesting version number from ${host}:${port}`);
  protocol.send(FACTORY.PROTO_OA_VERSION_REQ({}));
});

const protocol = new Protocol(socket);
const router = new Router<undefined>();
router.register(ProtoOaPayloadType.PROTO_OA_VERSION_RES, (message) => {
  console.log(`got response from ${host}:${port}`);
  console.log(`server version: ${message.payload.version}`);
  protocol.close();
  return [];
});

(async () => {
  // read typed messages
  for await (const message of protocol.messages()) {
    console.log(
      "Got:",
      ProtoOaPayloadType[message.payloadType] || message.payloadType,
    );
    const replies = await router.handle(message, undefined);
    protocol.send(...replies);
  }
})();
