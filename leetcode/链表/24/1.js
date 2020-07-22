var swapPairs = function(head) {
    let dummyhead = new ListNode();
    dummyhead.next = head;
    let prev = dummyhead;
    let first = head;
    while(first && first.next) {
        let second = first.next;
        let next = second.next;

        second.next = first;
        first.next = next;
        prev.next = scond;

        prev = first;
        first = first.next;
        
    }
    return dummyhead.next;
};