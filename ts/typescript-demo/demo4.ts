// type annotation 类型注解: 人为为一个变量指定类型, 在 vscode 中鼠标移入 a 出现提示，冒号后面就是类型注解：
// type interface 类型推断: 当不添加类型注解时，TypesScript 也能知道变量 a 是一个数字，这就是 TypeScript 的类型推断

// 能够自动分析变量类型就不用写
const one = 1;
const two = 2;
const three = one + two;

// 不能分析的
function getTotal(one : number, two : number) {
    return one + two;
}

const total = getTotal(1, 2);

const XiaoJieJie = {
    name: '刘英',
    age: 18
}