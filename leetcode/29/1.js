var spiralOrder = function(matrix) {
    if(matrix.length === 0) return [];
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
    let res = [];
    while(top <= bottom && left <= right) {
        for(let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;
        for(let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;
        if(right < left || top > bottom) break;
        for(let i = right; i >= left; i--) {
            res.push(matrix[bottom][i]);
        }
        bottom--;
        for(let i = bottom; i >= top; i--) {
            res.push(matrix[i][left])
        }
        left++;
    }
    return res;
};
const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(matrix))