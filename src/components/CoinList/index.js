import React from "react";
import { Grid } from '@material-ui/core';
import { CoinCard } from '..CoinCard/CoinCard'
import { FilterMenu } from '..FilterMenu/FilterMenu'


class CoinList extends React.Component {

    render() {
        return (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FilterMenu
                  resetFilters={this.resetFilters}
                  fetchCoin={this.fetchCoinMarket}
                  order={this.state.order}
                  itemPerPage={this.state.itemPerPage}
                  category={this.state.category}
                  handleChange={this.handleChange}
                />
              </Grid>
        
              {this.state.coins.map((coin) => {
                return (
                  <Grid key={coin.id} item xs={12} md={6} lg={3}>
                    <CoinCard {...coin} />
                  </Grid>
                );
              })}
            </Grid>
          );
    }
}

export default CoinList;
