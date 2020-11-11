Function.prototype.myApply = function(context) {
    context = context || window;
    context.fn = this;
    let args = arguments[1]; //这是个数组
    let res = context.fn(...args);
    delete context.fn;
    return res

}


let obj = {
    a: 1
}

function foo(x, y) {
    console.log(this.a, x, y)
}

foo.myApply(obj, [1, 2])