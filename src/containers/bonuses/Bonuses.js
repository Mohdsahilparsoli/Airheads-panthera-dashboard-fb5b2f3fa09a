/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "../../styles/Bonuses.scss";
import Feature from "../../components/Feature";
import GridConfig from "../../components/grid/GridConfig";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import {
  RenderLinkButton,
  buttonTypes,
} from "../../components/button/renderButton";
import { setSelectedUser } from "../../store/gridUserSelection/userSelectionActions";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { playerMock } from "../../mockData/playersMock";
import { setCurrentMenuTab } from "../../store/menuHighlight/menuActions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "25px 20px",
    },
  },
  formControl: {
    minWidth: 220,
    //padding: "10px 0"
  },
}));
const Bonuses = (props, context) => {
  const store = useSelector((state) => ({
    data: state.changeGridData.data,
    isLoading: state.changeGridData.isLoading,
    userID: state.changeSelectedUser.id,
  }));
  const dispatch = useDispatch();
  const title = "Panthera Platform - Bonuses";
  const classes = useStyles();

  const [gridApi, setGridApi] = useState();

  useEffect(() => {
    document.title = title;
    dispatch(setSelectedUser(""));
    dispatch(setCurrentMenuTab("Bonuses Dashboard"));
  }, []);

  const onGridReady = (params) => {
    setGridApi(params.api);
    // params.api.setServerSideDatasource(store.data);
  };

  const onPlayerSelected = (e) => {
    const focusedCell = gridApi.getFocusedCell();
    const selectedInfo = gridApi.getDisplayedRowAtIndex(focusedCell.rowIndex);

    selectedInfo.selected
      ? dispatch(setSelectedUser(selectedInfo.data.userid))
      : dispatch(setSelectedUser(""));
  };

  const [bonusType, setBonusType] = useState("");
  const [bonusAmount, setBonusAmount] = useState("");

  const changeBonusType = (event) => {
    setBonusType(event.target.value);
  };
  const changeBonusAmount = (event) => {
    setBonusAmount(event.target.value);
  };

  let initialValue = 0;
  let activeBonusesSum = playerMock
    .filter((el) => el.bonusStatus === "Active")
    .reduce(function (total, currentValue) {
      return total + currentValue.amountWagered;
    }, initialValue);
  return (
    <div className="main">
      <h3>{context.t("Bonuses")}</h3> <hr />
      <div className="featureCointainer">
        <Feature
          value={playerMock.filter((el) => el.bonusStatus === "Active").length}
          text={context.t("Active Bonuses")}
        />
        <Feature
          value={activeBonusesSum}
          text={context.t("Active Bonuses Value")}
        />
        <Feature
          value={playerMock.filter((el) => el.bonusStatus === "Active").length}
          text={context.t("Active Deposit Bonuses")}
        />
        <Feature
          value={playerMock.filter((el) => el.bonusStatus === "Active").length}
          text={context.t("Active Reload Bonuses")}
        />
      </div>
      <div className="gridWrap">
        <div
          className="ag-theme-material"
          style={
            {
              //width: "auto"
            }
          }
        >
          <div className="bonus-controllers">
            <div className={classes.root}>
              {/* ----------------------------------  Edit Player  ------------------------------------ */}
              {RenderLinkButton({
                selectedPlayer: store.userID,
                link: "./playerBonuses",
                type: buttonTypes.chooseOneAndEdit,
                title: context.t("Edit Profile"),
              })}
              {/* ----------------------------------  Bonus Controllers  ------------------------------------ */}
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>{context.t("Bonus Type")}</InputLabel>
                <Select
                  value={bonusType}
                  onChange={changeBonusType}
                  labelWidth={120}
                >
                  <MenuItem value="">
                    <em>{context.t("None")}</em>
                  </MenuItem>
                  <MenuItem value={50}>50%</MenuItem>
                  <MenuItem value={100}>100%</MenuItem>
                  <MenuItem value={200}>200%</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>{context.t("Bonus Amount")}</InputLabel>
                <Select
                  value={bonusAmount}
                  onChange={changeBonusAmount}
                  labelWidth={150}
                >
                  <MenuItem value="">
                    <em>{context.t("None")}</em>
                  </MenuItem>
                  <MenuItem value={200}>{context.t("Up to")} $200</MenuItem>
                  <MenuItem value={400}>{context.t("Up to")} $400</MenuItem>
                  <MenuItem value={600}>{context.t("Up to")} $600</MenuItem>
                </Select>
              </FormControl>
              {RenderLinkButton({
                selectedPlayer: store.userID,
                type: buttonTypes.submit,
                title: context.t("Add"),
              })}
            </div>
          </div>
          <div style={{ height: "57vh" }}>
            <GridConfig
              props={{
                gridType: "Bonuses",
                onGridReady,
                onRowSelected: onPlayerSelected,
                rowData: playerMock,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Bonuses.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Bonuses;
