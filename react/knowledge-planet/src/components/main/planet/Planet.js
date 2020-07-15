import React from 'react';
import imageUrl from '../../../asset/images/0x1009a0a0.jpg'
class Planet extends React.Component {
    render() {
        let { name, member } = this.props;
        return (
            <div className="planet-wrapper">
                <div className="image-wrapper">
                    <img src={imageUrl} alt="图片不见了"/>
                </div>
                <div className="planet-info-wrapper">
                    <div className="planet-name">{name}</div>
                    <div className="separate-line"></div>
                    <div className="planet-create-member">{member}</div>
                </div>
            </div>
        )
    }
}

export default Planet;