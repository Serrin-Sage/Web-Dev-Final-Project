import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style-sheets/home-page.css'
import './style-sheets/instructor-style.css'
import './style-sheets/button-style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

//Redux
import { Provider } from "react-redux";
import store from "./store";

//Router
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
