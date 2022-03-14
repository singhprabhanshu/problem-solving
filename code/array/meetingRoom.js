/*
    - check wether the times are overlapping or not
    1. sort the array in ascending order
    2. if there is overlap then return false  else return true;
        a. check 1st array last index value with 2nd array 1st index value
*/

const meetingRoom = (nums) => {
    const sn = nums.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    for (let i = 0; i < nums.length - 1; i++) {
        if (sn[i][1] <= sn[i + 1][0]) {
            continue;
        } else {
            return false;
        }
        
    }
    return true;

};

const check = meetingRoom([ [0, 30], [5, 10], [15, 20] ]);
console.log(check);