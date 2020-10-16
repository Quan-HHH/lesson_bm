
Person.prototype.name = 'wn';

function Person() {

}

var person = new Person();
Person.prototype = {
    name: 'pipi'
}

console.log(person.name);  // wn
// 解释:  9-11行是把原型重新赋值，不是只改变原型中的name属性
// 由于person对象被构造出来的时候，__proto__就指向了构造函数的prototype
// 后面再更改对赋给__proto__的对象不会有改变，所以person.name依旧是wn

// 如果把8行放到9-11行后面，那么person.name将会是pipi