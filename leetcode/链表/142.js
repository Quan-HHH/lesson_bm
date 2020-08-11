var detectCycle = function(head) {
    let node = head;
    let map = new Map();
    while(node) {
        if(map.has(node)) {
            return node;
        }
        map.set(node, 0);
        node = node.next;
    }
    return null;
};