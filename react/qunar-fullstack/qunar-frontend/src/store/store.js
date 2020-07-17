import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers';
import thunk from 'redux-thunk'; // 异步状态修改 如果是先去做了异步的事情 再来修改数据 

export default createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
)