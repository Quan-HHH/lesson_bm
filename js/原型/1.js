// Person.prototype -- 原型
// Person.protoPerson = {}函数被定义出来 就天生被具备的

Person.prototype.name = 'caocao'
Person.prototype.say = function() {
    console.log('giao')
}
function Person() {
    // this.name = 'huahua'
}

let person = new Person();
console.log(person.name) // 如果person上没有name这个属性, 那么 从原型上继承
person.say();
console.log(person.say)

let person1 = new Person();
console.log(person1.name) 
// console.log(person)
