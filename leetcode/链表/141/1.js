var hasCycle = function(head) {
    let map = new Map();
    while(head) {
        map.set(head, 1);
        if(map.has(head)) {
            return true;
        }
        head = head.next;
    }
    return false;
};