import { ContextParameters } from "graphql-yoga/dist/types";
import { create } from "../spotware/session";
import { Gateway } from "../spotware/gateway";
import { connect } from "../spotware/socket";

const gateways: Map<string, Gateway> = new Map();

export interface IContext {
  gateway: Gateway;
}

export async function context(params: ContextParameters): Promise<IContext> {
  const uuid =
    (params.request && params.request.header("spotware-session-uuid")) || "";
  if (!gateways.has(uuid)) {
    const socket = connect();
    gateways.set(uuid, create(socket));
  }
  const gateway = gateways.get(uuid) as Gateway;
  return { gateway };
}
export default context;
