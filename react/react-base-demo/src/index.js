import React, { useRef } from 'react';
import ReactDOM from 'react-dom';  // 操作dom
import './index.css';
import PropTypes from 'prop-types';
import Form from './Form.js'
import Xiaojiejie from './Xiaojiejie'

// class App extends React.Component{
//   render() {
//     console.log(React.Children)
//     console.log(this.props.children)
//     return (
//       <ol>
//         {React.Children.map(this.props.children, function(child) {
//           return (
//             <li>{child}</li>
//           )
//         })}
//       </ol>
//     )
//   }
// }

// ReactDOM.render(
//     <App>
//       <span>花总</span>
//       <span>gogogo</span>
//     </App>,
//   document.getElementById('root')
// );
function App(props) {
    return (
      <h2>{props.title}</h2>
    )
}
App.propTypes = {
  title: PropTypes.string.isRequired  //必须有 且必须是string类型 不然会报错
}
// 默认值
App.defaultProps = {
  title: '123123'
}



function Bpp() {
  // const inputRef = React.createRef()
  const inputRef = useRef()
  const handleInputFoucs = () => {
    inputRef.current.focus()
  }
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={handleInputFoucs}>Focus the input</button>
      <Form />
      <Xiaojiejie />
    </div>
  )
}
ReactDOM.render(
    <Bpp />,
  document.getElementById('root')
);