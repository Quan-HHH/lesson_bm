import React, { Component } from 'react';
import ImmutableComponent from './common'
import { is } from 'immutable'
class Header extends ImmutableComponent {
    state = {  }
    // this.props = {}  nextProps = {}  对比两个对象相等不相等
    shallowEqual(objA, objB) {
        if(typeof objA !== 'object' || typeof objB !== 'object') {
            return false;
        }
        const keysA = Object.keys(objA);
        const keysB = Object.keys(objB);
        if(keysA.length !== keysB.length) return false;
        for(let key of keysA) {
            if(objA[key] !== objB[key]) return false;
        }
        return true;
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return !(this.shallowEqual(this.props, nextProps) && this.shallowEqual(this.state, nextState));
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     const thisProps = this.props || {};
    //     const thisState = this.state || {};
    //     nextProps = nextProps || {};
    //     nextState = nextState || {};
    //     if(Object.keys(thisProps).length != Object.keys(nextProps).length ||
    //         Object.keys(thisState).length != Object.keys(nextState).length) {
    //             return true;
    //     }
    //     for (let propKey of nextProps) {
    //         // is immutable中的api 
    //         if(!is(thisProps[propKey], nextProps[propKey])) {
    //             return true;
    //         }     
    //     }
    //     for (let stateKey of nextState) {
    //         // is immutable中的api 
    //         if(!is(thisState[stateKey], nextProps[stateKey])) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    render() { 
        console.log('header render')
        return ( 
            <div>
                {this.props.title}
            </div>
         );
    }
}
 
export default Header;