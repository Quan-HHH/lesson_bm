import { combineReducers } from 'redux-immutable' //将最外层数据页转换成immutable
import { createStore, 
    // combineReducers,
     applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import HomeReducer from './reducer/home/index';

const rootRedcer = combineReducers({
    home: HomeReducer
})

// store.getState().home
// HomeReducer 里面的数据已经变成immutable的了
// rootReducer的数据还是原生js
export default createStore(rootRedcer, applyMiddleware(thunk))