import { Server } from "net";
import { SpotwareSocket } from "./socket";

// construct a server
const server = new Server((socket) => {
  const spSocket = new SpotwareSocket(socket);
  spSocket.on("error", console.error);
  spSocket.on("data", (data) => {
    console.log(data);
  });
});
server.listen(9000);
