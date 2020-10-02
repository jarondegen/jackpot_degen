import React, { useEffect, useState } from 'react';
import { getDetails } from '../store/CardRoom'
import { useDispatch, useSelector } from 'react-redux';
import { setChartId } from '../store/Jackpot';
import LineChart from './LineChart';
import '../css/cardroom.css';
import ReportJackpot from './ReportJackpot'
import Reviews from './Reviews';

const CardRoomDetails = ({ match }) => {
    const { id } = match.params
    const dispatch = useDispatch()
    const { cardRoom, city, state } = useSelector(state => state.CardRoom)
    const { Auth } = useSelector(state => state);
    const [added, setAdded] = useState(false)
    const { roomNames, jackpots, subsArr } = useSelector(state => state.Jackpot.subs)

    useEffect(() => {
        dispatch(getDetails(id))
        dispatch(setChartId(id))
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
        <div className="cardroom-details-page-container">
            <div className="cardroom-details-container">
                <h1 className="cardroom-details-title">{cardRoom.name}</h1>
                <h3 className="cardroom-details-location">{`${city}, ${state}`}</h3>
                <p className="cardroom-details-food">{`Serving Food: ${cardRoom.food ? 'Yes' : 'No'}`}</p>
                <button className="cardroom-details-sub-button" type="submit" onClick={handleSubmit}>
                    Add to My Card Rooms
                </button>
                {added ? <p>Added!</p> : null}
                
            </div>
            <div className="cardroom-details-chart-container">
                <LineChart props={id} />
            </div>
            <div className="cardroom-details-reviews-container">
                <Reviews props={id}/>
            </div>
        </div>
        </>
    );
};

export default CardRoomDetails;