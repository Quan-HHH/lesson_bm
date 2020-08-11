function foo(str) {
    str = str.replace(/\(.*\)/g, '');
    // let strArr = str.split('');
    let stack = [];
    for(let i of str) {
        if(i === '<') stack.pop();
        else {
            stack.push(i);
        }
    }
    return stack.join('')
}
console.log(foo('Corona(Trump)USA<<<Virus'))