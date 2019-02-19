import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApolloClient from "apollo-boost";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Intro from "./Intro";

library.add(faMoneyBillAlt);

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <FontAwesomeIcon icon={faMoneyBillAlt} size="4x" />
              <h1 className="App-title">Connect Now</h1>
              <h3>A Sample Application for Exploring Spotware's Open API v2</h3>
            </header>
            <Route to="/" component={Intro} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
