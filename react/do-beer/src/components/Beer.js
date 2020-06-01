import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// StatefulComponent  StatelessComponent
class Beer extends React.Component {
    static propTypes = {
        detail: PropTypes.object.isRequired
    }
    render() {
        const { name, labels, id } = this.props.detail;
        const image = labels ? labels.medium : 'null.jpg'
        console.log(image)
        return (
            <div className="beer">
                <Link to={`/beer/${id}/${name}`}>
                    <h2>{name}</h2>
                    <img src={image} alt="" />
                </Link>
            </div>
        )
    }
}

export default Beer