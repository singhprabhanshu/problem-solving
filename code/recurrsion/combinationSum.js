// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.



/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

//  in recurssion the loop which started get completed first and then the execution of code moves to another parent loop.

 const recur = (candidates, target, combination, ind, result) => {
     console.log('ind', ind);
    
    if (target == 0 ) {
        
        result.push([...combination]);
        return ;
    }

    for (let i = ind; i < candidates.length; i++) {
        
        if (candidates[i] > target) {
            return ;
        };
        combination.push(candidates[i]);
        console.log(i, 'i');
        recur(candidates, target - candidates[i], combination, i, result);
        combination.pop(); // back tracking
    }
 }
var combinationSum = function(candidates, target) {
    const combination = [];
    const ind = 0;
    const result = [];
    const sortedCandidates = candidates.sort((a, b) => a -b);
    recur(sortedCandidates, target, combination, ind, result);
    return result;
};


const candidates = [2, 3, 6, 7];
const target = 7;
const check = combinationSum(candidates, target);
console.log(check);