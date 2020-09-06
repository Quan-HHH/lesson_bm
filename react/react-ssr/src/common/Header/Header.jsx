import React, { useEffect } from 'react';
export default function Header() {
    console.log(123123); // 服务器端输出
    function handleClick() {
        console.log(123)
    }
    useEffect(() => {
        console.log(456456)  // 浏览器端输出
    }, [])
    return (
        <button onClick={handleClick}>
            按钮 
        </button>
    )
}