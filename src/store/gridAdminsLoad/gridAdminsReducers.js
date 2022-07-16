import * as constants from "./gridAdminsConstants";

const initialState = {
  data: [],
  isLoading: false,
};

export const changeAdminGridData = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.REQUEST_ADMINS_PENDING:
      return { ...state, isLoading: true };
    case constants.REQUEST_ADMINS_SUCCESS:
      return { ...state, data: action.payload, isLoading: false};
    case constants.REQUEST_ADMINS_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};