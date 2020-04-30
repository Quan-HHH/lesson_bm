// var climbStairs = function(n) {
// //爬楼梯
//     if(n === 1){
//         return 1;
//     }else if(n === 2){
//         return 2;
//     }else{
//         return climbStairs(n-1)+climbStairs(n-2);
//     }
// };

// console.log(climbStairs(4));
// 以上代码 时间过长
/**
 * @author qjx
 * @date 2020-04-14
 * @func 爬楼梯算法
 * @param {@type number} n 
 */
function climbStairs(n) {
    if(n >= 40) throw new Error('内存会溢出')
    if (n == 1) return 1;
    if (n == 2) return 2;
    return climbStairs(n-1) + climbStairs(n-2);
}   