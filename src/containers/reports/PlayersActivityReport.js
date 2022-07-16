import React, { useState, useEffect } from 'react'
import GridConfig from "../../components/grid/GridConfig";
import Feature from "../../components/Feature";
import { playersActivityReportDataMock } from "../../mockData/playersActivityReportMock";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux'
import { setCurrentMenuTab } from '../../store/menuHighlight/menuActions'

function PlayersActivityReport (props, context) {
  const dispatch = useDispatch()
  const [rowData, setRowData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [gridApi, setGridApi] = useState({});

  const title = 'Panthera Platform - Players Activity'
	useEffect(() => {
    document.title = title
    dispatch(setCurrentMenuTab('Players Activity'))
    setRowData(playersActivityReportDataMock);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onGridReady = params => {
    setGridApi(params.api);
  };

	return (
		<div className='main'>
			<h3>{context.t("Players Activity Report")}</h3> <hr />
      <div className="featureCointainer">
        <Feature value={368} text={context.t("Active last hour")}  icon="user" subtext={context.t("Currently Online") + ": 78"} />
        <Feature value={12565} text={context.t("Active in 24hrs")}  icon="user" subtext={context.t("Higher Than Usual 24hr Activity")} />
      </div>

      <div className="gridWrap">
        <div className="ag-theme-material">
          <div style={{ height: "62vh" }}>
            <GridConfig
              props={{
                gridType: "PlayersActivityReport",
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

PlayersActivityReport.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default PlayersActivityReport