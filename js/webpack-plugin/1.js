const { SyncHook, AsyncSeriesHook } = require('tapable');
const hook = new SyncHook();
const asyncHook = new AsyncSeriesHook();

// 类似on 绑定一个时间
hook.tap('hook1', () => {
    console.log(1);
})
// 类似emit 触发一个事件
hook.call();
asyncHook.tapPromise('xxx', () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 3000)
    })
})
asyncHook.tapPromise('xxx', () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 4000)
    })
})
asyncHook.tapAsync('xxx', (cb) => {
    setTimeout((cb) => {
        cb()
    }, 3000);
})
asyncHook.promise().then(() => {
    console.log('async complete')
})
asyncHook.callAsync(() => {
    console.log('结束了')
})