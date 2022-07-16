import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store, persistor } from "./store/combinedReducers";
import { PersistGate } from "redux-persist/integration/react";
import I18n from "redux-i18n";
import { translations } from "./translations/translation";

ReactDOM.render(
  <Provider store={store}>
    <I18n translations={translations} >
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </I18n>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
console.log('test test test test test')
