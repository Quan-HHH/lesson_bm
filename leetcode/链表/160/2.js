var getIntersectionNode = function(headA, headB) {
    let curA = headA, curB = headB;
    while(curA !== curB) {
        curA = (curA ? curA.next:headB)
        curB = (curB ? curB.next:headA)
    }
    return curA;
};