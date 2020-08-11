var simplifyPath = function (path) {
    path = path.replace(/\/+/g, '/').replace(/\/$/, '');
    let pathArr = path.split('/')
    let stack = [];
    for (let i = 1; i < pathArr.length; i++) {
        if (pathArr[i] === '..') {
            if(stack.size !== 0) {
                stack.pop()
            } else ;
        } else if(pathArr[i] === '.') ;
         else {
            stack.push(pathArr[i]);
        }
    }
    console.log(stack, pathArr)
    return '/' + stack.join('/');
};
console.log(simplifyPath("/a//b////c/d//././/..")) 