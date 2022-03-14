const search = (matrix, target) => {
    if (matrix.length === 0) return false;
    const row = matrix.length;
    const col = matrix[0].length;

    let low = 0, high = row * col - 1;  // index
    while (low <= high){
        let mid = Math.floor((low + high)/2);
        
        let i = Math.floor(mid/col), j = mid % col;
        
        let num = matrix[i][j];
        if (num === target) {
            return true;
        }
        else if (num < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    };
    return false; 
};

// const check = search([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 3);
const check = search([[1]], 1);
console.log(check);