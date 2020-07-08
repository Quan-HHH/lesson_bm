import React, { useState } from 'react';
// useState 之前   组件 class function, 函数组件不能定义state
// useState 函数组件内部定义state
// useState 官方定义的hook
// useDrag 自己定义的hook

function useDrag() {
    // state = {
    //     left: 0,
    //     top: 0
    // }
    // const [a, b] = []
    // 函数里面的 state
    var [state, setState] = useState({
        left: 0,
        top: 0
    })
    console.log(state, setState)
    // client 鼠标指针向对于浏览器页面的坐标
    // 前面是类的属性 所以不用var来定义
    var handleDown = (e) => {
        var startX = e.clientX;
        var startY = e.clientY;
        let obj = e.target.getBoundingClientRect();  // 当前元素大小 和相对视口的位置
        // 重置起点
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleUp);
    }
    var handleMove = (e) => {
        var newX = e.clientX;
        var newY = e.clientY;
        var diffX = newX;
        var diffY = newY;
        setState({
            left: diffX,
            top: diffY
        })
    }
    var handleUp = () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleUp);
    }
    return {
        left: state.left,
        top: state.top,
        handleDown
    }
}
function DDrag1() {
    const { left, top, handleDown } = useDrag();
    return (
        <div style={{left, top}}
        onMouseDown={handleDown}
        className="dragable">
            drag1
        </div>
    )
}

export const Drag1 = DDrag1;
export default useDrag;