import * as constants from "./userConstatnts";

const initialState = {
  user: {},
  isLoading: false,
};

export const changeUserData = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.REQUEST_USER_PENDING:
      return { ...state, isLoading: true };
    case constants.REQUEST_USER_SUCCESS:
      return { ...state, user: action.payload, isLoading: false };
    case constants.REQUEST_USER_FAILED:
      return { ...state, isLoading: false };
    case constants.REQUEST_UPDATE_USER_PENDING:
      return { ...state, isLoading: true };
    case constants.REQUEST_UPDATE_USER_SUCCESS:
      return { ...state, user: action.payload, isLoading: false };
    case constants.REQUEST_UPDATE_USER_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

const initialProfileState = {
  current_user: {},
  isLoading: false,
};

export const changeProfileUserData = (state = initialProfileState, action = {}) => {
  switch (action.type) {
    case constants.REQUEST_CURREENT_USER_PENDING:
      return { ...state, isLoading: true };
    case constants.REQUEST_CURREENT_USER_SUCCESS:
      return { ...state, current_user: action.payload, isLoading: false };
    case constants.REQUEST_CURREENT_USER_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
