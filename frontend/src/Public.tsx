import * as React from "react";
import { Query } from "react-apollo";
import { HELLO, IHello } from "./queries/hello";

export const Public = () => (
  <Query query={HELLO} variables={{ name: "world ;-)" }}>
    {({ data, loading, error }) => {
      if (loading) {
        return "Loading...";
      }
      if (error) {
        return `Error! ${error.message}`;
      }

      return (
        <div>
          <h3>Public</h3>
          <p>{(data as IHello).hello}</p>
        </div>
      );
    }}
  </Query>
);
export default Public;
