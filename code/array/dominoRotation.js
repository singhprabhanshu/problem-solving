/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

 /*
    Input: array A and B
    Constraints: Both are of equal length;
    1. Count the occurance of any number from 1 to 6  in A and B is recorded
    2. To have same number in either A or B after minimum number of swapping depends on: 
            countA[i] + countB[i] + same[i] = n; // n = A or B length
            If the above condition met, then it gives the solution otherwise not.
            solution: n - Math.max(countA[i], countB[i]);
    Time Complexity: O(n)  Space Complexity: O(1)

  */
var minDominoRotations = function(A, B) {
    const countA = new Map();
    const countB = new Map();
    const same = new Map();
    const n = A.length;
    for (let i = 0; i < 6; i++) {
        countA.set(i+1, 0);
        countB.set(i+1, 0);
        same.set(i+1, 0);
    };
    
    
    for (let i = 0; i < n; i++) {
        countA.set(A[i], countA.get(A[i])+1);
        countB.set(B[i], countB.get(B[i])+1);
        if (A[i] === B[i]) {
            same.set(A[i], same.get(A[i])+1);
        }
    };
    
    
    for (let i = 0; i < 6; i++) {
        
        if (countA.get(i+1) + countB.get(i+1) - same.get(i+1) === n ) {
            
            return n - Math.max(countA.get(i+1), countB.get(i+1));
        }
    };
    return -1;
    
    
};

const A = [1,2,3,4,6];

const B = [6,6,6,6,5];
const check = minDominoRotations(A, B);
console.log(check);