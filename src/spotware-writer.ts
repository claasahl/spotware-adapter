import tls from "tls";
import { EventEmitter } from "events";

import * as $spotware from "./spotware-messages";
import * as messages from "./messages";
import * as util from "./spotware-utils";

type SpotwareClient = tls.TLSSocket & SpotwareEventEmitter;

interface SpotwareEventEmitter extends EventEmitter {
  addListener(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  on(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  once(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  prependListener(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  prependOnceListener(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  removeListener(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  off(
    event: "PROTO_MESSAGE",
    listener: (message: $spotware.IProtoMessage) => void
  ): this;
  removeAllListeners(event?: "PROTO_MESSAGE"): this;
  setMaxListeners(n: number): this;
  getMaxListeners(): number;
  listeners(event: "PROTO_MESSAGE"): Function[];
  rawListeners(event: "PROTO_MESSAGE"): Function[];
  emit(event: "PROTO_MESSAGE", message: $spotware.IProtoMessage): boolean;
  eventNames(): Array<string | symbol>;
  listenerCount(type: "PROTO_MESSAGE"): number;
}

function readProtoMessage(this: SpotwareClient, data: string) {
  {
    try {
      const buffer = Buffer.from(data, "binary");
      const message = util.deserialize(buffer);
      this.emit("PROTO_MESSAGE", message);
    } catch (error) {
      console.log("could not read/parse ProtoMessage", error);
    }
  }
}

function writeProtoMessage(
  socket: SpotwareClient,
  message: $spotware.IProtoMessage
) {
  const buffer = util.serialize(message);
  return socket.write(buffer, err => {
    if (err) {
      socket.emit("error", err, message);
    } else {
      socket.emit("PROTO_MESSAGE", message);
    }
  });
}

function connect(
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

const client = connect(
  5035,
  "live.ctraderapi.com"
);
client.on("PROTO_MESSAGE", message => {
  console.log(
    $spotware.ProtoPayloadType[message.payloadType] ||
      $spotware.ProtoOAPayloadType[message.payloadType]
  );
  switch (message.payloadType) {
    case $spotware.ProtoPayloadType.ERROR_RES: {
      const msg = messages.from("ERROR_RES", message);
      break;
    }
    case $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_REQ: {
      const msg = messages.from("PROTO_OA_VERSION_REQ", message);
      break;
    }
  }
});
setInterval(() => {
  const message = messages.to("HEARTBEAT_EVENT", {});
  writeProtoMessage(client, message);
}, 10000);
