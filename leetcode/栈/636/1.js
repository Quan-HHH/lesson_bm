var exclusiveTime = function(n, logs) {
    const res = new Array(n).fill(0);
    const stack = [];
    for(log of logs) {
        // console.log(log)
        if(log.includes('start')) {
            stack.push(parseInt(log.charAt(0)));
            res[parseInt(log.charAt(0))] = parseInt(log.length - 1)
        }
    }
};

exclusiveTime(2,["0:start:0",
"1:start:2",
"1:end:5",
"0:end:6"])