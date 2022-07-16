/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import GridConfig from "../../components/grid/GridConfig";
import Feature from "../../components/Feature";
import { withdrawalTransactionDataMock } from "../../mockData/withdrawalTransactionDataMock";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentMenuTab } from '../../store/menuHighlight/menuActions';
import { setSelectedWithdrawal } from "../../store/gridUserSelection/userSelectionActions";
import {
  RenderLinkButton,
  buttonTypes,
} from "../../components/button/renderButton";

const WithdrawalTransaction = (props, context) => {
  const store = useSelector((state) => ({
    withdrawalId:     state.changeSelectedUser.withdrawalId
  }));

  const [gridApi, setGridApi] = useState({});
  const dispatch = useDispatch()
  const [rowData, setRowData] = useState([]);

  const title = 'Panthera Platform - Withdrawal Transactions'

  useEffect(() => {
    document.title = title;
    dispatch(setSelectedWithdrawal(''));
    dispatch(setCurrentMenuTab('Withdrawal Transactions'));
    setRowData(withdrawalTransactionDataMock);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGridReady = params => {
    setGridApi(params.api);
  };

  const onWithdrawalSelected = (e) => { // TODO - temp fix, make different store only for campaigns
    const selectedRows = gridApi.getSelectedRows();
    if(selectedRows.length !== 1){
      dispatch(setSelectedWithdrawal('')) 
    }
    if(selectedRows.length === 1){
      console.log(selectedRows[0].transactionId)
      dispatch(setSelectedWithdrawal(selectedRows[0].transactionId)) 
    }
  };

  return (
    <div className="main">
      <h3>{context.t("Withdrawal Transactions")}</h3> <hr />
      <div className="featureCointainer">
        <Feature value={368} text={context.t("Transactions in 1h")} icon="payment" subtext={context.t("200 deposits / 168 withdrawals")} />
        <Feature value={12565} text={context.t("Transactions in 24hrs")} icon="payment" subtext={context.t("8565 deposits / 4000 withdrawals")}/>
      </div>

      <div className="gridWrap">
      <div className="ag-theme-material">        
          <div style={{ height: "62vh" }}>

          {RenderLinkButton({
              selectedPlayer: store.withdrawalId,
              link: "./withdrawalReview",
              type: buttonTypes.chooseOneAndEdit,
              title: context.t("Review Withdrawal"),
              customStyles: { margin: "25px 20px" }
            })}

            <GridConfig
              props={{
                gridType: "WithdrawalTransaction",
                onGridReady,
                onRowSelected: onWithdrawalSelected,
                rowData
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

WithdrawalTransaction.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default WithdrawalTransaction;
