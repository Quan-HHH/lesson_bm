const Person = function(name) {
    this.name = name;
    return {
        name: 'asd'
    };
}
Person.prototype.sayName = function() {
    console.log(this.name);
}

const person = new Person('Tony');
console.log(person.name);
console.log(person.sayName);
console.log(person instanceof Person);