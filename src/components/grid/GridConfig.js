import React from "react";
import { AgGridReact } from "ag-grid-react";
import "../../styles/Grid.scss";
import * as columnDefinitions from "./ColumnsDefinition";
import * as rowDefSelection from "./RowSelection";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import "ag-grid-enterprise";
import PropTypes from "prop-types";
import { localeTextAGGrid } from "../../translations/agGridTranslations";
// import LoadingImage from "../../loading.svg";
import { LicenseManager } from "ag-grid-enterprise";
LicenseManager.setLicenseKey(
  "Airhead_Ventures_Ltd_pantheraplatform_single_1_Devs__10_January_2021_[v2]_MTYxMDIzNjgwMDAwMA==f2dc4ccbfd110ee12c39ae34a6eef741"
);

const onFirstDataRendered = (params) => {
  params.api.sizeColumnsToFit();
};

const onGridSizeChanged = (params) => {
  params.api.sizeColumnsToFit(params);
};

function createBottomCalc(rowData) {
  let result = [];
  let filtered = 0;
  if (rowData.length > 0) {
    filtered = rowData.reduce((a, b) => ({
      turnover: a.turnover + b.turnover,
      margin: a.margin + b.margin,
      ggr: a.ggr + b.ggr,
      bonusgiven: a.bonusgiven + b.bonusgiven,
      bonusspent: a.bonusspent + b.bonusspent,
      ngr: a.ngr + b.ngr,
    }));
    result.push({
      brand: "Total:",
      turnover: filtered.turnover,
      margin: filtered.margin,
      ggr: filtered.ggr,
      bonusgiven: filtered.bonusgiven,
      bonusspent: filtered.bonusspent,
      ngr: filtered.ngr,
    });
  } else {
    result.push({
      brand: "Total:",
      turnover: 0,
      margin: 0,
      ggr: 0,
      bonusgiven: 0,
      bonusspent: 0,
      ngr: 0,
    });
  }
  return result;
}

