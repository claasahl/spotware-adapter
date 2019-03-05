import { TLSSocket } from "tls";
import { Gateway } from "./gateway";
import registerResponseHandlers from "./responses";
import registerEventHandlers from "./events";

export function create(socket: TLSSocket): Gateway {
  const gateway = new Gateway(socket);
  gateway.emitter.on("message", (data: any) => console.log("-->", data));
  registerResponseHandlers(gateway.emitter);
  registerEventHandlers(gateway.emitter);
  return gateway;
}
