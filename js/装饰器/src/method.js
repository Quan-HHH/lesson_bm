let obj = {};
Object.defineProperty(obj, 'a', {
    value: 1
})// 添加属性a 值为1

function log(target, key, descriptor) {
    let originAdd = descriptor.value;
    descriptor.value = function(...args) {
        console.log('start');
        let res = originAdd.apply(this, args);
        return res;
    }
}

class Math {
    constructor() {
        this.c = 10;
    }
    // 无侵入 只是装饰一下 不破坏add内部的代码
    @log
    add(a, b) {
        const sum = a + b + this.c;
        return sum;
    }
}
let m = new Math();
console.log(m.add());
// 监听一下add方法 有没有被调用到