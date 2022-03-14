/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const twoSum = (nums, x, i) => {
    let j = nums.length - 1;
    const res = [];
    while(i < j) {
        if (nums[i] + nums[j] < x) {
            i++;
        } else if (nums[i] + nums[j] > x) {
            j--;
        } else {
            // console.log(nums[i], nums[j]);
            res.push([-x, nums[i], nums[j]]);
            while (nums[i] === nums[i + 1]) i++;
            while (nums[j] === nums[j - 1]) j--;
            i++;
            j--;
        }
    };
    return res;
}
var threeSum = function(nums) {
    let res = [];
    if (nums.length < 3) {
        return res;
    }
    nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const tempRes = twoSum(nums, -nums[i], i+1);
        
        if (tempRes.length !== 0) {
            res.push(...tempRes);
            
        }  
        
    };
    return res;
};

[-5, 1, 1, 2, 3, 4, 6 ]
const check = threeSum([5, -3, -1, -1, -2, -4]);
console.log(check, 'check');