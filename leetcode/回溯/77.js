var combine = function(n, k) {
    let res = [];
    let nums = new Array(n).fill(null).map((_, i) => i + 1)
    console.log(nums)
    function backtrack(start, path = []) {
        if(path.length === k) {
            res.push(path.slice(0))
            return
        }
        for(let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop()
        }
    }
    backtrack(0);
    return res;
};
combine(4,2)