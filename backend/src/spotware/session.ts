import { TLSSocket } from "tls";
import { Gateway, PROTO_MESSAGE_EVENT } from "./gateway";
import registerRequestHandlers from "./requests";
import registerResponseHandlers from "./responses";
import registerEventHandlers from "./events";

export function create(socket: TLSSocket): Gateway {
  const gateway = new Gateway(socket);
  gateway.emitter.on(PROTO_MESSAGE_EVENT, (data: any) =>
    console.log("-->", data)
  );
  registerRequestHandlers(gateway);
  registerResponseHandlers(gateway.emitter);
  registerEventHandlers(gateway.emitter);
  return gateway;
}
