import React, { Component } from 'react';
import { is } from 'immutable'

class ImmutableComponent extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        const thisProps = this.props || {};
        const thisState = this.state || {};
        nextProps = nextProps || {};
        nextState = nextState || {};
        if(Object.keys(thisProps).length !== Object.keys(nextProps).length ||
            Object.keys(thisState).length !== Object.keys(nextState).length) {
                return true;
        }
        for (let propKey in nextProps) {
            // is immutable中的api 
            if(!is(thisProps[propKey], nextProps[propKey])) {
                return true;
            }     
        }
        for (let stateKey in nextState) {
            // is immutable中的api 
            if(!is(thisState[stateKey], nextProps[stateKey])) {
                return true;
            }
        }
        return false;
    }
}

export default ImmutableComponent;