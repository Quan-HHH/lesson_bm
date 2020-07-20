import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const defaultState = {
  'content': 0
}
const reducer = (state = defaultState, action) => {
  let { content } = state;
  switch(action.type){
    case 'plus':
      content += action.payload;
      return {
        ...state,
        content
      }
    case 'decrease':
      content -= action.payload;
      return {
        ...state,
        content
      }
    default:
      return state; 
  }
}

const reducer2 = (state = {name: '1', age: 11, gender: 1}, action) => {
  switch (action.type) {
  
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  state1: reducer,
  state2: reducer2
})
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
