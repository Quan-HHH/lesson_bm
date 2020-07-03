// 两数不使用四则运算 得出和
// a + b = (a ^ b) + ((a & b) << 1)

function sum(a, b) {
    if(a === 0) return b;
    if(b === 0) return a;
    let newA = a ^ b;
    let newB = (a & b) << 1;
    return sum(newA, newB)
}

console.log(sum(7, 8))