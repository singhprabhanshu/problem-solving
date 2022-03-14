const binarySearch = (arr, val, l, h) => {
   const low =  l || 0;
   
   const high = h || arr.length - 1;
   const mid = low + Math.floor((high-low)/2);
   
    if (val < arr[mid + 1] && val > arr[mid]) {
        // checking val that is not in arr
        return -1;
    } else if (val > arr[mid - 1] && val < arr[mid]) {
        // checking val that is not in arr
        return -1;
    }
    else if (arr[mid] < val) {
        
        return binarySearch(arr, val, mid+1, high);
   } else if (arr[mid] > val) {
       
       return binarySearch(arr, val, low, mid-1);
   } else if (arr[mid] == val){
       return mid;
   }
   
};

const arr = [10, 14, 19, 26, 27, 31, 33, 35, 42, 44];
const check = binarySearch(arr, 20);
console.log(check);