var findBottomLeftValue = function(root) {
    let queue = [root];
    let rowNodes;
    while(queue.length) {
        rowNodes = queue.splice(0);
        for(node of rowNodes) {
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return rowNodes[0].val;
};
