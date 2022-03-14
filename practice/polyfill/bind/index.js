let obj = {
    firstName: 'Prabhanshu',
    lastName: "Singh"
};

function parent (a, b, c) {
    
    return `my name is ${this.firstName} ${this.lastName} ${a} ${b} ${c}`;
};

Function.prototype.mybind = function (...args) {
    let newThis = this; // this refers to prent method because parent.mybind takes parent as this.
    let restArg = args.slice(1);
    return function (...arg2) {
        return newThis.apply(args[0], [...restArg, ...arg2]);
        
    };
};


const myParent = parent.mybind(obj, 'x');
const check = myParent('y','z');

console.log(check);

// myParent('x','y','z');

1234
1234
1234
1234