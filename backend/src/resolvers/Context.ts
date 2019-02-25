import { ContextParameters } from "graphql-yoga/dist/types";
import tls from "tls";
import { socket } from "../socket";

export interface IContext {
  socket?: tls.TLSSocket;
}

export async function context(params: ContextParameters): Promise<IContext> {
  if (
    params.request &&
    params.request.body.operationName === "IntrospectionQuery"
  ) {
    return {};
  }
  if (params.request) {
    return { socket: socket() };
  } else if (params.connection) {
    return { socket: socket() };
  }
  return { socket: socket() };
}
export default context;
