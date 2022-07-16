import React, { useState, useEffect } from 'react'
import GridConfig from "../../components/grid/GridConfig";
import Feature from "../../components/Feature";
import { onlinePlayersReportDataMock } from "../../mockData/onlinePlayersReportDataMock";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux'
import { setCurrentMenuTab } from '../../store/menuHighlight/menuActions'
function OnlinePlayersReport (props, context) {
  const dispatch = useDispatch()
  const [rowData, setRowData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [gridApi, setGridApi] = useState({});

  const title = 'Panthera Platform - Online Players'
	useEffect(() => {
    document.title = title

    setRowData(onlinePlayersReportDataMock);
  }, [])

  const onGridReady = params => {
    setGridApi(params.api);
    dispatch(setCurrentMenuTab('Online Players'))
  };

	return (
		<div className='main'>
			<h3>{context.t("Online Players Report")}</h3> <hr />
      <div className="featureCointainer">
        <Feature value={368} text={context.t("Online Players last 1hr")} icon="user" subtext={context.t("Played 38 game varieties")} />
        <Feature value={12565} text={context.t("Online for the last 24h")} icon="user" subtext={context.t("Higher than usual 24hr Activity")} />
      </div>

      <div className="gridWrap">
        <div className="ag-theme-material">
          <div style={{ height: "62vh" }}>
            <GridConfig
              props={{
                gridType: "OnlinePlayersReport",
                onGridReady,
                rowData
              }}
            />
          </div>
        </div>
      </div>
		</div>
	)
}

OnlinePlayersReport.contextTypes = {
  t: PropTypes.func.isRequired
}

export default OnlinePlayersReport