import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CardRooms = () => {
    const [rooms, setRooms] = useState(["Lucky Lady", "San Diego"])
    
    useEffect(()=>{
        const getRooms = async () => {
            const data = await fetch('/api/cardrooms');
            const allRooms = await data.json();
            // console.log(allRooms)
            setRooms(allRooms)
        }
        getRooms()
    },[])
    return (
        <>
            <h1>Card CardRooms</h1>
            <ul>
                {rooms && rooms.map(room => 
                    <li key={room}>
                        <Link to={`/cardrooms/${room[2]}`}>{`${room[0]} - ${room[1]}`}</Link>
                    </li>
                )}
            </ul>
        </>
    );
};

export default CardRooms