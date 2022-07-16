import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { changeLoginForm, loggedInUser } from "./loginPage/loginReducers";
import { changeGridData } from "./gridPlayersLoad/gridPlayersReducers";
import { showNotification } from "./notifications/notificationReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { changeSelectedUser } from "./gridUserSelection/userSelectionReducers";
import { changeAdminGridData } from "./gridAdminsLoad/gridAdminsReducers";
import { changeMenuTab } from "./menuHighlight/menuReducers";
import { changeCampaignData } from "./createCampaign/createCampaignReducers";
import { changeAdminsReportsData } from "./adminsReports/adminsReportsReducers";
import { i18nState } from "redux-i18n";
import {
  changeUserData,
  changeProfileUserData,
} from "./userManagment/userReducers";
import { changePlayerData } from "./playerManagement/playerReducers";
const persistConfig = {
  key: "user",
  whitelist: [
    "loggedInUser",
    "changeMenuTab",
    "changeSelectedUser",
    "i18nState",
    "changeCampaignData",
    "changeAdminsReportsData",
    "changeUserData",
    "changeProfileUserData",
    "changePlayerData",
  ],
  storage,
};

const rootReducer = combineReducers({
  loggedInUser,
  changeProfileUserData,
  changePlayerData,
  changeUserData,
  changeLoginForm,
  showNotification,
  changeGridData,
  changeSelectedUser,
  changeAdminGridData,
  changeMenuTab,
  changeCampaignData,
  changeAdminsReportsData,
  i18nState,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);
export { store, persistor };
