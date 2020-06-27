import { fromJS } from 'immutable';
import { GET_HOME_LIST } from '../../constants';

// Map = {}  List = []
const defaultState = fromJS({
  homeList: []
})
// reducer: 原生 js 对象 改成 
// state 已经变成 immutable 结构的

export default function(state = defaultState, action) {
  switch(action.type) {
    case GET_HOME_LIST:
      const newHomeList = action.homeList;
      // 这里不能使return state  因为state没有改变 要return更新过的state
      return state.set('homeList', newHomeList);   //把homeList 设置为newHomeList
      // return {
      //   homeList: action.homeList
      // };
    default:
      return defaultState
  }
}