import React, { useEffect, useRef, memo } from 'react';
import { connect } from 'react-redux';
import { NavContainer, Horizen } from './style'
import { categoryTypes, alphaTypes } from '../../api/config'

function Singers(props) {
    const handleUpdateCategory = () => {

    }
    const handleUpdateAlpha = () => {
        
    }
    return (
        <div>
            <NavContainer>
                <Horizen title="分类(默认热门): " 
                list={categoryTypes} 
                handleClick={(v) => {handleUpdateCategory(v)}}
                />
                <Horizen title="首字母: " 
                list={alphaTypes} 
                handleClick={(v) => {handleUpdateAlpha(v)}}
                />
            </NavContainer>
        </div>
    )
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Singers));