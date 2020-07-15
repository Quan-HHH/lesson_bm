
const tiger = 10000

const increase = {
  type: 'INCREASE'
},
decrease = {
  type: "DECREASE"
}

// 这是reducer
export default (state = tiger, action) => {
  switch(action.type) {
    case 'INCREASE':
      return state += 100;
    case 'DECREASE':
      return state -= 100;
    default:
      return state;
  }
}

