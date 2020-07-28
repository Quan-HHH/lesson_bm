var listOfDepth = function(tree) {
    if(!tree) return [];
    let queue = [tree];
    let res = [];
    while(queue.length) {
        let linkList = new ListNode();
        let rowNodes = queue.splice(0); // 把queue赋给rowNodes后清空queue
        for(let node of rowNodes) {
            let item = new ListNode(node.val)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            p.next = item;
            p = p.next;
        }
        res.push(linkList.next);
    }
    return res;
};