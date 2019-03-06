import { EventEmitter } from "events";
import { TLSSocket } from "tls";
import { IProtoMessage, ProtoMessage } from "../generated/spotware";

export const PROTO_MESSAGE_EVENT = "ProtoMessage";

export class Gateway {
  public emitter: Readonly<EventEmitter>;
  private socket: Readonly<TLSSocket>;

  constructor(socket: TLSSocket) {
    this.emitter = socket;
    this.socket = socket;

    this.emitter.on("data", this.onData);
  }

  public writeProtoMessage = (
    message: IProtoMessage | (() => IProtoMessage),
    callback?: Function
  ) => {
    const msg = typeof message === "function" ? message() : message;
    const pm = ProtoMessage.create(msg);
    const data = ProtoMessage.encode(pm).finish();
    this.writeMessage(data, callback);
  };

  private writeMessage(data: Uint8Array, callback?: Function) {
    const length = Buffer.alloc(4);
    length.writeInt32BE(data.length, 0);
    this.socket.write(length);
    this.socket.write(data, undefined, callback);
  }

  private onData = (data: string) => {
    const INT_SIZE = 4;
    const message = Buffer.from(data, "binary");
    const length = message.readInt32BE(0);
    if (message.length - INT_SIZE >= length) {
      const payload = message.slice(INT_SIZE, length + INT_SIZE);
      const msg = ProtoMessage.decode(payload);
      const pm = ProtoMessage.toObject(msg);
      this.emitter.emit(`${pm.payloadType}.${PROTO_MESSAGE_EVENT}`, pm);
      this.emitter.emit(PROTO_MESSAGE_EVENT, pm);
    } else {
      console.log("consider pausing stream until readableLength >= length");
      console.log("onSocketData", message.toString("hex"));
    }
  };
}
