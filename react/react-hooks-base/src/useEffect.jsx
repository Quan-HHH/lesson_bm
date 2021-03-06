import React, { useEffect, useState, useMemo, useCallback } from 'react'

// hook只能在函数组件用
// 函数组件没有render方法
let arr = [1, 2];
let set = new Set();  // 无重复的数据集 功能与数组类似 但是如果放了重复的内容进来 会忽略 [1,1,1] 会存成[1]
set.add(1);
set.add(1); // [1]
function Demo() {
    // inputVal, setVal是一一对应的 setVal只能修改inputVal useStat里的东西可任意传，相当于默认值
    const [ list, setList ] = useState([]);
    // const [inputVal, setVal] = ['', () => {}]
    // 每次setval都会重新render
    const [inputVal, setVal] = useState('海阔天空');

    // const val = arr; //因为每次要重新render 可以优化成存进缓存里面
    // 缓存的时候会检查依赖 只有依赖没有变化 才会使用上次的值
    const val = useMemo(() => arr, [])
    set.add(val);
    console.log(set, set.size)
    console.log(inputVal, setVal) // 判断每次的val是不是同一个val
    // const handleChange = (event) => {
    //     setVal(event.target.value)
    // }
    const handleChange = useCallback((event) => {
        setVal(event.target.value)
    }, [])
    // 页面渲染完了 才会进入useEffect
    useEffect(() => {
        fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=' + inputVal)
        .then(res => res.json())
        .then((res) => {
            setList(res.result.songs);
        })
        return () => {
            //卸载
            // 不return就不作卸载
        }
    }, [inputVal])
    // [inputVal]依赖  react检查 依赖里面有没有发生数据变化 没变化就不会重新调用
    // [] 执行一次 相当于componentDidMount
    // [inputVal] 多次 componentDidUpdate
    return (
        <div>
            { list.length }
            <input type="text" value={inputVal} onChange={handleChange}/>
        </div>
    )
}

export default Demo;