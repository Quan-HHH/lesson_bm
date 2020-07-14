import React, { createContext, useState, useEffect, useContext, useRef } from 'react'
// 跨层级传递数据
const context = createContext({
    theme: 'red'
})
function P() {
    let [obj, setTheme] = useState({ theme: 'red' });
    useEffect(() => {
        setTimeout(() => {
            setTheme({
                theme: 'blue'
            })
        }, 3000)
    }, [])
    return (<context.Provider value={obj}>
        <Child />
    </context.Provider>)
}

function Child() {
    console.log('render1')
    return <Grandson />
}

function Grandson() {
    console.log('render2')
    // 可以取出最近的context
    const ref = useRef();
    const value = useContext(context)
    // didMount
    useEffect(() => {
        console.log(ref.current)
    }, [])
    return (
        <p>njskdjsd
            <h2 style={{color: value.theme}}
            ref={ref}
            // 还可以这样写
            // ref="ref1"
            // ref={() => {}}
            >h2</h2>
            {/* <context.Consumer>
                {
                    (value) => {
                        return (
                            <h2 style={{ color: value.theme }}>h2</h2>
                        )
                    }
                }
            </context.Consumer> */}
            {/* 不用consumer 用useContext应该怎么写 */}
        </p>
    )
}

export default P;