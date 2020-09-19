import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import Faq from "./components/faq/Faq";
import history from "./history";
import "./scss/style.css";
import Terms from "./components/terms/Terms";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/faq" component={Faq} />
          <Route path="/terms" component={Terms} />

          {/* <Route render={() => <NotFound />} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
