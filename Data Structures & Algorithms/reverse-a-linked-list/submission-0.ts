// class ListNode {
//     val: number;
//     next: ListNode | null;

//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
    reverseList(head: ListNode | null): ListNode | null {
        let prev: ListNode | null = null;
        let current: ListNode | null = head;

        while (current !== null) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }
}
