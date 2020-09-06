import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../common/Header/Header.jsx';

function App() {
    return (
        <Header />
    )
}
// hydrate 调和
// root节点下面已经有东西了
// 客户端不需要再构造dom节点了 只需要做服务端完成不了的事件绑定(交互相关)
ReactDOM.hydrate(<App />, document.getElementById('root'));