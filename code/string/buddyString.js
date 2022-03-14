const buddyString = (A, B) => {
    if (A.length !== B.length) {
        return false;
    }

    if (A === B) {
        const arr = A.split('');
        console.log(arr);
        const s = new Set(arr);
        console.log(s.size);
        return s.size < A.length;
    }
    const ij = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            ij.push(i);
        };
    };
    return ij.length === 2 && A[ij[0]] === B[ij[1]] && A[ij[1]] === B[ij[0]];
}


const A = 'ab';
const B = 'ab';

const check = buddyString(A, B);
console.log(check);