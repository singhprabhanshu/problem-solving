class Node {
    constructor(element) {
        this.previous = null,
        this.element = element;
        this.next = null;
    }
};

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };


    addToLast(element) {
        let node = new Node(element);
        if (this.head === null ) {
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        };
        this.size++;
        console.log('tail', this.tail);
    }

    insertAt(position, element) {
        if (position < 0 || position > this.size) {
            return false;
        } else {
            let newNode = new Node(element);
            let curr = this.head;
            let prev;

            
            if (position === 0) {
                if (!this.head) {
                    this.head = newNode;
                    this.tail = newNode;
                } else {
                    curr.previous = newNode;
                    newNode.next = this.head;
                    newNode.prev = null;
                    this.head = newNode;
                }
                

            } else if (position === this.size) {
                let newTail = newNode;
                newTail.previous = this.tail;
                this.tail.next = newTail;
                this.tail = newNode;
            } else {
                let it = 0;
                while(it < position) {
                    prev = curr;
                    curr = curr.next;
                    it++;
                    
                };
                newNode.next = curr;
                newNode.previous = prev;
                prev.next = newNode;
                curr.previous = newNode;
            }
        };
        this.size++;


    };

    shift () {
        
        if (!this.head) {
            return false;
        } 
           
        let curr = this.head;
        let nextHead = this.head.next;
        
        // this.head = nextHead;

        if (this.head !== this.tail) {
            nextHead.previous = null;
            curr.next = null;
        } else {
            this.tail = null;
        };
        this.head = nextHead;
        this.size--;
        return curr;
       


    };
    unshift(element) {
        let newNode = new Node(element);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        };

        let curr = this.head;
        curr.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;

        this.size++;
    };

    removeAt(position) {
        if (position < 0 || position >= this.size) {
            return false;
        };

        if (!this.head) {
            return -1;
        };

        
        let removedNode;
        if (this.head === this.tail) {
            removedNode = this.head;
            this.head = null;
            this.tail = null;
            
        } else if (position == 0 ) {
            
            let newHead = this.head.next;
            this.head.next = null;
            removedNode = this.head;
            newHead.previous = null;
            this.head = newHead;
        } else {
            let it = 0;
            let prev;
            let curr = this.head;
            
            while (it < position) {
                prev = curr;
                curr = curr.next;
                it++;
            };
            removedNode = curr;
            if (curr = this.tail) {
                prev.next = null;
                this.tail = prev;
            } else {
                let afterNode = curr.next;
                prev.next = afterNode;
                afterNode.previous = prev;
            }
        };

        this.size--;
        return removedNode;

    }


    // helper functions

    printList () {
        let curr = this.head;
        let list  = [];
        while(curr) {
            list.push(curr.element);
            curr = curr.next;
        };
        return list;
    }
};

const l1 = new DoubleLinkedList();
// l1.insertAt(0, 4);
// l1.insertAt(1, 5);
// l1.unshift(2);
// const list = l1.printList();
// console.log(list);

l1.insertAt(0, 2);
l1.insertAt(1, 5);
let check = l1.removeAt(1);
const list = l1.printList();
console.log(check, list);