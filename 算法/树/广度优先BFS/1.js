var levelOrder = function (root) {
    if(!root) return [];
    let queue = [root];
    let res = [];
    while (queue.length) {
        let rowNodes = queue.splice(0)  // 把queue拷贝到rowNodes上 然后清空queue
        // 拿到上一层的所有元素 遍历上一层的所有元素 取出所有 .left 和 .right
        for (let node of rowNodes) {
            res.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return res;
};