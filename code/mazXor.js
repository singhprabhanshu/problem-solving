// not completed

const remainer = [];
const binary = {};
let nums = [14,70,53,83,49,91,36,80,92,51,66,70];
// let nums = [14, 70];
let uniquenums = [...new Set(nums)];
const toBinary = (num, i) => {
    const q = Math.floor(num / 2);
    const r = num % 2;

    // console.log(q, r, num);
    if (!binary[uniquenums[i]]) {
        binary[uniquenums[i]] = [r];
    } else {
        binary[uniquenums[i]].push(r);
    }
    

    if ( q !== 1) {
        toBinary(q, i);
    }
    // binary[nums[i]] = remainer
}


for (let i in uniquenums) {
    toBinary(uniquenums[i], i);
    // binary[nums[i]] = remainer; 
}

console.log(binary);