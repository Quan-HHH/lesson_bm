var isPalindrome = function(s) {
    if(s === '') return true;
    s = s.replace(/[^a-z0-9]/gi, '');
    s = s.toUpperCase();
    for(let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if(s[i] !== s[j]) return false;
    }
    return true;  
};