import React from 'react';
// Map转换的时候 只会对最外层的结构转换
// fromJS 进行深度转换 每一层都会转换
import { Map, fromJS } from 'immutable'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    loginInfo: {
      userName: null
    },
    posts: [{ content: 1 }],
    userInfo: fromJS({
      name: 'lihua',
      skills: {
        excellent: ['react'],
        practice: ['node']
      },
      age: 20
    })
  }
  componentDidMount() {
    setTimeout(() => {
      // const { posts } = this.state;
      // 可变 可能会出现 setState 更新数据 但是页面不重新渲染
      const posts = this.state.posts.slice(0);
      const newUserInfo = this.state.userInfo.set('name','lilei') // 不会改变原来的 直接生成新的userinfo
      const loginInfo = {
        ...this.state.loginInfo,
        userName: '小李'
      }
      let userInfo2 = {
        name: '',
        skill: {
          excellent: 'js'
        },
        age: ''
      }
      // userInfo2.skill && (userInfo2.skill.excellent = 'react');
      let excellentSkills = this.state.userInfo.setIn(['skill', 'excellent']);
      // push 不会对原来的数据修改 会返回一个新的数据
      let newExcellentSkills = excellentSkills.push('js')
      const userInfo1 = this.state.userInfo.setIn(['skill', 'excellent'], newExcellentSkills);   //更新skill上的excellent
      posts.push({content: 2});
      this.setState({
        posts,
        loginInfo,
        userInfo: newUserInfo
      })
    }, 3000)
    
  }
  render() {
    const { posts, userInfo, loginInfo } = this.state;
    return (
      <div>
        { posts.length }
        {/* name: { userInfo.name } */}
        name: { userInfo.get('name')}
        userName: { loginInfo.userName }
      </div>
    )
  }
}
export default App;
