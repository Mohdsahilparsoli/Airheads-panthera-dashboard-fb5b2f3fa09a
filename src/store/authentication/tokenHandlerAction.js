import {
  setNotificationMessage,
  setShowNotificationMessage,
} from "../../store/notifications/notificationActions";
import { updateToken, updateLoggedIn } from "../loginPage/loginActions";
import auth from "../../validators/auth";
import config from "../../config";

export const checkRequest = (action) => (dispatch, getState) => {
  let responseCode = null;
  const { id, email, token, refreshToken } = getState().loggedInUser;
  const TokenValid = auth.checkJWT(token);
  if (!TokenValid) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        UUID: id,
        email,
        refreshToken,
      }),
    };
    fetch(`${config.API_URL}auth/refresh_token`, requestOptions)
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
        dispatch(updateToken(data.token));
      })
      .then(() => dispatch(action))
      .catch((error) => {
        dispatch(updateLoggedIn());
        dispatch(setNotificationMessage(error.message));
        dispatch(setShowNotificationMessage(true));
      });
  } else {
    dispatch(action);
  }
};
