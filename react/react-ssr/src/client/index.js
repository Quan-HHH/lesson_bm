import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Header from '../common/Header/Header.jsx';
import { renderRoutes } from 'react-router-config';
import route from '../route';

function App() {
    return (
        <BrowserRouter>
            { renderRoutes(route) }
        </BrowserRouter>
    )
}
// hydrate 调和
// root节点下面已经有东西了
// 客户端不需要再构造dom节点了 只需要做服务端完成不了的事件绑定(交互相关)
ReactDOM.hydrate(<App />, document.getElementById('root'));