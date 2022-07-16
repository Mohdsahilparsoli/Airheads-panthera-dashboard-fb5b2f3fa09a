import React, { useState, useEffect } from "react";
import Feature from "../../components/Feature";
import GridConfig from "../../components/grid/GridConfig";
import { playerMock } from '../../mockData/playersMock';
import {
  RenderLinkButton,
  buttonTypes
} from "../../components/button/renderButton";
import { setSelectedUser } from "../../store/gridUserSelection/userSelectionActions";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {setCurrentMenuTab} from '../../store/menuHighlight/menuActions'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "16px 20px",
    },
  },
  formControl: {
    minWidth: 220,
    //padding: "10px 0"
  },
}));

const Payments = (props, context) => {
  const store = useSelector((state) => ({
    data:       state.changeGridData.data,
    isLoading:  state.changeGridData.isLoading,
    userID:     state.changeSelectedUser.id,
  }));
  const dispatch = useDispatch();
  const classes = useStyles();

  const title = 'Panthera Platform - Payments'
  const [gridApi, setGridApi] = useState({});

  useEffect(() => {
    document.title = title;  

    // dispatch(getData(requestOptions));
    dispatch(setSelectedUser(''));
    dispatch(setCurrentMenuTab('Payments Dashboard'))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGridReady = params => {
    setGridApi(params.api);
  };

  const onPlayerSelected = e => {
    const focusedCell = gridApi.getFocusedCell();
    const selectedInfo = gridApi.getDisplayedRowAtIndex(focusedCell.rowIndex);

    selectedInfo.selected 
      ? dispatch(setSelectedUser(selectedInfo.data.userid)) 
      : dispatch(setSelectedUser(''));
  };
  

  return (
    <div className="main">
      <h3>{context.t("Payments")}</h3> <hr />
      <div className="featureCointainer">
        <Feature value={39504} text={context.t("24hr Money Won")} subtext={context.t("Average winner won") + ": 38.4"} />
        <Feature value={41504} text={context.t("24hr Money Lost")} subtext={context.t("Average loser lost") + ": 86.4"}/>
        <Feature value={2000} text={context.t("24hr Net Profit")} subtext={context.t("NGR per player") + ": 48"} />
        <Feature value={325} text={context.t("Players over 24hr")} icon="user" subtext={context.t("Total players who won or lost money")}/>
      </div>
      <div className="gridWrap">
        <div className="ag-theme-material">
          {/* ----------------------------------  Edit Player  ------------------------------------ */}
          {RenderLinkButton({
            selectedPlayer: store.userID,
            link: "./playerPayments",
            type: buttonTypes.chooseOneAndEdit,
            title: context.t("Edit Profile"),
            customStyles: {margin: "25px 20px"}

          })}
        
          <div style={{ height: "52vh" }}>
            <GridConfig
              props={{
                gridType: "Payments",
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

Payments.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Payments;
