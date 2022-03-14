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


 /*
    It consists of two part. 
    dividing the linked to left and right half which continues until single value in linked list
    merging the left and right half in the sorting way.
 */
const mergeShortedList = (left, right) => {
    if (left === null && right === null) {
        return null;
    } else if (left === null) {
        return right;
    } else if (right === null) {
        return left;
    }
    let curr = new ListNode(-1);
    let dummy = curr;
    while(left && right) {
        if (left.val < right.val) {
            curr.next = left;
            left = left.next;
        } else {
            curr.next = right;
            right = right.next;
        };
        curr = curr.next;
    };
    
    curr.next = left || right;
    return dummy.next;
    
}
var sortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    
    let prev = head;
    let slow = head;
    let fast = head;
    while(fast && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    };
    prev.next = null;
    let left = sortList(head);
    let right = sortList(slow);
    return mergeShortedList(left, right);
    
    
    
};