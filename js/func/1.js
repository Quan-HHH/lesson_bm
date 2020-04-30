/**
 * 
 * @return number
 * @param {number} w 
 * @param {number} h 
 */
// 长方形面积的函数
function area(w, h) {
    // 至少两个参数
    // arguments 是一个类数组
    if(arguments.length < 2) {
        throw new Error('参数不够');
    }

    if (typeof w != 'number' || typeof h != 'number'){
        throw new Error('参数类型有误');
    }
    return w * h;
}

var area = function(w, h) {//匿名函数
    return w * h;
}

let getArea = (w, h) => w * h; //es6