import { connect as tlsConnect, TLSSocket, ConnectionOptions } from "tls";

export function connect(
  options?: ConnectionOptions,
  secureConnectListener?: () => void
): TLSSocket {
  const host = process.env.SPOTWARE__HOST || "";
  const port = (process.env.SPOTWARE__PORT || 0) as number;
  const socket = tlsConnect(port, host, options, secureConnectListener);
  socket.setEncoding("binary");
  socket.setDefaultEncoding("binary");
  return socket;
}
