import * as constants from "./gridPlayersConstants";
import config from "../../config";

export const getPlayersData = () => (dispatch, getState) => {
  const {token} = getState().loggedInUser
  const requestOptions = {
    method: "GET",
    headers: { "x-access-token": `${token}` },
  };
  dispatch({ type: constants.REQUEST_PLAYERS_PENDING });
  fetch(`${config.API_URL}players/get_all`, requestOptions)
    .then((response) => response.json())
    .then((json) => {
     if(json.errors){
       throw new Error()
     }
      return dispatch({
        type: constants.REQUEST_PLAYERS_SUCCESS,
        payload: json,
      });
    })
    .catch((error) =>
      dispatch({ type: constants.REQUEST_PLAYERS_FAILED, payload: error })
    );
};

export const bulkUpatePlayers = (body) => (dispatch, getState) => {
  const {token} = getState().loggedInUser
  const requestOptions = {
    method: "PUT",
    headers: { "x-access-token": `${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
  dispatch({ type: constants.REQUEST_PLAYERS_UPDATE_PENDING });
  fetch(`${config.API_URL}players/bulk_update`, requestOptions)
    .then((response) => response.json())
    .then((json) => {
     if(json.errors){
       throw new Error()
     }
     dispatch({
        type: constants.REQUEST_PLAYERS_UPDATE_SUCCESS,
        payload: json,
      });
      window.location.reload(true);

    })
    .catch((error) =>
      dispatch({ type: constants.REQUEST_PLAYERS_UPDATE_FAILED, payload: error })
    );
};
