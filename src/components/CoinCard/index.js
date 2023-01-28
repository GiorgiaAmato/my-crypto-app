import React from "react";
import './style.css'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

// {
//     "id": "bitcoin",
//     "symbol": "btc",
//     "name": "Bitcoin",
//     "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
//     "current_price": 15442.28,
//     "market_cap": 297266713599,
//     "market_cap_rank": 1,
//     "fully_diluted_valuation": 324322550149,
//     "total_volume": 13892127161,
//     "high_24h": 15530.89,
//     "low_24h": 15365.78,
//     "price_change_24h": -22.950133205091333,
//     "price_change_percentage_24h": -0.1484,
//     "market_cap_change_24h": -734880047.0801392,
//     "market_cap_change_percentage_24h": -0.2466,
//     "circulating_supply": 19248125,
//     "total_supply": 21000000,
//     "max_supply": 21000000,
//     "ath": 59717,
//     "ath_change_percentage": -74.13806,
//     "ath_date": "2021-11-10T14:24:11.849Z",
//     "atl": 51.3,
//     "atl_change_percentage": 30006.06756,
//     "atl_date": "2013-07-05T00:00:00.000Z",
//     "roi": null,
//     "last_updated": "2022-12-31T10:45:02.769Z"
//   }


function CoinCard(props) {
  return (
    <Card className='cards'>
      <CardActionArea>
        <CardMedia
          component='img'
          className="card-img"
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.name} - {props.symbol}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
          Max daily value: {props.high_24h} <br/>  Min daily value: {props.low_24h}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CoinCard;
