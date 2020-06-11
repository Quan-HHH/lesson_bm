// 纯函数 没有副作用
// 请求 读写文件 Math.random console.log(对终端有影响) 都是不纯的 结果不可控
// 输入是相同的 那么输出也是相同的 

function sum(a, b) {
    return a + b;
}
sum(10, 20)
sum(10, 20)
sum(10, 20) //不管调用多少次 都是等于30



const TYPE = 'abc';
function reducer(state, action) {
    switch(action.type) {
        case TYPE:
            return 'abc';
        default:
            return 123
    }
}
reducer(null, { type: TYPE}) //这也符合纯函数的特征


let a = 10;
function foo() {
    return a;
}
foo(); //10
a = 20;
foo(); // 20
// 不纯

