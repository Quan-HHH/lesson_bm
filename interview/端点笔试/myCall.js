Function.prototype.myCall = function() {

}


function foo(x, y) {
    console.log(this, x, y);
}

foo().myCall;