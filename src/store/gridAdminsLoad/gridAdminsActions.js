import * as constants from "./gridAdminsConstants";
import config from "../../config";

export const getAdminsData = () => (dispatch, getState) => {
  const {token} = getState().loggedInUser
  const requestOptions = {
    method: "GET",
    headers: { "x-access-token": `${token}` },
  };
  dispatch({ type: constants.REQUEST_ADMINS_PENDING });
  fetch(`${config.API_URL}admins/get_users`, requestOptions)
    .then((response) => response.json())
    .then((json) => {
     if(json.errors){
       throw new Error()
     }
      return dispatch({
        type: constants.REQUEST_ADMINS_SUCCESS,
        payload: json,
      });
    })
    .catch((error) =>
      dispatch({ type: constants.REQUEST_ADMINS_FAILED, payload: error })
    );
};
