import { TLSSocket } from "tls";
import { Gateway } from "./gateway";
import { Response } from "./responses/ProtoOAVersionRes";

export function create(socket: TLSSocket): Gateway {
  const gateway = new Gateway(socket);
  gateway.emitter.on("message", (data: any) => console.log("-->", data));
  registerResponseHandlers(gateway);
  return gateway;
}
function registerResponseHandlers(gateway: Gateway) {
  new Response().register(gateway);
}
