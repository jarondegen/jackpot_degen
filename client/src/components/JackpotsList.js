import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const JackpotList = ({roomNames, jackpots, handleJackpotClick, sparkNumbers}) => {
    return (
        <>
        {roomNames.length > 0 ? roomNames.map((room, i) => {
            const isJackpotHit = jackpots[i] && jackpots[i].hit ? 'Hit' : 'Current';//current
            const isHitClass = jackpots[i] && jackpots[i].hit ? "jackpot-el-hit" : "jackpot-el-not-hit"
            return (
                <div key={jackpots[i].roomId} id={jackpots[i].roomId} className={`my-jackpots-el-div ${isHitClass}`} onClick={handleJackpotClick}>
                    <p className="my-jackports-room-name" id={jackpots[i].roomId}>{room}</p>
                    <p className="my-jackports-room-hit" id={jackpots[i].roomId}>{isJackpotHit}</p>
                    <div>
                        <Sparklines data={sparkNumbers[i]} svgWidth={100} svgHeight={30}>
                            <SparklinesLine style={{stroke:jackpots[i].hit ? "red" : "green", strokeWidth:3, fill:jackpots[i].hit ? "red" : "green"}}  />
                        </Sparklines>
                    </div>
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
        </>
    );
};

export default JackpotList