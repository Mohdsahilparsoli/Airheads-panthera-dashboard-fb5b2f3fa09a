import * as constants from "./loginConstants";

const initialState = {
  email: "",
  password: "",
  showPassword: false,
};

export const changeLoginForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.CHANHGE_LOGIN_FORM:
      return { ...state, [action.payload.field]: action.payload.value };
    case constants.CHANGE_PASSWORD_VISIBILITY:
      return { ...state, showPassword: action.payload };
    case constants.CLEAR_LOGIN_FORM:
      return { ...state, email: "", password: "", showPassword: false };
    default:
      return state;
  }
};

const userInitialState = {
  userLoggedIn: false,
  status: "",
  role: "",
  firstName: "",
  lastName: "",
  id: "",
  email: "",
  profilePicture: "",
  token: "",
  refreshToken: "",
};
export const loggedInUser = (state = userInitialState, action = {}) => {
  switch (action.type) {
    case constants.SET_LOGGED_IN_USER:
      return {
        ...state,
        userLoggedIn: true,
        status: action.payload.data.status,
        email: action.payload.data.email,
        role: action.payload.data.role,
        firstName: action.payload.data.firstName,
        lastName: action.payload.data.lastName,
        id: action.payload.data.id,
        profilePicture: action.payload.data.profilePicture,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
      };
    case constants.UPDATE_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case constants.UPDATE_LOGGED_IN:
      return {
        ...state,
        userLoggedIn: false,
      };
    case constants.UPDATE_USER_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
