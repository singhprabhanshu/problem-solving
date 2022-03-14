/*
    Maximum and minimum of an array using minimum number of comparisons
    we are checking even or odd just for make sure we have pairs after 1st assignment.
    eg: 
        nums = [1, 5, 7, 2, 5, 9, 7]; // it is odd;
        mx = mn = 1;
        1. compare 5 and 7
            mx = 7 , mn = 5
        2. compare 2 and 5;
            mx = 7, mn = 2
        3. compare 9 and 7
            mx = 9 mn = 2
*/

const findMaxMin = (nums) => {
    let mx, mn, i;
    if (nums.length % 2 === 0) {
        mx = Math.max(nums[0], nums[1]);
        mn = Math.min(nums[0], nums[1]);
        i = 2;
    } else {
        mx = mn = nums[0];
        i = 1;
    }

    while (i < nums.length - 1) {
        
        if (nums[i] < nums[i + 1]) {
            mx = Math.max(mx, nums[i + 1]);
            mn = Math.min(mn, nums[i]);
        } else {
            mx = Math.max(mx, nums[i]);
            mn = Math.min(mn, nums[i + 1]);
        };
        // console.log(mx, mn);
        i += 2;
        // console.log(mx, mn, i);
    };

    return [mx, mn];


}

const getMaxMin = (nums) => {
    if (nums.length === 0) return [];
    if (nums.length === 1) return [nums[0], nums[0]];
    if (nums.length === 2) return [Math.max(nums[0], nums[1]), Math.min(nums[0], nums[1])];
    return findMaxMin(nums);
}

const check = getMaxMin([1, 5, 7, 2, 5, 9, 7]);
console.log(check);