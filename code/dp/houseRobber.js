/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.


    Robber is supposed to N houses in a row. He is not allowed to rob two consecutive houses because of police alarm.
    DP logic:
    1. We will create robber’s cumulative sum array that will tell robber’s cumulative sum at ith index of house.
    2. Robber will rob the house in such a way that he could have maximum money at that index as compare to previous ones.
    3. He will rob the current house if the sum of current house money (i)th and cumulative sum he has at (i -           2)th house is greater than the cumulative sum he has at (i -1)th house.
    4. The sum from the previous stage computation is added to current index of robber’s cumulative sum array.
    5. The last index of robber’s cumulative sum array will give us the maximum money he could rob.

    Time complexity: O(N) Space Complexity: O(N)

    Note: Adjacent house is not allowed to rob because of police alarm.
*/


const houseRobber = (nums) => {
    let len = nums.length;
    if (len === 0 ) return 0;
    else if (len === 1) return nums[0];
    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i - 1]);
    };
    return dp[dp.length - 1];
}


// constant space

const houseRob = (nums) => {
    let curr = 0, prev = 0; // current = i -1 and prev = i-2
    for (let i = 0; i < nums.length; i++) {
        let temp = curr;
        curr = Math.max(curr, prev + nums[i]);
        prev = temp;
    };
    return curr;
}


// const check = houseRob([1, 9, 5, 7, 2]);
const check = houseRob([]);
console.log(check);