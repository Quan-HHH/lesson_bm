var orangesRotting = function(grid) {
    // 上下左右四个方向
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let queue = [];
    let time = -1;
    // 找到所有腐烂的橘子
    for(let i = 0; i < grid.length; i ++) {
        for(let j = 0; j < grid[0].length; j ++) {
            if(grid[i][j] === 2) {
                queue.push({x: i, y: j})
            }
        }
    }
    while(queue.length) {
        time++;
        // 每分钟 找到当前所有的坏橘子
        let rowNodes = queue.splice(0);
        // 所有当前的坏橘子 4个方向变坏
        for(let { x, y } of rowNodes) {// 循环的时候解构出来
            for(let direct of directions) {
                let x_new = x + direct[0];
                let y_new = y + direct[1];
                // 矩阵合法 并且是新鲜的橘子
                if(0 <= x_new && x_new < grid.length && 0 <= y_new && y_new <= grid[0].length && grid[x_new][y_new] === 1) {
                    grid[x_new][y_new] = 2;
                    queue.push({x: x_new, y: y_new})
                }
            }
        }
    }
    for(let row of grid) {
        if (row.includes(1)) return -1;
    }
    return Math.max(0, time);
};