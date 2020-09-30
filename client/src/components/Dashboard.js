import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BiggestCurrentJackpot from './BiggestCurrentJackpot';
import { getSubs } from '../store/Jackpot';
import SubscriptionList from './SubscriptionList';
import ReportJackpot from './ReportJackpot';
import NewsFeed from './NewsFeed';

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
                {roomNames.map((room, i) => {
                    const isJackpotHit = jackpots[i].hit ? 'Yes' : 'No';
                    const lastReport = `${room} - Last Report - Hit: ${isJackpotHit} - Amount: $${jackpots[i].amount}`;
                    const firstJackpotMessage = `${room} - No reported Jackpots Yet`;
                    return (
                        <li key={room}>{jackpots[i] ? lastReport : firstJackpotMessage}</li>
                    )
                })}
            </ul>
            <SubscriptionList />
            <ReportJackpot props={{roomNames, jackpots}}/>
            <h1>Biggest Current Jackpot</h1>
            <BiggestCurrentJackpot />
            <NewsFeed />
        </>
    )
}

export default Dashboard