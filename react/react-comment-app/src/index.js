import React from 'react';
import ReactDOM from 'react-dom'; //index.js 入口文件
import CommentApp from './CommentApp'; //模块机制
import './index.css'; // 像js一样引入, 不用link标签了

ReactDOM.render(
  // react 的组件世界
  // JSX js in html
  <CommentApp />,
  document.getElementById('root')
)