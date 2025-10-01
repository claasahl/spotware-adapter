import { Server } from "net";
import { ProtoOaPayloadType, FACTORY } from "..";
import { Protocol } from "../protocol";

const port = 5035;

const server = new Server((socket) => {
  const address = socket.address();
  const source = "address" in address ? address.address : address;
  console.log(`${source} connected`);

  const protocol = new Protocol(socket);
  socket.on("error", (err) => console.log(source, err));
  socket.on("end", () => console.log(`${source} disconnected`));
  socket.on("close", () => console.log(`${source} closed`));
  (async () => {
    // read typed messages
    for await (const message of protocol.messages()) {
      console.log(
        "Got:",
        ProtoOaPayloadType[message.payloadType] || message.payloadType,
      );

      switch (message.payloadType) {
        case ProtoOaPayloadType.PROTO_OA_VERSION_REQ:
          protocol.send(
            FACTORY.PROTO_OA_VERSION_RES(
              { version: "00" },
              message.clientMsgId,
            ),
          );
          break;
        // ...
      }
    }
  })().catch((err) => {
    console.error("Protocol error:", err);
  });
});
server.listen(port, () => console.log(`listening on port ${port}`));
