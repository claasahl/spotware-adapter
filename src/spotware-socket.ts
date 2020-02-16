import tls from "tls";
import $ from "@claasahl/spotware-protobuf";

import * as util from "./spotware-utils";
import { ProtoMessages } from "./spotware-messages";
import readProtoMessages from "./readProtoMessages";
import writeProtoMessages from "./writeProtoMessages";

function readProtoMessage(socket: tls.TLSSocket, data: string) {
  try {
    const buffer = Buffer.from(data, "binary");
    const message = util.deserialize(buffer);
    socket.emit("PROTO_MESSAGE", message);
    socket.emit("PROTO_MESSAGE.INPUT", message);
  } catch (error) {
    // FIXME socket.emit("error", error);
  }
}

function writeProtoMessage(socket: tls.TLSSocket, message: $.ProtoMessage) {
  const buffer = util.serialize(message);
  return socket.write(buffer, (err: Error) => {
    if (err) {
      socket.emit("error", err, message);
    } else {
      socket.emit("PROTO_MESSAGE", message);
      socket.emit("PROTO_MESSAGE.OUTPUT", message);
    }
  });
}

export function write(socket: tls.TLSSocket, message: ProtoMessages) {
  writeProtoMessage(socket, {
    clientMsgId: message.clientMsgId,
    payloadType: message.payloadType,
    payload: writeProtoMessages(message)
  });
}

export declare interface SpotwareSocket extends tls.TLSSocket {
  addListener(event: string, listener: (...args: any[]) => void): this;
  addListener(event: "PROTO_MESSAGE", listener: (msg: $.ProtoMessage) => void): this;
  addListener(event: "PROTO_MESSAGE.INPUT", listener: (msg: $.ProtoMessage) => void): this;
  addListener(event: "PROTO_MESSAGE.OUTPUT", listener: (msg: $.ProtoMessage) => void): this;
  addListener(event: "PROTO_MESSAGE.*", listener: (msg: ProtoMessages) => void): this;
  addListener(event: "PROTO_MESSAGE.INPUT.*", listener: (msg: ProtoMessages) => void): this;
  addListener(event: "PROTO_MESSAGE.OUTPUT.*", listener: (msg: ProtoMessages) => void): this;

  on(event: string, listener: (...args: any[]) => void): this;
  on(event: "PROTO_MESSAGE", listener: (msg: $.ProtoMessage) => void): this;
  on(event: "PROTO_MESSAGE.INPUT", listener: (msg: $.ProtoMessage) => void): this;
  on(event: "PROTO_MESSAGE.OUTPUT", listener: (msg: $.ProtoMessage) => void): this;
  on(event: "PROTO_MESSAGE.*", listener: (msg: ProtoMessages) => void): this;
  on(event: "PROTO_MESSAGE.INPUT.*", listener: (msg: ProtoMessages) => void): this;
  on(event: "PROTO_MESSAGE.OUTPUT.*", listener: (msg: ProtoMessages) => void): this;

  once(event: string, listener: (...args: any[]) => void): this;
  once(event: "PROTO_MESSAGE", listener: (msg: $.ProtoMessage) => void): this;
  once(event: "PROTO_MESSAGE.INPUT", listener: (msg: $.ProtoMessage) => void): this;
  once(event: "PROTO_MESSAGE.OUTPUT", listener: (msg: $.ProtoMessage) => void): this;
  once(event: "PROTO_MESSAGE.*", listener: (msg: ProtoMessages) => void): this;
  once(event: "PROTO_MESSAGE.INPUT.*", listener: (msg: ProtoMessages) => void): this;
  once(event: "PROTO_MESSAGE.OUTPUT.*", listener: (msg: ProtoMessages) => void): this;

  prependListener(event: string, listener: (...args: any[]) => void): this;
  prependListener(event: "PROTO_MESSAGE", listener: (msg: $.ProtoMessage) => void): this;
  prependListener(event: "PROTO_MESSAGE.INPUT", listener: (msg: $.ProtoMessage) => void): this;
  prependListener(event: "PROTO_MESSAGE.OUTPUT", listener: (msg: $.ProtoMessage) => void): this;
  prependListener(event: "PROTO_MESSAGE.*", listener: (msg: ProtoMessages) => void): this;
  prependListener(event: "PROTO_MESSAGE.INPUT.*", listener: (msg: ProtoMessages) => void): this;
  prependListener(event: "PROTO_MESSAGE.OUTPUT.*", listener: (msg: ProtoMessages) => void): this;

  prependOnceListener(event: string, listener: (...args: any[]) => void): this;
  prependOnceListener(event: "PROTO_MESSAGE", listener: (msg: $.ProtoMessage) => void): this;
  prependOnceListener(event: "PROTO_MESSAGE.INPUT", listener: (msg: $.ProtoMessage) => void): this;
  prependOnceListener(event: "PROTO_MESSAGE.OUTPUT", listener: (msg: $.ProtoMessage) => void): this;
  prependOnceListener(event: "PROTO_MESSAGE.*", listener: (msg: ProtoMessages) => void): this;
  prependOnceListener(event: "PROTO_MESSAGE.INPUT.*", listener: (msg: ProtoMessages) => void): this;
  prependOnceListener(event: "PROTO_MESSAGE.OUTPUT.*", listener: (msg: ProtoMessages) => void): this;
}

export function connect(
  port: number,
  host: string,
  options?: tls.TlsOptions
): SpotwareSocket {
  const socket = tls
    .connect(port, host, options)
    .setEncoding("binary")
    .setDefaultEncoding("binary");
  socket.on("data", data => readProtoMessage(socket, data));
  socket.on("PROTO_MESSAGE", message => readProtoMessages(socket, message));
  socket.on("PROTO_MESSAGE.INPUT", message =>
    readProtoMessages(socket, message, "INPUT")
  );
  socket.on("PROTO_MESSAGE.OUTPUT", message =>
    readProtoMessages(socket, message, "OUTPUT")
  );
  return socket;
}
