let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
//  没有真正随机 伪随机
// 如果这个算法是正确的 那么 每个数 在每个位置 出现的概率均等
// 也就是说 乱序足够多次数 把每一位计算出一个平均值 趋近于4.5
// console.log(arr.sort(() => Math.random() - 0.5))

function shuffle(arr) {
    // 两个数交换的概率50%
    return arr.sort(() => Math.random() - 0.5);
}

let t = 10000;
for(let i = 0; i < t; i++) {
    let sorted = shuffle(arr.slice(0));
    for( let i = 0; i < sorted.length; i++) {
        res[i] = sorted[i] + res[i];
    }
}

console.log(res.map(sum => sum / t))