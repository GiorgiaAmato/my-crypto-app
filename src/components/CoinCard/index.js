import React from "react";
import './style.css'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";


export default function CoinCard(props) {
  return (
    <Card className="cards" onClick={() => props.getCoinDetail(props.id)}>
      <CardActionArea>
        <CardMedia
          component="img"
          className="card-img"
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name} - {props.symbol}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            Max daily value: {props.high_24h} <br /> Min daily value:{" "}
            {props.low_24h}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

