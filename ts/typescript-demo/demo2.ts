const count : number = 1;


// 用interface的方式定义一个静态类型
interface XiaoJieJie {
    uname: string,
    age: number
}

const xiaohua: XiaoJieJie = {
    uname: '小花',
    age: 20
}

console.log(xiaohua.age)