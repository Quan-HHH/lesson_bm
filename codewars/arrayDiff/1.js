function arrayDiff(a, b) {
    if(a === []) return a;
    for(let i = 0; i < b.length; i++) {
        let index = a.indexOf(b[i]);
        while(index >= 0) {
            a.splice(index, 1);
            index = a.indexOf(b[i]);
        }
    }
    return a;
}

console.log(arrayDiff([1,1,1,1,2,3], [1]))