const gridConfig = (props, context) => {
  let rowSelection = "single";
  let columnDefs = [];
  let defaultColDef = {};
  let floatingFilter = false;
  let rowClassRules = {};
  let pagination = true;
  let pinnedBottomRowData = null;
  let paginationAutoPageSize = true;
  let sideBar = {
    toolPanels: [
      "filters",
      {
        id: "columns",
        labelDefault: "Columns",
        labelKey: "columns",
        iconKey: "columns",
        toolPanel: "agColumnsToolPanel",
        toolPanelParams: { suppressSyncLayoutWithGrid: false },
      },
    ],
  };
  const { gridType, onGridReady, onRowSelected, rowData } = props.props;
  // const test = {
  //   overlayLoadingTemplate: `<img src=${LoadingImage} className='loadingImage' alt='Loading'/>`,
  //   overlayNoRowsTemplate: `<div> Testing </div>`,
  // };

  switch (gridType) {
    case "Bonuses":
      rowSelection = rowDefSelection.bonusesRowSelection;
      columnDefs = columnDefinitions.bonusesColumnDef(context);
      defaultColDef = columnDefinitions.bonusesDefColDef;
      floatingFilter = columnDefinitions.bonusesFloatingFilter;
      break;
    case "PlayerManagement":
      rowSelection = rowDefSelection.playerManagementRowSelection;
      columnDefs = columnDefinitions.playerManagementColumnDef(context);
      defaultColDef = columnDefinitions.palyerManagementDefColDef;
      floatingFilter = columnDefinitions.palyerManagementFloatingFilter;
      break;
    case "ResponsibleGaming":
      rowSelection = rowDefSelection.responsibleGamingRowSelection;
      columnDefs = columnDefinitions.responsibleGamingColumnDef(context);
      defaultColDef = columnDefinitions.responsibleGamingDefColDef;
      floatingFilter = columnDefinitions.responsibleGamingFloatingFilter;
      break;
    case "Payments":
      rowSelection = rowDefSelection.paymnetsRowSelection;
      columnDefs = columnDefinitions.paymentsColumnDef(context);
      defaultColDef = columnDefinitions.paymentsDefColDef;
      floatingFilter = columnDefinitions.paymentsFloatingFilter;
      break;
    case "PlayerPayments":
      rowSelection = rowDefSelection.playerPaymnetsRowSelection;
      columnDefs = columnDefinitions.playerPaymentsColumnDef(context);
      defaultColDef = columnDefinitions.playerPaymentsDefColDef;
      floatingFilter = columnDefinitions.playerPaymentsFloatingFilter;
      rowClassRules = columnDefinitions.playerPayemntsRowClassRules;
      break;
    case "Admins":
      rowSelection = rowDefSelection.adminsRowSelection;
      columnDefs = columnDefinitions.adminsColumnDef(context);
      defaultColDef = columnDefinitions.adminsDefColDef;
      floatingFilter = columnDefinitions.adminsFloatingFilter;
      rowClassRules = columnDefinitions.adminRowClassRules;
      pagination = false;
      paginationAutoPageSize = false;
      sideBar = null;
      pinnedBottomRowData = createBottomCalc(rowData);
      break;
    case "WithdrawalTransaction":
      rowSelection = rowDefSelection.withdrawalTransactionsRowSelection;
      columnDefs = columnDefinitions.withdrawalTransactionsColumnDef(context);
      defaultColDef = columnDefinitions.withdrawalTransactionsDefColDef;
      floatingFilter = columnDefinitions.withdrawalTransactionsFloatingFilter;
      break;
    case "AdminManagement":
      rowSelection = rowDefSelection.adminManagementRowSelection;
      columnDefs = columnDefinitions.adminManagementColumnDef(context);
      defaultColDef = columnDefinitions.adminManagementDefColDef;
      floatingFilter = columnDefinitions.adminManagementFloatingFilter;
      break;
    case "PlayersActivityReport":
      rowSelection = rowDefSelection.playersActivityReportRowSelection;
      columnDefs = columnDefinitions.playersActivityReportColumnDef(context);
      defaultColDef = columnDefinitions.playersActivityReportDefColDef;
      floatingFilter = columnDefinitions.playersActivityReportFloatingFilter;
      break;
    case "OnlinePlayersReport":
      rowSelection = rowDefSelection.onlinePlayersReportRowSelection;
      columnDefs = columnDefinitions.onlinePlayersReportColumnDef(context);
      defaultColDef = columnDefinitions.onlinePlayersReportDefColDef;
      floatingFilter = columnDefinitions.onlinePlayersReportFloatingFilter;
      break;
    case "WithdrawalHistory":
      rowSelection = rowDefSelection.withdrawalHistoryRowSelection;
      columnDefs = columnDefinitions.withdrawalHistoryColumnDef(context);
      defaultColDef = columnDefinitions.withdrawalHistoryDefColDef;
      floatingFilter = columnDefinitions.withdrawalHistoryFloatingFilter;
      break;
    case "CampaignReports":
      rowSelection = rowDefSelection.campaignReportsRowSelection;
      columnDefs = columnDefinitions.campaignReportsColumnDef(context);
      defaultColDef = columnDefinitions.campaignReportsColumnDef;
      floatingFilter = columnDefinitions.campaignReportsFloatingFilter;
      sideBar = null;
      break;
    case "BonusesReports":
      rowSelection = rowDefSelection.bonusesReportsRowSelection;
      columnDefs = columnDefinitions.bonusesReportsColumnDef(context);
      defaultColDef = columnDefinitions.bonusesReportsDefColDef;
      floatingFilter = columnDefinitions.bonusesReportsFloatingFilter;
      sideBar = null;
      break;
    case "BonusReports":
      rowSelection = rowDefSelection.bonusReportsRowSelection;
      columnDefs = columnDefinitions.bonusReportsColumnDef(context);
      defaultColDef = columnDefinitions.bonusReportsDefColDef;
      floatingFilter = columnDefinitions.bonusReportsFloatingFilter;
      sideBar = null;
      break;
    case "Communications":
      rowSelection = rowDefSelection.communicationsRowSelection;
      columnDefs = columnDefinitions.communicationsColumnDef(context);
      defaultColDef = columnDefinitions.communicationsDefColDef;
      floatingFilter = columnDefinitions.communicationsFloatingFilter;
      rowClassRules = columnDefinitions.communicationsRowClassRules;
      break;
    case "ViewTicket":
      rowSelection = rowDefSelection.viewTicketRowSelection;
      columnDefs = columnDefinitions.viewTicketColumnDef(context);
      defaultColDef = columnDefinitions.viewTicketDefColDef;
      floatingFilter = columnDefinitions.viewTicketFloatingFilter;
      break;
    default:
      break;
  }
  const localeText = localeTextAGGrid(context);
  return (
    <>
      <AgGridReact
        rowSelection={rowSelection}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
        floatingFilter={floatingFilter}
        onRowSelected={onRowSelected}
        rowClassRules={rowClassRules}
        rowData={rowData}
        onFirstDataRendered={onFirstDataRendered}
        onGridSizeChanged={onGridSizeChanged}
        colResizeDefault="shift"
        pagination={pagination}
        paginationAutoPageSize={paginationAutoPageSize}
        sideBar={sideBar}
        localeText={localeText}
        //overlayLoadingTemplate={test.overlayLoadingTemplate}
        //overlayNoRowsTemplate={test.overlayLoadingTemplate}
        pinnedBottomRowData={pinnedBottomRowData}

      ></AgGridReact>
    </>
  );
};
gridConfig.contextTypes = {
  t: PropTypes.func.isRequired,
};
export default gridConfig;
