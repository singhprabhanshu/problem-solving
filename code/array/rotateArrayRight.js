/*
    copy the array;
    loop over the elements and get the new index where the value should be inserted.
    since nums is mutated use arr to assign the value
*/


const rotateArrayRight = (nums, k) => {
    
    
    const arr = [...nums];
    for (let i = 0; i < nums.length; i++) {
        const si = (i + k) % nums.length;
        console.log(si);
        nums[si] = arr[i];
        
    };
    return nums;
}

const check = rotateArrayRight([1, 2, 3, 4, 5, 6, 7], 3);
console.log(check);



// rotate array by using index

// const rotateArrayRight = (arr, num) => {
//     let newArr = [];
//     for (let i = (arr.length - num); i < arr.length; i++) {
//       newArr.push(arr[i]);
//     }
//     for (let i = 0; i < (arr.length - num); i++) {
//       newArr.push(arr[i]);
//     }
//     return newArr;
//   };
//   const response = rotateArrayRight([1, 2, 3, 45, 6, 7], 4);
//   console.log(response);


// rotate array using slice method

// const rotateArrayRight = (arr, num) => {
//     let newArr = [];
//     newArr = newArr.concat(arr.slice(arr.length - num));
//     newArr = newArr.concat(arr.slice(0, arr.length - num))
//     return newArr;
//   };
//   const response = rotateArrayRight([1, 2, 3, 45, 6, 7], 4);
//   console.log(response);