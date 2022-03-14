class PushPop {
    constructor(arr) {
        this.array = arr;
    };
    pushA(ele) {
        this.array.unshift(ele);
    };

    pushB(ele) {
        this.array.push(ele);
    };

    popA() {
        let poped = this.array.shift();
        return poped;
    };

    popB() {
        let poped = this.array.pop();
        return poped;
    }
};


const pp = new PushPop([1, 2, 3, 4]);
const push1 = pp.pushA(21);
const push2 = pp.pushA(22);
const push3 = pp.pushB(24);

const pop1 = pp.popA();
const pop2 = pp.popB();
const pop3 = pp.popA();

console.log(pop1, pop2, pop3);