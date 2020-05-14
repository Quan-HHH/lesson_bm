let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// a, b是正在进行比较的两个数
// 小于0 a会被排列到b前面
// 大于0 b会被排列到a前面
// 升序
console.log(arr.sort((a, b) => a - b))
// 降序
console.log(arr.sort((a, b) => b - a))