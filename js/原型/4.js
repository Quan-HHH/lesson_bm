function Person() {
    // 构造函数创建this
    // var this = {
    //     __proto__: Person.prototype
    // }
}
function Animal() {
    this.name = 'ani';
}
Animal.prototype.name = 'aniiiii'
Person.prototype.name = 'wn'
let person = new Person();
person.__proto__ = Animal.prototype;
console.log(person.name)  // aniiiii