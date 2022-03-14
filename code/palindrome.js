// longest palindrome using dynamic programing

// steps
// 1. first construct 2 dimensional array to save boolean (true or false) for i, j if the substring between (i,j) is palindrome.
// 2. use the previous substring palindrom state to evaluate present substring is palindrome or not. 


const array2d = (len) => {
    let l= [];
    for (let i = 0; i <= len; i++) {
        l[i] = [];
        for (let j = 0; j <= len; j++) {
            l[i] [j] = 0;
        }
    }
    return l;
};

// const check = array2d();
// console.log(check);

const longPalindrome = ({ data }) => {
    const len = data.length;
    const l = array2d(len);
    for (let i = 0; i <= len; i++) {
        l[i][i] = 1;
    };
    for (let cl = 2; cl <= len; cl ++) {
        for (let i = 0; i < (len-cl+1); i++) {
            let j = i + cl - 1;
            if (data[i] === data[j] && cl == 2) {
                l[i][j] = 2;
            } else if (data[i] === data[j]) {
                l[i][j] = l[i+1][j-1] + 2;
            }else {
                l[i][j] = Math.max(l[i+1][j], l[i][j-1]);
            }
        }
    }
    return l[0][len-1];
}

const longest = longPalindrome({data:"babad"});
console.log(longest);