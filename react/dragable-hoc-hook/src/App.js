import React from 'react';
import Dragable1,{ WithDragable2 } from './Dragable1'
import logo from './logo.svg';
import './App.css';
import { Drag1 } from './useDrag';

function App() {
  return (
    <div>
      <Drag1 />
      <Dragable1 />
      <WithDragable2 />
    </div>
    
  );
}

export default App;
