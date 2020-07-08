import React, { Component } from 'react';

class Drag extends Component {
    state = {
        left: 0,
        top: 0
    }
    // client 鼠标指针向对于浏览器页面的坐标
    handleDown = (e) => {
        var startX = e.clientX;
        var startY = e.clientY;
        let obj = e.target.getBoundingClientRect();  // 当前元素大小 和相对视口的位置
        // 重置起点
        this.startX = startX - obj.x;  // 可以直接是 0
        this.startY = startY - obj.y;
        document.addEventListener('mousemove', this.handleMove);
        document.addEventListener('mouseup', this.handleUp);
    }
    handleMove = (e) => {
        var newX = e.clientX;
        var newY = e.clientY;
        const diffX = newX - this.startX;
        const diffY = newY - this.startY;
        this.setState({
            left: diffX,
            top: diffY
        })
    }
    handleUp = () => {
        document.removeEventListener('mousemove', this.handleMove);
        document.removeEventListener('mouseup', this.handleUp);
    }
    render() {
        const { left, top } = this.state;
        return (
            <h2
                className="dragable"
                style={{ left, top }}
                onMouseDown={this.handleDown}
            // onMouseMove={this.handleMove}
            // onMouseUp={this.handleUp}
            >h2</h2>
        )
    }
}

class Drag2 extends Component {
    render() {
        return (
            <h2>野原新之助</h2>
        )
    }
}

// 高阶组件和函数组件怎么关联起来 就用with包一层就行
// 高阶组件 一般以with开头
function withDragable(Com) {
    class WithDragable extends Component {
        state = {
            left: 0,
            top: 0
        }
        // client 鼠标指针向对于浏览器页面的坐标
        handleDown = (e) => {
            var startX = e.clientX;
            var startY = e.clientY;
            let obj = e.target.getBoundingClientRect();  // 当前元素大小 和相对视口的位置
            // 重置起点
            this.startX = startX - obj.x;  // 可以直接是 0
            this.startY = startY - obj.y;
            document.addEventListener('mousemove', this.handleMove);
            document.addEventListener('mouseup', this.handleUp);
        }
        handleMove = (e) => {
            var newX = e.clientX;
            var newY = e.clientY;
            const diffX = newX - this.startX;
            const diffY = newY - this.startY;
            this.setState({
                left: diffX,
                top: diffY
            })
        }
        handleUp = () => {
            document.removeEventListener('mousemove', this.handleMove);
            document.removeEventListener('mouseup', this.handleUp);
        }
        render() {
            const { left, top } = this.state;
            return (
                <div style={{ left, top }} className="dragable"
                    onMouseDown={this.handleDown}
                >
                    <Com />
                </div>
            )

        }
    }
    return WithDragable;
}
export const WithDragable2 = withDragable(Drag2)
export default Drag;