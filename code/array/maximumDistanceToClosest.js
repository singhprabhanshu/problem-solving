/**
 * @param {number[]} seats
 * @return {number}
 */

 // grouping zeros
var maxDistToClosest = function(seats) {
    let dist = 0;
    let zero = 0;
    let i = 0;
    while (seats[i] === 0) {
        dist++;
        i++;
    };
    
    for (let i = dist + 1; i < seats.length; i++) {
        if (seats[i] === 0) {
            zero++;
        } else {
            dist = Math.max(dist, Math.floor((zero + 1)/2));
            zero = 0;
        }
    };
    return Math.max(dist, zero);
};

// towpoint theorem




console.log(maxDistToClosest([1,0,0,0,1,0,1]))