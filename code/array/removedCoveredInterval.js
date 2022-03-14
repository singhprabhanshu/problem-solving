/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    
    let count = 0;
    for (let i = 0; i < intervals.length; i++) {
        for (let j = 0; j < intervals.length; j++) {
            console.log('check'+j);
            if (i === j) {
                continue;
            };
            
            if ( intervals[j][0] <= intervals[i][0] && intervals[j][1] >= intervals[i][1]) {
               
                
                
                count++;
                break;
            };

        };
    };
    return intervals.length - count;
};


const intervals = [[66672,75156],[59890,65654],[92950,95965],[9103,31953],[54869,69855],[33272,92693],[52631,65356],[43332,89722],[4218,57729],[20993,92876]];

const check = removeCoveredIntervals(intervals);
console.log(check);