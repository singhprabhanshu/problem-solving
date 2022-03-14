const reArrange = (nums) => {
    const len = nums.length;
    if (len === 0 || len === 1) {
        return nums;
    };

    const sortedNums = nums.sort((a, b) => a - b);

    let count = 1;
    while(count !== len) {
        if (count + 2 <= len) {
            let temp = sortedNums[count];
            sortedNums[count] = sortedNums[count + 1];
            sortedNums[count + 1] = temp;
            count += 2;
        } else if ( count + 1 === len) {
            count++;
            continue;
        }
        
    };
    return sortedNums;
};


const check = reArrange([1, 5, 4, 6, 9, 0]);
console.log(check);