// class ListNode {
//     val: any;
//     next: ListNode | null;

//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        const dummy = new ListNode();
        let tail = dummy;

        let list1Current: ListNode | null = list1;
        let list2Current: ListNode | null = list2;

        while (!!list1Current || !!list2Current) {
            if (!list1Current) {
                tail.next = list2Current;
                list2Current = list2Current.next;
            } else if (!list2Current) {
                tail.next = list1Current;
                list1Current = list1Current.next;
            } else {
                if (list1Current.val <= list2Current.val) {
                    tail.next = list1Current;
                    list1Current = list1Current.next;
                } else {
                    tail.next = list2Current;
                    list2Current = list2Current.next;
                }
            }

            tail = tail.next;
        }

        return dummy.next;
    }
}
