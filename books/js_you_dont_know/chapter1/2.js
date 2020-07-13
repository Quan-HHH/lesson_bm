function a(age) {
    console.log(age)    // [Function: age]
    var age = 20;
    console.log(age)    // 20
    function age() {
        console.log(age) 
    }
    console.log(age)    // 20
}
a(18)