/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const n = nums.length;
    if (n === 0) {
        return [];
    }
    const ranges = [];
    let s = nums[0];
    let d = nums[0];
    for (let i = 1; i< n; i++) {
        if (nums[i-1] + 1 !== nums[i]){
           
            if (s === d) {
                ranges.push([s]);
            } else {
                ranges.push([s, d]);
            };
             s = nums[i];
        };
        d = nums[i];
    };
    if (s === d) {
        ranges.push([s]);
    } else {
        ranges.push([s, d]);
    };

    for (let i = 0; i < ranges.length; i++) {
        ranges[i] = ranges[i].join('->');
    }
    return ranges;
};

console.log(summaryRanges([0]));