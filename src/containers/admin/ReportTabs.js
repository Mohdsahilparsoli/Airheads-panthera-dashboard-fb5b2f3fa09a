import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BaseReports from "../../components/reports/BaseReports";
import { reportsDataMock } from "../../mockData/reportsDataMock";
import { useSelector, useDispatch } from "react-redux";
import { setActiveReportTab } from "../../store/adminsReports/adminsReportsActions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  chart: {
    width: "45% !important",
  },
  chartContainer: {
    display: "flex",
    padding: "20px 50px 20px 10px",
    justifyContent: "space-between",
  },
  appBar: {
    position:"static"
  }
}));

export default function ReportTabs() {

  const store = useSelector((state) => ({
    reportTabValue: state.changeAdminsReportsData.reportTab
  }));

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(setActiveReportTab(newValue))
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Tabs 
          value={store.reportTabValue} 
          onChange={handleChange} 
          aria-label="wrapped label tabs example"
          centered
        >
          <Tab
            value="one"
            label="Overall Performance"
            // wrapped //TOODO - this prop is used for longer titles
            {...a11yProps('one')}
          />
          <Tab value="two" label="Player KPIs" {...a11yProps('two')} />
          <Tab value="three" label="Marketing KPIs" {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <TabPanel value={store.reportTabValue} index="one">
        <div className={classes.chartContainer}>
          <div className={classes.chart}>
            <BaseReports type="line" title="GGR vs NGR Report" data={reportsDataMock.adminGGRvsNGR.line} />
          </div>
          <div className={classes.chart}>
            <BaseReports type="line" title="NGR to Deposits" data={reportsDataMock.NGRtoDeposits.line} />
          </div>
        </div>
        <div className={classes.chartContainer} style={{marginBottom: '40px'}}>
          <div className={classes.chart}>
            <BaseReports type="pie" title="Country GGR" data={reportsDataMock.countries.pie} />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={store.reportTabValue} index="two">
        <div className={classes.chartContainer}>
          <div className={classes.chart}>
            <BaseReports type="line" title="Bets to Deposits" data={reportsDataMock.betsToDeposits.line} />
          </div>
          <div className={classes.chart}>
            <BaseReports type="line" title="Average Revenue per user" data={reportsDataMock.averageRev.line} />
          </div>
        </div>
        <div className={classes.chartContainer} style={{marginBottom: '40px'}}>
          <div className={classes.chart}>
            <BaseReports type="line" title="Bet to Bankroll Ratio" data={reportsDataMock.betToBankrollRatio.line} />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={store.reportTabValue} index="three">
        <div className={classes.chartContainer}>
          
          <div className={classes.chart}>
            <BaseReports  type="bar" title="Cost per Aquisition" data={reportsDataMock.CPA.bar} />
          </div>
          <div className={classes.chart}>
            <BaseReports type="line" title="Conversion Rate vs Churn Rate" data={reportsDataMock.conversionToChurn.line} />
          </div>
        </div>
        
      </TabPanel>
    </div>
  );
}