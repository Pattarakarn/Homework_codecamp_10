import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function LineChart() {
// const sumAmount = record.reduce((total, value) => total = total + parseInt(value.amount), 0);
    const cleanL = JSON.parse(localStorage.list)
    const list = cleanL.slice(1)
    
    const label = localStorage.onFin.slice(2,13)

    const data = {
        labels: list,
        datasets: [
            {
          label: label,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: JSON.parse(localStorage.amount).slice(1),
            }
        ]
      };
    
    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

      return <Line data={data} options={options}/>
}

export default LineChart