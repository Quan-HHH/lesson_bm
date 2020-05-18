import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // 默认导入
import { name } from './App'
import * as serviceWorker from './serviceWorker';

// 两个模块化的方案
// es module
// commonJs
// 移动：react-native
// pc: react-dom
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
