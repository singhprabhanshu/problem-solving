const secondMax = (arr) => {
    let max = arr[0];
    let smax = Number.MIN_VALUE;
    if (arr.length === 0 || arr.length === 1) {
        return -1;
    }
    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > smax) {
            if (arr[i] > max) {
                
                smax = max;
                max = arr[i];
            } else if (arr[i] !== max){
                smax = arr[i];
            }
        }
    };

    if (smax === Number.MIN_VALUE) {
        return -1
    }
    return smax;
};


const arr = [1, 1, 2, 4, 9];
const check = secondMax(arr);
console.log(check);