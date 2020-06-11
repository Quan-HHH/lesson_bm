## 函数式编程
- 不可变
- 纯函数: 提倡写一个函数风格 这个函数没有副作用 没有额外的影响

## immutable
深拷贝 和 浅拷贝 各有优缺点
immutable 结合两者
- 结构共享

原生js的api 
push shift pop splice 可变

concat peek 不可变

```js
let defaultState = fromJS({})
// 原生的数据 用fromJS转一下 把它变成immutable的
// 一旦用了immutable 那么一个项目的每个地方都要用immutable
function reducer(state = defaultState, action) {

}
```

运用immutable 结构共享 优化性能