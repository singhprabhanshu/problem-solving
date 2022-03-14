const missingNo = (arr) => {
    let high = arr.length + 1;
    let totalsum = high * (high + 1)/2; // summation rule

    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    };
    console.log(totalsum, total);
    return totalsum - total;

};

let arr = [1, 2, 3, 5, 6, 7];
const mis = missingNo(arr);
console.log(mis);


