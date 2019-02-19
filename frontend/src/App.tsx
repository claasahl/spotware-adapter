import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Link, Route } from "react-router-dom";

import "./App.css";
import AuthButton from "./AuthButton";
import { client } from "./client";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Protected from "./Protected";
import Public from "./Public";

library.add(faMoneyBillAlt);

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
            <div>
              <AuthButton />
              <ul>
                <li>
                  <Link to="/public">Public Page</Link>
                </li>
                <li>
                  <Link to="/protected">Protected Page</Link>
                </li>
              </ul>
              <Route path="/public" component={Public} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/protected" component={Protected} />
            </div>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
