var findCircleNum = function(M) {
    let N = M[0].length;
    let res = N;
    let friend = []
    for(let i = 0; i < N; i ++) {
        friend[i] = i;
    }
    function union(s, d) {
        for(let i = 0; i < N; i ++) {
            if(friend[i] == s) friend[i] = d;
        }
    }
    
    for(let i = 0; i < N; i ++) {
        for(let j = i + 1; j < N; j ++) {
            if(M[i][j] === 1 && friend[i] !== friend[j]) {
                res--;
                union(friend[i], friend[j]);
            }
        }
    }
    console.log(res)
    return res;
};


findCircleNum([[1,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,1,1,0,0,0,0],[0,0,0,1,0,1,0,0,0,0,1,0,0,0,0],[0,0,0,1,0,0,1,0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,1,0],[0,0,0,0,1,0,0,0,0,1,0,1,0,0,1],[0,0,0,0,1,1,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,1]])


var findCircleNum = function(M) {
    let N = M[0].length;
    let res = N;
    let friend = []
    for(let i = 0; i < N; i ++) {
        friend[i] = i;
    }
    function union(s, j) {
        friend[j] = s;
    }
    for(let i = 0; i < N; i ++) {
        for(let j = i + 1; j < N; j ++) {
            if(M[i][j] === 1 && friend[i] !== friend[j]) {
                res--;
                union(friend[i], j);
            }
        }
    }
    
    return res;
};


