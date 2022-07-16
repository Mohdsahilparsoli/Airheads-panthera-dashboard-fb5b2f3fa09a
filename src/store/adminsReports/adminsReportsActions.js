import * as constants from "./adminsReportsConstants";

export const setActiveReportTab = (activeReportTab) => ({
  type: constants.SET_ACTIVE_REPORT_TAB,
  payload: activeReportTab
});