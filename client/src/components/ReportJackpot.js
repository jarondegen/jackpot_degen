import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setReportMade } from '../store/Jackpot'

const ReportJackpot = () => {
    const dispatch = useDispatch();
    const { id } = useSelector(state => state.Auth);
    const [roomName, setRoomName] = useState('');
    const [hit, setHit] = useState();
    const [amount, setAmount] = useState();
    const { reportMade } = useSelector(state => state.Jackpot);
    const { roomNames } = useSelector(state => state.Jackpot.subs);
    const [errors, setErrors] = useState([]);

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
            dispatch(setReportMade(true));
        }else {
            const {error} = await res.json();
            setErrors(error.errors)
        }
    }

    useEffect(() => {
        if (reportMade) {
            setErrors([])
            const thanks = document.getElementById('report-form-thanks');
            thanks.setAttribute('class', 'not-hidden')
            setTimeout(()=>{
                thanks.setAttribute('class', 'hidden')
                setRoomName('')
                setAmount('')
                setHit('')
            },4000)
        }
    },[reportMade])

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
          }
    }
    
    return (
        <>
            <div className="report-jackpot-contianer">
                <h3 className="report-title" >Report A Jackpot</h3>
                {errors.length > 0 ? errors.map(err => 
                    <p className="report-error">{err.msg}</p>
                ): null}
                <div className="report-jackpot-form-containeer">
                    <select className="report-form-el report-form-select" value={roomName} onChange={handleRoomSelect} >
                            <option>Where?</option>
                            {roomNames.map(room =>
                                <option key={room}>{room}</option>    
                            )}
                        </select>
                        <select className="report-form-el report-form-select" name="hit" value={hit} onChange={handleHitSelect}>
                            <option>Hit?</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>   
                        <div className="input-icon">
                            <input onKeyPress={handleEnter} placeholder="please be precise" className="report-form-el report-form-input" type="number" value={amount} onChange={handleAmount}/>
                            <i>$</i>
                        </div>
                        <button className="report-form-el report-form-button" onClick={handleSubmit} type="submit">Report</button>
                <p id="report-form-thanks" className="hidden">Thanks!</p>
                </div>
            </div>
        </>
    );
};

export default ReportJackpot