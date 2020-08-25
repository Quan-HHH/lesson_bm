const numberArr : number[] = [1, 2, 3];
const stringArr : string[] = ['a', 'b', 'c'];
const undefinedArr : undefined[] = [undefined, undefined]
const arr : (number | string)[] = [1, 'string', 2];

// type alias 类型别名
type Lady = {name:string, age:number}
class Madam {
    name: string;
    age:number;
}
const xiaoJieJie : /*Lady*/Madam[] = [
    {name: '刘英', age: 18},
    {name: '谢大脚', age: 28}
]

