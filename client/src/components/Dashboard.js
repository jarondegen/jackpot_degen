import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const Dashboard = () => {
    const { id } = useSelector(state => state.Auth)
    const [cardRoomNames, setCardRoomNames] = useState([])
    const [subJackpots, setSubJackpots] = useState([{hit:'', amount:0}])

   useEffect(() => {
        const getRooms = async () => {
            const response = await fetch(`/api/dashboard/${id}`);
            if (response.ok) {
                const { roomNames, jackpots } = await response.json();
                setCardRoomNames(roomNames);
                setSubJackpots(jackpots);
            }
        }
        getRooms() 
    }, [])
    
    
    return (
        <>
            <h1>Hello</h1>
            <ul>
            {cardRoomNames.map((room, i) => 
                <li key={room}>{`${room} - hit: ${subJackpots[i].hit ? subJackpots[i].hit : ''} - amount: $${subJackpots[i].amount ? subJackpots[i].amount : ''} `}</li>
            )}
            </ul>
        </>
    )
}

export default Dashboard