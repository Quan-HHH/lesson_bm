import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'


const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早八点 睡觉',
        '早九点 睡觉',
        '早十点 吃'
    ]
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case CHANGE_INPUT:
            newState.inputValue = action.value;
            return newState;
        case ADD_ITEM:
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        case DELETE_ITEM:
            newState.list.splice(action.index, 1);
            return newState;
        default:
    }
    return state;
}