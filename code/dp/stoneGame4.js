/**
 * @param {number} n
 * @return {boolean}
 */

 /** 
  * implementation is dfs using iteration.
  * // 1st !checkwinner make the alice win
  * // 1st !checkwinner dependes on next recursive call
  * // best value is taken as winner , i.e  true // if any branch has true it is inserted in winner
  * 
  */

const checkWinner = (n, dp) => {
    if ( n === 0) return false;
    if (n === 1) return true;
    if (dp.has(n)) return dp.get(n);
    let winner = false;
    
    for (let i = 1; i*i <= n; i++) {
        if (!checkWinner(n - i*i, dp)) {
            winner = true;
            break;
        };
    };
    dp.set(n, winner);
    return dp.get(n);
}
var winnerSquareGame = function(n) {
    const dp = new Map();
    return checkWinner(n, dp);
    
    
//     if ( n === 0) return false;
    
//     for (let i = 1; i * i <= n ; i++) {
//         if (!winnerSquareGame(n - i * i)) {
//             return true;
//         }
//     };
//     return false;
};