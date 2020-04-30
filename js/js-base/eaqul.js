let a = 1;
let b = 1;
let c = [1];
let d = [1]; 
let e = '1';
let g = {};
let h = {};

console.log(a == b) //true
console.log(c == d) //false
console.log(c === d) //false
//存储引用类型的时候，存储在不同的地方
// c和d, g和h 都指向不同的地址
// 地址不一样， 导致== 、=== 都不想等
console.log(a == e) //true ,进行了类型转换，成了同一种类型
console.log(a == e) //false
console.log(g == h) //false

