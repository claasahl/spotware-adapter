import { Server } from "net";
import { SpotwareSocket, ProtoOAPayloadType, FACTORY } from "..";

const port = 5035;

const server = new Server((socket) => {
  const address = socket.address();
  const source = typeof address === "string" ? address : address.address;
  console.log(`${source} connected`);

  const s = new SpotwareSocket(socket);
  s.on("error", (err) => console.log(source, err));
  s.on("data", (message) => {
    const { clientMsgId } = message;
    switch (message.payloadType) {
      case ProtoOAPayloadType.PROTO_OA_VERSION_REQ:
        s.write(FACTORY.PROTO_OA_VERSION_RES({ version: "00" }, clientMsgId));
        break;
      // ...
    }
  });
});
server.listen(port, () => console.log(`listening on port ${port}`));
