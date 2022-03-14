// Definations

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.


// solution brutforce
// time complexity = O(n^3)
// space complexity = 


// const maxSubArraySum = (num) => {
//     maxSum = Number.MIN_VALUE;
//     n = num.length;
//     for (let left = 0; left < n; left++) {
//         for (let right = left; right < n; right++) {
//             let windowSum = 0;
//             for (let i = left; i <= right; i++) {
//                 windowSum += num[i];
//             };
//             maxSum = Math.max(maxSum, windowSum);
//         };
//     };
//     return maxSum;
// };


// little optimized solution, dynamic programming
// time complexity = O(n^2)
// space complexity = 


// const maxSubArraySum = (num) => {
//     let maxSum = Number.MIN_VALUE;
//     let n = num.length;
//     for (let left = 0; left < n; left++) {
//         let windowSum = 0; // previous window sum (memoization)
//         for (let right = left; right < n; right++) {
//             windowSum += num[right];
//             maxSum = Math.max(maxSum, windowSum);
//         };
//     };
//     return maxSum;
// };



// optimized solution (dynamic programming)
// time complexity = O(n)
// space complexity = O(1)
// maxSum: It gives the maximum sum among subarrays.
// maxEndingHere: it is max sum at that point , it can be sum of previous points and pointed index or pointed index Alone


const maxSubArraySum = (num) => {
    let maxSum = num[0];
    let maxEndingHere = num[0];
    for (let i = 1; i < num.length; i++) {
        
        maxEndingHere = Math.max(maxEndingHere + num[i], num[i]);
        maxSum = Math.max(maxSum, maxEndingHere);
        
    };
    return maxSum;
};

let num = [-2,1,-3,4,-1,2,1,-5,4]

let sum = maxSubArraySum(num)
console.log(sum);