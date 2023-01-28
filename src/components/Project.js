import { Grid } from '@material-ui/core';
import React from 'react';
import {getPing, getCoinMarkets} from '../api/index'
import CoinCard from './CoinCard'
import FilterMenu from './FilterMenu';


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
      <Grid container spacing ={3}>
        <Grid item xs={12}>
          <FilterMenu resetFilters={this.resetFilters} fetchCoin={this.fetchCoinMarket} order={this.state.order} itemPerPage={this.state.itemPerPage} category={this.state.category} handleChange={this.handleChange}/>
        </Grid>
        
        {
          this.state.coins.map(coin => {
            return (
              <Grid key={coin.id} item xs={12} md={6} lg={3}>
                <CoinCard {...coin} />
              </Grid>
            );
          })
        }
      </Grid>
    )
  }
}
