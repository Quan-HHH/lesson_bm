import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { context, connect } from './react-redux.js'

function App(props) {
  const context1 = useContext(context);
  console.log(context1, props.count)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapDispatchToProps = () => {
  return {}
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
  // 组件中就可以用 this.props.count
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// 1. 拿到mapStateToProps的返回值
// 2. 把 返回值放到组件的props上
// 3. 
