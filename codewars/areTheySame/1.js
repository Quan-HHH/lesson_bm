function comp(array1, array2) {
    if(array1 === [] || array2 === [] || array1 === null || array2 === null) return false;
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    console.log(array2, array1)
    for(let i = 0; i < array2.length; i ++) {
        if(array1[i] * array1[i] !== array2[i]){
            console.log(array2[i] * array2[i], array1[i])
            return false;
        }
    }
    return true;
}

const a1 = [96, 7, 43, 45, 35] ;
const a2 = [9216, 49, 1849, 2025, 1225];
console.log(comp(a1, a2))

console.log(typeof a1.join()) // 字符串