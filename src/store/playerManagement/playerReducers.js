import * as constants from "./playerConstatnts";

const initialState = {
  player: {},
  isLoading: false,
};

export const changePlayerData = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.REQUEST_PLAYER_PENDING:
      return { ...state, isLoading: true };
    case constants.REQUEST_PLAYER_SUCCESS:
      return { ...state, player: action.payload, isLoading: false };
    case constants.REQUEST_PLAYER_FAILED:
      return { ...state, isLoading: false };
    case constants.REQUEST_UPDATE_PLAYER_PENDING:
      return { ...state, isLoading: true };
    case constants.REQUEST_UPDATE_PLAYER_SUCCESS:
      return { ...state, player: action.payload, isLoading: false };
    case constants.REQUEST_UPDATE_PLAYER_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

