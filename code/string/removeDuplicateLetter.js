
/* 
    Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

    Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

    

    Example 1:

    Input: s = "bcabc"
    Output: "abc"
    Example 2:

    Input: s = "cbacdcbc"
    Output: "acdb"
    

    Constraints:

    1 <= s.length <= 104
    s consists of lowercase English letters.
*/


/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const len = s.length;
    if (s.len === 0) {
        return "";
    };
    const letterDict = {};
    for (let i of s) {
        if (letterDict[i]) {
            letterDict[i] += 1;
        } else {
            letterDict[i] = 1;
        }
    };

    const usedChar = {};
    for (let i in letterDict) {
        
        usedChar[i]= false;
    };
    
    const stack = [];
    for (let i of s) {
        letterDict[i] -= 1;
        
        if (usedChar[i]) continue;
        while (stack.length !== 0 && (i.charCodeAt(0) < stack[stack.length - 1].charCodeAt(0)) && (letterDict[stack[stack.length - 1]] > 0)) {
            const popedChar = stack.pop();
            usedChar[popedChar] = false;
        };
        stack.push(i);
        usedChar[i] = true;
    };
    return stack.join('');

};


const string = 'acbddc';
const check = removeDuplicateLetters(string);
console.log(check);