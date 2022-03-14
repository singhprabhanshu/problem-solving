const printmatrix = (m, n) => {
    let matrix = [];
    let count = 1;
    for (let i = 0; i < m; i++){
        let mx2 = [];
        for (let j = 0; j < n; j++) {
            mx2.push(count);
            count++;
        };
        matrix.push(mx2);
    };
    // console.log(matrix);
    return matrix;
};


const printmatrix2 = (m, n) => {
    let count = 0;
    let res = [];
    // if (n === 0) {
    //     res.push(arr);
    // };

    definingRowEle = (n, array) => {
        if (n === 0) {
            res.push(array);
            return;
        };
        count++;
        n -= 1;
        array.push(count);
        return definingRowEle( n, array);
    };

    // definingColEle = (m) => {
    //     if (m !== 0) {
    //         m--;
    //         let innerArray = [];
    //         definingRowEle(n, innerArray);
    //         definingColEle(m);
    //     }
    // }
    for (let i = 0; i < m; i++) {
        let innerArray = [];
        definingRowEle(n, innerArray);
    };
    

    // definingColEle(m);
    return res;

}

let res = [];
const check = printmatrix2(2, 3);
console.log(check);