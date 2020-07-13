import React from 'react'
import Planet from './planet/Planet'
import './Main.css'

class Main extends React.Component {
    render() {
        return (
                
                <div className="main-wrapper">
                <Planet />
                    <div className="add-planet-wrapper">
                        <div className="add-planet">
                            <span className="icon iconfont add1">&#xe6b9;</span>
                            <p className="create-planet">创建星球</p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Main;