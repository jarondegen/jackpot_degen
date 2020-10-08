import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const HistoryTab = () => {
    const { id } = useSelector(state => state.Auth);
    const [reports, setReports] = useState([]);
    const [deleted, setDeleted] = useState(false);
    
    useEffect(() => {
        setDeleted(false)
        const getHistory = async () => {
            const data = await fetch(`/api/jackpots/user/${id}`);
            if (data.ok) {
                const { userReports } = await data.json();
                console.log(userReports)
                setReports(userReports)
            }
        }
        getHistory()
    },[deleted])

    const handleDelete = (e) => {
        const deleteJackpot = async() => {
            const data = await fetch(`/api/jackpots/delete/${e.target.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
            if (data.ok) {
                console.log('ALL GOOD')
            }
        }
        deleteJackpot()
        setDeleted(true)
    }
    console.log(reports)
    return (
        <div className="history-table-container">
            <table className="history-table">
                <thead>
                    <tr>
                        <th>Card Room</th>
                        <th>Amount</th>
                        <th>Date Reported</th>
                        <th>Adjust</th>
                    </tr>
                </thead>
                <tbody>
                    {reports && reports.length > 0 && reports.map(report =>
                        <tr key={report.amount}>
                            <td>{report.room.name}</td>
                            <td>{`$${report.amount}`}</td>
                            <td>{report.createdAt.split(":").slice(0,1).join(":").slice(0,10)}</td>
                            <td><a className="history-table-delete" id={report.id} onClick={handleDelete}>Delete</a></td>
                        </tr>        
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default HistoryTab