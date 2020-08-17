import React from 'react'
import styles from './style.css';

export default function App() {
    return (
        <div 
        // className="swiper-container"
        className={styles["swiper-container"]}
        >
            {/* ./ 以当前路径为基准 http://baidu.com/path/a/b/avatr.jpg */}
            {/* /  http://baidu.com/avatr.jpg */}
            <img src="./avatar.JPG" alt=""/>
            this is app
        </div>
    )
}