var lengthOfLastWord = function(s) {
    if(s == '') return 0;
    else if(!s.trim().includes(' ')) return s.trim().length;
    s = s.split('').reverse().join('');
    console.log(s)
    let length = 0;
    for(let i of s) {
        if(i === ' ') {
            break;
        }
        length++;
    }
    return length;
};
lengthOfLastWord('Hello World');