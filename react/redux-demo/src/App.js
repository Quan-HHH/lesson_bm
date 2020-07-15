import React from 'react';
import { connect } from 'react-redux'
// 读数据
function mapStateToProps(state) {
  console.log(state, '-----------')
  return {
    tiger: state
  }
}
// 行为
function mapDispatchToProps(dispatch) {
  return {
    PayIncrease: () => dispatch({ type: 'INCREASE'}),
    PayDecrease: () => dispatch({ type: 'DECREASE'})
  }
}

// Provider 内的任何一个组件，如果需要使用 store 中的数据，就必须是「被 connect 过的」组件——使用 connect 方法对「你编写的组件」进行包装后的产物。
// connect的使用方法是：把指定的state和指定的action与React组件连接起来，后面括号里面写UI组件名。
class App extends React.Component {
  render() {
    const { PayDecrease, PayIncrease } = this.props
    console.log(this.props)
    return (
      <div>
        <button onClick={PayIncrease}>+</button>
        <h2>当月工资: {this.props.tiger}</h2>
        <button onClick={PayDecrease}>-</button>
      </div>
    )
  }
}
export default App = connect(mapStateToProps, mapDispatchToProps)(App)