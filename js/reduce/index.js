var arr = [1, 2, 3, 4];


var sum = arr.reduce(function(pre, cur) {
    return pre + cur;
})

console.log(sum)