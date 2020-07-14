function narcissistic(value) {
    // Code me to return true or false
    var copyValue = value, arr = [], sum = 0;
    while(parseInt(value/10) !== 0) {
        arr.push(value%10);
        value = parseInt(value/10);
    }
    arr.push(value%10);
    for(let item of arr) {
        sum += Math.pow(item, arr.length);
    }
    return sum === copyValue;
}

narcissistic(1634)