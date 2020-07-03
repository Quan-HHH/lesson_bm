function reduce(arr, reduceCallback, initailValue) {
    if(!Array.isArray(arr) || !arr.length || typeof reduceCallback !== 'function') {
        return [];
    } else {
        // 1. initailValue false  少执行一次
        let hasInitialValue = initailValue !== undefined;
        let value;
        for() {
            reduceCallback()
        }
        return value;
    }
}

reduce([1,2,3,4], function(pre, cur, index, ) {

})