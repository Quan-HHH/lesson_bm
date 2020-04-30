// var 没有块级变量
// 块：独立的块 如{}

// 如果有块级变量 a只在{}中生效

{
    var a = 123;
    let b = 456; //可变
    const c =789; //不可变
}
console.log(a); //可输出
// es5的缺陷 没有块级变量

console.log(b); //报错
console.log(c); //报错