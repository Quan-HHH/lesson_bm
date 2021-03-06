import React from 'react';
import PropTypes from 'prop-types'
import './Journey.css'
import switchImg from '../../assets/images/switch.svg'
export default function Journey(props) {
    console.log(props)
    const { from, to, exchangeFromTo } = props;
    return (

        <div className="journey">
            <div className="journey-station">
                <input type="text" className="journry-input" name="from"
                readOnly
                value={from} />
            </div>

            <div className="journey-switch" onClick={() => exchangeFromTo()}>
                <img src={switchImg} alt="图片不见了" />
            </div>

            <div className="journey-station">
                <input type="text" className="journry-input" name="to"
                    readOnly
                    value={to} />
            </div>
        </div>
    )
}

Journey.propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}