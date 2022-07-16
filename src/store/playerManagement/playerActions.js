import * as constants from "./playerConstatnts";
import config from "../../config";
import {
  setNotificationMessage,
  setShowNotificationMessage,
  setNotificationSeverity,
} from "../notifications/notificationActions";

export const getPlayerInfo = (id) => (dispatch, getState) => {
  const { token } = getState().loggedInUser;
  const requestOptions = {
    method: "GET",
    headers: { "x-access-token": `${token}` },
  };
  fetch(`${config.API_URL}players/${id}`, requestOptions)
    .then((response) => response.json())
    .then((json) => {
      if (json.errors) {
        json.errors.forEach((er) => {
          throw new Error(er.message);
        });
      }
      return dispatch({
        type: constants.REQUEST_PLAYER_SUCCESS,
        payload: json,
      });
    })
    .catch((error) => {
      dispatch(setNotificationMessage(error.message));
      dispatch(setShowNotificationMessage(true));
      dispatch({ type: constants.REQUEST_PLAYER_FAILED, payload: error });
    });
};

export const UpdatePlayer = ({ id, body }) => (dispatch, getState) => {
  const { token } = getState().loggedInUser;
  const requestOptions = {
    method: "PUT",
    headers: {
      "x-access-token": `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  fetch(`${config.API_URL}players/update/${id}`, requestOptions)
    .then((response) => response.json())
    .then((json) => {
      if (json.errors) {
        throw new Error();
      }
      return dispatch({
        type: constants.REQUEST_UPDATE_PLAYER_SUCCESS,
        payload: json,
      });
    })
    .catch((error) =>
      dispatch({ type: constants.REQUEST_UPDATE_PLAYER_FAILED, payload: error })
    );
};
