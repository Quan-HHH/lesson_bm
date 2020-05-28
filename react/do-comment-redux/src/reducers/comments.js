// reducer 就是函数
let comments = [
    {
      "id": 1,
      "username": "野原新之助",
      "content": "小新"
    }
  ];
  export default function(state = {
    comments: comments
  }) {
    return state
  }