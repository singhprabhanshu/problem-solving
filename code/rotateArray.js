// rotating array of length n by d elements in left


const arrayRotate = (arr, d) => {
    const newDElementArray = arr.splice(0, d);
    // const rotatedArray = arr.concat(newDElementArray);
    // return rotatedArray;
    for (let i = 0; i < newDElementArray.length; i++) {
        arr.push(newDElementArray[i]);
    }
};



// rotate array in right

const arrayRotateRight = (arr, d) => {
    let newArr = arr.splice(arr.length - d, arr.length);
    
    for (let i = newArr.length - 1; i >= 0; i--) {
        arr.unshift(newArr[i]);
        
        // arr.splice(0, 0, newArr[i]);
    };
    return arr;
};


// left rotate array by using reverse algorith method

const reverseArray = (arr, start, end) => {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start += 1;
        end -= 1;

    };
    
}


const rotateArrayusingReverse = (arr, d) => {
    let n = arr.length;
    reverseArray(arr, 0, d-1);
    reverseArray(arr, d, n-1);
    reverseArray(arr, 0, n-1);
}



// normal rotate test case;

const arr = [1, 2, 3, 4, 5, 6, 7];
const d = 3;
//  reverse array test case
rotateArrayusingReverse(arr, d);

// const newArray = arrayRotateRight(arr, d);


console.log(arr);