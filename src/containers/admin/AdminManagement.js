import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Feature from "../../components/Feature";
import GridConfig from "../../components/grid/GridConfig";
import {
  RenderLinkButton,
  buttonTypes,
} from "../../components/button/renderButton";

import { setSelectedAdmin } from "../../store/gridUserSelection/userSelectionActions";
import { setCurrentMenuTab } from "../../store/menuHighlight/menuActions";
import { getAdminsData } from "../../store/gridAdminsLoad/gridAdminsActions";
import { checkRequest } from "../../store/authentication/tokenHandlerAction";

// eslint-disable-next-line no-empty-pattern
const AdminManagement = ({}, context) => {
  const store = useSelector((state) => ({
    adminId: state.changeSelectedUser.adminId,
    data: state.changeAdminGridData.data,
  }));
  const dispatch = useDispatch();
  const [gridApi, setGridApi] = useState({});

  const title = "Admin Managment";
  useEffect(() => {
    document.title = title;
    dispatch(setSelectedAdmin(""));
    dispatch(setCurrentMenuTab("Admin Management"));

    dispatch(checkRequest(getAdminsData()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const onAdminSelected = (e) => {
    const focusedCell = gridApi.getFocusedCell();
    const selectedInfo = gridApi.getDisplayedRowAtIndex(focusedCell.rowIndex);
    selectedInfo.selected
      ? dispatch(setSelectedAdmin(selectedInfo.data.id))
      : dispatch(setSelectedAdmin(""));
  };

  const formatData =  store.data.map((obj) => ({
    ...obj,
    loggedIn: obj.loggedIn === true ? 'Online' : 'Offline'
  }))
  return (
    <div className="main">
      <h3>{context.t("Admin Management")}</h3> <hr />
      <div className="featureCointainer">
        <Feature
          value={store.data.length}
          text={context.t("Total Admins")}
          icon="user"
          // subtext={context.t("Total Active Admins") + ": 2"}
        />
        <Feature
          value={store.data.filter((el) => el.status === "active").length}
          text={context.t("Active Admins")}
          icon="user"
          subtext={context.t("Total Active Admins")}
        />
        <Feature
          value={
            store.data.filter((el) => el.status === "inactive").length
          }
          text={context.t("Inactive Admins")}
          icon="user"
          subtext={context.t("Total Inactive Admins")}
        />
        <Feature
          value={store.data.filter((el) => el.status === "blocked").length}
          icon="warning"
          subtext={context.t("Permanently Removed Access")}
          text={context.t("Blocked Admins")}
        />
      </div>
      <div className="gridWrap">
        <div className="ag-theme-material">
          {/* ----------------------------------  Edit Admin  ------------------------------------ */}
          {RenderLinkButton({
            selectedPlayer: store.adminId,
            link: "./adminProfile",
            type: buttonTypes.chooseOneAndEdit,
            title: context.t("Edit Profile"),
            customStyles: { margin: "25px 20px" },
          })}
          <div style={{ height: "50vh" }}>
            <GridConfig
              props={{
                gridType: "AdminManagement",
                onGridReady,
                onRowSelected: onAdminSelected,
                rowData: formatData,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
AdminManagement.contextTypes = {
  t: PropTypes.func.isRequired,
};
export default AdminManagement;
