function foo() {
    return (a) => {
        console.log(this.a);
    }
}

let obj1 = {
    a: 1
}

let obj2 = {
    a: 2
}
let bar = foo.call(obj1)
console.log(bar)
bar.call(obj2)


console.log(typeof null)