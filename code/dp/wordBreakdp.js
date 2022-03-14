/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

const dfs = (s, set) => {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    console.log(dp);
    for (let len = 1; len <= s.length; len++){
        for (let i = 0; i <= len; i++) {
            console.log(s.substring(i, len), set);
            if (dp[i] && set.has(s.substring(i, len))) {
                dp[len] = true;
                break;
            }
        }
    };
    console.log(dp[s.length], s);
    return dp[s.length];
    
}
var wordBreak = function(s, wordDict) {
    const set = new Set();
    for ( let i of wordDict) {
        set.add(i);
    };
    
    return dfs(s, set);
};

const s = "leetcode";
const wordDict = ['leet', 'code'];

const check = wordBreak(s, wordDict);
console.log('check', check);