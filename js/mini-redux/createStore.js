let action1 = {
    type: 'INCREMENT'
}
let action2 = {
    type: 'DECREMENT'
}
// 为什么用redux 用规定的单向数据流来改变状态 代码统一

function reducer(state = 1, action) {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default:
            return state;
    }
}

let store = createStore(reducer);
store.dispatch(action1)
store.dispatch(action1)
console.log(store.getState());

function createStore(reducer) {
    let state;
    function dispatch(action) {
        state = reducer(state, action)
    }
    dispatch({type: ''})
    function getState() {
        return state;
    }
    return {
        dispatch, getState
    }
}