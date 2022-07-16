import * as constants from "./loginConstants";
import {
  setNotificationMessage,
  setShowNotificationMessage,
} from "../../store/notifications/notificationActions";
import auth from "../../validators/auth";
import config from "../../config";

export const setLoginForm = (object) => ({
  type: constants.CHANHGE_LOGIN_FORM,
  payload: object,
});

export const setPasswordVisibility = (boolean) => ({
  type: constants.CHANGE_PASSWORD_VISIBILITY,
  payload: boolean,
});

export const setClearLoginForm = () => ({
  type: constants.CLEAR_LOGIN_FORM,
});

export const updateToken = (token) => ({
  type: constants.UPDATE_TOKEN,
  payload: token,
});

export const updateLoggedIn = () => ({
  type: constants.UPDATE_LOGGED_IN,
});

export const updateUserData = (data) => ({
  type: constants.UPDATE_USER_INFO,
  payload: data
});

export const setLoggedInUser = (params) => (dispatch) => {
  let uuid = params.data.user.UUID;
  let token = params.data.token;
  let refreshToken = params.data.refreshToken;
  let responseCode = null;
  fetch(`${config.API_URL}admins/user/${uuid}`, {
    headers: new Headers({
      "x-access-token": `${token}`,
    }),
  })
    .then((response) => {
      responseCode = response.status;
      return response.json();
    })
    .then((data) => {
      if (responseCode !== 200) {
        data.errors.forEach((er) => {
          throw new Error(er.message);
        });
      }

      dispatch({
        type: constants.SET_LOGGED_IN_USER,
        payload: {data: data.user, token, refreshToken },
      });
      auth.login(data.user, (link) => {
        params.props.history.push(link);
      });
    })
    .catch((error) => {
      dispatch(setNotificationMessage(error.message));
      dispatch(setShowNotificationMessage(true));
    });
};

export const logoutUser = () => (dispatch, getState) => {
  const { email } = getState().loggedInUser;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": `application/json` },
    body: JSON.stringify({email: email})
  };
  fetch(`${config.API_URL}auth/signout`, requestOptions)
    .then((response) => response.json())
    .then((json) => {
      if (json.errors) {
        json.errors.forEach((er) => {
          throw new Error(er.message);
        });
      }
      dispatch(updateLoggedIn())
    })
    .catch((error) => {
      dispatch(setNotificationMessage(error.message));
      dispatch(setShowNotificationMessage(true));
    });
};

