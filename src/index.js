import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import rootReducer from "./Redux/reducers/index";
import { Provider } from "react-redux";
import promiseMW from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";

const mystore = applyMiddleware(promiseMW)(createStore);

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <Provider store={mystore(rootReducer)}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
