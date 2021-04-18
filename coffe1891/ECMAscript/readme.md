- JavaScript是ECMAScript规范的一种实现

## Array.prototype.includes
- 与indexof的不同之处在于，includes可以查找NaN，而indexof不行
```js
let arr = [1, 2, 3, NaN];
arr.includes(NaN)  // true
arr.indexOf(NaN) // -1
```

## 指数函数的中缀表示法
- 用 ** 来表示Math.pow
```js
let a = 2 ** 3  // 2的三次方
let b = 2
b **= 3 // b = b ** 3 也就是b的三次方 也是8
```

## Object.values()返回value数组 / Object.entries返回[key, value]数组

## 字符串追加（第二个参数可选）
- String.prototype.padStart(targetLength,[padString])
向左追加
- String.prototype.padEnd(targetLength,[padString])
向右追加

## Object.getOwnPropertyDescriptors
- 返回一指定对象自己所有的属性内容，并且属性内容只是自身直接定义的，而不是从object的原型继承而来的

## 异步函数

