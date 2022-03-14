/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false;
    } else if (p.val !== q.val) {
        return false;
    }
    const left = isSameTree(p.left, q.left); // return from upper to lower stack
    const right = isSameTree(p.right, q.right); // return from upper to lower stack
    
    return left && right; 
};

const p = { val: 1, left: { val: 2, left: null, right: null}, right: { val: 3, left: null, right: null}}
const q =  { val: 1, left: { val: 2, left: null, right: null}, right: { val: 3, left: null, right: null}}
const check = isSameTree(p, q);
console.log(check);
