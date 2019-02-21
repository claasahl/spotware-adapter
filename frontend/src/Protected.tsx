import * as React from "react";
import { Subscription } from "react-apollo";
import { INames, NAMES } from "./queries/names";

export const Protected = () => (
  <Subscription subscription={NAMES}>
    {({ data, loading, error }) => {
      if (loading) {
        return "Loading...";
      }
      if (error) {
        return `Error! ${error.message}`;
      }

      return (
        <div>
          <h3>Protected</h3>
          <p>
            {new Date().toISOString()}: {(data as INames).somethingChanged.id}
          </p>
        </div>
      );
    }}
  </Subscription>
);
export default Protected;
