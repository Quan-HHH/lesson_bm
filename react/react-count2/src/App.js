import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <button onClick={props.handleIncrease}>+</button>
        <div>{props.number}</div>
      <button onClick={props.handleDecrease}>-</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    number: state.number
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrease: () => {
      dispatch({
        type: 'INCREASE',
        payload: 10
      })
    },
    handleDecrease: () => {
      dispatch({
        type: 'DECREASE',
        payload: 10
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
