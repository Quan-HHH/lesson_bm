var merge = function(nums1, m, nums2, n) {
    let len1 = m - 1, len2 = n - 1, len = m + n - 1;
    while(len1 >= 0 && len2 >= 0) {
        if(nums1[len1] > nums2[len2]) {
            nums1[len] = nums1[len1]; len--; len1--;
        } else {
            nums1[len] = nums2[len2]; len--; len2--;
        }
    }
    console
    nums1.splice(0, len2 + 1, ...nums2.slice(0, len2 + 1))
};