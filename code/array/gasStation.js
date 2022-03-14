const gasStation = (gas, cost) => {
    let s = 0; e = 1;
    let tc = gas[0] - cost[0];
    n= gas.length;
    while(s !== e) {
        
        while( tc < 0 && s !== e) {
            tc = tc - (gas[s] - cost[s]);
            s = (s + 1) % n;
            // console.log(s);
            if (s === 0) {
                return -1;
            }
        }

        
        tc = tc + gas[e] - cost[e];
        e = (e+1)%n;
    };
    if (tc < 0) {
        return -1;
    }

    return s;
};


// const gas  = [1,2,3,4,5];
// const cost = [3,4,5,1,2];

const gas  = [5,1,2,3,4];
const cost = [4,4,1,5,1];

const check = gasStation(gas, cost);
console.log(check, 'ans');