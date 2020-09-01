var rightSideView = function(root) {
    let queue = [root];
    let res = [];
    while(queue.length) {
        let rowNodes = queue.splice(0);
        let len = rowNodes.length;
        res.push(rowNodes[len - 1].val);
        for(let node of rowNodes) {
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    console.log(res)
};