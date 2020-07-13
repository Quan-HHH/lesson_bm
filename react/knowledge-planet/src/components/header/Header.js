import React, { Component } from 'react';
import './Header.css'
class Header extends Component {
    state = {}
    render() {
        return (
            <div className="wrapper">
                <div className="header">
                    <div>知识星球</div>
                    <span className="icon iconfont">&#xe627;</span>
                </div>
                <input type="text" placeholder="搜索用户、星球或内容"/>
            </div>
        );
    }
}

export default Header;