import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; /*全局样式*/
import App from './App';
import * as serviceWorker from './serviceWorker';
// 添加路由对象 react 组件化  路由
import Main from './components/Main'
import About from './components/About'
import Search from './components/Search'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter> {/*统管浏览器的路由对象*/}
    <div>
      {/* excat 表示只有/  如果取消掉exact  包含/ 的path 都会显示 
      所以 一般在首页加一个exact */}
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/search/:searchTerm" component={Main} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
