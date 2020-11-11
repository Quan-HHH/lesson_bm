Function.prototype.myCall = function(context) {
    context = context || window;
    context.fn = this;
    let args = [...arguments].slice(1);
    let res = context.fn(...args);
    delete context.fn;
    return res;
}


function foo(x, y) {
    console.log(this.a, '-----------', x, y);
}

let obj = {
    a: 1
}
foo.myCall(obj, 1, 2);