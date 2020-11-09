import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import userReducer from "./redux/reducers/userReducer";
import tweetReducer from "./redux/reducers/tweetReducer";

/* const rootReducer = combineReducers({
  userReducer,
  tweetReducer,
}); */
const store = createStore(userReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
