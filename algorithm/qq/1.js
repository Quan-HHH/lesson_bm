//js中整数和浮点数没有区分，都是number类型
let arr = [];
let nums = '631758924';
// console.log(typeof nums);
// 字符转切割
arr.push(nums[0]);
let c = nums[1];
nums = nums.substring(2); //slice
nums += c;
console.log(nums, arr);
