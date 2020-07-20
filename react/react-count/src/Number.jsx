import React, { Component } from 'react';
import { connect } from 'react-redux';

class Number extends Component {
    render() {
        console.log('state',this.props.state) ;
        return ( 
            <div>
                <button onClick={this.props.handleDecrease}>-</button>
                    <div>{this.props.count}</div>
                <button onClick={this.props.handlePlus}>+</button>
            </div>
         );
    }
}
const mapStateToProps = (state) => {
    return {
        count: state.state1.content,
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => {
            dispatch({
                type: 'plus',
                payload: 1
            })
        },
        handleDecrease: () => {
            dispatch({
                type: 'decrease',
                payload: 1
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Number);