/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    nums.sort((a, b) => a -b);
    
    const s = new Map();
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ( nums[j] - nums[i] === k) {
                if (s.has(nums[j])) {
                    console.log('check1')
                    break;
                }
                console.log('check')
                count++;
                s.set(nums[j], nums[i]);
                break;
            } else if ( nums[j] - nums[i] > k) {
                break;
            };
        };
    };
    console.log(s);
    return count;
};


const nums = [0,0,0];
const k = 0;

const check = findPairs(nums, k);

console.log(check);