var validPalindrome = function(s) {
    if(s.length < 2) {
        return true;
    }
    function isPali(left, right) {
        
        while(left < right) {
            if(s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    let right = s.length - 1, left = 0;
    while(left < right) {
        if(s[left] !== s[right]) {
            return isPali(left + 1, right) || isPali(left, right - 1);
        }
        left++;
        right--;
    }
    return true
};

console.log(validPalindrome('abaaaaacba'))