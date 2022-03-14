const stringDiff = (s, t) => {
    const smap = {};
    for (let i of s) {
        smap[i] = smap[i] ? smap[i] + 1 : 1;
    };

    for (let i of t) {
        if (!smap[i] || smap[i] === 0){
            return i;
        } else {
            smap[i] -= 1;
        }
    }
};


const check = stringDiff('a', 'aa');
console.log(check);