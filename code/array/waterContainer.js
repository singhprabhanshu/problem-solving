/*
    Two pointer solution
    1. Area = height * width;
    2. height = min (height[i], height[j]) // minimum height can only store water for given two point
    3. width = j - i
    4. initialize 
        i = 0; 
        j = height.length - 1
        res = 0 // maximun area
    5. store the maximum area in res
    6. small height index is increased
*/


const waterContainer = (nums) => {
    let ist = 0;
    let sec = nums.length -1;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let height = Math.min(nums[ist], nums[sec]);
        let width = sec - ist;
        let area = height * width;
        if (area > res) {
            res = area;
        }
        if (nums[ist] < nums[sec]) {
            ist = ist + 1;
        } else {
            sec = sec - 1;
        }
    };
    return res;
};

const check = waterContainer([1, 2, 5]);
console.log(check);