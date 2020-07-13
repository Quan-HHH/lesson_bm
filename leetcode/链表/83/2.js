// 删除重复节点 递归
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    head.next = deleteDuplicates(head.next);
    return (head.val === head.next.val) ? head.next.next : head.next;
};