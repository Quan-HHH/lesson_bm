const arr = [1, 2, 3, 4];
// 原数组的平方
const SquareArr= arr.map(function(item) {
    return item * item;
})
// const SquareArr= arr.map(item => item * item)
console.log(SquareArr)