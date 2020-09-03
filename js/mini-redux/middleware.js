const _ = require('lodash');

function fn1(str) {
    return str + 'def';
}

function fn2(str) {
    return str.toUpperCase();
}

const fn = _.flow([fn1, fn2]);
console.log(fn('abc'));

function myFlow(fns) {
    // 组合所有的函数
    // fn3(fn2(fn1()))
    return function(defaultVal) {
        let res = defaultVal;
        while(fns.length) {
            let first = fns.shift();
            res = first(res);
        }
        return res;
    }
}