const { SyncHook, AsyncSeriesHook } = require('tapable');
const hook = new SyncHook();
const asyncHook = new AsyncSeriesHook();

hook.tap('hook1', () => {
    console.log(1);
})

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

asyncHook.promise().then(() => {
    console.log('async complete')
})