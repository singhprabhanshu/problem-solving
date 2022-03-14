/*
    Q. check the array the triplet sum to 0 or not.
    
    1. Three sum problem means nums[i] + nums[j] + nums[k] === 0.
    2. Two sum problem check whether two number added is equal to target or not.
    3. Three sum is solved by making target as -nums[i] and two number nums[j] and nums[k] of two sum.
    4. Two sum problem is solved by using two pointer problem using i = 0 and j = nums.length -1;
        a. Two pointer need the array to be sorted.    
        b. when nums[i] + nums[j] is smaller than target means i should be increased to increase the sum value.
        c. when nums[i] + nums[j] is greater than target means j should be decreased to decrease the sum value.
        d. if sum is equal then return true showing we have triplet that sums to 0.
        e. else return false
*/


// const threeSum = (nums) => {
//     if (nums.length < 3) {
//         return false;
//     }
//     nums.sort((a,b) => a - b);
//     const len = nums.length;
//     for (let i = 0; i < len -2; i++) {
//         if (towSum(nums, -nums[i], i + 1)) {
//             return true;
//         }
//     };
//     return false;
// };


// const towSum = (nums, x, i) => {
//     let j = nums.length -1;
//     while(i<j) {
//         console.log(i ,j, x);
//         if (nums[i] + nums[j] < x) {
//             i++;
//         } else if (nums[i] + nums[j] > x) {
//             j--;
//         } else if (nums[i] + nums[j] === x) {
//             return true;
//         }
//     };
//     return false;
// };


// three sum brut force // working O(n) = n3

// const threeSum = (arr) => {
//     const n = arr.length;
//     if (n < 3) {
//         return [];
//     }
//     const res = [];
//     for (let i = 0; i < n-2; i++) {
//         for (let j = i + 1; j < n-1; j++) {
//             for (let k = j + 1; k < n; k++) {
//                 if (arr[i] + arr[j] + arr[k] === 0) {
//                     const a = [arr[i], arr[j], arr[k]];
//                     res.push(a);
//                 }
//             }
//         }
//     };
//     return res;
// };


const threeSum = (arr) => {
    const n = arr.length;
    const narray = arr.sort((a, b) => a - b);
    if (n < 3) {
        return [];
    }
    const res = [];
    // for (let i = 0; i < n-2; i++) {
    //     for (let j = i + 1; j < n-1; j++) {
    //         for (let k = j + 1; k < n; k++) {
    //             if (arr[i] + arr[j] + arr[k] === 0) {
    //                 const a = [arr[i], arr[j], arr[k]];
    //                 res.push(a);
    //             }
    //         }
    //     }
    // };
    return res;
};

const check = threeSum([-1,0,1,2, 3, -3]);
console.log(check);