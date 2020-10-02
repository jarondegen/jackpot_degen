import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BiggestCurrentJackpot from './BiggestCurrentJackpot';
import { getSubs, setChartId, setReportMade } from '../store/Jackpot';
import SubscriptionList from './SubscriptionList';
import ReportJackpot from './ReportJackpot';
import NewsFeed from './NewsFeed';
import '../css/dashboard.css'
import LineChart from './LineChart';

const Dashboard = () => {
    const { id, userName } = useSelector(state => state.Auth);
    const dispatch = useDispatch();
    const { roomNames, jackpots, subsArr } = useSelector(state => state.Jackpot.subs)
    const { reportMade } = useSelector(state => state.Jackpot);

   useEffect(() => {
        dispatch(getSubs(id));
        dispatch(setReportMade(false));
        
    }, [reportMade])
    
    useEffect(() => {
        dispatch(setChartId(subsArr && subsArr[0]))
    }, [subsArr])
    
    const handleJackpotClick = (e) => {
        dispatch(setChartId(e.target.id))

    }

    return (
        <>
            <div className="dashboard-container">
                <h2 className="dashboard-greeting" >{`Hello ${userName},`}</h2>
                <LineChart />
                <div className="my-jackpots-div">
                        <h3 className="my-jackpot-list-title">Jackpot List</h3>
                        {roomNames.length > 0 ? roomNames.map((room, i) => {
                            const isJackpotHit = jackpots[i] && jackpots[i].hit ? 'Hit' : 'Current';//current
                            const isHitClass = jackpots[i] && jackpots[i].hit ? "jackpot-el-hit" : "jackpot-el-not-hit"
                            return (
                                <div id={jackpots[i].roomId} className={`my-jackpots-el-div ${isHitClass}`} onClick={handleJackpotClick}>
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