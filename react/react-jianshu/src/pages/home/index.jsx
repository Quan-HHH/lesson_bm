import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from '../../store/actions/home'
class Home extends Component {
  componentDidMount() {
    this.props.fetchHomeList();
  }
  state = {  }
  render() {
    return ( <div>
      home
      length: { this.props.homeList.length }
    </div> );
  }
}
// 获取 数据
// state： 整个 store， home 页面，只要 home模块，过滤一下
// 过滤完结果（return）都会由 connect 传给你组件的 props
const mapStateToProps = (state) => {
  return {
    homeList: state.home.homeList
  }
}
// 用户 操作 UI 引起页面变化
// 发起一个 action
// dispacth 行为 connect 传给 组件
const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomeList() {
      dispatch(getHomeList)
    }
  }
}
// connect
// redux -> 桥 -> react
// redux store -> react Provider  全局
// 每个组件都能获取到
// 规定获取redux中的数据，必须用mapStateToProps的返回值来获取
// connect会把返回值返到props上
export default connect(mapStateToProps, mapDispatchToProps)(8);