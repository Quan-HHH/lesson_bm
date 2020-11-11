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