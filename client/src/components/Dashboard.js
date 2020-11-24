import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import BiggestCurrentJackpot from './BiggestCurrentJackpot';
import { getSubs, setChartId, setReportMade } from '../store/Jackpot';
import SubscriptionList from './SubscriptionList';
import ReportJackpot from './ReportJackpot';
import NewsFeed from './NewsFeed';
import '../css/dashboard.css'
import LineChart from './LineChart';
import HistoryTab from './HistoryTab';
import AccountTab from './AccountTab';

const Dashboard = () => {
    const { id, userName } = useSelector(state => state.Auth);
    const dispatch = useDispatch();
    const { roomNames, jackpots, subsArr } = useSelector(state => state.Jackpot.subs)
    const { reportMade } = useSelector(state => state.Jackpot);
    const [view, setView] = useState(1)

   useEffect(() => {
        dispatch(getSubs(id));
        dispatch(setReportMade(false));
        
    }, [dispatch, reportMade, id])
    
    useEffect(() => {
        dispatch(setChartId(subsArr && subsArr[0]))
    }, [dispatch, subsArr])
    
    const handleJackpotClick = (e) => {
        dispatch(setChartId(e.target.id))

    }

    const handleTabClick = (e) => {
        setView(e.target.id)
    }

    return (
        <>
            <div className="dashboard-page-container">
                <div className="dashboard-container">
                    <div className="dashboard-main">
                        <h2 className="dashboard-greeting" >{`Hello ${userName},`}</h2>
                        <div className="tab-container">
                            <div onClick={handleTabClick} id="1" className="tab-container-chart tab-tab">
                                <p id="1">Chart</p>
                            </div>
                            <div onClick={handleTabClick} id="2" className="tab-container-history tab-tab">
                                <p id="2">History</p>
                            </div>
                            <div onClick={handleTabClick} id="3" className="tab-container-account tab-tab">
                                <p id="3">Account</p>
                            </div>
                        </div>
                        <div className="tabs-content-container">
                            {view === "1" && <LineChart className="the-line-chat"/>}
                            {view === "2" && <HistoryTab />}
                            {view === "3" && <AccountTab />}
                        </div>
                    </div>
                    <div className="my-jackpots-div">
                            <h3 className="my-jackpot-list-title">Jackpot List</h3>
                            {roomNames.length > 0 ? roomNames.map((room, i) => {
                                const isJackpotHit = jackpots[i] && jackpots[i].hit ? 'Hit' : 'Current';//current
                                const isHitClass = jackpots[i] && jackpots[i].hit ? "jackpot-el-hit" : "jackpot-el-not-hit"
                                return (
                                    <div key={jackpots[i].roomId} id={jackpots[i].roomId} className={`my-jackpots-el-div ${isHitClass}`} onClick={handleJackpotClick}>
                                        <p className="my-jackports-room-name" id={jackpots[i].roomId}>{room}</p>
                                        <p className="my-jackports-room-hit" id={jackpots[i].roomId}>{isJackpotHit}</p>
                                        <p className="my-jackports-room-amount" id={jackpots[i].roomId}>
                                            {jackpots[i] && `$${jackpots[i].amount}`}
                                        </p>
                                    </div>
                                )
                            })
                            :
                            (
                                <div className="no-rooms-container">
                                    <p>You are not subscribed to any card rooms yet..</p>
                                    <a className="no-rooms-link" href="/cardrooms">
                                        Find rooms here.
                                    </a>
                                </div>
                            )
                            }
                        <img alt="JPD Logo" className="my-jackpots-logo" src="../images/logo.png" />
                    </div>
                    <SubscriptionList className="subscription-container"/>
                    <ReportJackpot className="report-jackpot" props={{roomNames, jackpots}}/>
                    <div className="big-jackpot-container">
                        <h2 className="big-jackpot-header">Biggest Current Jackpot</h2>
                        <BiggestCurrentJackpot />
                    </div>
                    <NewsFeed />
                </div>
            </div>
        </>
    )
}

export default Dashboard