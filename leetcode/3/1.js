// 无重复字符的最长字串
var lengthOfLongestSubstring = function (s) {
    var maxStr = 0;
    var subString = [];
    for (let i = 0; i < s.length; i++) {
        let index = subString.indexOf(s[i]);
        if (index != -1) { // 在maxStr中 
            subString.splice(0, index + 1);
            // console.log(index, subString)
        }
        subString.push(s.charAt(i));
        maxStr = subString.length > maxStr ? subString.length : maxStr;

    }
    return maxStr
};
console.log(lengthOfLongestSubstring('nbhibbkcds'))