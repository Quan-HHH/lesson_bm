import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes/index';
import fastclick from 'fastclick';
fastclick.attach(document.body);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);