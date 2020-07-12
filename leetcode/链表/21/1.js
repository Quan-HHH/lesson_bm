// 归并两个有序链表
var mergeTwoLists = function(l1, l2) {
    let pre = new ListNode();
    const preHead = pre;
    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val) {
            pre.next = l1;
            l1 = l1.next;
        } else {
            pre.next = l2;
            l2 = l2.next;
        }
        pre = pre.next;
    }
    pre.next = (l1 === null) ? l2 : l1;
    return preHead.next;
};