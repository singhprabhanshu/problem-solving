// simple linked list implementation

class Node {
    constructor(element) {
        this.element =  element;
        this.next = null;
    };
};


class CircularSimpleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    unshift(element) {
        const newNode = new Node(element);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            
            newNode.next = this.head;
            this.head = newNode;
        }
        this.tail.next = newNode;
        this.size++;
    };

    shift () {
        if (!this.head) {
            return false;
        }
        let curr = this.head;
        let newHeadNode
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            newHeadNode = curr.next;
            this.head = newHeadNode;
            this.tail.next = newHeadNode;
        };
        
        this.size--;

    };

    getElementAt(index) {
        if (index >=0 && index < this.size) {
            let it = 0;
            let curr = this.head;
            while(it < index) {
                curr = curr.next;
            };
            return curr;

        };
        return undefined;
    };

    insertAt(position, element) {
        if (position < 0 || position > this.size) {
            return false;
        };
        let newNode = new Node();
        if (position === 0) {
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.tail.next = newNode;
            }
            
        } else if ( position === this.size) {
            this.tail.next = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            let prev = this.getElementAt(position-1);

            newNode.next = prev.next;
            prev.next = newNode;


        };

        this.size++;
        return true;
        
    }

    printList () {
        let list = [];
        
        if (this.size > 0) {
            let it = 0;
            let curr = this.head;
            while(it < this.size) {
                it++;
                list.push(curr.element);
                curr = curr.next;

            }
        };
        return list;
    }


};

let l1 = new CircularSimpleLinkedList();
l1.unshift(2);
l1.unshift(3);
l1.unshift(4);
l1.shift();

let list = l1.printList();
console.log(list);