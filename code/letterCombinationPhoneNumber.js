/**
 * @param {string} digits
 * @return {string[]}
 * time complexit O()
 */
var letterCombinations = function(digits) {
    const digitLetters = {
        '2': ['a', 'b', 'c'],
         '3': ['d', 'e', 'f'],
         '4': ['g', 'h', 'i'],
         '5': ['j', 'k', 'l'],
         '6': ['m', 'n', 'o'],
         '7': ['p', 'q', 'r', 's'],
         '8': ['t', 'u', 'v'],
         '9': ['w', 'x', 'y', 'z']
    };
    
    const combineLetter = (current, leftDigits) => {
        if (leftDigits.length === 0) {
            return result.push(current);
        }
        
        for (let char of digitLetters[leftDigits[0]]) {
            combineLetter(current + char, leftDigits.slice(1, leftDigits.length));
        }
    };
    
    if (digits.length === 0) {
        return [];
    }
    let result = [];
    combineLetter("", digits);
    return result;
};


const result = letterCombinations("345");
console.log(result);