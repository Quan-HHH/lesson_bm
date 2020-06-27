const twoSum = function(nums, target){//const声明了一定要赋值
 let i = 0, j = nums.length - 1, sum;
 while(i < j) {
    sum = nums[i] + nums[j];
     if(sum === target) {
         return [i + 1 ,j + 1];
     } else if(sum < target) { //小了 左边指针右移
        i++;
     } else if(sum > target) {
         j--;
     }
 }
 return null;
}; 
console.log(twoSum([3,2,4],6))