function spinWords(s){
    let arr = s.split(' ');
    for(let i = 0; i < arr.length; i++) {
        // console.log(item.length);
        if(arr[i].length >= 5) {
            // console.log(i.split('').reverse().join(''))
            arr[i] = arr[i].split('').reverse().join('');
        }
    }
    return arr.join(' ');
}

console.log(spinWords('Welcome'))