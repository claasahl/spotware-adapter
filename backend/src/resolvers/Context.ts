import { ContextParameters } from "graphql-yoga/dist/types";
import SpotwareSession from "../spotwareSession";

const sessions: Map<string, SpotwareSession> = new Map();

export interface IContext {
  session: SpotwareSession;
}

export async function context(params: ContextParameters): Promise<IContext> {
  const uuid =
    (params.request && params.request.header("spotware-session-uuid")) || "";
  if (!sessions.has(uuid)) {
    sessions.set(uuid, SpotwareSession.forId(uuid));
  }
  const session = sessions.get(uuid) as SpotwareSession;
  return { session };
}
export default context;
