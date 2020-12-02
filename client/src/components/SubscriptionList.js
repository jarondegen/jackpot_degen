import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SubscriptionList = () => {
    const { roomNames, subsArr } = useSelector(state => state.Jackpot.subs)

    return (
        <>
            <div className="sub-container">
                <h3 classlist="subscription-el" id="subscription-title" >My Card Rooms Pages</h3>
                <div className="subscription-list-container">
                        {roomNames.map((room, i) => 
                                <Link className="subscription-el subscription-links" key={room} to={`/cardrooms/${subsArr[i]}`}>{room}</Link>              
                        )}
                </div>
            </div>
        </>
    );
};

export default SubscriptionList;