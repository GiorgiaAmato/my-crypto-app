import React, {useEffect, useState} from 'react'
import { getCoinDetail } from '../../api'
import { useParams } from 'react-router-dom';

export default function CoinDetail() {
    const { coinId } = useParams();
    console.log(coinId);
    const [ coin, setCoin ] = useState();
    const fetchCoinDetail = async (id) => {
        const res = await getCoinDetail(id);
        console.log(res)
        setCoin(res.data)
    };

    useEffect(() => {
      fetchCoinDetail(coinId);
    }, [coinId]);

    return (
      <div>
        <h1>{res.data}</h1>
      </div>
    );
};
