import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

library.add(faMoneyBillAlt);

import "./App.css";
import Intro from "./Intro";

class App extends React.Component {
  public render() {
    return (
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
    );
  }
}

export default App;
