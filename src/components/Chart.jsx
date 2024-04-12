import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({arr=[], currency }) => {

    const prices=[];
    const date=[];

    for (let i = 0; i < arr.length; i++) {

            date.push(new Date(arr[i][0]).toLocaleString());
            prices.push(arr[i][1]);

    }
    
    const data={
        labels:date,
        datasets:[{label: `Price in ${currency}`,
          data: prices ,
          borderColor:"rgb(19 165 50)",
          backgroundColor:"rgba(19 165 50,0.5)"
        }]
    }


  return (
    <Line options={{responsive:true,}} data={data} />
  )
};

export default Chart
