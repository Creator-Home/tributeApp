import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import TributePage from "./components/TributePage";
import Error from './components/Error'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/tribute" component={TributePage} />
          <Route component={Error} />
        </Switch>
      </Router>
  );
}

export default App;
