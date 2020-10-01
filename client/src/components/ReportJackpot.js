import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const ReportJackpot = ({props}) => {
    const { id } = useSelector(state => state.Auth);
    const [roomName, setRoomName] = useState('');
    const [hit, setHit] = useState('Hit?');
    const [amount, setAmount] = useState(0)
    const [reported, setReported] = useState(false)

    const handleRoomSelect = (e) => {
        setRoomName(e.target.value)
    }
    const handleHitSelect = (e) => {
        setHit(e.target.value)
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
            <div className="report-jackpot-containeer">
                <h4 className="report-title" >Report A Jackpot</h4>
                <form className="report-form-form" onSubmit={handleSubmit}>
                    <select className="report-form-el" value={roomName} onChange={handleRoomSelect} >
                        <option>Where?</option>
                        {props.roomNames.map(room =>
                            <option key={room}>{room}</option>    
                        )}
                    </select>
                    <select className="report-form-el" name="hit" value={hit} onChange={handleHitSelect}>
                        <option value={false}>Hit?</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>   
                    <input className="report-form-el report-form-input" type="number" placeholder="how much $$$?" value={amount} onChange={handleAmount}/>
                    <button className="report-form-el report-form-button" type="submit">Report</button>
                </form>
                {reported ? <p>Thanks!</p> : null}
            </div>
        </>
    );
};

export default ReportJackpot