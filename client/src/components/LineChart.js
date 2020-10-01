import React, { useEffect } from 'react';
import Chart from 'chart.js';
import { useSelector } from 'react-redux';

const LineChart = () => {
    const { roomId } = useSelector(state => state.Jackpot.subs)

    const createChart = async () => {
        const data = await fetch(`/api/jackpots/${roomId}`);
            if (data.ok) {
                const { amounts, dates, roomName } = await data.json();
                const goodDates = dates.map(date => date.split(":").slice(0,1).join(":").slice(0,10))
                const ctx = document.getElementById('line-chart');
                const myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels : goodDates,
                        datasets: [{
                            label: `${roomName} Jackpot Reports`,
                            data: amounts,
                            backgroundColor: [' rgb(6, 189, 12)'],
                            borderColor: [],
                            borderWidth: 1,
                        }]
                    }
                })
            }
    }

    useEffect(() => {
        createChart()
    },[])

    return (
        <div className="chart-container" >
            <canvas id="line-chart" width="400" height="200"></canvas>
        </div>
    )
}

export default LineChart;

