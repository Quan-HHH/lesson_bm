import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavContainer } from './style';
import Horizen from '../../baseUI/horizen-item/index';
import { categoryTypes, alphaTypes } from '../../api/config';

export const Singers = (props) => {
    const { category, alpha } = props;
    const handleUpdateCategory = () => {

    }
    const handleUpdateAlpha = () => {
        
    }
    return (
        <div>
            <NavContainer>
                <Horizen title="分类（默认热门）" list={categoryTypes} 
                handleClick={(v) => handleUpdateCategory(v) } oldVal={category} />
                <Horizen title="首字母:" list={alphaTypes} 
                handleClick={(v) => handleUpdateAlpha(v) } oldVal={alpha} />
            </NavContainer>
        </div>
    )
}

const mapStateToProps = (state) => ({
    category: state.singers.category,
    alpha: state.singers.alpha
})

const mapDispatchToProps = (dispatch) => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers))
