import React, { createRef, Suspense, useEffect } from 'react';
import ReqDemo from './ReqDemo'
import './App.css';

function App() {
  const ref = createRef();
  useEffect(() => {
    setTimeout(() => {
      console.log(ref.current)
    }, 3000)
  }, [])
  return (
    <div className="App">
     <Suspense fallback={<h2>正在加载中...</h2>}>
       {/* thorw promise 会被外层的suspense捕获 */}
      <ReqDemo ref={ref} />
     </Suspense>
    </div>
  );
}

export default App;
