function scramble(str1, str2) {
    if(str2 === '') return true;
    //code me
    for(let i of str2) {
        if(str1.indexOf(i) >= 0) {
            str1.replace(i, '');
            console.log(str1)
        } else {
            return false
        }
    }
    return true;
}

console.log(scramble('katas','kata'))
