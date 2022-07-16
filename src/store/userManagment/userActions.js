import * as constants from "./userConstatnts";
import config from "../../config";
import {
  setNotificationMessage,
  setShowNotificationMessage,
  setNotificationSeverity,
} from "../notifications/notificationActions";
import { updateUserData } from "../loginPage/loginActions";

export const getUserInfo = (UUID) => (dispatch, getState) => {
  const { token } = getState().loggedInUser;
  const requestOptions = {
    method: "GET",
    headers: { "x-access-token": `${token}` },
  };
  //   dispatch({ type: constants.REQUEST_USER_PENDING });
  fetch(`${config.API_URL}admins/user/${UUID}`, requestOptions)
    .then((response) => response.json())
    .then((json) => {
      if (json.errors) {
        json.errors.forEach((er) => {
          throw new Error(er.message);
        });
      }
      return dispatch({
        type: constants.REQUEST_USER_SUCCESS,
        payload: json.user,
      });
    })
    .catch((error) => {
      dispatch(setNotificationMessage(error.message));
      dispatch(setShowNotificationMessage(true));
      dispatch({ type: constants.REQUEST_USER_FAILED, payload: error });
    });
};

export const UpdateUser = ({ UUID, body }) => (dispatch, getState) => {
  const { token } = getState().loggedInUser;
  const requestOptions = {
    method: "PUT",
    headers: {
      "x-access-token": `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  //   dispatch({ type: constants.REQUEST_UPDATE_USER_PENDING });
  fetch(`${config.API_URL}admins/user/${UUID}`, requestOptions)
    .then((response) => response.json())
    .then((json) => {
      if (json.errors) {
        throw new Error();
      }
      return dispatch({
        type: constants.REQUEST_UPDATE_USER_SUCCESS,
        payload: json,
      });
    })
    .catch((error) =>
      dispatch({ type: constants.REQUEST_UPDATE_USER_FAILED, payload: error })
    );
};
export const UpdatePhoto = (formData) => (dispatch, getState) => {
  const { token, id } = getState().loggedInUser;
  const requestOptions = {
    method: "POST",
    headers: { "x-access-token": `${token}` },
    body: formData,
  };
  //   dispatch({ type: constants.REQUEST_UPDATE_USER_PENDING });
  fetch(`${config.API_URL}admins/user/update_photo/${id}`, requestOptions)
    .then((response) => response.json())
    .then((json) => {
      if (json.errors) {
        json.errors.forEach((er) => {
          throw new Error(er.message);
        });
      }
      dispatch(updateUserData(json));
      dispatch(
        setNotificationMessage("Profile Picture Was Successfully Updated")
      );
      dispatch(setNotificationSeverity("success"));
      dispatch(setShowNotificationMessage(true));
    })
    .catch((error) => {
      // dispatch({ type: constants.REQUEST_UPDATE_USER_FAILED, payload: error })
      dispatch(setNotificationMessage(error.message));
      dispatch(setShowNotificationMessage(true));
    });
};

export const getCurrentUserInfo = () => (dispatch, getState) => {
  const { token, id } = getState().loggedInUser;
  const requestOptions = {
    method: "GET",
    headers: { "x-access-token": `${token}` },
  };
  dispatch({ type: constants.REQUEST_CURREENT_USER_PENDING });
  fetch(`${config.API_URL}admins/user/${id}`, requestOptions)
    .then((response) => response.json())
    .then((json) => {
      if (json.errors) {
        json.errors.forEach((er) => {
          throw new Error(er.message);
        });
      }
      dispatch(updateUserData(json))
      return dispatch({
        type: constants.REQUEST_CURREENT_USER_SUCCESS,
        payload: json.user,
      });
     
    })
    .catch((error) => {
      dispatch({
        type: constants.REQUEST_CURREENT_USER_FAILED,
        payload: error,
      });
      dispatch(setNotificationMessage(error.message));
      dispatch(setShowNotificationMessage(true));
    });
};
