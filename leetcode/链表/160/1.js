var getIntersectionNode = function(headA, headB) {
    let curA = headA, curB = headB;
    while(curA) {
        curA.flag = true;
        curA = curA.next;
    }
    while(curB) {
        if(curB.flag === true) return curB;
        curB = curB.next;
    }
    return null;
};