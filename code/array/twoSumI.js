/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

 /*
    we will save complemented(subtracted value) in hash map or object.
    object contains key as complement value and value as index;
    we will compare the current number is available in object as key or not.
    if available we will return index of both number that sums to target.
    if not then we will add the complement of curr number with target as key.
 */
var twoSum = function(numbers, target) {
    
    let comp = {};
    for (let i = 0; i < numbers.length; i++) {
        if (comp[numbers[i]] >= 0) {
            return [comp[numbers[i]], i];
        }
        comp[target - numbers[i]] = i ;
        
    }
    
};

const check = twoSum([2, 7, 3, 5], 9);