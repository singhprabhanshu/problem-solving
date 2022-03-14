/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < k) {
            count++;
            let s = nums[i];
            for (let j = i+1; j < nums.length; j++ ) {
                if ((s * nums[j]) < k) {
                    s *= nums[j];
                    count++;
                } else {
                    break;
                }
            }
        };
        
    };
    return count;
};


const nums = [10, 5, 2, 6];
const k = 100;
const check = numSubarrayProductLessThanK(nums, k);
console.log(check);