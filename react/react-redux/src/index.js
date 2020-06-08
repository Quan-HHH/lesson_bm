import React from 'react';
import ReactDom from 'react-dom';
const { createStore, combineReducers } = require('redux');
let isLogin = false;
let posts = [];
// 状态必须放到 reducer  (纯函数)
// createStore 经过reducer 生成store
// dispatch 也要经过reducer 生成store
// reducer 要兼顾两者: 判断 到底是用户触发 还是状态默认值
function loginReducer(state = isLogin, action) {
    switch(action.type) {
        case LOGIN_STATUS:
            return !state;      // 返回新的state 而不是修改原来那个变量state = !state
        default:
            return state;   //默认值
    }
}

function postsReducer(state = posts, action) {
    switch(action.type) {
        case POSTS_STATUS:
            return action.newPosts;
        default:
            return state;
    }
}

// action 纯对象 ({}, 就是一个花括号， 有一个type字段：用来区分这个action是干嘛 常量 整个应用唯一)
// const LOGIN_STATUS = 'LOGIN_STATUS';
// const LOGIN_STATUS = 'login/change-login-status';//login模块下的
const LOGIN_STATUS = Symbol('login/change-login-status');  // 传啥无所谓 是给人看的
const POSTS_STATUS = Symbol('posts/change-posts-status');
const loginAction = {
    type: LOGIN_STATUS, //必需的
    a : 1
}
const postAction = {
    type: POSTS_STATUS, //必需的
    newPosts: [{a: 1}, {a: 2}]
}
const rootReducer = combineReducers({
    login: loginReducer,
    posts: postsReducer
})
// 状态已经存到store 里面了
// createStore内部也调用了reducer很多次
const store = createStore(rootReducer);

console.log('now', store.getState());

// action -> reducer
// mapDispatchToProps
store.dispatch(loginAction)
// 去到 loginReducer postReducer  会去到哪？？

store.dispatch(postAction)
console.log('now', store.getState());

class App extends React.Component {
  handleLogin() {
    store.dispatch(loginAction)
  }
  render() {
    return (
      <div>
        isLogin: {store.getState().login ? '1':'0'}
        posts: {store.getState().posts.length}
        <button onClick={this.handleLogin}>切换login</button>
      </div>
    )
  }
}

function render() {
  ReactDom.render(<App />, document.getElementById('root'));
}
render();
// 订阅 store变化了 通知回调
store.subscribe(() => {
  render();
})