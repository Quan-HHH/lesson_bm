// 最大子序和
var maxSubArray = function(nums) {
    let max_subArray = nums[0];
    let memo = [];
    memo[0] = nums[0];
    for(let i = 1; i < nums.length; i++) {
        memo[i] = Math.max(nums[i] + memo[i - 1], nums[i]);    
        max_subArray = Math.max(max_subArray, memo[i]);
    }
    
    return max_subArray;
};

console.log(maxSubArray([1,8,7]))