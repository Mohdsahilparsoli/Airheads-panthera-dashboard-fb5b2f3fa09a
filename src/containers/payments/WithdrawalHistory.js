import React, { useState, useEffect } from "react";
import Feature from "../../components/Feature";
import GridConfig from "../../components/grid/GridConfig";
import { withdrawalHistoryDataMock } from "../../mockData/withdrawalHistoryDataMock";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux'
import { setCurrentMenuTab } from '../../store/menuHighlight/menuActions'
const WithdrawalHistory = (props, context) => {
  const dispatch = useDispatch()
  // eslint-disable-next-line no-unused-vars
  const [gridApi, setGridApi] = useState({});

  const [rowData, setRowData] = useState([]);

  const title = 'Panthera Platform - Withdrawal History'
  useEffect(() => {
    document.title = title;
    dispatch(setCurrentMenuTab('Withdrawal History'))
    setRowData(withdrawalHistoryDataMock);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGridReady = params => {
    setGridApi(params.api);    
  };

  return (
    <div className="main">
      <h3>{context.t("Withdrawal History")}</h3> <hr />
      <div className="featureCointainer">
        <Feature value={38} text={context.t("Withdrawals for review")} icon="payment" subtext={context.t("withdrawals pending manual review")} />
        <Feature value={125} text={context.t("Withdrawals in 24hrs")} icon="payment" subtext={context.t("by 88 players")}/>
      </div>

      <div className="gridWrap">
      <div className="ag-theme-material">        
          <div style={{ height: "62vh" }}>
            <GridConfig
              props={{
                gridType: "WithdrawalHistory",
                onGridReady,
                rowData
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

WithdrawalHistory.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default WithdrawalHistory;
