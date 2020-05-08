/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];

        const length1 = nums1.length;//更短的数组长度
        const length2 = nums2.length;
        let min = 0;
        let max = length1;
        let half = Math.floor((length1 + length2 + 1) / 2);
        while(max >= min) {
            const i = Math.floor((max + min) / 2);
            const j = half - i;
            if(i > min && nums1[i - 1] > nums2[j]) {
                
            }

        }
    }
    return length % 2 ? arr[Math.floor(length / 2)] : (arr[length / 2] + arr[length / 2 - 1]) / 2;
};

const nums1 = [3,8,17,12,-9,-100,-100,-100,-100,-100,-100,-100,-100,-100]
const nums2 = [7,29,31,23,-2,1];
console.log(findMedianSortedArrays(nums1,nums2))