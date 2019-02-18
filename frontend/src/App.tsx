import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

library.add(faMoneyBillAlt);

import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <FontAwesomeIcon icon={faMoneyBillAlt} size="4x" />
          <h1 className="App-title">Connect Now</h1>
          <h3>A Sample Application for Exploring Spotware's Open API v2</h3>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
