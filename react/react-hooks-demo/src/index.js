import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './styles.css'
import { FaceComponent, MyComponent } from './demo1'
// import { MyComponent } from './demo.js'

// function App() {
//     return (
//         <div className="App">
//             <MyComponent />
//         </div>
//     )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

// function App() {
//     const [satisfactionLevel, setSatisfactionLevel] = useState(300);
//     return (
//         <div className="App">
//             <input 
//                 type="range" 
//                 min="0" 
//                 max="500" 
//                 value={satisfactionLevel}
//                 onChange={(e) => {
//                     setSatisfactionLevel(+e.target.value)
//                 }}
//             />
//             <br/>
//             <span>{satisfactionLevel}</span>
//             <br/>
//             <FaceComponent level={satisfactionLevel}></FaceComponent>
//         </div>
//     )
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement)

function App() {
    const [satisfactionLevel, setSatisfactionLevel] = useState(300);
    return (
        <div className="App">
            <MyComponent />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)