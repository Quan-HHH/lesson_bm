import React from 'react'
import PropTypes from 'prop-types'

function XiaojiejieItem(props) {
    const { item, handleClick, avname } = props;
    return (
        <li 
            onClick={handleClick}
             dangerouslySetInnerHTML={ {__html:avname + '为你服务' + item}} // 这样写就可以解析html标签啦
        >          
            {/* {item} */}
        </li>
    )
}

XiaojiejieItem.propTypes = {
    avname: PropTypes.string.isRequired,
    item: PropTypes.string,
    handleClick: PropTypes.func
}

XiaojiejieItem.defaultProps = {
    avname: '枫枫'
}
export default XiaojiejieItem;