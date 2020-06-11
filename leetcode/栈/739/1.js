var dailyTemperatures = function(T) {
    let res = new Array(T.length).fill(0);
    let stack = [];
    for(let i = 0; i < T.length; i++) {
        while(stack.length && T[i] >= T[stack[stack.length - 1]]) {
            res[stack[stack.length - 1]] = i - stack[stack.length - 1];
            stack.pop();
        }
        stack.push(i);
    }
    return res;
};

  
console.log(dailyTemperatures([73, 74, 75, 71, 9, 72, 76, 73]))