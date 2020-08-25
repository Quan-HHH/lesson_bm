// 基础静态类型和对象静态类型
const count : number = 918;
const myName : string = 'xiaohua';
// :后面还可以加null, undefined, boolean, void, symbol


const xiaoJieJie: {
    name: string,
    age: number
} = {
    name: 'xiaohua',
    age: 20
}

const xiaoJieJies : string[] = ['小花', '宗雯']; // 数组也是对象类型

class Person{}
const huahua: Person = new Person()

// 函数并且返回字符串
const jianXiaoJieJie: ()=>string = () => {return 'huahua'}

// 对象类型 最普通的类型 数组类型 类类型 函数类型