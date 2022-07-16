export const reportsDataMock = {
	turnover: {
		bar: {
			labels: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
			datasets: [
				{
					label: 'Turnover',
					backgroundColor: 'rgba(51,0,102,0.2)',
					borderColor: 'rgba(51,0,102,1)',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4barData)',
					hoverBorderColor: 'rgba(51,0,102,1)',
					data: [650, 590, 800, 810, 560, 550, 900, 650, 800, 1200, 450, 650]
				}
			]
		}
	},
	newreg: {
		bar: {
			labels: ['01.05', '02.05', '03.05', '04.05', '05.05', '06.05', '07.05'],
			datasets: [
				{
					label: 'New Registrtions',
					backgroundColor: '#87c847',
					borderColor: '#6a993b',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4barData)',
					hoverBorderColor: 'rgba(51,0,102,1)',
					data: [650, 590, 700, 790, 540, 550, 800]
				}
			]
		}
	},
	ggr: {
		bar: {
			labels: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
			datasets: [
				{
					label: 'GGR',
					backgroundColor: 'rgba(51,0,102,0.2)',
					borderColor: 'rgba(51,0,102,1)',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4barData)',
					hoverBorderColor: 'rgba(51,0,102,1)',
					data: [1650, -590, 3800, 1500, 560, 550, 900, -2550, 690, 1200, 450, 650]
				}
			]
		}
	},

	bonus: {
		bar: {
			labels: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
			datasets: [
				{
					label: 'Bonus',
					backgroundColor: 'rgba(51,0,102,0.2)',
					borderColor: 'rgba(51,0,102,1)',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4barData)',
					hoverBorderColor: 'rgba(51,0,102,1)',
					data: [250, 390, 800, 710, 160, 850, 1900, 550, 800, 120, 350, 450]
				}
			]
		}
	},

	ngr: {
		bar: {
			labels: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
			datasets: [
				{
					label: 'NGR',
					backgroundColor: 'rgba(51,0,102,0.2)',
					borderColor: 'rgba(51,0,102,1)',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4barData)',
					hoverBorderColor: 'rgba(51,0,102,1)',
					data: [360, 125, 400, 220, 1560, 550, 900, 750, 850, 180, 1450, 750]
				}
			]
		}
	},
		
	margin: {
		line: {
			labels: ['01.05', '02.05', '03.05', '04.05', '05.05', '06.05', '07.05'],
			datasets: [
				{
					label: 'Margin(%)',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(51,0,102,0.4)',
					borderColor: 'rgba(51,0,102,1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(51,0,102,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(51,0,102,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: [35, 38, 42, 53, 48, 37, 49]
				}
			]
		}
	},
	adminGGRvsNGR: {
		line: {
			labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
	
			datasets: [
				{
					label: 'GGR',
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
					data: [2592, 4308, 1320, 2905, 1030, 502, 2300, 3205]
				},

				{
					label: 'NGR',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(51,0,200,0.4)',
					borderColor: '#6a993b',
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
					data: [2201, 2301, 1200, 2230, 801, 203, 1768, 1379]
				}
			]
		}
	},
	NGRtoDeposits: {
		line: {
			labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
	
			datasets: [
				{
					label: 'Deposits',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(151,0,102,0.4)',
					borderColor: 'rgba(51,0,102,1)',
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
					data: [4203, 1203, 105, 3921, 3521, 1982, 5320, 3270]
				},

				{
					label: 'NGR',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(51,0,200,0.4)',
					borderColor: '#6a993b',
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
					data: [2201, 2301, 1200, 2230, 801, 203, 1768, 1379]
				}
			]
		}
	},
	betsToDeposits: {
		line: {
			labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
	
			datasets: [
				{
					label: 'Deposits',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(151,0,102,0.4)',
					borderColor: 'rgba(51,0,102,1)',
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
					data: [4203, 1203, 105, 3921, 3521, 1982, 5320, 3270]
				},

				{
					label: 'Bets',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(151,0,102,1)',
					borderColor: '#6a993b',
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
					data: [12435, 8301, 7200, 4230, 11124, 8754, 14253, 7564]
				}
			]
		}
	},
	CPA: {
		bar: {
			labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],			datasets: [
				{
					label: 'CPA',
					backgroundColor: 'rgba(151,0,102,0.4)',
					borderColor: 'rgba(151,0,102,1)',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4barData)',
					hoverBorderColor: 'rgba(51,0,102,1)',
					data: [22, 41, 25, 18, 55, 14, 22, 34]
				}
			]
		}
	},
	averageRev: {
		line: {
			labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],			datasets: [
				{
					label: 'Average Revenue per Player',
					backgroundColor: '#87c847',
					borderColor: '#6a993b',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4barData)',
					hoverBorderColor: 'rgba(51,0,102,1)',
					data: [22, 41, 25, 18, 55, 14, 22, 34]
				}
			]
		}
	},
	conversionToChurn: {
		line: {
			labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
	
			datasets: [
				{
					label: 'Conversion Rate',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(151,0,102,0.4)',
					borderColor: 'rgba(51,0,102,1)',
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
					data: [4203, 1203, 105, 3921, 3521, 1982, 5320, 3270]
				},

				{
					label: 'CHURN',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(51,0,200,0.4)',
					borderColor: 'rgba(151,0,102,1)',
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
					data: [2201, 2301, 1200, 2230, 801, 203, 1768, 1379]
				}
			]
		}
	},
	countries: {
		pie: {
			labels: ['Sweden', 'France', 'UK', 'Italy', 'Germany', 'Norway', 'Others'],
			datasets: [
				{
				  data: [3205, 2890, 2723, 2230, 2102, 1768, 921],
				  backgroundColor: [
					'rgba(51,0,200,0.4)', '#87c847', '#df397c', '#bb596b', '#303960', '#ffc4a3', '#aacfcf'
				  ]

				  
				}
			]
		}
	},
	overallGGR: {
		line: {
			labels: ['24.06', '25.06', '26.06', '27.06', '28.06', '29.06', '30.06', ],			datasets: [
				{
					label: 'Net Game Revenue',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(151,0,102,0.4)',
					borderColor: '#6a993b',
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
					data: [22213, 21321, 25213, 23213, 19213, 17321, 21232, ]
				}
			]
		}
	},
	betToBankrollRatio: {
		line: {
			labels: ['0', '1%', '2%', '3%', '4%', '5%', '6%', '7%'],
	
			datasets: [
				{
					label: 'Bet To Bankroll Ratio',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(151,0,102,0.4)',
					borderColor: 'rgba(51,0,102,1)',
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
					data: [2, 4, 5, 2, 3, 1, 0, 4]
				}
			]
		}
	},
}
