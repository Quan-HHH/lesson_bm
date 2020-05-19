var maxProduct = function(nums) {
    let len = nums.length;
    let max_product = nums[0];
    const maxProductMemo = [];
    const minProductMemo = [];
    maxProductMemo[0] = nums[0];
    minProductMemo[0] = nums[0];

    for(let i = 1; i < len; i++) {
        maxProductMemo[i] = Math.max(maxProductMemo[i - 1] * nums[i], nums[i], nums[i] * minProductMemo[i - 1]);
        minProductMemo[i] = Math.min(minProductMemo[i - 1] * nums[i], nums[i], nums[i] * maxProductMemo[i - 1]);
        max_product = Math.max(maxProductMemo[i], max_product)
    }
    console.log(max_product)
};

maxProduct([-2, 0, -1])