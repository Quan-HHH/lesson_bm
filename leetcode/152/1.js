// 乘积最大子数组
var maxProduct = function(nums) {
    let len = nums.length;
    let max_product = nums[0];
    for(let i = 0; i < len; i++) {
        let tempProduct = nums[i];
        max_product = tempProduct > max_product ? tempProduct : max_product;
        for(let j = i + 1; j < len; j++) {
            tempProduct *= nums[j];
            max_product = tempProduct > max_product ? tempProduct : max_product;
        }
    }
    console.log(max_product)
};

maxProduct([-2, 0, -1])