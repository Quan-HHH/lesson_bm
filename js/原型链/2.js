Person.prototype = {
    name: 'minguo',
    sayName: function() {
        console.log(this.name)
    },
    height: 100
}

function Person() {
    this.name = 'yuanlong'
    this.eat = function() {
        this.height++
    }
}

var person = new Person();
person.sayName() // yuanlong 因为此时this指向的是person, 谁调用的就指向谁，如果构造函数中没有name属性，就会往原型链上找

person.eat();
console.log(person.height)  // 101
console.log(Person.prototype.height)  // 100