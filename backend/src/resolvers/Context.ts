import { ContextParameters } from "graphql-yoga/dist/types";
import SpotwareSession from "../spotwareSession";
import { create } from "../spotware/session";
import { Gateway } from "../spotware/gateway";
import { connect } from "../spotware/socket";

const sessions: Map<string, SpotwareSession> = new Map();
const gateways: Map<string, Gateway> = new Map();

export interface IContext {
  session: SpotwareSession;
  gateway: Gateway;
}

export async function context(params: ContextParameters): Promise<IContext> {
  const uuid =
    (params.request && params.request.header("spotware-session-uuid")) || "";
  if (!sessions.has(uuid)) {
    sessions.set(uuid, SpotwareSession.forId(uuid));
  }
  if (!gateways.has(uuid)) {
    const socket = connect();
    gateways.set(uuid, create(socket));
  }
  const session = sessions.get(uuid) as SpotwareSession;
  const gateway = gateways.get(uuid) as Gateway;
  return { session, gateway };
}
export default context;
