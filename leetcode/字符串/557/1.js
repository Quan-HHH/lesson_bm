var reverseWords = function(s) {
    // let str = '';
    s = s + ' ';
    let arr = [], word = [];
    for(let i of s) {
        // console.log(i);
        if(i !== ' ') {
            word.push(i);
        } else {
            arr.push(word.reverse().join(''));
            word = [];
        }
    }
    return arr.join(' ');

};
console.log(reverseWords('1234bhk ch k'))