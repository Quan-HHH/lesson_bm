import React, { useState, useRef } from 'react'
import XiaojiejieItem from './XiaojiejieItem'

function Xiaojiejie() {
    const [service, setService] = useState([]);
    const [inputVal, setInputVal] = useState('');
    const inputRef = useRef();
    const ulRef = useRef();
    // const arr1 = [1,2,3]
    // let arr2 = arr1;
    // arr2.push(4);
    // console.log(Object.is(arr1, arr2)) // true
    const serviceList = service.map((item, i) => (
        <XiaojiejieItem item={item} key={i} handleClick={() => {handleClick(i)}} />
        // <li 
        //     key={i}
        //     onClick={() => {
        //         let ser = [...service];
        //         ser.splice(i, 1)
        //         setService(ser)
        //     }}
        //     dangerouslySetInnerHTML={{__html: item}} // 这样写就可以解析html标签啦
        // >
        //     {/* {item} */}
        // </li>
    ))
    const handleClick = (i) => {
        let ser = [...service];
        ser.splice(i, 1)
        setService(ser)
        // console.log(ulRef.current.querySelectorAll('li').length)
    }
    console.log(ulRef.current)

    console.log(service)
    return (
        <div>
            <label htmlFor="sssss">增加服务:</label>
            {/* 点击增加服务就focus到input htmlFor和id保持一致 */}
            <input 
                ref={inputRef}
                id="sssss"
                type="text"
                value={inputVal}
                onChange={(e) => {
                    // setInputVal(e.target.value)     
                    setInputVal(inputRef.current.value)
                }}
            />
            <button onClick={() => {
                if(inputVal !== '') {
                    setService([...service, inputVal])
                    console.log(ulRef.current.querySelectorAll('li').length)

                    setInputVal('')
                }
            }}>增加服务</button>
            <ul ref={ulRef}>
                { serviceList }
            </ul>
        </div>
    )
}
export default Xiaojiejie;