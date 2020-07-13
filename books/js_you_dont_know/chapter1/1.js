// 编译 执行
// AO 对象 ActiveObject
// {}
// 任何一个函数 声明的时候都会产生一个AO
// JS 基于原型的面向对象

// 变量查找 冒泡

function func() {
    var a = 2;
    var a = 1; // 这句代码再编译阶段不会执行 a = 1 这个赋值操作会在执行阶段执行
    console.log(a)
}