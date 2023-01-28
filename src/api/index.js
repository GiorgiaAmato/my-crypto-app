import { ENDPOINTS } from "../constants/endpoint";
import axios from "axios";

export const getPing = () => {
    axios.get(ENDPOINTS.PING)
    .then((res) => {
        console.log('res PING', res)
    })
    .catch(err => {
        console.error('err', err)
    })
};

export const getCoinMarkets = () => {
    return axios.get(ENDPOINTS.MARKETS + `?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then((res) => {
        return res
    })
    .catch(err => {
        console.error('err MARKET', err)
    })
}
