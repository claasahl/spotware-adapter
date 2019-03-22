import { ContextParameters } from "graphql-yoga/dist/types";
import {
  ProtoMessageSocket,
  connect
} from "@claasahl/spotware-connect-api/build/spotware-socket";

const gateways: Map<string, ProtoMessageSocket> = new Map();

export interface IContext {
  gateway: ProtoMessageSocket;
}

export async function context(params: ContextParameters): Promise<IContext> {
  const uuid =
    (params.request && params.request.header("spotware-session-uuid")) || "";
  if (!gateways.has(uuid)) {
    const socket = connect();
    const gateway = new ProtoMessageSocket(socket);
    gateways.set(uuid, gateway);
  }
  const gateway = gateways.get(uuid) as ProtoMessageSocket;
  return { gateway };
}
export default context;
