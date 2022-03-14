const ticket = (nums) => {
    let s = nums[0][0];
    let d = nums[0][1];
    nums.shift();
    while(nums.length !== 0) {
        for (let i = 0; i < nums.length; i++) {
            if (d === nums[i][0]) {
                d = nums[i][1];
                nums.splice(i, 1);
            } else if ( s === nums[i][1]) {
                s = nums[i][0];
                nums.splice(i, 1);
            }
        }
    };
    return [s, d];
};


console.log(ticket([[0, 2], [3, 4],[4, 7], [2, 3]]));