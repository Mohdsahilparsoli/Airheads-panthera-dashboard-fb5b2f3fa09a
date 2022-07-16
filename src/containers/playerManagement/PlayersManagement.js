import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import {
  RenderLinkButton,
  buttonTypes
} from "../../components/button/renderButton";
import Feature from "../../components/Feature";
import GridConfig from "../../components/grid/GridConfig";

import {setCurrentMenuTab} from '../../store/menuHighlight/menuActions'
import { checkRequest } from "../../store/authentication/tokenHandlerAction";
import { getPlayersData } from "../../store/gridPlayersLoad/gridPlayersActions";
import { setSelectedUser,setSelectedUsers } from "../../store/gridUserSelection/userSelectionActions";

const PlayersManagement = (props, context) => {
  const store = useSelector((state) => ({
    data:       state.changeGridData.data,
    isLoading:  state.changeGridData.isLoading,
    userID:     state.changeSelectedUser.id,
    multipleIDs:state.changeSelectedUser.ids
  }));
  const dispatch = useDispatch();

  const title = 'Player Management'
  const [gridApi, setGridApi] = useState({});

  useEffect(() => {
    document.title = title;
    dispatch(checkRequest(getPlayersData()));
    dispatch(setSelectedUser(''));
    dispatch(setSelectedUsers([])) 
    dispatch(setCurrentMenuTab('Player Management'))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGridReady = params => {
    setGridApi(params.api);
  };

  const onPlayerSelected = e => {
    const selectedRows = gridApi.getSelectedRows();
    if(selectedRows.length !== 1){
      dispatch(setSelectedUser('')) 
    }
    if(selectedRows.length === 1){
      
      dispatch(setSelectedUser(selectedRows[0].id)) 
    }
    const selectOnlyIds = selectedRows.map(el => el.id)

    dispatch(setSelectedUsers(selectOnlyIds)) 
  };
  const formatData =  store.data.map((obj) => ({
    ...obj,
    loginStatus: obj.loginStatus.length !== 0 ? obj.loginStatus.slice(-1)[0].login_time : 'No Login Records',
    verifiedAt: obj.verifiedAt === null? "Not Verified" : obj.verifiedAt
  }))
  console.log(formatData)

  return (
    <div className="main">
      <h3>{context.t("Player Management")}</h3> <hr />
      <div className="featureCointainer">
        <Feature value={store.data.length} text={context.t("Total Players")} icon="user" 
          subtext={context.t("Registered this month") + ": 32"}
        />
        <Feature value={store.data.filter(el => el.status === "active").length} text={context.t("Active Players")}  icon="user" 
          subtext={context.t("Active this month") + ": 55"}
        />
        <Feature value={store.data.filter(el => el.status === "inactive").length} text={context.t("Inactive Players")}  icon="user" 
          subtext={context.t("Inactive since 6 months") + ": 4"}
        />
        <Feature value={store.data.filter(el => el.status === "blocked").length} text={context.t("Blocked Players")}  icon="user" 
          subtext={context.t("Permanently blocked players")} 
        />
      </div>
      <div className="gridWrap">
        <div className="ag-theme-material">
          {/* ---------------------------------  Create Player  ----------------------------------- */}
          {RenderLinkButton({
            selectedPlayer: store.userID,
            type: buttonTypes.add,
            title: context.t("Create Player"),
            customStyles: { margin: "25px 20px" }
          }, context)}

          {/* ----------------------------------  Edit Player  ------------------------------------ */}
          {RenderLinkButton({
            selectedPlayer: store.userID,
            link: "./playerProfile",
            type: buttonTypes.chooseOneAndEdit,
            title: context.t("Edit Profile"),
            customStyles: { margin: "25px 20px" }
          })}

          {/* ---------------------------------  Delete Player  ---------------------------------- */}
          {RenderLinkButton({
            selectedPlayer: store.multipleIDs,
            type: buttonTypes.delete,
            title: context.t("Deactivate"),
            customStyles: { margin: "25px 20px" },
            gridApi
          }, context)}
          <div style={{ height: "52vh" }}>
            <GridConfig
              props={{
                gridType: "PlayerManagement",
                onGridReady,
                onRowSelected: onPlayerSelected,
                rowData: formatData
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PlayersManagement.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default PlayersManagement;
