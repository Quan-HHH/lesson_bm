var hasCycle = function(head) {
    let fastP = head, slowP = head;
    while(fastP) {
        if(!fastP.next) return false;
        fastP = fastP.next.next;
        slowP = slowP.next;
        if(fastP == slowP) return true;
    }
    return false;
};