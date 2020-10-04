import { Server, Socket } from "net";
import { SpotwareSocket, ProtoOAPayloadType, FACTORY } from "./";

const port = Number(process.env.SPOTWARE__PORT);
const server = new Server(serve);
server.listen(port, () => console.log(`listening on port ${port}`));

function serve(socket: Socket): void {
  console.log("new connection");
  const s = new SpotwareSocket(socket);
  s.on("data", (message) => {
    const { clientMsgId } = message;
    switch (message.payloadType) {
      case ProtoOAPayloadType.PROTO_OA_VERSION_REQ:
        {
          s.write(FACTORY.PROTO_OA_VERSION_RES({ version: "00" }, clientMsgId));
        }
        break;
    }
  });
}
