/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// n: 链表长度
// 时间复杂度: O(n) 空间复杂度: O(n)
var oddEvenList = function(head) {
    let l1 = {val: null, next: null}, l1Current = l1,
        l2 = {val: null, next: null}, l2Current = l2,
        i = 1,
        current = head;
    while(current) {
        // console.log(current, l1Current, l2Current);
        if(i % 2 == 1) {
            // 进奇链表
            l1Current.next = current;
            l1Current = l1Current.next;
        } else {
            l2Current.next = current;
            l2Current = l2Current.next;
        }
        i ++;
        current = current.next;
    }

    if(i % 2 !== 0) {
        l1Current.next = null;
    } else {
        l2Current.next = null;
    }
    l1Current.next = l2.next;
    // l2Current.next = NULL;
    return l1.next;
};