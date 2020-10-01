import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BiggestCurrentJackpot from './BiggestCurrentJackpot';
import { getSubs } from '../store/Jackpot';
import SubscriptionList from './SubscriptionList';
import ReportJackpot from './ReportJackpot';
import NewsFeed from './NewsFeed';
import '../css/dashboard.css'

const Dashboard = () => {
    const { id, userName } = useSelector(state => state.Auth);
    const dispatch = useDispatch();
    const { roomNames, jackpots } = useSelector(state => state.Jackpot.subs)

   useEffect(() => {
        dispatch(getSubs(id))
    }, [])
    
    return (
        <>
            <div className="dashboard-container">
                <h2 className="dashboard-greeting" >{`Hello ${userName},`}</h2>
                <div className="my-jackpots-div">
                        {roomNames.map((room, i) => {
                            const isJackpotHit = jackpots[i].hit ? 'Yes' : 'No';
                            const lastReport = `${room} -- Hit? -- ${isJackpotHit} -- Amount: $${jackpots[i].amount}`;
                            const firstJackpotMessage = `${room} - No reported Jackpots Yet`;
                            const isHitClass = jackpots[i].hit ? "jackpot-el-hit" : "jackpot-el-not-hit"
                            return (
                                <div className="my-jackpots-el-div">
                                    <a className={`my-jackpots-el ${isHitClass}`} href={`/cardrooms/${jackpots[i].roomId}`}>{jackpots[i] ? lastReport : firstJackpotMessage}</a>
                                </div>
                            )
                        })}
                    <img className="my-jackpots-logo" src="../images/logo.png" />
                </div>
                <SubscriptionList className="subscription-container"/>
                <ReportJackpot className="report-jackpot" props={{roomNames, jackpots}}/>
                <div className="big-jackpot-container">
                    <h2 className="big-jackpot-header">Biggest Current Jackpot</h2>
                    <BiggestCurrentJackpot />
                </div>
                <NewsFeed />
            </div>
        </>
    )
}

export default Dashboard