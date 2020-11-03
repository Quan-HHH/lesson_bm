// 欺骗词法作用域

// eval()
function foo(str, a) {
    eval(str)
    console.log(b, a) // 2 1
}
var b = 3
foo('var b = 2', 1)