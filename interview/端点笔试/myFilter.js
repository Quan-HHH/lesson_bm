Array.prototype.myFilter = function(cb) {
    let newArr = [];
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            newArr.push(this[i])
        }
    }
    console.log(newArr)
}

let arr = [1,2,3];
arr.myFilter((item) => {
    return item > 1;
})