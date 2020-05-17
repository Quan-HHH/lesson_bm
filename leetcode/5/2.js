var longestPalindrome = function(s) {
    // 字符串长度小于2 直接返回
    if(s.length < 2) {
        return s;
    }

    //循环
    let start = 0;
    let maxLen = 1;
    function expandAroundCenter(left, right) {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            if(right - left + 1 > maxLen) {
                maxLen = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    }
    for(let i = 0; i < s.length; i++) {
        expandAroundCenter(i - 1, i + 1);
        expandAroundCenter(i, i + 1);
    }
    return s.substring(start, start + maxLen);
}

console.log(longestPalindrome('111678564674898989899989'))