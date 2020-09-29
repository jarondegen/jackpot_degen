import React, { useEffect, useState } from 'react';

const BiggestCurrentJackpot = () => {
    const [big, setBig] = useState()
    
    useEffect(() => {
    const getBig = async () => {
        const data = await fetch('/api/dashboard/big');
        if (data.ok) {
            const { bigJackpot } = await data.json();
            // console.log(bigjackpot)
            setBig(bigJackpot)
        }
        console.log(big)
    }
    getBig();
    }, [])
    
    if (!big) {
        return (
            <h4>Loading</h4>
        )
    }

    return (
        <p>{`Amount: ${big.amount} @ ${big.room} in ${big.city} reported by: ${big.reporter}`}</p>
    )
}

export default BiggestCurrentJackpot