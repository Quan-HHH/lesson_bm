var reverseWords = function(s) {
    let arr = s.aplit('').reverse().join('');
    return arr.split(' ').reverse().join(' ');
};