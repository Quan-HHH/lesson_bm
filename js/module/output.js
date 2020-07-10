(function () {
    'use strict';

    const add = (a, b) => {
        return a + b;
    };

    // 只用到了add 为了优化代码体积 可以直接删除divide
    // 删除不是自己手动删嗷 会有工具来删
    // rollup(打包工具)
    console.log(add(1, 2));

}());
