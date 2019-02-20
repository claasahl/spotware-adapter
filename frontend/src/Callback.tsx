import { parse } from "query-string";
import * as React from "react";

export class Callback extends React.Component {
  public render() {
    const { code } = parse(location.search);
    return <p>here we go: {code}</p>;
  }
}
export default Callback;
