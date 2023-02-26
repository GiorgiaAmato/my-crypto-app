import React, {useEffect, useState} from 'react'
import { getCoinDetail } from '../../api'
import { useParams } from 'react-router-dom';
import "./style.css";


const CoinDetail = () => {
    const { coinId } = useParams();
    console.log('coinId', coinId);
    const [ coin, setCoin ] = useState();
    const fetchCoinDetail = async (id) => {
        const res = await getCoinDetail(id);
        console.log('res coindetail', res);
        setCoin(res.data);
    };

    useEffect(() => {
      fetchCoinDetail(coinId);
    }, [coinId]);

    return (
      <div className="container-detail">
        <h1>{}</h1>
      </div>
    );
};

export default CoinDetail;