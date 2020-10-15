function newFunc(Fn) {
    let o = {};
    o.__proto__ = Fn.prototype; // o对象的隐式原型指向构造函数的显示原型
    // 那么o对象就自然能够拿到原型上面的东西
    // 然后把构造函数执行掉就好了
    // 为了保证作用域不被更改, call一下, 让构造函数里的this关键字访问到的是o
    Fn.call(o, arguments);
    return o;
}

function Fn(name, age) {
    this.name = name;
    this.age = age;
}
let fn = new Fn()
// 会得到->
fn = {
    name: '',
    age: ''
}
// 没有办法实现成new Fn()的形式, 实现成newFunc(Fn)的形式, 把构造函数当成参数传进来
