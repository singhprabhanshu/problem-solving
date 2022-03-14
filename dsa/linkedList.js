class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    };

    add(element) {
        const node = new Node(element);
        if (this.head === null) {
            this.head = node;
            
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            };
            curr.next = node;
        }

        this.size++;
        
    };

    insertAt(element, index) {
        if (index > 0 && index > this.size) {
            return false;
        } else {
            let curr;
            let prev;
            let it = 0;
            const node = new Node(element);
            if (index === 0) {
                node.next = this.head;
                this.head = node;
                
            } else {
                curr = this.head;
                while (it < index) {
                    
                    it++;
                    prev = curr;
                    curr = curr.next;
                    
                };
                node.next = curr;
                prev.next = node;
                
            }
            this.size++;
        }
    };
    removeFrom(index) {
        if (index > 0 && index > this.size) {
            return false;
        } else {
            let curr = this.head;;
            let prev;
            let it = 0;
            if (index === 0) {
                
                this.head = curr.next;
            } else {
                while (it < index) {
                    prev = curr;
                    curr = curr.next;
                    it++;
                }
            }
            prev.next = curr.next;
            this.size--;

        }
    };
    removeElement(element) {
        let curr = this.head;
        let prev = null;
        while (curr !== null) {
            if (curr.element === element) {
                if (prev === null) {
                    
                    this.head = curr.next;
                } else {
                    prev.next = curr.next;
                };
                this.size--;
                return curr.element;
            };
            prev = curr;
            curr = curr.next;
        };
        return -1;
    };

    reverse () {
        let curr = this.head;
        let prev = null;
        let count = 0;
        console.log(curr, 'head');
        let c = true;
        let next ;
        while (curr !== null) {
            
            next = curr.next; // temp for all the next item in object

            curr.next = prev; // making all the reverse here by assigning current next step to be all previous
            prev = curr; // new previous that should which is the reverse one;
            curr = next; // rest of the part of linked list, not containing previous part
           
        };
        this.head = prev;
        console.log('reverse', this.head);

    };



    // helper method;
    printList() {
        let curr = this.head;
        let arr = [];
        while(curr) {
            arr.push(curr.element);
            curr = curr.next;
        };
        console.log(arr);
        return arr;
    };
    isEmpty () {
        console.log(this.size === 0);
        return this.size === 0;
    };
    listLength () {
        console.log(this.size);
        return this.size;
    };
    indexOf(element) {
        let curr = this.head;
        
        let index = 0;
        while(curr !== null) {
            
            if (curr.element === element) {
                return index;
            };
            index++;
            curr = curr.next;
        };
        return -1;
    }
};


let l1 = new LinkedList();
l1.isEmpty();
l1.add(10);
l1.add(20);
l1.insertAt(30, 1);
// l1.removeFrom(1);
// l1.removeElement(20);
const index = l1.indexOf(30);
console.log(index, 'index');

l1.reverse();

l1.printList();