import React from "react";
import Head from "./header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contactus from "./contactus";
import Home from "./body";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/contactus">
            <Contactus />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* <Test/> */}
    </div>
  );
}

export default App;
