import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import store from './store';
import { Provider } from 'react-redux';
import routes from './routes/index';
import { GlobalStyle } from './style';
import { IconStyle } from './asserts/iconfont/iconfont';

function App() {
    return (  
        <Provider store={store}>
          <HashRouter>
              <GlobalStyle />
              <IconStyle />
            {renderRoutes(routes)}
          </HashRouter>
        </Provider> 
    );
}

export default App;