import React from 'react'
import Planet from './planet/Planet'
import './Main.css'
import { Link } from 'react-router-dom'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            planetList: JSON.parse(localStorage.getItem('planets'))?JSON.parse(localStorage.getItem('planets')):[]
        }
    }
    render() {
        console.log(typeof this.state.planetList)
        let planetList = this.state.planetList.map((res, i) => {
            return <Planet name={res.name} member={res.member} key={i}/>
        })
        return (
                
                <div className="main-wrapper">
                { planetList }
                <Link to="/Create" style={{ textDecoration:'none'}}>
                    <div className="add-planet-wrapper">
                        <div className="add-planet">
                            <span className="icon iconfont add1">&#xe6b9;</span>
                            <p className="create-planet">创建星球</p>
                        </div>
                    </div>
                </Link>
                </div>
        )
    }
}

export default Main;