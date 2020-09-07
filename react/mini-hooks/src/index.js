import React from 'react';
import ReactDOM from 'react-dom';

const useState = (function() {
  let _state;
  return function(initValue) {
    _state = _state || initValue;
    function setState(newState) {
      _state = newState;
      render();
    }
    return [_state, setState]
  }
})()
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      { count }
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

