import React from 'react';
import Chart from 'chart.js';

const LineChart = ({props}) => {
    console.log(props)
    const createChart = async () => {
        const data = await fetch(`/api/jackpots/${props && props.roomId}`);
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

    createChart()
    return (
        <div className="chart-container" >
            <canvas id="line-chart" width="400" height="200"></canvas>
        </div>
    )
}

export default LineChart;

