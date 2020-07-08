import React from 'react';
import { Provider } from 'mobx-react';
import articleStore from './store/articleStore'
import Home from './pages/home'
import logo from './logo.svg';
import 'util/request.js'
import './App.css';

const store = {
  articleStore
}
function App() {
  return (
    // 解构所有的store 所有的store就放到全局上了
    // 解构完就是articleStore={articleStore}这样的
    <Provider {...store} >
      <Home />
    </Provider>
      );
}

export default App;
