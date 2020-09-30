import React, { useEffect } from 'react';
import { getDetails } from '../store/CardRoom'
import { useDispatch, useSelector } from 'react-redux';

const CardRoomDetails = ({ match }) => {
    const { id } = match.params
    const dispatch = useDispatch()
    const { cardRoom, city, state } = useSelector(state => state.CardRoom)
    
    useEffect(() => {
        dispatch(getDetails(id))
    }, [])
    
    console.log(cardRoom)

    return (
        <>
        <h1>{cardRoom.name}</h1>
        <h3>{`${city}, ${state}`}</h3>
        <p>{`Serving Food: ${cardRoom.food ? 'Yes' : 'No'}`}</p>
        </>
    );
};

export default CardRoomDetails;