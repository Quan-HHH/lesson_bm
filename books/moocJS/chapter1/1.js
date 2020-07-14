// 1. 数组中的成员类型相同，顺序可以不同。例如[1, true] 与 [false, 2]是相似的。

// 2. 数组的长度一致。

// 3. 类型的判断范围，需要区分:String, Boolean, Number, undefined, null, 函数，日期, window.
function arraysSimilar(arr1, arr2){
    if(!(arr1 instanceof Array) || !(arr2 instanceof Array)) return false;
    if(arr1.length !== arr2.length) return false;
    if(getType(arr1).sort().join('') === getType(arr2).sort().join('')) return true;
    else return false;
    function getType(arr) {
        let result = [];
        for(let i of arr) {
            result.push(Object.prototype.toString.call(i));
        }
        return result;
    }
}
const arr1=[1,true,null],arr2=[null,false,100];
console.log(arraysSimilar(arr1, arr2))