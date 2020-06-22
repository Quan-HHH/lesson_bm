var reverseWords = function(s) {
    s = ' ' + s + ' ';
    let str = '';
    let arr = [];
    for(let i of s) {
        console.log(i)
        if(i === ' ') {
            if(str != '') {
                arr.push(str);
            }
            str = '';
        }else {
            str += i;
        }
    }
    let res = arr.reverse().join(' ')
    return res;
};
console.log(reverseWords('1234bhk ch k'))