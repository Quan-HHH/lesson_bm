// import React, { memo } from 'react'

// const setSatisfacationClass = level => {
//     if (level < 100) {
//       return "very-dissatisfied"
//     }
//     if (level < 200) {
//       return "somewhat-dissatisfied"
//     }
//     if (level < 300) {
//       return "neither"
//     }
//     if (level < 400) {
//       return "somewhat-satisfied"
//     }
//     return "very-satisfied"
//   }


// const isSameRange = (prevValue, nextValue) => {
//     const prevValueClass = setSatisfacationClass(prevValue.level)
//     const nextValueClass = setSatisfacationClass(nextValue.level)
//     return prevValueClass === nextValueClass;
// }

// export const FaceComponent = memo(props => {
//     const {level} = props;
//     return (
//         <div className={setSatisfacationClass(level)}>
//         </div>
//     )
// }, isSameRange)

// import React, {memo} from 'react'
// export const MyComponent = () => {
//     const [filter, setFilter] = React.useState("")
//     const [userCollection, setUserCollection] = React.useState([]);
//     const [userInfo, setUserInfo] = React.useState({
//         name: 'John',
//         lastname: 'Doe'
//     });

//     setTimeout(() => {
//         setUserInfo({
//             ...userInfo,
//             name: 'John'
//         })
//     }, 2000)
//     return (
//         <>
//             <DisplayUsername name={userInfo.name} />
//             <input
//                 type="text"
//                 value={userInfo.name}
//                 onChange={event => setUserInfo({
//                     ...userInfo,
//                     name: event.target.value
//                 })} />
//         </>
//     )

// React.useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//     .then(response => response.json())
//     .then(json => setUserCollection(json));
// }, [filter])
// return (
//     <div>
//         <input 
//         value={filter}
//         onChange={(e) => {setFilter(e.target.value)}}
//         />
//         <ul>
//             {userCollection.map((user, index) => 
//                 <li key={index}>{user.name}</li>
//             )}
//         </ul>
//     </div>
// )
// }

// export const DisplayUsername = memo(props => {
//     console.log('只有在name发生改变时才更新')
//     return <h3>{props.name}</h3>
// })

// import React, { useState, useEffect, useRef } from 'react'

// export const MyComponent = () => {
//     const [message, setMessage] = useState("initial message");
//     const [second, setSecond] = useState(0);
//     const secondRef = useRef()

//     useEffect(() => {
//         setTimeout(() => {
//             console.log(second);
//             setSecond(1);
//             secondRef.current = 1;
//         }, 1000)
//         setTimeout(() => {
//             setMessage(`Total second: ${secondRef.current}`)
//         }, 2000)
//     }, [])
//     return (
//         <>
//             <h3>{message}</h3>
//             <h4>{second}</h4>
//         </>
//     )
// }

// import React, { useState, useRef } from 'react';

// export const MyComponent = () => {
//     const [visible, setVisible] = useState(false);
//     return (
//         <>
//             {visible && <MyChildComponent />}
//             <button
//                 onClick={() => { setVisible(!visible) }}>
//                 Toggle Child component visible</button>
//         </>
//     )
// }

// export const MyChildComponent = () => {
//     const [filter, setFilter] = useState("");
//     const [userCollection, setUserCollection] = React.useState([]);
//     const mountedRef = useRef(false);

//     React.useEffect(() => {
//         mountedRef.current = true;
//         return () => (mountedRef.current = false)
//     })

//     React.useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//             .then(response => response.json())
//             .then(json => setUserCollection(json));
//     }, [filter])
//     return (
//         <div>
//             <input
//                 value={filter}
//                 onChange={(e) => { setFilter(e.target.value) }}
//             />
//             <ul>
//                 {userCollection.map((user, index) =>
//                     <li key={index}>{user.name}</li>
//                 )}
//             </ul>
//         </div>
//     )
// }

// 数据
import React, {useReducer} from 'react'
const userInfoReducer = (state, action) => {
    switch (action.type) {
        case "setusername":
            return {
                ...state,
                name: action.payload,
            }
        case "setlastname":
            return {
                ...state,
                lastname: action.payload
            }
        default:
            return state;
    }
}

export const MyComponent = () => {
    const [reducer, dispatch] = useReducer(userInfoReducer, {
        name: "John",
        lastname: "Doe"
    })

    return (
        <>
            <h3>{reducer.name}{reducer.lastname}</h3>
            <EditUsername name={reducer.name} dispatch={dispatch} />
            <input type="text" value={reducer.lastname}
            onChange={e => dispatch({
                type: "setlastname",
                payload: e.target.value
            })}
            />
        </>
    )
}

const EditUsername = React.memo(props => {
    console.log("name改变时我才会重新渲染嗷")
    return (
        <input type="text"
        value={props.name}
        onChange={
            e => props.dispatch({
                type: "setusername",
                payload: e.target.value
            })
        }
        />
    )
})