- react 小书
- react全家桶 = react + react-route + redux

yarn add react-redux
yarn add redux

react = 数据 + UI

效果：  数据不需要派发的方式来做 父组件=>子组件
任何组件可以随时跟redux连接起来通信connect

搭建的时候 store->Provider->App
connect(mapStateToProps)()
reducer可以有很多个

1. 状态收归redux管理 由reducer函数提供
2. connect借到组件去state 单一状态树
 在组件内部 这个数据在props里面