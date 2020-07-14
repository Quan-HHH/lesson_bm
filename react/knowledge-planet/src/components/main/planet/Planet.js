import React from 'react';
class Planet extends React.Component {
    render() {
        return (
            <div className="planet-wrapper">
                <div className="image-wrapper">
                    <img src="" alt=""/>
                </div>
                <div className="planet-info-wrapper">
                    <div className="planet-name">花星球</div>
                    <div className="separate-line"></div>
                    <div className="planet-create-member">一个电插销</div>
                </div>
            </div>
        )
    }
}

export default Planet;