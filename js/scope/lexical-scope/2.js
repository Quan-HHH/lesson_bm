// 欺骗词法作用域 影响正常的词法作用域

// eval()
function foo(str, a) {
    eval(str)
    console.log(b, a) // 2 1
}
var b = 3
foo('var b = 2', 1)


var obj = {
    a: 1,
    b: 2,
    c: 3
}

// 正常操作
obj.a = 10;
obj.b = 20;
obj.c = 30;
console.log(obj) // { a: 10, b: 20, c: 30 }

// 简单快捷的操作
with(obj) {
    a = 100;
    b = 200;
    c = 300;
}

console.log(obj) // { a: 100, b: 200, c: 300 }

// with的缺点
function foo2(obj) {
    // obj.a = 2
    with(obj) {
        a = 2;
    }
}

var o1 = {
    a: 3
}

foo2(o1)
console.log(o1.a) // 2

var o2 = {
    b: 3
}
foo2(o2)
console.log(o2.a) //undefined  o2压根就没有a这个属性
console.log(a) // 2 --> a出现在了全局