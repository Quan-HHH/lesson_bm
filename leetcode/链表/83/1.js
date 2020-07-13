// 删除重复节点
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    let cur = head;
    while(cur.next) {
        if(cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};