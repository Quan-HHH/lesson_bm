// function getTotal(one : number, two : number) : number {
//     return one + two;
// }
// const total = getTotal(1, 2);

function sayHello() : void{
    console.log('Hello World');
}

// never 永远执行不完
function errorFunction() : never{
    throw new Error();
    console.log('Hello World')
}

function forNever() : never{
    while(true){}
    console.log('Hello World')
}

// 参数是对象怎么确定属性类型
function add({one, two} : {one: number, two: number}) {
    return one + two;
}

const total = add({one: 1, two: 2})

function getNumber({one} : {one : number}) {
    return one;
}

const one = getNumber({one: 1});