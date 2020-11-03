function foo(a) {
    var b = a + 2;
    function bar(c) {
        console.log(a, b, c);
    }
}

bar(5)
foo(2)