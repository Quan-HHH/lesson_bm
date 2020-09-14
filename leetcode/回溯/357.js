var countNumbersWithUniqueDigits = function(n) {
    let count = 0;
    let baseNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    function backtrack(nums, path = []) {
        if(path[0] === 0) {
            return;
        }
        if(path.length <= n) {
            console.log(path)
            count++;
        }
        if(path.length === n) {
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            path.push(nums[i]);
            let numsArr = nums.slice(0);
            numsArr.splice(i, 1);
            backtrack(numsArr, path);
            path.pop();
        }
    }
    backtrack(baseNums);
    return count;
};

console.log(countNumbersWithUniqueDigits(2))