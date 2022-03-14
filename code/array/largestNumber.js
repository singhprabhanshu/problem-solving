const largestNum = (arr) => {
    for (let i = 0; i< arr.length; i++) {
        for (let j = 0; j< arr.length -1; j++) {
            const a = arr[j].toString();
            const b = arr[j + 1].toString();
            
            if (b + a > a + b) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            };
            
        };
        
    };
    if (arr[0] === 0) {
        return '0';
    }
    return arr.join('');
};


const check = largestNum([ 34, 30, 3]);
console.log('check', check);