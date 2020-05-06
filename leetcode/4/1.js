/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums = nums1.concat(nums2);
    console.log(nums)
    nums = nums.sort(function(a, b) {return a - b;});
    console.log(nums)
    if(nums.length % 2 == 0){
        //长度为偶
        return (nums[nums.length/2-1]+nums[nums.length/2])/2
    }else{
        return nums[((nums.length+1)/2)-1];
    }
};
const nums1 = [89,2,-2]
const nums2 = [10,6];
console.log(findMedianSortedArrays(nums1,nums2))