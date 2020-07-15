import React, { Component } from 'react';
import imageUrl from '../../asset/images/0x1009a0a0.jpg'
import { Link } from 'react-router-dom'
import './create.css'

class Create extends Component {
    constructor() {
        super()
        this.state = { 
            planet: JSON.parse(localStorage.getItem('planets'))?JSON.parse(localStorage.getItem('planets')):[]
        }
    }
    handleCreatePlanet = () => {
        let val = this.refs.myInput.value;
        let { planet } = this.state;
        this.setState({
            planet: planet.push({'name': val, 'member': '一个电插销'})
        })
        localStorage.setItem('planets', JSON.stringify(planet))
    }
    onBack = () => {
        window.history.back()
    }
    render() { 
        return ( 
            <div>
                <div className="create-header-wrapper">
                    <span className="cancel" onClick={this.onBack}>取消</span>
                    <span className="center"></span>
                    <Link to="/" style={{textDecoration: 'none'}}><span className="next" onClick={this.handleCreatePlanet}>完成</span></Link>
                </div>
                <div className="choose-image">
                    <img src={imageUrl} alt=""/>
                </div>
                <div className="planet-name-input">
                    <input type="text" placeholder="请输入星球名称" 
                    ref="myInput"
                    />
                </div>
            </div>
         );
    }
}
 
export default Create;