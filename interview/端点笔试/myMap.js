Array.prototype.myMap = function(cb) {
    // 返回一个新的数组
    let newArr = [];
    for(let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i, this))
    }
    console.log(newArr)
    return newArr;
}

let arr = [1,2,3];
arr.myMap((item) => {
    return item + 1;
})