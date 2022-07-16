import * as constants from "./menuConstants";

const initialState = {
  currentTab: ''
};

export const changeMenuTab = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.CURRENT_MENU_TAB:
      return { ...state, currentTab: action.payload};
    default:
      return state;
  }
};