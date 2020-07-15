var removeNthFromEnd = function(head, n) {
    let fast = head;
    while(n++ > 0) {
        fast = fast.next;
    }
    if(!fast) return head.next;
    let slow = head;
    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};