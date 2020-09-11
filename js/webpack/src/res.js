(function(obj) {
    //  从入口文件开始运行 执行每个文件的内容
    let module = {};
    let cache = {}
    function __webpack__require(params) {
        console.log(params)   // ./math.js
        if(cache[params]) return cache[params];
        obj[params](module, __webpack__require);
        console.log(module);
        cache[params] = module.exports;
        return module.exports;
    }
    obj['./index.js'](module, __webpack__require);
})({
    './index.js': function(module, __webpack__require) {
        // const sum = (a, b) => a + b;
        // import sum from './math.js'变成__webpack__require
        const sum = __webpack__require('./math.js');
        console.log(sum(10, 20))
    },
    './math.js': function(module, __webpack__require) {
        module.exports = (a, b) => a + b
    }
})