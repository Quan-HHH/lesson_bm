/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.arr = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.arr;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let num = [...this.arr]
    let len = num.length;
    for(let i = 0; i < len; i++) {
        let idx = Math.floor(Math.random() * (len - i));
        [num[idx], num[len - i - 1]] = [num[len - i - 1], num[idx]]
    }
    return num;
};



nums = [1,2,3,4,5,6,7,8]
var obj = new Solution(nums)
var param_1 = obj.reset()
var param_2 = obj.shuffle()
console.log(param_1, param_2)
