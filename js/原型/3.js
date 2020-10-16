
Person.prototype.lastName = 'Quan'
function Person(name) {
    this.name = name;
}

var person = new Person('huahua');
// 改
Person.prototype.lastName = 'Quannnnnn'

// 删
delete
console.log(person.lastName);

function Bus() {

}
function Car() {

}
// Car.prototype = {
//     constructor: Bus
// }
var car = new Car();
console.log(car.prototype) // undefined, prototype是function才有的属性
console.log(car.constructor) // 构造器 [Function: Car]
// constructor 为了让Car()构造出的所有的对象都能找到他自己的构造器
console.log(Car.prototype) // Bus { constructor: [Function: Bus] }
console.log(car.constructor.prototype === Car.prototype) // true