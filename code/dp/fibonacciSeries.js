const fibo = (n) => {
    if (n < 0) {
        return -1;
    } else if ( n < 1) {
        return n;
    }

    const f = [];
    f[0] = 0;
    f[1] = 1;

    for (let i = 2 ; i <= n; i++) {
        f[i] = f[i-2] + f[i-1];
    }
    return [f, f[n]];
}


const fiboRecur = (n) => {
    let f = [0, 1];
    if (n < 0) {
        return -1;
    } else if ( n <= 1) {
        return n;
    } 
    else {
        return fiboRecur(n-2) + fiboRecur(n-1);
    }
    
    
}

console.log(fiboRecur(10));