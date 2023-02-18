
import React from 'react';
import {getPing, getCoinMarkets} from '../api/index'
import { BrowserRouter as Router,  Switch, Route, Link } from "react-router-dom";


const INITIAL_STATE = {
  coins: [],
  vs_currency: 'eur',
  sparkline: false,
  page: '1',
  order:'market_cap_desc',
  itemPerPage: '25',
  category: '',
}

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    }
  }

  fetchCoinMarket = async () => {
    const { coins, category, itemPerPage, order, sparkline, page, vs_currency } = this.state;
    const params = {
      ...(category && { category }),
      ...(itemPerPage && { itemPerPage }),
      ...(order && { order }),
      ...(page && { page }),
      ...(vs_currency && { vs_currency }),
      ...(sparkline !== undefined && { sparkline })
    }
    const res = await getCoinMarkets(params);
    this.setState({coins: res.data})
  };

  componentDidMount() {
    this.fetchCoinMarket();
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  };

  resetFilters = () => {
    this.setState(INITIAL_STATE, () => {
      this.fetchCoinMarket();
    });
  };

  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"> </Link>
            </li>
            <li>
              <Link to="/"> </Link>
            </li>
            <li>
              <Link to="/"> </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">

          </Route>
          <Route path="/">

          </Route>
          <Route path="/">

          </Route>
        </Switch>
      </div>
    </Router>



    )
  }
}
