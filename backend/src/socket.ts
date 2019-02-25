import tls from "tls";
import { somethingChanged } from "./resolvers/Subscription";
import { Direction } from "./generated/graphql-types";
import spotware from "./generated/spotware";

let mySocket: tls.TLSSocket | undefined = undefined;

export function socket(): tls.TLSSocket {
  if (mySocket) {
    return mySocket;
  }
  const host = process.env.SPOTWARE__HOST || "";
  const port = (process.env.SPOTWARE__PORT || 0) as number;
  const socket = tls.connect(port, host, undefined, () => {
    const id =
      "client connected: " +
      (socket.authorized ? "authorized" : "unauthorized");
    somethingChanged({ direction: Direction.None, id });
  });
  socket.setDefaultEncoding("binary");
  socket.setEncoding("binary");
  socket.on("data", data => {
    const message = Buffer.from(data, "binary");
    const length = message.readInt32BE(0);
    if (message.length - 4 === length) {
      const PM = spotware.ProtoMessage;
      const payload = message.slice(4);
      const pm = PM.decode(payload);
      const id = JSON.stringify(PM.toObject(pm));
      somethingChanged({ direction: Direction.ToClient, id });
    } else {
      somethingChanged({
        direction: Direction.ToClient,
        id: message.toString("hex")
      });
    }
  });
  socket.on("error", error => {
    mySocket = undefined;
    if (socket) {
      socket.end();
    }
    somethingChanged({ direction: Direction.None, id: error });
  });
  socket.on("end", () => {
    mySocket = undefined;
    somethingChanged({ direction: Direction.None, id: "the end!" });
  });
  console.log("(re-)created socket!");
  mySocket = socket;
  return socket;
}
