import React, { useState, useEffect } from 'react'
import BaseReports from '../../components/reports/BaseReports'
import { KeyboardDatePicker } from '@material-ui/pickers'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import colors from '../../styles/Colors.scss'
import { reportsDataMock } from '../../mockData/reportsDataMock'
import '../../styles/Reports.scss'
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux'
import { setCurrentMenuTab } from '../../store/menuHighlight/menuActions'
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 220,
  },
  acceptButton: {
    background: colors.successColor,
    padding: theme.spacing(2),
    minWidth: 220,
    color: colors.white,
    margin: "15px 10px",
    "&:hover": {
      background: colors.successColorHover
    }
  }
}))

// Think about performance optimizations!!!
const Reports = (props, context) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [data, setData] = useState(reportsDataMock)
  const [isSubmitClicked, setIsSubmitClicked] = useState(false)
  const [prevReportType, setPrevReportType] = useState('adminGGRvsNGR')
  const [startDate, handleStartDateChange] = useState(new Date())
  const [endDate, handleEndDateChange] = useState(new Date())

  const [reportType, setReportType] = useState('adminGGRvsNGR')
  const changeReportType = event => {
    setIsSubmitClicked(false)
    setReportType(event.target.value)
  }
  
  const [currency, setCurrency] = useState('eur')
  const changeCurrency = event => {
    setIsSubmitClicked(false)
    setCurrency(event.target.value)
  }

  const [brand, setBrand] = useState('palms')
  const changeBrand = event => {
    setIsSubmitClicked(false)
    setBrand(event.target.value)
  }
  const title = 'Panthera Platform - Reports'
	useEffect(() => {
    document.title = title
    dispatch(setCurrentMenuTab("Reports"));

		setData(reportsDataMock)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

	const handleSubmit = (e) => {
    e.preventDefault()

    setPrevReportType(reportType)
    setIsSubmitClicked(true)
  }
 const chartstyle = {
   width:'90%',
   height:'90%',
   'padding-bottom':'50px'   }
	const renderChart = () => {
    let reportData = isSubmitClicked ? data[reportType] : data[prevReportType]
    let currentData = Object.keys(reportData)
    // console.log(currentData[0], reportData[currentData[0]])

		return (
			<BaseReports
				type={currentData[0]}
				data={reportData[currentData[0]]}
			/>
    )
  }

	return (
		<div className='main'>
			<h3>{context.t("Reports")}</h3> <hr />

			  <div className="form-container">
          <form className="reports-form" onSubmit={handleSubmit}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>{context.t("Currency")}</InputLabel>
              <Select
                value={currency}
                onChange={changeCurrency}
                labelWidth={65}
              >
                <MenuItem value={'eur'}>EUR - Euro</MenuItem>
                <MenuItem value={'usd'}>USD</MenuItem>
                <MenuItem value={'gbp'}>GBP</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>{context.t("Report Type")}</InputLabel>
              <Select
                value={reportType}
                onChange={changeReportType}
                labelWidth={90}
              >
                <MenuItem value={'adminGGRvsNGR'}>{context.t("Admin GGR vs NGR")}</MenuItem>
                <MenuItem value={'NGRtoDeposits'}>{context.t("NGR to Deposits")}</MenuItem>
                <MenuItem value={'betsToDeposits'}>Bets To Deposits</MenuItem>
                <MenuItem value={'CPA'}>{context.t("CPA")}</MenuItem>
                <MenuItem value={'averageRev'}>{context.t("Average Rev")}</MenuItem>
                <MenuItem value={'conversionToChurn'}>Conversion To Churn</MenuItem>
                <MenuItem value={'countries'}>Countries</MenuItem>
                <MenuItem value={'betToBankrollRatio'}>BetToBankrollRatio</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>{context.t("Brand")}</InputLabel>
              <Select
                value={brand}
                onChange={changeBrand}
                labelWidth={45}
              >
                <MenuItem value={'palms'}>Palms Casino</MenuItem>
                <MenuItem value={'vegas'}>Vegas Casino</MenuItem>
                <MenuItem value={'international'}>International Casino</MenuItem>
              </Select>
            </FormControl>
            <KeyboardDatePicker
              autoOk
              className={classes.formControl}
              variant="inline"
              inputVariant="outlined"
              label={context.t("Start Date")}
              format="MM/dd/yyyy"
              value={startDate}
              InputAdornmentProps={{ position: "start" }}
              onChange={date => handleStartDateChange(date)}
            />
            <KeyboardDatePicker
              autoOk
              className={classes.formControl}
              variant="inline"
              inputVariant="outlined"
              label={context.t("End Date")}
              format="MM/dd/yyyy"
              value={endDate}
              InputAdornmentProps={{ position: "start" }}
              onChange={date => handleEndDateChange(date)}
            />
            <Button
              variant="contained"
              className={classes.acceptButton}
              type="submit"
            >
              {context.t("Submit")}
            </Button>
          </form> 
        </div>
        <div style={chartstyle}>
          {renderChart()}
        </div>
		</div>
	)
}

Reports.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Reports