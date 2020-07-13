'use strict' // 严格模式下报错 非严格模式下 b 是全局的
function init(a) {
    b = a + 3; // 没有用var声明 和当前函数的AO对象结合不起来 所以是全局变量
}

init(2);
