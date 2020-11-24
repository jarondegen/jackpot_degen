import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBig } from '../store/Jackpot';

const BiggestCurrentJackpot = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const { big } = useSelector(state => state.Jackpot)
    
    useEffect(() => {
        dispatch(getBig())
        setIsLoading(false)
    }, [dispatch])
    


    if (isLoading) {
        return (
            <h4>Loading</h4>
        );
    };

    return (
        <p>{big && `Amount: $${big.amount} @ ${big.room} in ${big.city} reported by: ${big.reporter}`}</p>
    )
}

export default BiggestCurrentJackpot