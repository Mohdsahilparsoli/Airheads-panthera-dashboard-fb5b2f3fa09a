import React, { useState, useEffect } from "react";
import "../../styles/Admin.scss";
import GridConfig from "../../components/grid/GridConfig";
import { KeyboardDatePicker } from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Feature from "../../components/Feature";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { adminsDataMock } from "../../mockData/adminsDataMock";
import PropTypes from "prop-types";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ReportTabs from "./ReportTabs";
import BaseReports from "../../components/reports/BaseReports";
import { reportsDataMock } from "../../mockData/reportsDataMock";

import {
  RenderLinkButton,
  buttonTypes,
} from "../../components/button/renderButton";
import { useDispatch } from "react-redux";
import { setCurrentMenuTab } from "../../store/menuHighlight/menuActions";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 220,
  },
  adminGridWrapper: {
    maxWidth:'96%',
    display:'flex',
    justifyContent: 'space-between',
    marginBottom:'80px'

  },
  mainChartContainer: {
    width:'40%',
    height:'300px',
  },

  gridBodyWrapper: {
    width:'50%',
    height:'350px',
    paddingTop:'50px'
  }
}));

function Admin(props, context) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [rowData, setRowData] = useState([]);

  const title = context.t("Panthera Platform - Admin");
 

  const filterData = () => {
    let initData = [];
    let finaldata = [];
    DepositProvider.forEach((provider) => {
      initData.push(adminsDataMock.filter((el) => el.brand === provider));
    });
    initData.forEach((comp) => {
      finaldata.push(comp[0]);
    });
    setRowData(finaldata);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    filterData();
  };

  const [startDate, handleStartDateChange] = useState(new Date());
  const [endDate, handleEndDateChange] = useState(new Date());
  const [currency, setCurrency] = useState("eur");
  const changeCurrency = (event) => {
    setCurrency(event.target.value);
  };
  const [period, setPeriod] = useState("today");
  const changePeriod = (event) => {
    setPeriod(event.target.value);
  };
  useEffect(() => {
    setRowData(adminsDataMock);
    document.title = title;
    dispatch(setCurrentMenuTab("Admin"));
  }, []);

  const onGridReady = (params) => {
    //setGridApi(params.api)
  };

  const onProviderSelected = (e) => {
    // const focusedCell = gridApi.getFocusedCell()
    //const selectedInfo = gridApi.getDisplayedRowAtIndex(focusedCell.rowIndex)
  };

  const depositProvidersList = ["EGT", "Playtech", "NetEnt"];
  const [DepositProvider, setDepositProvider] = useState(depositProvidersList);
  const changeDepositProvider = (event) => {
    setDepositProvider(event.target.value);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      },
    },
  };
  const [bonusCategory, setbonusCategory] = useState("All");

  const changebonusCategory = (event) => {
    setbonusCategory(event.target.value);
  };
  return (
    <>
      <div className="main">
        <h3>{context.t("Home - Admin Dashboard")} </h3> <hr />
        <div>
        <div className="featureCointainer">
          <Feature value={"24839"} text={context.t("Total GGR")} icon="bank" subtext="In a 24h period"/>
          <Feature value={"13586"} text={context.t("Total NGR")}  icon="bank" subtext="In a 24h period"/>
          <Feature value={'38.1'} text={context.t("CPA")}  icon="user" subtext="Average revenue per user: 12"/>
          <Feature value={"1.6%"} text={context.t("CHURN")}  icon="user" subtext="In a 24h period"/>
        </div>
          <form className="admin-form" onSubmit={handleSubmit}>
            <FormControl className={classes.formControl}>
              <InputLabel>{context.t("Currency")}</InputLabel>
              <Select
                value={currency}
                onChange={changeCurrency}
                labelWidth={80}
              >
                <MenuItem value={"eur"}>EUR - Euro</MenuItem>
                <MenuItem value={"usd"}>USD - United States Dollar</MenuItem>
                <MenuItem value={"gbp"}>GBP - Pound</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-checkbox-label">
                {context.t("Game Provider")}
              </InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={DepositProvider}
                onChange={changeDepositProvider}
                input={<Input />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {depositProvidersList.map((provider) => (
                  <MenuItem key={provider} value={provider}>
                    <Checkbox
                      checked={DepositProvider.indexOf(provider) > -1}
                    />
                    <ListItemText primary={provider} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
            <InputLabel>{context.t("Game Category")}</InputLabel>
            <Select
              value={bonusCategory}
              onChange={changebonusCategory}
              labelWidth={60}
            >
              <MenuItem value={"All"}>{context.t("All")}</MenuItem>
              <MenuItem value={"Slots"}>{context.t("Slots")}</MenuItem>
              <MenuItem value={"Table Games"}>{context.t("Table Games")}</MenuItem>
              <MenuItem value={"Roulette only"}>{context.t("Roulette only")}</MenuItem>
              <MenuItem value={"Blackjack only"}>{context.t("Blackjack only")}</MenuItem>
            </Select>
          </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>{context.t("Period")}</InputLabel>
              <Select value={period} onChange={changePeriod} labelWidth={50}>
                <MenuItem value={"today"}>{context.t("Today")}</MenuItem>
                <MenuItem value={"week"}>{context.t("This Week")}</MenuItem>
                <MenuItem value={"month"}>{context.t("This Month")}</MenuItem>
                <MenuItem value={"custom"}>{context.t("Custom")}</MenuItem>
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
              onChange={(date) => handleStartDateChange(date)}
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
              onChange={(date) => handleEndDateChange(date)}
            />
            {RenderLinkButton({
              type: buttonTypes.submit,
              title: context.t("Submit"),
              customStyles: {
                margin: "15px 10px",
              },
            })}
          </form>
        </div>
        <div className={classes.adminGridWrapper}>
          <div className={classes.gridBodyWrapper}>
          <div className="ag-theme-material">
            <div style={{ height: "250px", }}>
              <GridConfig
                props={{
                  gridType: "Admins",
                  onGridReady,
                  onRowSelected: onProviderSelected,
                  rowData,
                }}
              />
            </div>
          </div>
          </div>
          <div className={classes.mainChartContainer}>
          <BaseReports className={classes.mainChart} type="line" title="7 day GGR report" data={reportsDataMock.overallGGR.line} />
          </div>
        </div>
      

        <div>
          <ReportTabs />
        </div>
        
      </div>
    </>
  );
}
Admin.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Admin;
