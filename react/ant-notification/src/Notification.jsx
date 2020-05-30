import React from 'react'
import ReactDom from 'react-dom'
class Notification extends React.Component {
    // 属性
    state = {
        visible: true,
        title: null
    }
    open = ({title}) => {
        this.setState({
            visible: true,
            title
        })
    }
    close = () => {
        this.setState({
            visible: false
        })
    }
    render() {
        const { visible, title } = this.state;
        // const { children } = this.props;
        return (
            <div className={visible ? 'show' : 'hidden'}>
                {/* { children } */}
                {title}
            </div>
        );
    }
}

// 类 实例 new Notification()
// 生成实例这一步 被react封装起来了

function createNotification() {
    const div = document.createElement('div');
    const ref = React.createRef();
    // ref属性: 拿到 类上面的实例
    // 有了实例 就能调用它上面的方法
    // ref.current = new Notification()
    ReactDom.render(<Notification ref={ref}/>, div)
    document.body.appendChild(div)
    return {
        // 暴露出去两个方法
        open: ref.current.open,
        close: ref.current.close
    }
}
let notification = null;
if(!notification) {
    const { open, close } = createNotification();
    notification = {
        open,
        close
    }
}

export default notification;