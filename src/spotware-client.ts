import tls from "tls";

import * as $spotware from "./spotware-messages";
import {
  connect as connectSocket,
  SpotwareSocket,
  writeProtoMessage
} from "./spotware-socket";

class SpotwareClient {
  public socket: SpotwareSocket;

  constructor(socket: tls.TLSSocket) {
    this.socket = socket;
  }

  public write(message: $spotware.IProtoMessage) {
    return writeProtoMessage(this.socket, message);
  }
}

export function connect(
  port: number,
  host: string,
  options?: tls.TlsOptions
): SpotwareClient {
  const socket = connectSocket(port, host, options);
  return new SpotwareClient(socket);
}
