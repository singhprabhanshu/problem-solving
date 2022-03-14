/**
 * @param {number} N
 * @return {number}
 */
// var bitwiseComplement = function(N) {
//     let num = N;
//     let mask = ~0;
//     while (num & mask) {
//         mask = mask << 1;

//     };
//     return ~mask ^ num;
// };

// var bitwiseComplement = function(N) {
//     let num = N;
//     let mask = ~0;
//     while (num & mask) {
//         console.log(mask & num);
//         mask = mask << 1;
//         // console.log(mask);

//     };
//     return ~mask & ~num;
// };


/* 
    xorbit: 
 1 0 : 1 // imp 1 xor 0 gives 1, complement
 1 1 : 0 // imp 1 xor 1 gives 0, complement
 0 0 : 0
 0 1 : 1

 let temp = n
 let n = 5, 101
    101 ^ 1 => 100
    1 << 1 => moving 1 to left by adding 0 to right, 10
    temp >> 1 => moving temp to right by adding 0 to left, 010
run this inside loop temp === 0

*/
var bitwiseComplement = function(N) {
    let num = N;
    let temp = N;
    let xorBit = 1;
    while (temp != 0) {
        num = num ^ xorBit; // xor with 1 which will complemnet the bit.
        xorBit <<= 1; // shift to left xorbit to xor second bit
        temp >>= 1;// shift to right to temp so that it will end the loop

    };
    return num;
};


const check = bitwiseComplement(5);
console.log(check);