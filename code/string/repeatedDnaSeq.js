/**
 * @param {string} s
 * @return {string[]}
 */

 /*
    All DNA is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T', for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

    Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

    1. take substring of 10 character at once
    2. if any substring found repeated, insert it into repeated array
    3. increase i by 1 and check for next substring as above.
 */
var findRepeatedDnaSequences = function(s) {
    if (s.length <= 10) {
        return [];
    }
    const repeated = [];
    const map = new Map();

    for (let i = 0; i + 9 < s.length; i++) {
        let ss = s.substring(i, i+10);
        if (!map.has(ss)) {
            map.set(ss, 1);
        } else {
            if (map.get(ss) === 1) {
                repeated.push(ss);
            }
            map.set(ss, map.get(ss) + 1);
            
        }
    };
    return repeated;

};

const s = "AAAAAAAAA";
const check = findRepeatedDnaSequences(s);
console.log(check);