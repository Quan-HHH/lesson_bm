1. setTimeout
2. Promise
3. 请求
4. addeventlistener
5. 页面

浏览器内部有很多线程:
eg: 1. 定时器触发线程
    2. http
    3. GUI线程

Event-loop: 浏览器协调用户交互 渲染 网络等任务采取的一种策略

```js
setTimeout(() => {
    console.log(1)
}, 0) // 宏任务
Promise.resolve(3).then(console.log); // 微任务
console.log(2)
// 2 3 1
```
宏任务/任务(由宿主环境引起的任务)
setTimeout, 整体的一段script

微任务(由js本身引起的任务)
Promise.then  MutationObserver Promise.nextTick

## 流程
只要宏任务不为空
    1. 从宏任务队列里面取出 **一个** 执行
    2. 从微任务队列中取出 **所有** 微任务执行, 如果在这执行过程中又产生了微任务 则再次重复第2步
    3. 有可能进入浏览器的更新渲染
        1. reqAnimationframe回调
        2. 执行IntersectionObserver回调
        3. 重新绘制渲染
