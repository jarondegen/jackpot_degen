import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setReportMade } from '../store/Jackpot'

const ReportJackpot = () => {
    const dispatch = useDispatch();
    const { id } = useSelector(state => state.Auth);
    const [roomName, setRoomName] = useState('');
    const [hit, setHit] = useState('Hit?');
    const [amount, setAmount] = useState();
    const { reportMade } = useSelector(state => state.Jackpot);
    const { roomNames } = useSelector(state => state.Jackpot.subs)

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
            // setReported(true);
            dispatch(setReportMade(true));
        }
    }

    useEffect(() => {
        if (reportMade) {
            const thanks = document.getElementById('report-form-thanks');
            thanks.setAttribute('class', 'not-hidden')
            setTimeout(()=>{
                thanks.setAttribute('class', 'hidden')
            },5000)
        }
    },[reportMade])
    
    return (
        <>
            <div className="report-jackpot-containeer">
                <h4 className="report-title" >Report A Jackpot</h4>
                    <select className="report-form-el report-form-select" value={roomName} onChange={handleRoomSelect} >
                        <option>Where?</option>
                        {roomNames.map(room =>
                            <option key={room}>{room}</option>    
                        )}
                    </select>
                    <select className="report-form-el report-form-select" name="hit" value={hit} onChange={handleHitSelect}>
                        <option value="Hit?">Hit?</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>   
                    <div className="input-icon">
                        <input className="report-form-el report-form-input" type="number" value={amount} onChange={handleAmount}/>
                        <i>$</i>
                    </div>
                    <button className="report-form-el report-form-button" onClick={handleSubmit} type="submit">Report</button>
               <p id="report-form-thanks" className="hidden">Thanks!</p>
            </div>
        </>
    );
};

export default ReportJackpot