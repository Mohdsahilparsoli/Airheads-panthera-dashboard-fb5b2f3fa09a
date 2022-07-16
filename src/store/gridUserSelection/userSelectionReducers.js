import * as constants from "./userSelectionConstants";

const initalStateSelectedUser = {
  id: "",
  ids: [],
  adminId: "",
  withdrawalId: "",
  bonusId: "",
  ticketId: ""
};

export const changeSelectedUser = (
  state = initalStateSelectedUser,
  action = {}
) => {
  switch (action.type) {
    case constants.SET_SELECTED_USER:
      return { ...state, id: action.payload };
    case constants.SET_SELECTED_USERS:
      return { ...state, ids: action.payload };
    case constants.SET_SELECTED_ADMIN:
      return { ...state, adminId: action.payload };
    case constants.SET_SELECTED_WITHDRAWAL:
      return { ...state, withdrawalId: action.payload };
    case constants.SET_SELECTED_BONUS:
      return { ...state, bonusId: action.payload };
    case constants.SET_SELECTED_TICKET:
      return { ...state, ticketId: action.payload };
    default:
      return state;
  }
};
