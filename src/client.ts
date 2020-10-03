import { connect } from "net";

import { SpotwareSocket, FACTORY } from ".";

async function main() {
  const socket = new SpotwareSocket(connect(9000, "localhost"));

  let interval = setInterval(() => {
    socket.write(FACTORY.HEARTBEAT_EVENT());
  }, 1000);

  socket.on("close", () => clearInterval(interval));
  socket.on("error", console.error);
  socket.on("data", (d) => console.log(d));
}
main().catch(console.error);
