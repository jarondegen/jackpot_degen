import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/cardrooms.css';

const CardRooms = () => {
    const [rooms, setRooms] = useState(["Lucky Lady", "San Diego"])
    
    useEffect(()=>{
        const getRooms = async () => {
            const data = await fetch('/api/cardrooms');
            const allRooms = await data.json();
            setRooms(allRooms)
        }
        getRooms()
    },[])
    return (
        <>
            <div className="card-rooms-page-container">
                <h1 className="card-rooms-title" >Card Rooms</h1>
                <div className="card-rooms-table-container">
                    <table className="card-rooms-table">
                        <tr></tr>
                            <th>Card Room</th>
                            <th>City</th>
                            {rooms && rooms.map(room => 
                                <tr>
                                    <td key={room}>
                                        <a className="card-room-table-links" href={`/cardrooms/${room[2]}`}>{room[0]}</a>
                                    </td>
                                    <td>
                                        {room[1]}
                                    </td>
                                </tr>
                            )}
                    </table>
                </div>
            </div>
        </>
    );
};

export default CardRooms