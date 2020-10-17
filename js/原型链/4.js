var num = 123;
num.toString() // '123'
// num是原始类型，为什么也有toString方法呢
// 其实js干了这件事 --> new Number(num).toString()
// 方法和属性只能添加给对象,不能添加给基本数据类型,当我们用一些基本数据类型去调用属性和方法时
// 浏览器会临时使用包装类将其转换为对象,然后再调用对象的属性和方法, 调用后会销毁此对象

// 方法重写
Object.prototype.toString = function() {
    return 'ahhhhhhh'
}

function Person() {

}
var person = new Person();
console.log(person.toString())