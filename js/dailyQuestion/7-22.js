var a = {n: 1}
var b = a;
a.x = a = {n: 2}; // .的优先级最高 然后从右往左进行赋值运算
console.log(a.x); // undefined
console.log(b.x)  // {n: 2}