import React, { Component } from 'react';
import axios from 'axios';


function reqAction() {
    return axios('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA');
}
class Header extends Component {
    constructor() {
        super()
        this.state = {
            songs: typeof window === 'object' ? window.songs : null
        }
    }
   
    componentDidMount() {
        // 客户端才有DidMount 客户端请求回来数据渲染
        // console.log(1)
        // reqAction().then(res => {
        //     this.setState({
        //         songs: res.data
        //     })
        // })
    }
    render() { 
        const { songs } = this.state;
        return ( 
            <div>
                Hello World
                {songs?.result?.songs.map((item, i) => {
                    return (
                    <li key={i}>{item.name}</li>
                    )
                })}
            </div>
         );
    }
}
 
Header.loadData = reqAction;
// 静态属性 即便不new 也是可以调用的
export default Header;