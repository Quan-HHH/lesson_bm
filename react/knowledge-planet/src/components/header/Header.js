import React, { Component } from 'react';
import './Header.css'
class Header extends Component {
    state = {}
    render() {
        return (
            <div className="wrapper">
                <div className="header">
                    <span style={{width:'28px'}}></span>
                    <div>知识星球</div>
                    <span className="icon iconfont">&#xe627;</span>
                </div>
                <div className="search-input">
                    {/* <span class="icon iconfont">&#xe653;</span> */}
                    <input className="icon iconfont" type="text" placeholder="&#xe653;  搜索用户、星球或内容" />
                </div>
            </div>
        );
    }
}

export default Header;