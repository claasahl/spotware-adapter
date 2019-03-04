import { TLSSocket } from "tls";
import { Gateway } from "./gateway";
import registerResponseHandlers from "./responses";

export function create(socket: TLSSocket): Gateway {
  const gateway = new Gateway(socket);
  gateway.emitter.on("message", (data: any) => console.log("-->", data));
  registerResponseHandlers(gateway.emitter);
  return gateway;
}
