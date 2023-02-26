import React, {useEffect, useState} from 'react'
import { getCoinDetail } from '../../api'
import { useParams } from 'react-router-dom';
import "./style.css";


const CoinDetail = () => {
    const { coinId } = useParams();
    const [ coin, setCoin ] = useState();

    const fetchCoinDetail = async (id) => {
        const res = await getCoinDetail(id);
        console.log('res coindetail', res);
        setCoin(res.data);
    };

    useEffect((
      
    ) => {
      fetchCoinDetail(coinId);
    }, [coinId]);

    return (
      <div className="container-detail">
        <h1>{console.log()}</h1>
      </div>
    );
};

export default CoinDetail;