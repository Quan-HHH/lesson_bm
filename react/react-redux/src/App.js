import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

// 列表：/?tab=all
// mv-vm
// view 视图
// model 数据
// vm是绑定在一起 m变了 v会自动更新
class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      value: '123455',
      tabs:[
        {content: '全部', param: 'all'},
        {content: '招聘', param: 'job'},
        {content: '精华', param: 'good'},
        {content: '分享', param: 'share'},
        {content: '问答', param: 'ask'}
      ],
      tab: 'all',
      isLoading: true,
      lists: []      //文章列表
    }
  }
  // 生命周期
  // App 被 reactDom 渲染到 pc 上
  // 生命周期就是渲染背后的那一套流程
  handleGetPost = () => {
    const { tab } = this.state;
    axios({
      url: 'https://cnodejs.org/api/v1/topics',
      params: {
        tab: tab,
        page: 1, //默认第一页
        limit: 40 //每页40条
      }
    })
    .then(res => {
      // console.log(res.data)
      // 修改状态
      this.setState({
        lists: res.data.data,
        isLoading: false
      }) 
    })
    .catch(err => {
      this.setState({
        isLoading: false
      })
    })
  }
  componentDidMount() {
    // DidMount表示挂载完毕
    this.handleGetPost()
  }
  handleTabChange = (event) => {
    // 箭头函数的this是由定义时候的位置决定的
    // 点了谁 谁就是event.target 事件发生的对象
    const tab = event.target.getAttribute('data-tab');

    this.setState({
      tab,
      isLoading: true
    }, () => {
      this.handleGetPost()
    })
  }
  handleChange =(event) => {
    this.setState({ value:event.target.value})
  }
  render() {
    const { lists, tabs, tab, isLoading,value } = this.state;

    
    // 凡是在render里面写js表达式 都用{}包起来
    return (
      <div>
        {/* 受控组件 value + onChange 输入框中的内容 受本组件里面的state控制
            非受控组件  */} 
        <input type="text" placeholder="1234" value={value}
        onChange={this.handleChange}
        />
        {/* ↑受控组件    ↓非受控组件 */}
        {/* ↓涉及到dom操作 现代前端框架不提倡操作 dom 了 */}
        <input type="text" defaultValue="2424234"/>
        {/* react 不渲染那些值为false undefined null 的内容 */}
        {isLoading && '正在加载中'}
        { lists.length === 0 && '暂无文章请重试'}
        {
          tabs.map((tabObj, i) => {
            return(
              <div key = {i} data-tab = {tabObj.param}
              className={tabObj.param === tab ? 'high-light' : ''}
              onClick={this.handleTabChange}
              >
                {tabObj.content}
              </div>
            )
          })
        }
        {
          // map返回一个数组
          // react 如果 jsx(html + js) 存在数组 react会自动把它展开 展开数组中的每一项
          lists.map((list, i) => {
            return(
              <div key = {i}>
                { list.title }
              </div>
            )
          })
        }
      </div>
    )
  }
}
// 默认导出
export default App;

//还有命名导出
export const name = 'lilei'; // 在导出lilei这个变量的时候 还给它取了一个名字
