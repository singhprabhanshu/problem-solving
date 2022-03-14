/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

const dfs = (s, set, mapper) => {
    const len = s.length;
    if (len === 0) {
        
        return true;
    }
    // console.log(mapper, s);
    if (mapper[s] === true) {
        console.log(mapper, 'returned', s);
        return mapper[s];
    }
    for (let i = 1; i <= len; i++) {
        if (set.has(s.substring(0, i)) && dfs(s.substring(i, len), set, mapper)) {
            
            
            mapper[s.substring(i, len)] = true;
            console.log(i, s, len, mapper);
            return true;
        }
    };
    mapper[s] = false;
    return false;
}
var wordBreak = function(s, wordDict) {
    const set = new Set();
    for ( let i of wordDict) {
        set.add(i);
    };
    let mapper = {};
    return dfs(s, set, mapper);
};
// const s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
// const wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"];
const s = "code";
const wordDict = ['c', 'od', 'e', 'x'];
const check = wordBreak(s, wordDict);

