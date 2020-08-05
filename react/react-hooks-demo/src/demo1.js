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

import React, {memo} from 'react'
export const MyComponent = () => {
    const [filter, setFilter] = React.useState("")
    const [userCollection, setUserCollection] = React.useState([]);
    const [userInfo, setUserInfo] = React.useState({
        name: 'John',
        lastname: 'Doe'
    });

    setTimeout(() => {
        setUserInfo({
            ...userInfo,
            name: 'John'
        })
    }, 2000)
    return (
        <>
            <DisplayUsername name={userInfo.name} />
            <input
                type="text"
                value={userInfo.name}
                onChange={event => setUserInfo({
                    ...userInfo,
                    name: event.target.value
                })} />
        </>
    )

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
}

export const DisplayUsername = memo(props => {
    console.log('只有在name发生改变时才更新')
    return <h3>{props.name}</h3>
})