// 严格来说 一个action应该是一个对象
// { 
//     type: 'GET_HOME_LIST'
//     xxx:
// }
// redux 中间件redux-thunk： 支持不同的action 这样不仅支持对象 还支持action是一个函数
export const getHomeList = () => {
    console.log(1);
}