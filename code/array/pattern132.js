/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    const n = nums.length;
    if (n < 3) {
        return false;
    }
    const minVal = [];
    minVal[0] = nums[0];
    for (let i = 1; i < n; i++) {
        minVal[i] = Math.min(nums[i], minVal[i-1]);
    };
    const stack = [];
    for (let j = n - 1 ; j >= 0; j--) {
        
        while(stack.length !== 0 && nums[stack[stack.length-1]] < nums[j]) {
            
            if (nums[stack[stack.length-1]] > minVal[j-1]) {
                return true;
            };
            stack.pop();
        };
        stack.push(j);
    };
    return false;
};


console.log(find132pattern([3,1,4,2]));