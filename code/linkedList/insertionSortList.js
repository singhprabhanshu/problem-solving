/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * Alog and its detail explain
 * 
 * head: 1, 3, 6, 7, 4, 8, 10
 * dummy head: -1, 1, 3, 6, 7, 4, 8, 10
 *                    PI       TBI
 * preinsert = 1 in dummy head
 * toBeInserted = 4 in head
 * 
 * In the head:
 *      curr.next = toBeInserted.next; 
 *      remove 4 from that place 
 *      plug 7 next to 8 that means 4 is remove but we have copy of 4 in toBe inserted variable
 *      when head is updated it is reflected in dummyHead as it is build to main head
 * 
 * In the dummy Head: 
 *          toBeInserted.next = preInsert.next;
 *             PI.next = 6 , 7, 8, 10
 *             TBI (4).next = 6, 7, 8, 10
 *      remove 4 from that place and after 3;
 *          preInsert.next = toBeInserted;
 *              3.next = 4, 6, 7, 8, 10
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const insertionSortList = (head) => {
    if (head == null || head.next === null) {
        return head;
    }
    let dummyHead = new ListNode(-1);
    let curr = head;
    dummyHead.next = head;
    while(curr !== null && curr.next !== null) {
        if (curr.val <= curr.next.val ) {
            curr = curr.next;
        } else {
            let toBeInserted = curr.next;
            let preInsert = dummyHead;
            
            while(preInsert.next.val < toBeInserted.val) {
                preInsert = preInsert.next;
            };
            curr.next = toBeInserted.next; // in curr that is in head
            toBeInserted.next = preInsert.next;  // in curr that is in head
            preInsert.next = toBeInserted;
            
        }
    };
    return dummyHead.next;
};


const head = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 6,
            next: {
                val: 7,
                next: {
                    val: 4,
                    next: {
                        val: 8, 
                        next: {
                            val: 10,
                            next: null
                        }
                    }
                }
            }
        }
    }
};

console.log(insertionSortList(head));