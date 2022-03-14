/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
// step - 1: loop should be from 1 to 10 ( while creating sequence starting digit should be from 1 to 9. no digit start from 10 to ...console, finalling it is starting from 1 to 9 only)
// step - 2: create sequence of digit using selected i and checking the boundary condition low and high
// step - 3: while increasing the sequenceNumber from the given first digit (I), we mulitply it by 10 to increase digit length and adding one number greater than previous j to make it increasing sequenceNumber
//             , if j increase above 9, it will not give us increasing sequence.
var sequentialDigits = function(low, high) {
    let result = [];
    for (let i = 1; i < 10; i++) {
        let sequenceNumber = i;
        let j = i;
        while(sequenceNumber <= high && j < 10 ) {
            if (sequenceNumber >= low) {
                result.push(sequenceNumber);
            };
            j += 1;
            sequenceNumber = sequenceNumber * 10 + j;
        }
    };
    
    result.sort((a, b) => a - b);
    return result;
};