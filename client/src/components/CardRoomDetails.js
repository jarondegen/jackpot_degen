import React, { useEffect, useState } from 'react';
import { getDetails } from '../store/CardRoom'
import { useDispatch, useSelector } from 'react-redux';

const CardRoomDetails = ({ match }) => {
    const { id } = match.params
    const dispatch = useDispatch()
    const { cardRoom, city, state } = useSelector(state => state.CardRoom)
    const { Auth } = useSelector(state => state);
    const [added, setAdded] = useState(false)

    useEffect(() => {
        dispatch(getDetails(id))
    }, [])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await fetch('/api/subscriptions/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: Auth.id, roomId: id }),
        })
        if (data.ok) {
            setAdded(true)
        }
    }

    return (
        <>
        <h1>{cardRoom.name}</h1>
        <h3>{`${city}, ${state}`}</h3>
        <p>{`Serving Food: ${cardRoom.food ? 'Yes' : 'No'}`}</p>
        <form onSubmit={handleSubmit}> 
            <button type="submit">Add to My Card Rooms</button>
        </form>
        {added ? <p>Added!</p> : null}
        </>
    );
};

export default CardRoomDetails;