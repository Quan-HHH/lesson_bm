import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
  // 向应用提供单一状态树 整个组件的任何地方都可以引用这个store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
