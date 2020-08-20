function myNew(){
    const obj = {};
    // 以下其实就相当于arguments[0]
    // shift用于删除数组第一个元素，并返回第一个元素的值
    Constructor = Array.prototype.shift.call(arguments);
    console.log(Constructor)
    obj.__proto__ = Constructor.prototype;
    let ret = Constructor.apply(obj,arguments); // 判断构造函数是否存在返回值
    return typeof ret === 'object'? ret : obj;
}

// console.log([1,2,3,4].slice()); //slice没有参数 会返回数组本身
