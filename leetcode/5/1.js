function isPalindrome(str) {
    var len = str.length;
    var middleIndex = parseInt(len / 2) - 1;
    if(len == 1) {
        return true;
    }
    for(var i = 0; i <= middleIndex; i++) {
        
        if(str.charAt(i) !== str.charAt(len - i - 1)){
            return false;
        }
        if(i == middleIndex){
            return true;
        }
    }
}

var longestPalindrome = function(s) {
    var tempStr = '';
    max = 0;
    for(var i = 0; i < s.length; i++) {
        for(var j = i + 1; j <= s.length; j++) {
            const str = s.substring(i, j)
            var flag = isPalindrome(str);
            if(flag) { //是回文
                // console.log(str.len)
                if(str.length > max){
                    max = str.length;
                    tempStr = str;
                    // console.log(1232)
                }
            }
            // console.log(str, isPalindrome(str));
        }
    }
    console.log(tempStr)
    return tempStr
};
// console.log('6336'.substring(1,3));
longestPalindrome('123455')