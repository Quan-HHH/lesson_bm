import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import './App.css';
import Login from './Login'
import Collect from './Collect'

function App() {
  return (
    <BrowserRouter>
      header
      <Route path="/login" component={Login} />
      <PrivateRoute path="/collect" component={Collect} />
    </BrowserRouter>
  );
}

export default App;
