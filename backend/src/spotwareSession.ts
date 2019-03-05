import { TLSSocket, connect } from "tls";
import { EventEmitter } from "events";
import {
  ProtoErrorRes,
  ProtoOAErrorRes,
  ProtoMessage,
  IProtoMessage,
  ProtoPayloadType,
  ProtoOAPayloadType,
  ProtoOAGetAccountListByAccessTokenRes,
  ProtoOAGetCtidProfileByTokenRes
} from "./generated/spotware";

export class SpotwareSession {
  public id: Readonly<string>;
  public host: Readonly<string>;
  public port: Readonly<number>;
  public clientId: Readonly<string>;
  public clientSecret: Readonly<string>;
  private socket?: TLSSocket;
  private emitter: EventEmitter;

  private constructor(
    id: string,
    host: string,
    port: number,
    clientId: string,
    clientSecret: string
  ) {
    this.id = id;
    this.host = host;
    this.port = port;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.emitter = new EventEmitter();
    this.emitter.on(
      ProtoPayloadType.ERROR_RES.toString(),
      this.onProtoPayloadType__ERROR_RES
    );
    this.emitter.on("message", console.log);
  }

  public static forId(id: string): SpotwareSession {
    const host = process.env.SPOTWARE__HOST || "";
    const port = (process.env.SPOTWARE__PORT || 0) as number;
    const clientId = process.env.SPOTWARE__CLIENT_ID || "";
    const clientSecret = process.env.SPOTWARE__CLIENT_SECRET || "";
    return new SpotwareSession(id, host, port, clientId, clientSecret);
  }

  public async sendProtoMessage(properties: IProtoMessage): Promise<true> {
    if (!this.socket) {
      this.socket = await this.connect();
    }
    return new Promise<true>((resolve, reject) => {
      if (!this.socket) {
        reject("no socket!");
        return;
      }

      // construct ProtoMessage
      const pm = ProtoMessage.create(properties);
      const data = ProtoMessage.encode(pm).finish();

      // serialize length of ProtoMessage
      const length = Buffer.alloc(4);
      length.writeInt32BE(data.length, 0);
      this.socket.write(length);

      // serialize ProtoMessage
      this.socket.write(data, undefined, (error: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(true);
        }
      });
    });
  }

  private connect(): Promise<TLSSocket> {
    return new Promise<TLSSocket>((resolve, reject) => {
      const socket = connect(
        this.port,
        this.host
      );
      socket.setDefaultEncoding("binary");
      socket.setEncoding("binary");
      socket.on("data", this.onSocketData);
      socket.on("error", this.onSocketError);
      socket.on("end", this.onSocketEnd);
      socket.on("secureConnect", () => {
        if (socket.authorized) {
          resolve(socket);
        } else {
          reject(
            "the peer certificate was __NOT__ signed by one of the CAs specified when creating the tls.TLSSocket instance"
          );
        }
      });
    });
  }

  private onSocketData = (data: string) => {
    const message = Buffer.from(data, "binary");
    const length = message.readInt32BE(0);
    if (message.length - 4 === length) {
      const payload = message.slice(4);
      const pm = ProtoMessage.decode(payload);
      this.emitter.emit(pm.payloadType.toString(), pm);
      this.emitter.emit("message", pm);
    } else {
      console.log("onSocketData", message.toString("hex"));
    }
  };

  private onSocketError = () => {
    this.socket = undefined;
    console.log("onSocketError");
  };

  private onSocketEnd = () => {
    this.socket = undefined;
    console.log("onSocketEnd");
  };

  private onProtoPayloadType__ERROR_RES = (message: ProtoMessage) => {
    const TYPE = ProtoErrorRes;
    const msg = TYPE.decode(message.payload);
    this.emitter.emit(TYPE.name, msg);
    this.emitter.emit("message", msg);
  };
}
export default SpotwareSession;
