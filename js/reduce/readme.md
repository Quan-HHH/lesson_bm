手写reduce
如果没有给initial_val 那数组的第一项 就是initial_val
否则 initial_val 开始 + arr[0]
arguments  类数组  ->  真正的数组  Array.from

手写代码方法:
    1. 原理
    2. 从返回值入手 由结果向前推
    3. 分布式写法
    4. 多定义中间变量

1. 语法 arr.reduce(callback,[initialValue])
- 为数组中的每一个元素执行回调
- callback的四个参数
    1. previousValue 上一次调用回调的返回值, 或是提供的初始值
    2. currentValue 数组中当前被处理的元素
    3. index 当前元素在数组中的索引
    4. array 调用reduce的数组

2. 实例解析 initialValue 参数 2.js

3. 一些个高级用法 3.js
