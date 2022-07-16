import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Line } from 'react-chartjs-2'
import { Pie } from 'react-chartjs-2'
import {HorizontalBar} from 'react-chartjs-2'

const defaultData = {
	labels: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
	datasets: [{
		label: 'GGR',
		backgroundColor: 'rgba(51,0,102,0.2)',
		borderColor: 'rgba(51,0,102,1)',
		borderWidth: 1,
		hoverBackgroundColor: 'rgba(255,99,132,0.4barData)',
		hoverBorderColor: 'rgba(51,0,102,1)',
		data: [1650, -590, 3800, 1500, 560, 550, 900, -2550, 690, 1200, 450, 650]
	}]
}

const defaultType = 'Bar'

const components = {
	Bar,
	Line,
	Pie,
	HorizontalBar
}

function BaseReports ({type = defaultType, data = defaultData, title}) {
	const capitalizeFirstLetter = (s) => {
		if (typeof s !== 'string') return ''
		return s.charAt(0).toUpperCase() + s.slice(1)
	}
	
	const Content = components[capitalizeFirstLetter(type)]
	
	return (
		<div>   
			<Content 
				data={data}
				options={
					{ 			
						title: {
							display: !!title,
							text: title
						},
						plugins: {
							datalabels: {
								align:'top',
								display:'auto',
								anchor: 'end',

							}
						}
					}
				}
			/>
		</div>
	)
}

export default BaseReports