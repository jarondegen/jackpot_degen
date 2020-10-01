import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SubscriptionList = () => {
    const { roomNames, jackpots, subsArr } = useSelector(state => state.Jackpot.subs)

    return (
        <>
            <div className="subscription-container">
                <h3 classlist="subscription-el subscription-title" >My Card Rooms</h3>
                    {roomNames.map((room, i) => 
                            <Link className="subscription-el subscription-links" key={room} to={`/cardrooms/${subsArr[i]}`}>{room}</Link>              
                    )}
            </div>
        </>
    );
};

export default SubscriptionList;