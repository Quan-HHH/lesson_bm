var a = "mitcmu111"
var b = "mta111cnu"
var n = 6, m = 6; //两个字符串的长度 
// 回溯
var minDist = Infinity; // JS中的给无穷大
function lwstBT(i, j, dist) {
    // 退出条件
    if(i == n || j == m) {
        if (i < n) dist += n - i;
        if (j < m) dist += m - j;
        if (dist < minDist) minDist = dist;
        
        return ;
    }
    // 穷举 列出所有情况
    if(a[i] == b[j]) {
        lwstBT(i + 1, j + 1, dist)
    } else {
        lwstBT(i + 1, j, dist + 1) // 删除a[i]  或者 b[j]前添加一个字符
        //  增 删 改
        lwstBT(i, j + 1, dist + 1)
        lwstBT(i + 1, j + 1, dist + 1)
    }
}
lwstBT(0, 0, 0)
console.log(minDist)