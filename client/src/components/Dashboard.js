import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BiggestCurrentJackpot from './BiggestCurrentJackpot';
import { getSubs } from '../store/Jackpot';
import SubscriptionList from './SubscriptionList';
import ReportJackpot from './ReportJackpot';

const Dashboard = () => {
    const { id, userName } = useSelector(state => state.Auth);
    const dispatch = useDispatch();
    const { roomNames, jackpots } = useSelector(state => state.Jackpot.subs)

   useEffect(() => {
        dispatch(getSubs(id))
    }, [])
    
    
    return (
        <>
            <h1>{`Hello ${userName}`}</h1>
            <ul>
            {roomNames.map((room, i) => 
                <li key={room}>{`${room} - hit: ${jackpots[i].hit ? jackpots[i].hit : ''} - amount: $${jackpots[i].amount ? jackpots[i].amount : ''} `}</li>
            )}
            </ul>
            <SubscriptionList />
            <ReportJackpot props={roomNames, jackpots}/>
            <h1>Biggest Current Jackpot</h1>
            <BiggestCurrentJackpot />
        </>
    )
}

export default Dashboard