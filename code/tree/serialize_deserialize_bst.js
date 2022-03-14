/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root === null) {
        return "#";
    }
    
    let result = '';
    result += root.val;
    result += ',' + serialize(root.left);
    result += ',' + serialize(root.right);
    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let i = [0];
    const nums = data.split(',');
    
    return bfs(nums, i);
};

const bfs = (nums, i) => {
    let number = nums[i[0]];
    i[0]++;
    if (number === '#') {
        return null;
    };
    const root = new TreeNode(number);
    
    root.left = bfs(nums, i);
    
    root.right = bfs(nums, i);
    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */