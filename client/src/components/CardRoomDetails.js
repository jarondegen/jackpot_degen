import React, { useEffect, useState } from 'react';
import { getDetails } from '../store/CardRoom'
import { useDispatch, useSelector } from 'react-redux';
import { setChartId, getSubs } from '../store/Jackpot';
import LineChart from './LineChart';
import '../css/cardroom.css';
import Reviews from './Reviews';

const CardRoomDetails = ({ match }) => {
    const { id } = match.params;
    const dispatch = useDispatch();
    const { cardRoom, city, state } = useSelector(state => state.CardRoom);
    const { Auth } = useSelector(state => state);
    const [added, setAdded] = useState(false);
    const { subsArr } = useSelector(state => state.Jackpot.subs);
    const [jpHistory, setJpHistory] = useState([]);
    const [jpReporters, setJpReporters] = useState([]);
    const [subbed, setSubbed] = useState(false);
    const [unsubbed, setUnsubbed] = useState(false);
    
    useEffect(() => {
        dispatch(getSubs(Auth.id))
        subsArr.forEach(sub => {
            if (sub == id) {
                setSubbed(true)
            }
        })   
    }, [])

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
            dispatch(getSubs(Auth.id))
            setSubbed(true)
        }
    }

    const getJackpots = async () => {
        const data = await fetch(`/api/cardrooms/${id}/jackpots`);
        if (data.ok) {
            const {hitJackpots, reporters} = await data.json();
            setJpHistory(hitJackpots);
            setJpReporters(reporters);
        }
    }
    useEffect(() => {
        getJackpots();
    },[])

    const handleUnsub = async () => {
        const data = await fetch('/api/subscriptions/delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: Auth.id, roomId: id }),
        })
        if (data.ok){
            dispatch(getSubs(Auth.id))
            setSubbed(false)
            setUnsubbed(true)
        }
    }
    return (
        <>
        <div className="cardroom-details-page-container">
            <div className="cardroom-details-container">
                <h1 className="cardroom-details-title">{cardRoom.name}</h1>
                <h3 className="cardroom-details-location">{`${city}, ${state}`}</h3>
                <p className="cardroom-details-food">{`Serving Food: ${cardRoom.food ? 'Yes' : 'No'}`}</p>
                { subbed == true ? (
                    <button className="cardroom-details-sub-button" onClick={handleUnsub}>
                        Unsubscribe
                    </button>
                    )
                :
                    <button className="cardroom-details-sub-button" type="submit" onClick={handleSubmit}>
                        Add to My Card Rooms
                    </button>
                }
                {added ? <p>Added!</p> : null}
                {unsubbed ? <p>Deleted!</p> : null}
            </div>
            <div className="cardroom-details-chart-container">
                <LineChart props={id} />
            </div>
            <div className="cardroom-hit-jackpots-container">
                <h2>{`Jackpot History for ${cardRoom.name}`}</h2>

                <div className="cardroom-hit-table-container">
                    <table className="cardroom-hit-table">
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Date Hit</th>
                                <th>Reported By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jpHistory.length > 0 && jpReporters.length > 0 && jpHistory.map((jp, i) => ( 
                                <tr key={i}>
                                    <td >
                                        {`$${jp.amount}`}
                                    </td>
                                    <td >
                                        {jp.createdAt.split(":").slice(0,1).join(":").slice(0,10)}
                                    </td>
                                    <td >
                                        {jpReporters[i].userName}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="cardroom-details-reviews-container">
                    <Reviews props={id}/>
                </div>
            </div>


            </div>
        </>
    );
};

export default CardRoomDetails;