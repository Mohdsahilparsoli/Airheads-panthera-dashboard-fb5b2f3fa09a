/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
// import "../../styles/Bonuses.scss";
import GridConfig from "../../components/grid/GridConfig";
import Feature from "../../components/Feature";
import { KeyboardDatePicker } from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { bonusesReportsMock } from "../../mockData/bonusesReportsDataMock";
import BaseReports from "../../components/reports/BaseReports";
import { bonusesReportsChartsMock } from "../../mockData/bonusesReportsChartsMock";
import PropTypes from "prop-types";
import { setSelectedBonus } from "../../store/gridUserSelection/userSelectionActions";
import { useSelector, useDispatch } from "react-redux";
import {
  RenderLinkButton,
  buttonTypes,
} from "../../components/button/renderButton";
import { setCurrentMenuTab } from "../../store/menuHighlight/menuActions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 220,
  },
}));

const BonusesReports = (props, context) => {
  const store = useSelector((state) => ({
    id:     state.changeSelectedUser.bonusId,
  }));
  const dispatch = useDispatch();
  const classes = useStyles();
  const [rowData, setRowData] = useState([]);

  const title = context.t("Panthera Platform - Bonuses Reports");
  useEffect(() => {
    document.title = title;
    dispatch(setCurrentMenuTab("Admin"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [status, setPeriod] = useState("active");
  const changePeriod = (event) => {
    setPeriod(event.target.value);
  };
  useEffect(() => {
    dispatch(setSelectedBonus(''));
    dispatch(setCurrentMenuTab('Bonuses Reports'));

    setRowData(bonusesReportsMock);
  }, []);

  const onGridReady = (params) => {
    setGridApi(params.api)
  };

  const onProviderSelected = (e) => { // TODO - temp fix, make different store only for campaigns
    const selectedRows = gridApi.getSelectedRows();
    if(selectedRows.length !== 1) {
      dispatch(setSelectedBonus('')) 
    }
    if(selectedRows.length === 1) {
      dispatch(setSelectedBonus(selectedRows[0].id)) 
    }
  };

  const renderBarChart = () => {
    return (
      <div>
        <BaseReports type="bar" data={bonusesReportsChartsMock.newreg.bar} />
      </div>
    );
  };
  const renderPieChart = () => {
    return (
      <div>
        <BaseReports type="pie" data={bonusesReportsChartsMock.popularGames.pie} />
      </div>
    );
  };
  const renderNgrLineChart = () => {
    return (
      <div>
        <BaseReports type="line" data={bonusesReportsChartsMock.bonusNGR.line} />
      </div>
    );
  };
  const [gridApi, setGridApi] = useState({});
  const renderLineChart = () => {
    return (
      <div>
        <BaseReports type="line" data={bonusesReportsChartsMock.bonusSpent.line} />
      </div>
    );
  };

  const [bonus, setBonus] = useState("All");
  const changeBonus = (event) => {
    setBonus(event.target.value);
  };

  const [bonusCategory, setbonusCategory] = useState("All");

  const changebonusCategory = (event) => {
      setbonusCategory(event.target.value);
    };
  return (
    <>
      <div className="main">
        <h3>{context.t("Bonuses Reports")} </h3> <hr />
        <div>
        <div className="featureCointainer">
        <Feature value={965} text={context.t("Bonus given in 24h")} icon="user" subtext="Amount given to 382 players" />
        <Feature value={359} text={context.t("Bonus spent in 24h")} icon="user" subtext="Players who met wagger req: 42" />
        <Feature value={42} text={context.t("Bonuses claimed  in 24h")} icon="user" subtext="Bonuses claimed this week: 489" />
      </div>
          <form className="admin-form" onSubmit={handleSubmit}>
           
            <FormControl className={classes.formControl}>
            <InputLabel>{context.t("Bonus ID")}</InputLabel>
            <Select
              value={bonusCategory}
              onChange={changebonusCategory}
              labelWidth={60}
            >
                            <MenuItem value={"All"}>All</MenuItem>

              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
            
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>{context.t("Bonus Title")}</InputLabel>
            <Select
              value={bonus}
              onChange={changeBonus}
              labelWidth={60}
            >
                            <MenuItem value={"All"}>All</MenuItem>

              <MenuItem value={"High GGR - Roulette only"}>High GGR - Roulette only</MenuItem>
              <MenuItem value={"Demo Bonus - Blackjack only"}>Demo Bonus - Blackjack only</MenuItem>
              <MenuItem value={"High GGR Slot bonus - Pragmatic"}>High GGR Slot bonus - Pragmatic</MenuItem>
              <MenuItem value={"Demo Bonus - Table Games"}>Demo Bonus - Table Games</MenuItem>
              <MenuItem value={"Reload - Slot 50%"}>Reload - Slot 50%</MenuItem>
              <MenuItem value={"EGT only - Table Games"}>EGT only - Table Games</MenuItem>
            </Select>
          </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>{context.t("Status")}</InputLabel>
              <Select value={status} onChange={changePeriod} labelWidth={50}>
                <MenuItem value={"active"}>Active</MenuItem>
                <MenuItem value={"inactive"}>Inactive</MenuItem>
                <MenuItem value={"all"}>All</MenuItem>
              </Select>
            </FormControl>
         
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
                  {/* ----------------------------------  Bonus Details  ------------------------------------ */}
          {RenderLinkButton({
            selectedPlayer: store.id,
            link: "./BonusReports",
            type: buttonTypes.chooseOneAndEdit,
            title: context.t("Bonus Performance Report"),
            customStyles: { margin: "25px 20px" }
          })}

            <div style={{ height: "310px" }}>
              <GridConfig
                props={{
                  gridType: "BonusesReports",
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
  )
};

BonusesReports.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default BonusesReports;
