import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
export default function Header() {
    console.log(123123); // 服务器端输出
    function handleClick() {
        console.log(123)
    }
    useEffect(() => {
        console.log(456456)  // 浏览器端输出
    }, [])
    return (
        <div>
            <button onClick={handleClick}>
            按钮 
        </button>
        <Link to="/">home</Link>
        <Link to="/login">login</Link>
        <Link to="/detail">detail</Link>
        </div>
        
    )
}