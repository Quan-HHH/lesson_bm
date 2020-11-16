function foo1(str) {
    console.log(str.split('').reverse().join(''));
}
function foo2(str) {
    let newStr = '';
    for(let i = str.length - 1; i >= 0; i --) {
        newStr += str.charAt(i)
    }
    console.log(newStr);
}
function foo3(str) {
    
}

foo1('123456')
foo2('123456')
foo3('123456')
console.log(parseInt('1a'))

let arr = [1,2,3,4,5]
console.log(arr.map(parseInt))
console.log(1 & 2)