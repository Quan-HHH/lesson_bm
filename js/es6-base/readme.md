## 类数组对象
类似数组的对象
- 特征
  1. 可以像数组一样，用数组的下标[i]取值
  2. length
  3. 不全是数组，比如 arguments 还有querySelectorAll选出的结果，它们不能使用数组的方法

要用怎么办？
1. 借用一下
argumens.forEach拿不到，forEach在哪？
在Array.prototype.forEach

2. array.from()
从一个类似数组对象创建一个新的数组
