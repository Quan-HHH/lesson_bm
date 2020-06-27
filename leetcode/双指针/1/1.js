// var twoSum; //变量声明
// console.log(typeof twoSum) //undefined
// twoSum = 2;
// console.log(typeof twoSum) //number
// twoSum = null;
// console.log(typeof twoSum) //object
// var twoSum = function(nums, target){
//     let arr =[]; //把坐标放进去
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 arr=[i, j];
//                 return arr;
//             }
//         }
//     }
// }

// console.log(typeof twoSum) //function

//性能优化
const twoSum = function(nums, target){//const声明了一定要赋值
    //一重循环 nums[i], target - nums[i]
    let map = {}; //对象字面量 json object
    nums.forEach(function(e, i){
        // e是数组值，i是下标
        map[e] = i;
    })
    console.log(map)
    // console.log(123)
    for(let i = 0; i < nums.length; i++){
        let j = map[target - nums[i]];
        if(j && j !== i){
            return [i, j];
        }
    }
    
}; 
twoSum([2,7,11,15],9)
