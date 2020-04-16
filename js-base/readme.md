## 类型（六种）
### 基本数据类型
Null 
Undefined
String
Nunber
bool

### 复杂数据(引用)类型
Object(相当于一个大的分类，下面还可以细分)
- array
- function
- object(大写的Object是类型， 小写的是对象字面量)
- reg(正则表达式)
- date

`运行时` 决定，变量类型

```js
var b = [];
function c() {}
var d = { a:1, b:2} //对象字面量
var e = /[0-9]/
var f = Date.now()
```

## 定义变量的关键词
- var: es5

可以定义块级变量
- let  可变，被认为是更完美的var
- const  不可变

## ==与===

### ==
比较值是否相等，会进行类型转换

### ===
比较值是否相等，不会进行类型转换