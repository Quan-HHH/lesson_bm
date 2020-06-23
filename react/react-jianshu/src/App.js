import React from 'react';
import { fromJS } from 'immutable';
import ImmutableComponent from './components/common';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/index'
import logo from './logo.svg';
import Header from './components/Header/Header';
import Home from './pages/home'
import Detail from './pages/detail'


class App extends ImmutableComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path="/" component={Home} exact />
          <Route path="/detail" component={Detail} />
        </BrowserRouter>
      </Provider>

    );
  }
}


export default App;

