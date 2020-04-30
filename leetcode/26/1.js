var removeDuplicates = function(nums) {
    var count = 0;//重复个数
    var n = nums.length;
    for(var i = 0; i < n - 1 - count; i++){
        if(nums[i] == nums[i + 1]){
            // 后面的元素前移
            for(var j = i + 1; j < n; j++){
                nums[j] = nums[j + 1];
                
            }
        }
        count++;
    }
    // console.log(count,'------')
    return n-count
}

var nums;
nums= [1,1,1,2,2,4,5]
console.log(removeDuplicates(nums));