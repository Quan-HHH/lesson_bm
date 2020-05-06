tsc
tsc --init

ts中的内置类型有：
- boolean
- number
- string
- 数组: 每一项类型都一样
``` js
let list = [1, 2, 3, 4];
```
``` ts
let list1: number[] = [1, 2, 3, 4];
```
- 元组
``` ts
let list1: [string, number] = ['1', 2];
```
- 枚举
``` ts
enum Color {Red, Green, Blue} 
//Color是一个类型，ts会给每一个元素一个编号，相当于{Red=0, Green=1, Blue=2}
let color: Color = Color.Green
```
- any: 任意类型
- void: 空
- null
``` ts
let b: null = null
```
- undefined
- never: 永远不存在的值
``` ts
function test(): never{
    while(true) {
    }
}
```
- object