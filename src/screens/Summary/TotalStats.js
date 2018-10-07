import React from 'react'
import {HorizontalBar} from 'react-chartjs-2'




const TotalStats = ({savings, incomes, outcomes}) => {
    const data = {
        labels: ['Savings', 'Incomes', 'Outcomes', ''],
        datasets: [
            {
                label: '',
                backgroundColor: '#2185d0',
                borderColor: '#2185d0',
                borderWidth: 1,
                hoverBackgroundColor: '#2185d0',
                hoverBorderColor: '#2185d0',
                data: [savings, incomes, outcomes, 0]
            }
        ]
    }

    const options = {	
    	responsive: false,
    	scales: {
    		xAxes: [{
          		stacked: true,
        	}],

        	yAxes: [{
          		ticks: {
                    stacked: true,
                	beginAtZero:true
            	}
        	}]
    	}}
    return (
        <div style={{marginRight: '4em'}}>
            <h2>Stats for last 12 months</h2>
            <HorizontalBar height={'80px'} data={data} />
        </div>
    )
}

export default TotalStats
