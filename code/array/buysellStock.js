/*
    14: 18

    buy and sell stocks as many transactions.
*/

//  buy and sell stocks as many transactions.

const buysellII = (prices) => {
    const n = prices.length;
    if (n === 0) {
        return {};
    }
    let profit = 0,  ibuy = 0, isell = 0, i = 0, t = 0; 
    
    const buysellIndes = [];
    while(i < n - 1) {
        while(i < n -1 && prices[i + 1] <= prices[i]) i++;
        ibuy = i;
        while (i < n - 1 && prices[i + 1] > prices[i]) i++;
        isell = i;

        console.log(ibuy, isell);
        profit = prices[isell] - prices[ibuy];
        buysellIndes.push([ibuy, isell]);
        
    };
    return {profit, buysellIndes};
};


/*
    buy and sell stock only for k transactions



*/

const buysellk = (k, prices) => {
    const n = prices.length;
    let trans = [];
    
    if (2*k >= n) {
        let profit = 0;
        for (let i = 1; i < n; i++) {
            if (prices[i - 1] < prices[i]) {
                console.log(prices[i - 1], prices[i])
                profit += (prices[i] - prices[i - 1]);
                
            }
        };
        
        return profit;
    }
    // creating array to store solution
    for (let i = 0; i <= k; i++) {
        let temp = [];
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0 ) {
                temp[j] = 0;
            } else {
                temp[j] = -1;
            }
            
        };
        trans.push(temp);
    };
    let maxDiff;
    for (let i = 1; i < trans.length; i++) {
        maxDiff = trans[i][0] - prices[0]; // maximum difference at 0th index
        for (let j = 1; j < n; j++) {

            trans[i][j] = Math.max(trans[i][j-1], prices[j] + maxDiff);
            // console.log(maxDiff);
            maxDiff = trans[i-1][j] - prices[j] > maxDiff ? trans[i-1][j] - prices[j] : maxDiff;
            
            
        }
    };
    console.log(trans);
    return trans[k][n-1];
}

let nums = [3,3,5,0,0,3,1,4];
let k = 2;
const check = buysellk(k, nums);
console.log(check);