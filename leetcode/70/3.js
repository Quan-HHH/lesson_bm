function f(n) {
    const w = new Map();
    if (n == 1) return 1;
    if (n == 2) return 2;
    if (w.has(n)) {
        return w.get(n);
    }
    const ret = f(n-1) + f(n-2);
    // 存一下   
    w.set(n, ret)
    // console.log(n,'--------------')
    return ret;
}
console.log(f(50))