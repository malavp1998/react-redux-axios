import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App"
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import reducers from "./redux/reducers";

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
