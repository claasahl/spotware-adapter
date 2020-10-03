import { Server, Socket } from "net";
import { SpotwareSocket, ProtoOAPayloadType, Messages, FACTORY } from "./";

// construct a server
// const server = new Server((socket) => {
//   const spSocket = new SpotwareSocket(socket);
//   spSocket.on("error", console.error);
//   spSocket.on("data", (data) => {
//     console.log(data);
//   });
// });
// server.listen(9000);
const server = new Server(serve);
server.listen(9000);

function serve(socket: Socket): void {
  const s = new SpotwareSocket(socket);
  s.on("data", (message: Messages) => {
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
