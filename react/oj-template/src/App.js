import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import './mock/data.js'  // 数据由mock提供 再由axios引入到页面
// 数据跟组件分离开

// JSX UI 
// state MVVM
// 行为 面向对象

// Post只负责显示UI就行 数据请求被拿出来共享了
class Post extends Component {
  render() {
    return (
      <div>
        <p>{this.props.msg}</p>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
class Comment extends Component {
  render() {
    return (
      <div>
        COMMENT
      </div>
    )
  }
}
// 通用性地提供数据请求及更新的解决方案
const loadAndRefresh = (url) => (WrappedComponent) => {
  // 返回组件
  return class extends Component {
    constructor() {
      super();
      this.state = {
        // msg: null,
        // content: '111'
      }
    }
    componentDidMount() {
      // 数据请求
      
      this._loadData();
    }
    async _loadData() {
      this.setState({
        msg: '数据加载中...'
      });
      axios.get(url).then(res => {
        this.setState({
          msg: res.data.title,
          content: res.data.content
        });
        console.log(res.data)
      })
    }

    render() {
      const props = {
        msg: this.state.msg,
        content: this.state.content
      }
      return (
        <WrappedComponent {...props} />
      )
    }
  }
}

// 返回值是一个组件
//    /posts/ 是axios api请求的url
//   loadAndRefresh('/posts/') 返回一个函数后 再接受一个参数
const WrappedPost = loadAndRefresh('/posts/')(Post);  // 接受一个组件作为参数
const WrappedComment = loadAndRefresh('/comments/')(Comment); 

function App() {
  return (
    <div className="App">

      {/* <Post /> */}
      {/* 高阶组件 WrappedPost */}
      <WrappedPost />
      <WrappedComment />
    </div>
  );
}

export default App;
