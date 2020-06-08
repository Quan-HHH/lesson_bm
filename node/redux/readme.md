## 状态
```js
let isLogin = false;
//login-component
isLogin = true;
//logout-component
isLogin = false;
// 当项目复杂了 会有更多组件需要用到isLogin状态 容易出现bug
```

## redux
设计一套修改state的流程(单向)
在我们修改变量的过程中 加入了一些环节 使状态的改变更可控

## 