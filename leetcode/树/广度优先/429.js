var levelOrder = function(root) {
    if(!root) return [];
    let queue = [ root ];
    let res = [];
    while(queue.length) {
        let cell = [];
        let rowNodes = queue.splice(0);
        for(node of rowNodes) {
            cell.push(node.val)
            if(node.children) {
                for(let child of node.children) {
                    queue.push(child);
                }
            }
        }
        res.push(cell);
    }
    return res;
};