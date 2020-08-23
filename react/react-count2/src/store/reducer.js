const defaultState = {
    number: 0
}
const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'INCREASE':
            return {
                ...state,
                number: state.number + action.payload
            }
        case 'DECREASE':
            return {
                ...state,
                number: state.number - action.payload
            }
        default:
            return state;
    }
}

export default reducer;