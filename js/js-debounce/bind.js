// call apply  算一类
// bind

function sum(a, b, c) {
    return a + b + c;
}

// call apply 参数必须传完整
sum.call(null, 1, 2, 3)
// bind 传参可以不完整 会返回一个函数 让我们接着传递剩下的参数
let add1 = sum.bind(null, 1, 2);
console.log(add1(20));


function test(reg, str) {
    return reg.test(str);
}
let str = `
`,str1 = '\n', str2 = `123`; // 如果不用``就要用\n
// `` 输入过的 都能保留下来
let whiteSpace = /\n/g
// 全局匹配

console.log(test(whiteSpace, str));
console.log(test(whiteSpace, str1));
console.log(test(whiteSpace, str2));

let hasWhiteSpace = test.bind(null, whiteSpace);
console.log(hasWhiteSpace(str))
console.log(hasWhiteSpace(str1))
console.log(hasWhiteSpace(str2))

let hasTabSpace = test.bind(null, /\t/g)
console.log(hasTabSpace(`\t123`))
let hasNumber = test.bind(null, /[0-9]/g)
console.log(hasNumber(`123`))