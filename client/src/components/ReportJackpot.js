import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const ReportJackpot = ({props}) => {
    const { id } = useSelector(state => state.Auth);
    const [roomName, setRoomName] = useState('');
    const [hit, setHit] = useState(true);
    const [amount, setAmount] = useState(0)
    const [reported, setReported] = useState(false)

    const handleRoomSelect = (e) => {
        setRoomName(e.target.value)
    }
    const handleHitSelect = (e) => {
        if (e.target.value === 'Yes') {
            setHit(true)
        }else setHit(false)
    }
    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const info = {reporterId: id, roomName, hit, amount};
        const res = await fetch('/api/jackpots/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info),
        })
        if (res.ok){
            setReported(true);
        }
    }
    
    return (
        <>
            <h4>Report A Jackpot</h4>
            <form onSubmit={handleSubmit}>
                <select value={roomName} onChange={handleRoomSelect} >
                    <option>Where?</option>
                    {props.roomNames.map(room =>
                        <option key={room}>{room}</option>    
                    )}
                </select>
                <label htmlFor="hit">Hit?</label>
                <select name="hit" value={hit} onChange={handleHitSelect}>
                    <option>Yes</option>
                    <option>No</option>
                </select>   
                <input type="number" placeholder="how much $$$?" value={amount} onChange={handleAmount}/>
                <button type="submit">Report</button>
            </form>
            {reported ? <p>Thanks!</p> : null}
        </>
    );
};

export default ReportJackpot