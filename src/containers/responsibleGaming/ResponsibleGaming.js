/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Feature from "../../components/Feature";
import GridConfig from "../../components/grid/GridConfig";
import {
  RenderLinkButton,
  buttonTypes
} from "../../components/button/renderButton";
import { getData } from "../../store/gridPlayersLoad/gridPlayersActions";
import { setSelectedUser } from "../../store/gridUserSelection/userSelectionActions";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { playerMock } from '../../mockData/playersMock'
import {setCurrentMenuTab} from '../../store/menuHighlight/menuActions'
const ResponsibleGaming = (props, context) => {
  const store = useSelector((state) => ({
    data:       state.changeGridData.data,
    isLoading:  state.changeGridData.isLoading,
    userID:     state.changeSelectedUser.id,
  }));
  const dispatch = useDispatch();

  const title = 'Panthera Platform - Responsible Gaming'
  const [gridApi, setGridApi] = useState({});

  useEffect(() => {
    document.title = title;
    dispatch(setSelectedUser(''));
    dispatch(setCurrentMenuTab('Responsible Gaming'))

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
      <h3>{context.t("Responsible Gaming")}</h3> <hr />
      <div className="featureCointainer">
        <Feature value={playerMock.length} text={context.t("Total Players")} icon="user" 
          subtext={context.t("Total registered players")}
        />
        <Feature value={playerMock.filter(el => el.status === "Active").length} text={context.t("Active Players")} icon="user" 
          subtext={context.t("Total active players in 6 months")}
        />
        <Feature value={playerMock.filter(el => el.status === "Inactive").length} text={context.t("Temporarily Blocked")} icon="user" 
          subtext={context.t("Excluded for up to 1 month")}
        />
        <Feature value={playerMock.filter(el => el.status === "Blocked").length} text={context.t("Permanently excluded")}icon="warning" 
          subtext={context.t("Self excluded indefinitely")}
        />
      </div>
      <div className="gridWrap">
        <div className="ag-theme-material">
          {/* --------------------------------------  Modify  ---------------------------------------- */}
          {RenderLinkButton({
            selectedPlayer: store.userID,
            link: "./playerResponsibleGaming",
            type: buttonTypes.chooseOneAndEdit,
            title: context.t("Edit Limits"),
            customStyles: {margin: "25px 20px"}
          })}
          <div style={{ height: "52vh" }}>
            <GridConfig
              props={{
                gridType: "ResponsibleGaming",
                onGridReady,
                onRowSelected: onPlayerSelected,
                rowData: playerMock
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ResponsibleGaming.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default ResponsibleGaming;
