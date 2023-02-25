
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoinList from './CoinList';


class Project extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route>
            <CoinList />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Project