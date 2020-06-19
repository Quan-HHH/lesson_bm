import React, { Fragment, useState, createContext } from 'react';
import { Provider, connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
const context = createContext();  // 跨层级传数据
// const { Provider, Consumer } = context;
// stateful => class state
// stateLess => function   react16(一系列的api hook)之后 也是有状态的了
// 所以叫做函数组件和类组件
const { createStore, combineReducers } = require('redux')
let isLogin = false;
// isLogin = true
let posts = [];
// 状态 reducer（纯函数）
// state 上一次的状态
// createStore 经过 reducer 生成 store    ： 状态默认值
// dispatch action 也要 reducer 生成 store： 用户触发
// reducer 兼顾两者：判断 
//
const LOGIN_STATUS = Symbol('login/change-login-status');
const POSTS_STATUS = Symbol('posts/change-posts-status');
function loginReducer(state = isLogin, action) {
  switch (action.type) {
    case LOGIN_STATUS:
      // state = !state
      console.log(3333)
      return !state;            // 返回 新的state，不是修该原来那个变量
    default:                   // default 默认值
      return state; 
  }
  // return false;
}
function postsReducer(state = posts, action) {
  switch (action.type) {
    case POSTS_STATUS:
      return action.newPosts;
    default :
      return state
  }
}
// action：纯对象（{}）, type 字段：区分这个action 干啥的，常量, 整个应用唯一
// 自研状态管理库：单向

const loginAction = {
  type: LOGIN_STATUS,
  a: 1
}
const postAction = {
  type: POSTS_STATUS,
  newPosts: [{ a: 1 }, { a: 2 }]
}
// 分了 login posts
// 接受一个
// combineReducers 集合
const rootReducer = combineReducers({
  login: loginReducer,
  posts: postsReducer
})
// 状态存到 store
// createStore（需要返回值） 也调用了 reducer
// createStore 没有指定 任何 action type
const store = createStore(rootReducer);
console.log(store);
// mapStateToProps
console.log('now', store.getState());

// action - reducer

// mapDispatchToProps
store.dispatch(loginAction);
store.dispatch(postAction);
console.log('now', store.getState());
function Login() {
  return (

    <div>
      Login
      {/* 可以任意放 包在哪都行 */}
      {/* <Consumer> */}
        {/* 里面一个大括号 一个函数 返回要渲染的东西 */}
        {
          // (obj) => {
          //   console.log(obj);
          //   return (
          //     <span style={{color: obj.state.theme}}>span</span>
          //   )
          // }
        }

      {/* </Consumer> */}
    </div>
  )
}
function Header(props) {
  // class this.props
  // const { theme } = props;
  console.log(111111111111111,props)
  return (
    <div>
      Header
      <Login />
      { props.login ? '1':'0'}
      <button onClick={() => { props.changeLoginStatus() }}>btn</button>
    </div>
  )
}
// 获取全局store 里面的数据 可以用Consumer来取
// store里面全部的数据都是全局的 Header组件只要header相关的数据
// 从store里面 过滤一下当前需要的数据
// 取到数据
function mapStateToProps(state) {
  // 把想要的数据return出来
  return {
    login: state.login
  }
}
// 修改数据
function mapDispatchToProps(dispatch) {
  return {
    changeLoginStatus() {
      dispatch(loginAction)
    }
  }
}
const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps) (Header)
function Footer() {
  return 'Footer'
}
function App() {
  // 函数不能this.state = {}
  // useState返回的是一个数组 大概 [{ theme: 'red'}, function setTheme]
  const [state, setTheme] = useState({ theme: 'red' }) //括号里穿的什么 state就是什么
  return (
    // value 是固定的 不能取别的名字 外面的大括号代表要写js了 里面的大括号代表一个对象
    <Provider store={store}>
      <Fragment>
        <ConnectedHeader theme={state.theme} />
        <Footer />
      </Fragment>
    </Provider>

  );
}

export default App;
