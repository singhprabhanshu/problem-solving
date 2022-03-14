/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    if (poured === 0){
        return poured;
    };
    let dp = [];
    for (let i = 0; i <= query_row; i++) {
        dp[i] = [];
        for (let j = 0; j <= i; j++) {
            
            dp[i].push(0);
        }
    };
    dp[0][0] = poured;
    for (let i = 0; i <= query_row -1; i++) {
        for (let j = 0; j <= i; j++) {
            let temp = (dp[i][j] - 1)/2;
            
            if (temp > 0) {
                dp[i+1][j] += temp;
                dp[i+1][j+1] += temp;
            };
        };
    };
    console.log(dp);
    if (dp[query_row][query_glass] <= 1) {
        
        return dp[query_row][query_glass];
    } else {
        return 1;
    }

};

const check = champagneTower(6, 3, 1);
console.log(check);