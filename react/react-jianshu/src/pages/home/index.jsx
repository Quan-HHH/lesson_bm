import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from '../../store/action/home'
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                home
            </div>
         );
    }
}

const mapDispatchToProps = (state) => {
    return {
        homeList: state.getIn(['home','homeList'])
    }
}
const mapStateToProps = (dispatch) => {
    // thunk  所以可以return一个函数
    return {
        fetchHomeList() {
            dispatch(getHomeList)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);