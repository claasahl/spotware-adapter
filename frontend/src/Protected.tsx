import * as React from "react";
import { OnSubscriptionDataOptions } from "react-apollo";
import Names, { INames } from "./queries/names";

interface IEvent {
  id: string;
  date: Date;
}
interface IState {
  data: IEvent[];
}

export class Protected extends React.PureComponent<never, IState> {
  public state: IState = {
    data: []
  };

  public render() {
    return (
      <div>
        <Names onEvent={this.onEvent} />
        <h3>Protected</h3>
        {!this.state.data.length && <p>no data, yet</p>}
        {this.state.data.map(data => (
          <p key={data.date.valueOf()}>
            {data.date.toISOString()}: {data.id}
          </p>
        ))}
      </div>
    );
  }

  private onEvent = (event: OnSubscriptionDataOptions<INames>) => {
    // const { data, error, loading } = event.subscriptionData;
    const date = new Date();
    const item = { id: JSON.stringify(event.subscriptionData), date };
    this.setState(state => ({ data: [item, ...state.data] }));
    // if (loading) {
    //   const item = { id: "loading", date };
    //   this.setState(state => ({ data: [item, ...state.data] }));
    // } else if (error) {
    //   const item = { id: `Error! ${error.message}`, date };
    //   this.setState(state => ({ data: [item, ...state.data] }));
    // } else if (data) {
    //   const item = { id: data.somethingChanged.id, date };
    //   this.setState(state => ({ data: [item, ...state.data] }));
    // } else {
    //   const item = { id: "?????", date };
    //   this.setState(state => ({ data: [item, ...state.data] }));
    // }
  };
}
export default Protected;
