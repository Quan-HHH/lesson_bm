广度优先就是一层一层地遍历
从root节点开始 分别遍历每一层的.left 和 .right 节点
```js
let queue = [root];
let res = [];
while(queue.length) {
    let rowNodes = queue.splice(0); // 把queue拷贝到rowNodes后清空queue
    for(let node of rowNodes) {
        res.push(node.val);
        // 遍历子节点
        ...
        ...
    }
}
```
