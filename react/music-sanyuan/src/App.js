import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'
import store from './store'
import routes from './routes'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
