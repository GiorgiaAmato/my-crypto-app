
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoinList from './CoinList';
import CoinDetail from "./CoinDetail";



class Project extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" render={(props) => <CoinList {...props} />} exact />
          <Route path="/coins/:coinId">
            <CoinDetail/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Project