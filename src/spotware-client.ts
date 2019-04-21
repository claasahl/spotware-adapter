import tls from "tls";

import * as $spotware from "./spotware-messages";
import * as util from "./spotware-utils";
import SpotwarePayloadTypes from "./spotware-payload-types";
import SpotwareEventEmitter from "./spotware-event-emitter";

type SpotwareClient = tls.TLSSocket & SpotwareEventEmitter;

export function toPayloadType(
  payloadType: $spotware.ProtoPayloadType | $spotware.ProtoOAPayloadType
): SpotwarePayloadTypes {
  return (
    $spotware.ProtoPayloadType[payloadType] ||
    ($spotware.ProtoOAPayloadType[payloadType] as any)
  );
}

function readProtoMessage(this: SpotwareClient, data: string) {
  {
    try {
      const buffer = Buffer.from(data, "binary");
      const message = util.deserialize(buffer);
      const payloadType = toPayloadType(message.payloadType);
      this.emit("PROTO_MESSAGE", message, payloadType);
    } catch (error) {
      console.log("could not read/parse ProtoMessage", error);
    }
  }
}

export function writeProtoMessage(
  socket: SpotwareClient,
  message: $spotware.IProtoMessage
) {
  const payloadType = toPayloadType(message.payloadType);
  const buffer = util.serialize(message);
  return socket.write(buffer, err => {
    if (err) {
      socket.emit("error", err, message, payloadType);
    } else {
      socket.emit("PROTO_MESSAGE", message, payloadType);
    }
  });
}

export function connect(
  port: number,
  host: string,
  options?: tls.TlsOptions
): SpotwareClient {
  const socket = tls
    .connect(port, host, options)
    .setEncoding("binary")
    .setDefaultEncoding("binary")

    // tls.TLSSocket
    .on("OCSPResponse", response => console.log("OCSPResponse", response))
    .on("secureConnect", () => console.log("secureConnect"))
    .on("session", session => console.log("session", session))

    // net.Socket
    .on("close", (had_error: boolean) => console.log("close", had_error))
    .on("connect", () => console.log("connect"))
    .on("data", (data: Buffer) => console.log("data", data))
    .on("drain", () => console.log("drain"))
    .on("end", () => console.log("end"))
    .on("error", (err: Error) => console.log("error", err))
    .on(
      "lookup",
      (err: Error, address: string, family: string | number, host: string) =>
        console.log("lookup", err, address, family, host)
    )
    .on("timeout", () => console.log("timeout"))

    // "Spotware"
    .on("data", readProtoMessage);
  return socket;
}
