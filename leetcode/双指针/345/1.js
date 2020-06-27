var reverseVowels = function(s) {
    //反转字符串中的元音字母
    let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'], i = 0, j = s.length - 1;
    s = s.split('');
    console.log(s)
    while(i < j) {
        if(arr.includes(s[i])) {
            if(arr.includes(s[j])) {
                [s[i], s[j]] = [s[j], s[i]];
                i++;j--;
            }else {
                j--;
            }
            
        } else {
            i++;
        }
    }
    s = s.join('');
    return s;
};

console.log(reverseVowels('leetcookkkkk'))