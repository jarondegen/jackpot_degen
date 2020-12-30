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
import JackpotList from './JackpotsList';
import OddsCalc from './OddsCalc';

const Dashboard = () => {
    const { id, userName } = useSelector(state => state.Auth);
    const dispatch = useDispatch();
    const { roomNames, jackpots, subsArr, sparkNumbers } = useSelector(state => state.Jackpot.subs)
    const { reportMade } = useSelector(state => state.Jackpot);
    const [view, setView] = useState("1")

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
                            <div onClick={handleTabClick} id="1" className={`tab-container-chart tab-tab ${view === '1' ? 'viewing' : null}}`}>
                                <p className={`${view === '1' ? 'viewing' : null} dash-chart-link`} id="1">Chart</p>
                            </div>
                            <div onClick={handleTabClick} id="2" className={`tab-container-chart tab-tab ${view === '2' ? 'viewing' : null}`}>
                                <p id="2">History</p>
                            </div>
                            <div onClick={handleTabClick} id="4" className={`desktop-odds-calc-link tab-container-chart tab-tab ${view === '4' ? 'viewing' : null}`}>
                                <p id="4">Odds Calculator</p>
                            </div>
                            <div onClick={handleTabClick} id="3" className={`tab-container-chart tab-tab ${view === '3' ? 'viewing' : null}`}>
                                <p id="3">Account</p>
                            </div>
                        </div>
                        <div className="tabs-content-container">
                            {view === "1" && <LineChart className="the-line-chat"/>}
                            {view === "2" && <HistoryTab />}
                            {view === "3" && <AccountTab />}
                            {view === "4" && <OddsCalc />}
                        </div>
                    </div>
                    <div className="my-jackpots-div">
                            <h3 className="my-jackpot-list-title">Jackpot List</h3>
                            <JackpotList sparkNumbers={sparkNumbers} handleJackpotClick={handleJackpotClick} jackpots={jackpots }roomNames={roomNames}/>
                        <img alt="JPD Logo" className="my-jackpots-logo" src="../images/logo.png" />
                    </div>
                    <div className="mobile-jackports-list">
                        <JackpotList sparkNumbers={sparkNumbers} handleJackpotClick={handleJackpotClick} jackpots={jackpots }roomNames={roomNames}/>    
                    </div>
                    <SubscriptionList className="subscription-container"/>
                    <ReportJackpot className="report-jackpot" props={{roomNames, jackpots}}/>
                    <div className="big-jackpot-container">
                        <h2 className="big-jackpot-header">Biggest Current Jackpot</h2>
                        <BiggestCurrentJackpot />
                    </div>
                    {/* <NewsFeed /> */}
                </div>
            </div>
        </>
    )
}

export default Dashboard