import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Texts from './components/js/Texts';
import Images from './components/js/Images';
import Toggle from './components/js/Toggle';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Texts />
    <Images/>
    <Toggle gender="male" />
  </React.StrictMode>,
  document.getElementById('infographics')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
