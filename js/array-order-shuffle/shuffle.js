// 洗牌算法
// 从后往前 取一个数 从未洗牌的数中 随机取一个
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
function shuffle(arr) {
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        let idx = Math.floor(Math.random() * (len - i)); //Math.floor 向下取整 Math.random [0,1)
        [arr[len - 1 - i], arr[idx]] = [arr[idx], arr[len - 1 - i]]
    }
    return arr;
}

console.log(shuffle(arr))

let t = 10000;
for(let i = 0; i < t; i++) {
    let sorted = shuffle(arr.slice(0));
    for( let i = 0; i < sorted.length; i++) {
        res[i] = sorted[i] + res[i];
    }
}

console.log(res.map(sum => sum / t))