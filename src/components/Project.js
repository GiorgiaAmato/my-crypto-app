import { Grid } from '@material-ui/core';
import React from 'react';
import {getPing, getCoinMarkets} from '../api/index'
import CoinCard from './CoinCard'
import FilterMenu from './FilterMenu';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: []
    }
  }

  async fetchCoinMarket() {
    const res = await getCoinMarkets();
    this.setState({coins: res.data})
  }

  componentDidMount() {
    this.fetchCoinMarket();
    getPing();
  }

  render() {
    return (
      <Grid container spacing ={3}>
        <Grid item xs={12}>
          <FilterMenu />
        </Grid>
        
        {
          this.state.coins.map(coin => {
            return (
              <Grid item xs={12} md={6} lg={3}>
                <CoinCard {...coin} key={coin.id}/>
              </Grid>
            );
          })
        }
      </Grid>
    )
  }
}
