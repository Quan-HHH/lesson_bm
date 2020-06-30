import React from 'react';
import { Provider } from 'mobx-react'
import artilcleStore from './store/articleStore'
import Home from 'pages/home'
import logo from './logo.svg';
import './App.css';
import './util/request.js'


const store = {
  artilcleStore
}
function App() {
  return (
    // 解构完 就是 artilcleStore={artilcleStore} 这样的东西
   <Provider {...store}>
     <Home />
   </Provider>
  );
}

export default App;
