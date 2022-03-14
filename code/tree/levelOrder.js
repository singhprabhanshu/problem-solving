/*
    create empty queue
    Initialize tempNode to root;
    loop while tempNode not null;
        push the val in tempNode to levelorder and check for left and right node
        if left and right node available, push the nodes to queue;
        remove the node whose val is pushed from the queue.
    return the level order;
*/





// const levelOrder = (root) => {
//     let tempNode = root;
//     const queue = [];
//     const levelOrder = [];
//     while (tempNode) {
//         levelOrder.push(tempNode.val);
//         if (tempNode.left !== null) {
//             queue.push(tempNode.left);
//         }

//         if (tempNode.right !== null) {
//             queue.push(tempNode.right);
//         }
//         tempNode = queue.shift();

//     };

//     return levelOrder;

// };


const levelOrder = (root) => {
    let level = [root];
    const ans = [];
    while(root && level.length !== 0) {
        currentLevel = []; // getting the level node in currentLevel
        nextLevel = []; // getting next level nodes which is assigned to level by end;
        for (let i in level) {
            currentLevel.push(level[i].val);
            if (level[i].left) {
                nextLevel.push(level[i].left);
            };
            if (level[i].right) {
                nextLevel.push(level[i].right);
            };
        };
        ans.push(currentLevel);
        level = nextLevel;

    };
    return ans;
}


const root = {val: 1, left: { val: 2, left: { val: 3, left: null, right: null}, right: null}, right: { val: 6, left:{ val: 7, left: null, right: null}, right: null }};
const check = levelOrder(root);
console.log(check);