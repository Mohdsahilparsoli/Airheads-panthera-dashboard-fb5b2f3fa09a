import * as constants from "./gridPlayersConstants";

const initialState = {
  data: [],
  isLoading: false,
};

export const changeGridData = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.REQUEST_PLAYERS_PENDING:
      return { ...state, isLoading: true };
    case constants.REQUEST_PLAYERS_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case constants.REQUEST_PLAYERS_FAILED:
      return { ...state, isLoading: false };
    case constants.REQUEST_PLAYERS_PENDING:
      return { ...state, isLoading: true };
    case constants.REQUEST_PLAYERS_SUCCESS:
      return { ...state, isLoading: false };
    case constants.REQUEST_PLAYERS_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
