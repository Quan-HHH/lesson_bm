
let arr = [1, 2, 3, 4, 5, 6, 7], k = 3;

// function Rshift(list, k) {
//     // 时间复杂度 O(n)
//     // 空间复杂度 O(n)
//     if(k % n === 0) return list;
//     const copy = [...list];
//     const n = list.length;
//     for(let i = 0; i < n; i++) {
//         list[i] = copy[(k + i) % n];
//     }
//     return list;
// }


console.log(Rshift(arr, k));

// 三次翻转法
// 1. [0, n - k -1]
// 2. [n - k, n - 1]
// 3. [0, n - 1]
function reverse(list, start, end) {
    let t;
    while(start < end) {
        t = list[start];
        list[start] = list[end];
        list[end] = t;
        start ++;
        end --;
    }
    // return list;
}
function Rshift(list, k) {
    const n = list.length;
    if(k % n === 0) return list;
    reverse(list, 0, n - k - 1);
    reverse(list, n - k, n - 1);
    reverse(list, 0, n - 1);
    return list;
}
