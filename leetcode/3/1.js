// 无重复字符的最长字串
var lengthOfLongestSubstring = function(s) {
    var maxStr = 0;
    for(let i = 0; i < s.length - maxStr; i++){
        let tempStr = []
        if(tempStr.some(ch => ch == maxStr.charAt(i))){
            continue
        }else{

            
        }
    }
};
console.log(lengthOfLongestSubstring('nbhibbkcds'))