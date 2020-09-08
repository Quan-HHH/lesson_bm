const mid1 = (next) => (action) => {
    console.log('mid1 start');
    if (typeof action === 'function') {
        return action();
    }
    // return next(action);
    let res = next(action);
    console.log('mid1 end');
    return res;
}

const mid2 = (next) => (action) => {
    console.log('mid2 start');
    next();
    console.log('mid2 end');
}

// redux已经加载完了两个中间件
const middlewares = [mid1, mid2];
function myFlow(fns) {
    // 组合所有的 函数
    // fn3(fn2(fn1()))
    return function (defaultVal) {
        let res = defaultVal;
        while (fns.length) {
            let fisrt = fns.shift();
            res = fisrt(res);
        }
        return res;
    }
}
const chain = myFlow(middlewares)
let nbdispatch = chain(() => {
    console.log('就是redux源码内部最原始的只能处理 action 是纯对象的 dispatch 函数')
})
nbdispatch({a:1})