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
  } catch (error) {
    socket.emit("error", error);
  }
}

function writeProtoMessage(socket: tls.TLSSocket, message: $.ProtoMessage) {
  const buffer = util.serialize(message);
  return socket.write(buffer, (err: Error) => {
    if (err) {
      socket.emit("error", err, message);
    } else {
      socket.emit("PROTO_MESSAGE", message);
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

export function connect(
  port: number,
  host: string,
  options?: tls.TlsOptions
): tls.TLSSocket {
  const socket = tls
    .connect(port, host, options)
    .setEncoding("binary")
    .setDefaultEncoding("binary");
  socket.on("data", data => readProtoMessage(socket, data));
  socket.on("PROTO_MESSAGE", message => readProtoMessages(socket, message));
  return socket;
}
