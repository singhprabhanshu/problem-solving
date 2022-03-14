/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    
    let lp = 0;
    
    let check = false;
    for (let i = 0; i < s.length ; i++) {
        let word = s.slice(lp, i+1);
        console.log(word);
        console.log(lp);
        let isWord = wordDict.includes(word);
        if (isWord) {
            
            // lp = i+1;
            check = true;
            console.log(i);
            if (i === s.length - 1) {
                lp = i + 1;
            }
        } else if (!isWord && check) {
            check = false;

            let word = s.slice(i, i+1);
            
            let isWord = wordDict.includes(word);
            if (isWord) {
                lp = i + 1;
            } else {
                lp = i;
            }
            
        }

        
    };
    
    if (lp === s.length) {
        return true;
    }
    return false;
};


const s = "ab";
const wordDict = ["a", "b"];

const check = wordBreak(s, wordDict);
console.log(check);