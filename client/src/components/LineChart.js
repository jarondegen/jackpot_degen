import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';
import { useSelector } from 'react-redux';

const LineChart = () => {
    const { roomId } = useSelector(state => state.Jackpot)
    const { reportMade } = useSelector(state => state.Jackpot);
    const [roomName, setRoomName] = useState('')

    useEffect(() => {
        const createChart = async (id) => {
            if (!roomId || !id) return
            const data = await fetch(`/api/jackpots/${id}`);
                if (data.ok) {
                    const { amounts, dates, roomName } = await data.json();
                    const goodDates = dates.map(date => {
                        const x = date.split(":").slice(0,1).join(":").slice(0,10);
                        const p = x.split('-')
                        return `${p.slice(1,2)}/${p.slice(2)}` //year-${p.slice(0,1)}
                    })
                    setRoomName(`${roomName} Jackpot Reports`)
                    const ctx = document.getElementById('line-chart');
                    if (window.myChart) window.myChart.destroy();
                    window.myChart = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels : goodDates,
                            datasets: [{
                                label: `${roomName} Jackpot Reports`,
                                data: amounts,
                                backgroundColor: ['rgba(6, 189, 12, 0.65)'],
                                borderColor: ['rgb(5, 161, 10)'],
                                borderWidth: 1,
                                pointBorderWidth: 5,
                                pointHitRadius: 15,
                                lineTension: 0.1,
                            }]
                        },
                        options: {
                            legend: {
                                display: false,
                                labels: {
                                    fontSize: '12'
                                }
                            },
                        }
                    })
                }
        }
        createChart(roomId);
      },[roomId, reportMade])

    return (
      <>
        <div className="chart-container" >
            <p className="chart-room-label">{roomName}</p>
            <canvas id="line-chart" width="400" height="200"></canvas>
        </div>
      </>
    )

}

export default LineChart;

