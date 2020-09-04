import React, { createContext } from 'react';

const context = createContext(); //这个context就包含provider和consumer

class Provider extends React.Component {
    render() {
        const store = this.props;
        return (<context.Provider value={store}>
            {/* 这里面就要处理外界传进来的store */}
            {this.props.children}
        </context.Provider>)
    }
}

function connect(mapState, mapDispatch) {
    return function(Com) {
        return class Connected extends React.Component {
            render() {
                // 怎么拿到真实的redux上的数据
                // 真实的数据在Provider里面 怎么拿到Provider上的数据
                // Consumer
                let reduxstate = {a: 1, b: 2};
                let filterProps = {};
                if(mapState) {
                    filterProps = Object.assign(filterProps, mapState(reduxstate));
                }
                if(mapDispatch) {
                    filterProps = Object.assign(filterProps, mapDispatch());
                }
                return (
                    <Com {...filterProps} />
                )
            }
        }
    }
}
export {
    context,
    Provider,
    connect
}