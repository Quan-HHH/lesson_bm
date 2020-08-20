// 函数即对象
// 以上只是Foo的构造方法 没有产生实例
function Foo() {
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}
// 原型链
Foo.prototype.a = function() {
    console.log(3)
}
// 属性覆盖
Foo.a = function() {
    console.log(4)
}
Foo.a();  // 4
let obj = new Foo(); 
obj.a(); // 2
Foo.a(); // 1