import React, { useRef, useEffect, useState } from 'react';
import pullToRefresh from './pullDown'
import './App.css'
import styled, { css } from 'styled-components'

const { init } = pullToRefresh();

// 标签模板
function foo(...args) {
    console.log(args)
    let str = 'insert here: ';
    str += args[0][0];
    str += args[1];
    str += args[0][1];
    str += args[2];
    str += args[0][2];
    console.log(str)
}

foo`i am ${18}, i am ${19}`
const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`

function App() {
    const [isPrimary, setIsPrimary] = useState(false);
    const contentRef = useRef();
    const ptrRef = useRef();
    const bodyRef = useRef();
    useEffect(() => {
        init({
            contentEl: contentRef.current,
            ptrEl: ptrRef.current,
            bodyEl: bodyRef.current,
            loadingFunction: () => new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 3000)
            })
        })
    })
    return (
        <div className="body-wrap" ref={bodyRef}>
            {/* ptr-wrap负责移动 */}
            <div ref={ptrRef} className="ptr-wrap">
                {/* loading负责动画 */}
                <div className="loading"></div>
            </div>
            <header className="content-wrap" ref={contentRef}>
                <Button 
                primary={isPrimary}
                onClick={() => {
                    setIsPrimary(!isPrimary)
                }}
                >按钮</Button>
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

export default App;
