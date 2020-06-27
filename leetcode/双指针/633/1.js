var judgeSquareSum = function(c) {
    let i = 0, j = parseInt(Math.sqrt(c)), squareSum;
    while(i <= j ) {
        squareSum = i * i + j * j;
        if(squareSum === c) {
            return true;
        } else if(squareSum > c) {
            j--;
        } else {
            i++;
        }
    }
    return false;
    // console.log(j)
};
console.log(judgeSquareSum(8))