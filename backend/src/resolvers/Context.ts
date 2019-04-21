import { ContextParameters } from "graphql-yoga/dist/types";
import { SpotwareSocket, connect } from "@claasahl/spotware-connect-api";

const gateways: Map<string, SpotwareSocket> = new Map();

export interface IContext {
  gateway: SpotwareSocket;
}

export async function context(params: ContextParameters): Promise<IContext> {
  const uuid =
    (params.request && params.request.header("spotware-session-uuid")) || "";
  if (!gateways.has(uuid)) {
    const port = Number(process.env.SPOTWARE__PORT);
    const host = String(process.env.SPOTWARE__HOST);
    const socket = connect(
      port,
      host
    );
    gateways.set(uuid, socket);
  }
  const gateway = gateways.get(uuid) as SpotwareSocket;
  return { gateway };
}
export default context;
