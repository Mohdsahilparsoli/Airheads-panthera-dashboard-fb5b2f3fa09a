import * as constants from "./adminsReportsConstants";

const initialState = {
  reportTab: 'one'
};

export const changeAdminsReportsData = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.SET_ACTIVE_REPORT_TAB:
      return { ...state, reportTab: action.payload };
    default:
      return state;
  }
};