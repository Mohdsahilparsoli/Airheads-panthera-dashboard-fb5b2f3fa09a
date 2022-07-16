import React, { useState, useEffect } from "react";
import GridConfig from "../../components/grid/GridConfig";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTicket } from "../../store/gridUserSelection/userSelectionActions";
import { communicationsDataMock } from '../../mockData/communicationsMockData' 
import PropTypes from "prop-types";
import {
  RenderLinkButton,
  buttonTypes
} from "../../components/button/renderButton";
import {setCurrentMenuTab} from '../../store/menuHighlight/menuActions'

const Communications = (props, context) => {
  const store = useSelector((state) => ({
    ticketId: state.changeSelectedUser.ticketId
  }))

  const dispatch = useDispatch();

  const title = 'Communications'
  const communications = communicationsDataMock
  const [gridApi, setGridApi] = useState({});

  useEffect(() => {
    document.title = title;

    dispatch(setSelectedTicket(''))
    dispatch(setCurrentMenuTab('Communications'))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTicketSelected = () => {
    const selectedRows = gridApi.getSelectedRows();
    if(selectedRows.length !== 1){
      dispatch(setSelectedTicket('')) 
    }
    if(selectedRows.length === 1){
      
      dispatch(setSelectedTicket(selectedRows[0].id)) 
    }
  }

  const onGridReady = params => {
    setGridApi(params.api);
  };

  return (
    <div className="main">
      <h3>{context.t("Communications")}</h3> <hr />
      <div className="featureCointainer">

      </div>

      <div className="gridWrap">
        <div className="ag-theme-material">

          {RenderLinkButton(
            {
              type: buttonTypes.createTicket,
              title: context.t("Create Ticket"),
              customStyles: { margin: "25px 20px" },
            },
            context
          )}

          {RenderLinkButton({
            selectedPlayer: store.ticketId,
            link: "./viewTicket",
            type: buttonTypes.chooseOneAndEdit,
            title: context.t("View Ticket"),
            customStyles: { margin: "25px 20px" }
          })}

          <div style={{ height: "57vh" }}>
            <GridConfig
              props={{
                gridType: "Communications",
                onGridReady,
                onRowSelected: onTicketSelected,
                rowData: communications
              }}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

Communications.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Communications;
