import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="footer-wrapper">
                <div className="tabbar-icon-wrapper">
                    <div>
                        <span className="icon iconfont">&#xe845;</span>
                        <p>星球</p>
                    </div>
                </div>
                <div className="tabbar-icon-wrapper">
                    <div>
                        <span className="icon iconfont">&#xe612;</span>
                        <p>消息</p>
                    </div>
                </div>
                <div className="tabbar-icon-wrapper">
                    <div>
                        <span className="icon iconfont">&#xe725;</span>
                        <p>动态</p>
                    </div>
                </div>
                <div className="tabbar-icon-wrapper">
                    <div>
                        <span className="icon iconfont">&#xe600;</span>
                        <p>我的</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;