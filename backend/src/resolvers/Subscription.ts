import { PubSub } from "graphql-yoga";

import { SubscriptionResolvers, Result } from "../generated/graphql-types";

const pubsub = new PubSub();
const SOMETHING_CHANGED_TOPIC = "something_changed";

export function somethingChanged(result: Result) {
  pubsub.publish(SOMETHING_CHANGED_TOPIC, { somethingChanged: result });
}

export const subscription: Required<SubscriptionResolvers> = {
  somethingChanged: {
    subscribe: () => pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC)
  }
};
export default subscription;
