const findPoisonedDuration = (timeSeries, duration) => {
    let tt = duration;
    let sp = timeSeries[0];
    let pep = null;
    let ep = timeSeries[0] + duration - 1;
    for (let i = 1; i< timeSeries.length; i++) {
        if (timeSeries[i] === timeSeries[i-1]){
            continue;
        } else {
            sp = timeSeries[i];
            pep = ep;
            ep = timeSeries[i] + duration - 1;
        };

        if ((ep - pep) > duration ) {
            tt += duration;
        } else {
            tt += (ep - pep);
        };
    };
    if (timeSeries.length === 0) {
        return -1;
    }
    return tt;
};


const check = findPoisonedDuration([1, 2, 3], 2);
console.log(check);





