var deleteDuplicates = function(head) {
    if(!head) return head;
    let temp = new ListNode();
    temp.next = head;
    let current = temp;
    while(current.next && current.next.next) {
        // 有重复节点了 但不知道有几个 要一个一个比对下去
        if(current.next.val === current.next.next.val) {
            let val = current.next.val;
            while(current.next && current.next.val === val) {
                current.next = current.next.next;
            }
        } else {
            current = current.next;
        }
    }
    return temp.next;
};