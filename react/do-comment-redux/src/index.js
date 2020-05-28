import React from 'react';
import ReactDOM from 'react-dom';
// 创建store中央仓库 数据管理的架构
// createStore  comments数据 放到中央仓库里去
// 数据放到仓库 跟组件没有依赖关系
import { createStore} from 'redux' // 全家桶三巨头 数据管理
import { Provider } from 'react-redux' // 数据通过Provider提供 Provider是一个组件
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
// comments 父组件   props 事件

// 仓库  状态树  一个项目中只有一棵状态树
const store = createStore(commentsReducer)

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root')
)
