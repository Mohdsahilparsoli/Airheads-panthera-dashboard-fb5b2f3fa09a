import React, { useState, useEffect } from "react";
import "../../styles/Admin.scss";
import GridConfig from "../../components/grid/GridConfig";
import Feature from "../../components/Feature";
import { KeyboardDatePicker } from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { campaignReportsMock } from "../../mockData/campaignReportsMock";
import BaseReports from "../../components/reports/BaseReports";
import { CampaignReportsDataMock } from "../../mockData/CampaignReportsDataMock";
import PropTypes from "prop-types";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from '@material-ui/core/Checkbox';
import { getData } from "../../store/gridPlayersLoad/gridPlayersActions";
import { setSelectedUser,setSelectedUsers } from "../../store/gridUserSelection/userSelectionActions";
import { useSelector, useDispatch } from "react-redux";
import {
  RenderLinkButton,
  buttonTypes,
} from "../../components/button/renderButton";
import { setCurrentMenuTab } from "../../store/menuHighlight/menuActions";
import Input from "@material-ui/core/Input";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 220,
  },
}));

function CampaignReports(props, context) {
  const store = useSelector((state) => ({
    data:       state.changeGridData.data,
    isLoading:  state.changeGridData.isLoading,
    userID:     state.changeSelectedUser.id,
    multipleIDs:state.changeSelectedUser.ids
  }));
  const dispatch = useDispatch();
  const classes = useStyles();
  const [rowData, setRowData] = useState([]);

  const title = context.t("Panthera Platform - Admin");
  useEffect(() => {
    document.title = title;
    dispatch(setCurrentMenuTab("Admin"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterData = () => {
    let initData = [];
    let finaldata = [];
    DepositProvider.forEach((provider) => {
      initData.push(campaignReportsMock.filter((el) => el.brand === provider));
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
  const [campaignId, setCampaignId] = useState("all");
  const changeCampaignId = (event) => {
    setCampaignId(event.target.value);
  };
  const [period, setPeriod] = useState("today");
  const changePeriod = (event) => {
    setPeriod(event.target.value);
  };
  useEffect(() => {
    dispatch(setSelectedUser(''));
    dispatch(setSelectedUsers([]))
    dispatch(setCurrentMenuTab('Campaign Reports'));

    setRowData(campaignReportsMock);
  }, []);

  const onGridReady = (params) => {
    setGridApi(params.api)
  };

  const onProviderSelected = (e) => { // TODO - temp fix, make different store only for campaigns
    const selectedRows = gridApi.getSelectedRows();
    console.log(selectedRows)
    if(selectedRows.length !== 1){
      dispatch(setSelectedUser('')) 
    }
    if(selectedRows.length === 1){
      
      dispatch(setSelectedUser(selectedRows[0].id)) 
    }
    dispatch(setSelectedUsers(selectedRows)) 
  };

  const renderBarChart = () => {
    return (
      <div>
        <BaseReports type="bar" data={CampaignReportsDataMock.newreg.bar} />
      </div>
    );
  };
  const renderPieChart = () => {
    return (
      <div>
        <BaseReports type="pie" data={CampaignReportsDataMock.popularGames.pie} />
      </div>
    );
  };
  const renderNgrLineChart = () => {
    return (
      <div>
        <BaseReports type="line" data={CampaignReportsDataMock.campaignNGR.line} />
      </div>
    );
  };
  const [gridApi, setGridApi] = useState({});
  const renderLineChart = () => {
    return (
      <div>
        <BaseReports type="line" data={CampaignReportsDataMock.bonusSpent.line} />
      </div>
    );
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
        <h3>{context.t("Campaign Reports")} </h3> <hr />
        <div>
        <div className="featureCointainer">
        <Feature value={12} text={context.t("Active Campaigns")} icon="user" subtext="Total Campaigns: 38" />
        <Feature value={12565} text={context.t("Bonus given in 24h")} icon="user" subtext="Amount given to 382 players" />
        <Feature value={3159} text={context.t("Bonus spent in 24h")} icon="user" subtext="Players who met wagger req: 42" />
        <Feature value={482} text={context.t("Bonuses claimed  in 24h")} icon="user" subtext="Bonuses claimed this week: 4892" />
      </div>
          <form className="admin-form" onSubmit={handleSubmit}>
            <FormControl className={classes.formControl}>
              <InputLabel>{context.t("Campaign ID")}</InputLabel>
              <Select
                value={campaignId}
                onChange={changeCampaignId}
                labelWidth={80}
              >
                <MenuItem value={"all"}>All Campaigns</MenuItem>
                <MenuItem value={"002"}>ID: 002</MenuItem>
                <MenuItem value={"003"}>ID: 003</MenuItem>
                <MenuItem value={"004"}>ID: 004</MenuItem>
                <MenuItem value={"005"}>ID: 005</MenuItem>
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
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Slots"}>Slots</MenuItem>
              <MenuItem value={"Table Games"}>Table Games</MenuItem>
              <MenuItem value={"Roulette only"}>Roulette only</MenuItem>
              <MenuItem value={"Blackjack only"}>Blackjack only</MenuItem>
            </Select>
          </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>{context.t("Period")}</InputLabel>
              <Select value={period} onChange={changePeriod} labelWidth={50}>
                <MenuItem value={"today"}>Today</MenuItem>
                <MenuItem value={"week"}>This Week</MenuItem>
                <MenuItem value={"month"}>This Month</MenuItem>
                <MenuItem value={"custom"}>Custom</MenuItem>
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
        <div className="gridWrap">
          <div className="ag-theme-material">
                  {/* ----------------------------------  Campaign Details  ------------------------------------ */}
          {RenderLinkButton({
            selectedPlayer: store.userID,
            link: "./singleCampaignReport",
            type: buttonTypes.chooseOneAndEdit,
            title: context.t("Campaign Details"),
            customStyles: { margin: "25px 20px" }
          })}

          {/* ---------------------------------  Deactivate Campaign  ---------------------------------- */}
          {RenderLinkButton({
            selectedPlayer: store.multipleIDs,
            type: buttonTypes.delete,
            title: context.t("Deactivate Campaign"),
            customStyles: { margin: "25px 20px" },
            gridApi
          }, context)}
            <div style={{ height: "310px" }}>
              <GridConfig
                props={{
                  gridType: "CampaignReports",
                  onGridReady,
                  onRowSelected: onProviderSelected,
                  rowData,
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", padding: "20px 0px 50px 0px" }}>
          <div style={{ width: "40%", paddingRight: "12%" }}>
            {renderBarChart()}
          </div>
          <div style={{ width: "40%" }}>{renderLineChart()}</div>
        </div>
        <div style={{ display: "flex", padding: "20px 0px 50px 0px" }}>
        <div style={{ width: "40%", paddingRight: "12%" }}>
            {renderPieChart()}
          </div>
        
          <div style={{ width: "40%" }}>{renderNgrLineChart()}</div>
          </div>
      </div>
    </>
  );
}
CampaignReports.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default CampaignReports;
