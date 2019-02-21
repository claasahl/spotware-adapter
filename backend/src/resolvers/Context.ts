import { ContextParameters } from "graphql-yoga/dist/types";

export interface IContext {
  test: string;
}

export async function context(params: ContextParameters): Promise<IContext> {
  if (params.request) {
    return { test: "with request" };
  } else if (params.connection) {
    return { test: "with connection" };
  }
  return { test: "with [nothin']" };
}
export default context;
