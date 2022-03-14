// Increasing Triplet Subsequence
// Russian Doll Envelopes
// Maximum Length of Pair Chain
// Number of Longest Increasing Subsequence
// Minimum ASCII Delete Sum for Two Strings

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Algorithm:
 *  To get longest subsequence, we need to curent element can be appended in the sub array or not.
 *  To get appended: prev < current
 *  At each index, let i, we will find , what will be the max length of subarray we can make till that index.
 *  At each index, it should have default length 1 as it takes itself.
 *  At each index of j, we will find out whether the value in index i of len array is max or value at index j + 1 is max. we will insert max .
 *  Find the max of the array to return.
 * 
 *  Note: here we will use tabulation method.
 *  
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let len = [];
    for (let i = 0; i < nums.length; i++) {
        len[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                len[i] = Math.max(len[j]+1, len[i]);
            };
        };
    };
    return Math.max(...len);
    
};