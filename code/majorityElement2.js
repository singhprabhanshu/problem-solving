/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const n = nums.length;
    const res = [];
    let f = 0;
    let s = 0;
    let cf = 0;
    let cs = 0;

    if (n === 0) {
        return res;
    } else if (n === 1) {
        return res.push(nums[0]);
    }
    nums.map(a => {
        if (a === f) {
            cf++;
        } else if (a === s) {
            cs++;
        } else if (cf === 0) {
            f = a;
            cf++;
        } else if (cs === 0) {
            s = a;
            cs++;
        } else {
            cf--;
            cs--;
        }
    });

    cf = 0; cs = 0;
    nums.map(b => {
        if (b === f) {
            cf++;
        } else if ( b===s) {
            cs++;
        };
        
    });
    if (cf > n/3) {
        res.push(f);
    };
    if (cs > n/3) {
        res.push(s);
    };
    return res;

      
  };


  const check = majorityElement([1, 2, 2, 1, 3, 1, 2]);
  console.log(check);