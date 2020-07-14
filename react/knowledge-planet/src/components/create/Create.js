import React, { Component } from 'react';
import './create.css'

class Create extends Component {
    handleCreatePlanet = () => {
        localStorage.setItem('planets', JSON.stringify())
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="create-header-wrapper">
                    <span className="cancel">取消</span>
                    <span className="center"></span>
                    <span className="next" onClick={this.handleCreatePlanet}>完成</span>
                </div>
                <div className="choose-image">
                    <img src="" alt=""/>
                </div>
                <div className="planet-name-input">
                    <input type="text" placeholder="请输入星球名称" />
                </div>
            </div>
         );
    }
}
 
export default Create;