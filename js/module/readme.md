## commonJS
导出:
module.export
module.export = function() {}  导出一个方法
module.export = {}  导出一个对象
导入:
require

1. commonJS一定要代码运行起来才知道引入了哪些模块
2. 可以出现在逻辑分支里面


## es-module
1. import/export 不论写在哪 都会被提前执行
2. 在代码静态分析(不用执行代码), 就可以分析出引用了哪些模块

AMD
CMD
UMD: 统一模块化方案
```JS
(function() {
    // 
}())
```
commonJS
es-module