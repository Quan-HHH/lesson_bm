function score(dice) {
    let diceR = [0, 0, 0, 0, 0, 0];
    let scoreArr = [1000, 200, 300, 400, 500, 600];
    let sdr = [100, 0, 0 , 0, 50, 0];
    dice.forEach(item => {
        diceR[item - 1] ++;
    });
    console.log(diceR)
    return diceR.reduce(function(prev, cur, index) {
        console.log(prev)
        console.log(sdr[index])
        return prev + (cur >= 3 ? scoreArr[index] : 0) + (sdr[index] * (cur % 3));
    }, 0)
}
console.log(score([2, 4, 4, 5, 4]))