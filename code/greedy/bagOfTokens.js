/**Solution is straightforward.
    Always aim for highest point
    Sort the tokens so we can buy from lowest & sell from highest which means =>
        If we have enough power, no worries. Just lose token[l(eft)], and increase score by 1.
        If we have at least 1 score and we are not in the last processed token, gain token[r(ight)] and decrease score by 1.
        Otherwise, we are finished. 
*/

/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function(tokens, P) {
    let n = tokens.length;
    if ( n === 0) {
        return 0;
    }
    let s = 0;
    tokens.sort((a, b) => a - b);
    while (tokens.length > 0 && P >= tokens[0]) {
        s += 1;
        P -= tokens.shift();
        if (P < tokens[0]  && tokens.length > 1) {
            s -= 1;
            P += tokens.pop();
        }
        console.log(P, s);
    }
    return s;
};