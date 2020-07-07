var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let res = [];
    let i = 1;
    while(queue.length) {
        let rowNodes = queue.splice(0);
        let cell = [];
        for(let node of rowNodes) {
            cell.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        if(i % 2 !== 0) {
            res.push(cell);
        } else {
            res.push(cell.reverse());
        }
    }
    return res;
};