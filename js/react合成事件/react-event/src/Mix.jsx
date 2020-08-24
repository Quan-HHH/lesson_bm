import React from 'react';
class Mix extends React.Component {
    state = {
        visible: false
    }
    handleToggle = (e) => {
        this.setState({
            visible: !this.state.visible
        })
        e.stopPropagation();
        // 所有的事件 统一采用的事件监听 
        // 都是 document.addEventListener('click')
        // 事件监听器 内部维护了元素 和 事件处理函数的关系
        // e.stopPropagation() 也是react自己实现的 阻止冒泡
        // 仅限于 都用 react 的事件 才生效
        // 合成事件 就是react的一套事件系统
    }
    componentDidMount() {
        document.body.addEventListener('click', () => {
            this.setState({
                visible: false
            })
        })
        console.log(1);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleToggle}> toggle </button>
                <div style={{ display: this.state.visible ? 'block' : 'none' }}>内容</div>
            </div>
        )
    }
}

export default Mix;