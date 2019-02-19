import gql from "graphql-tag";
import { client } from "./client";

const QUERY = gql`
  query {
    isAuthenticated @client
  }
`;

export const fakeAuth = {
  isAuthenticated() {
    const data: any = client.readQuery({ query: QUERY });
    return data && data.isAuthenticated;
  },
  authenticate(cb: (...args: any[]) => void) {
    client.writeData({ data: { isAuthenticated: true } });
    setTimeout(cb, 100); // fake async
  },
  signout(cb: (...args: any[]) => void) {
    client.writeData({ data: { isAuthenticated: false } });
    setTimeout(cb, 100);
  }
};
