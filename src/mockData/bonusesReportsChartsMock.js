export const bonusesReportsChartsMock = {
	newreg: {
		bar: {
			labels: ['01.05', '02.05', '03.05', '04.05', '05.05', '06.05', '07.05'],
			datasets: [
				{
					label: 'Bonus CTR %',
					backgroundColor: '#87c847',
					borderColor: '#6a993b',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4barData)',
					hoverBorderColor: 'rgba(51,0,102,1)',
					data: [4.2, 3.7, 5.1, 3.2, 4.5, 7.2, 4.1]
				},
				{
					label: 'Bonus Claim %',
					backgroundColor: '#df397c',
					borderColor: '#6a993b',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4barData)',
					hoverBorderColor: 'rgba(51,0,102,1)',
					data: [1.2, 0.7, 1.24, 0.8, 1.4, 1.75, 1.23]
				}
			]
		}
	},
		
	bonusSpent: {
		line: {
			labels: ['01.05', '02.05', '03.05', '04.05', '05.05', '06.05', '07.05'],
			datasets: [
				{
					label: 'Bonus Spent',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(151,0,102,0.4)',
					borderColor: 'rgba(151,0,102,1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(151,0,102,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(151,0,102,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: [3892, 2478, 4890, 3219, 2430, 2689, 3251]
				},

				{
					label: 'Bonus Given',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(51,0,200,0.4)',
					borderColor: 'rgba(51,0,200,1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(51,0,200,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(51,0,102,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: [8291, 11845, 10035, 8765, 9445, 13437, 11123]
				}
			]
		}
	},
	popularGames: {
		pie: {
			labels: ['EGT games', 'Net Ent games', 'Pragmatic games'],
			datasets: [
				{
				  data: [10, 20, 30],
				  backgroundColor: [
					'rgba(51,0,200,0.4)', '#87c847', '#df397c'
				  ]

				  
				}
			]
		}
	},
	bonusNGR: {
		line: {
			labels: ['01.05', '02.05', '03.05', '04.05', '05.05', '06.05', '07.05'],
			datasets: [
				{
					label: 'Bonus NGR',
					fill: false,
					lineTension: 0.1,
					backgroundColor: '#87c847',
					borderColor: '#87c847',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(151,0,102,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(151,0,102,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: [13892, 12478, 14890, 13219, 12430, 12689, 13251]
				}	
			]
	}
	}
}